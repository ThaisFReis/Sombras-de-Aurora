import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { FrequencyWaveComplex } from "./FrequencyWaveComplex";

const MAX_TIME = 40; // segundos

const layers = [
  {
    id: "1",
    title: "Camada 1: Chiado inicial",
    content: "🌬️ Som de vento… e um sussurro: “olhe pela janela…”",
    frequencyTarget: 25,
  },
  {
    id: "2",
    title: "Camada 2: Voz distorcida",
    content: "📣 Estalo seco… “Ele está voltando…”",
    frequencyTarget: 55,
  },
  {
    id: "3",
    title: "Camada 3: Mensagem oculta",
    content:
      "📢 Sinal agudo… mensagem reversa: “a terceira pupila está aberta”",
    effect: ["trauma++", "unlock_otavio", "update_map"],
    frequencyTarget: 80,
  },
];

type AudioDecoderMinigameProps = {
  onFinish: (result: string[]) => void;
};

export const AudioDecoderMinigame = ({
  onFinish,
}: AudioDecoderMinigameProps) => {
  const [currentLayerIndex, setCurrentLayerIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [revealedLayers, setRevealedLayers] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [waveTick, setWaveTick] = useState(0); // para forçar atualização da onda animada
  const [timeLeft, setTimeLeft] = useState(MAX_TIME);

  const tolerance = 5; // +/-10 para acertar

  // Contador regressivo
  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinish();
      return;
    }
    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft]);

  // Atualiza o tick para animação da onda
  useEffect(() => {
    const id = setInterval(() => {
      setWaveTick((t) => t + 1);
      console.log(waveTick)
    }, 50);
    return () => clearInterval(id);
  }, []);

  const checkFrequency = () => {
    const target = layers[currentLayerIndex].frequencyTarget;
    if (Math.abs(sliderValue - target) <= tolerance) {
      setRevealedLayers([...revealedLayers, currentLayerIndex]);
      setFeedback("Frequência correta! Camada liberada.");
      setCurrentLayerIndex(currentLayerIndex + 1);
      setSliderValue(50); // reset slider
    } else {
      setFeedback("Frequência incorreta. Tente ajustar novamente.");
    }
  };

  const handleFinish = () => {
    const result: string[] = [];
    if (revealedLayers.includes(1)) result.push("safe_clue");
    if (revealedLayers.includes(2)) {
      result.push(...(layers[2].effect || []));
    }
    onFinish(result);
  };

  const isFinished = currentLayerIndex >= layers.length;

  // Calcula intensidade da onda para a camada atual
  const intensity = (() => {
    if (isFinished) return 0;
    const target = layers[currentLayerIndex].frequencyTarget;
    const distance = Math.abs(sliderValue - target);
    const norm = Math.max(0, 1 - distance / tolerance); // 1 quando exato, 0 fora da tolerância
    return norm;
  })();

  return (
    <div className="p-6 bg-zinc-900 rounded-xl shadow-lg max-w-lg mx-auto text-zinc-100">
      <h2 className="text-xl text-indigo-400 font-semibold mb-2 flex items-center gap-2">
        🔊 Decodificador de Áudio
      </h2>
      <p className="text-sm text-zinc-400 mb-6">
        Ajuste as frequências com o slider e tente liberar as camadas do som.
      </p>

      {/* Timer visual */}
      <div className="mb-6">
        <div className="relative h-3 w-full rounded-full bg-zinc-700 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-indigo-500 transition-all duration-1000"
            style={{ width: `${(timeLeft / MAX_TIME) * 100}%` }}
          />
        </div>
        <p className="text-xs text-zinc-400 text-right mt-1">
          Tempo restante: {timeLeft}s
        </p>
      </div>

      {/* Onda animada */}
      <FrequencyWaveComplex intensity={intensity} width={320} height={120} />

      {/* Barra de progresso */}
      <div className="flex space-x-2 mb-6">
        {layers.map((_, idx) => (
          <div
            key={idx}
            className={`flex-1 h-2 rounded-full transition-colors duration-300 ${
              revealedLayers.includes(idx) ? "bg-indigo-500" : "bg-zinc-700"
            }`}
          />
        ))}
      </div>

      {/* Camadas reveladas */}
      <div className="space-y-4 mb-6">
        {revealedLayers.map((idx) => {
          const layer = layers[idx];
          return (
            <div
              key={layer.id}
              className="bg-zinc-800 p-4 rounded-md border border-zinc-700 shadow-sm"
            >
              <h3 className="text-indigo-300 font-semibold">{layer.title}</h3>
              <p className="mt-1 text-zinc-300">{layer.content}</p>
            </div>
          );
        })}
      </div>

      {!isFinished && (
        <>
          <div className="mb-4">
            <label
              htmlFor="frequency"
              className="block mb-1 text-zinc-300 font-medium"
            >
              Ajuste a frequência: {sliderValue}
            </label>
            <input
              id="frequency"
              type="range"
              min={0}
              max={100}
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {feedback && (
            <p
              className={`mb-4 ${
                feedback.includes("correta") ? "text-green-400" : "text-red-400"
              }`}
            >
              {feedback}
            </p>
          )}

          <Button
            onClick={checkFrequency}
            className="bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Testar Frequência
          </Button>
        </>
      )}

      {revealedLayers.length > 0 && (
        <div className="flex justify-end mt-6">
          <Button
            onClick={handleFinish}
            className="bg-red-600 hover:bg-red-700 transition"
          >
            {isFinished ? "Concluir" : "Encerrar Decodificação"}
          </Button>
        </div>
      )}
    </div>
  );
};
