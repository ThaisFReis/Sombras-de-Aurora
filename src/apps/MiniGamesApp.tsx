import { useState } from "react";
import { WindowApp } from "@/components/WindowApp";
import { AudioDecoderMinigame } from "@/components/Minijogos/AudioDecoderMinigame";
import { Button } from "@/components/ui/Button";

type MiniGamesAppProps = {
  onClose: () => void;
};

const PlaceholderMinigame = ({
  title,
  description,
  onClose,
}: {
  title: string;
  description: string;
  onClose: () => void;
}) => {
  return (
    <div className="p-6 bg-zinc-900 rounded-xl shadow-lg max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-indigo-300 mb-4">{title}</h2>
      <p className="text-zinc-400 mb-6">{description}</p>
      <p className="text-zinc-500 italic">Este minigame está em desenvolvimento.</p>
      <Button onClick={onClose} className="mt-6 bg-red-600 hover:bg-red-700">
        Fechar
      </Button>
    </div>
  );
};

export const MiniGamesApp = ({ onClose }: MiniGamesAppProps) => {
  const [activeMinigame, setActiveMinigame] = useState<string | null>(null);

  const minigames = [
    {
      id: "audio-decoder-janela",
      name: "Decodificador de Áudio – A Janela",
      description: "Ajuste as frequências e revele camadas ocultas no som.",
      component: (
        <AudioDecoderMinigame
          onFinish={() => setActiveMinigame(null)}
        />
      ),
    },
    {
      id: "mirror-enigma",
      name: "Enigma do Espelho",
      description: "Resolva o mistério refletido para avançar na história.",
      component: (
        <PlaceholderMinigame
          title="Enigma do Espelho"
          description="Resolva o mistério refletido para avançar na história."
          onClose={() => setActiveMinigame(null)}
        />
      ),
    },
    {
      id: "dark-terminal",
      name: "Terminal Obscuro",
      description: "Digite comandos para descobrir segredos ocultos.",
      component: (
        <PlaceholderMinigame
          title="Terminal Obscuro"
          description="Digite comandos para descobrir segredos ocultos."
          onClose={() => setActiveMinigame(null)}
        />
      ),
    },
    {
      id: "puzzle-maze",
      name: "Labirinto Mental",
      description: "Navegue pelo labirinto para desbloquear memórias perdidas.",
      component: (
        <PlaceholderMinigame
          title="Labirinto Mental"
          description="Navegue pelo labirinto para desbloquear memórias perdidas."
          onClose={() => setActiveMinigame(null)}
        />
      ),
    },
  ];

  const selected = minigames.find((g) => g.id === activeMinigame);

  return (
    <WindowApp title="Mini Games" onClose={onClose} isChat={false}>
      {selected ? (
        <div className="p-4">{selected.component}</div>
      ) : (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {minigames.map((game) => (
            <div
              key={game.id}
              className="bg-zinc-800 border border-zinc-700 rounded-2xl p-4 flex flex-col gap-3 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-zinc-100">{game.name}</h3>
              <p className="text-sm text-zinc-400">{game.description}</p>
              <Button onClick={() => setActiveMinigame(game.id)} className="mt-auto">
                Jogar
              </Button>
            </div>
          ))}
        </div>
      )}
    </WindowApp>
  );
};
