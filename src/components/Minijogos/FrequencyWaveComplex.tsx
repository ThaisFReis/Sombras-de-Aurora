import React, { useEffect, useState } from "react";

type FrequencyWaveComplexProps = {
  intensity: number; // 0 a 1
  width?: number;
  height?: number;
};

export const FrequencyWaveComplex = ({
  intensity,
  width = 320,
  height = 120,
}: FrequencyWaveComplexProps) => {
  const [tick, setTick] = useState(0);

  // Atualiza tick para animação contínua
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 40);
    return () => clearInterval(id);
  }, []);

  // Função para gerar path de uma onda senoidal com parâmetros variáveis
  const generateWavePath = (
    amplitude: number,
    frequency: number,
    phase: number,
    verticalShift: number,
    points = 150
  ) => {
    const pathPoints = [];
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * width;
      const y =
        verticalShift +
        amplitude *
          Math.sin(
            2 * Math.PI * frequency * (x / width) + phase + tick / 15
          );
      pathPoints.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`);
    }
    return pathPoints.join(" ");
  };

  // Cores pulsantes baseadas em intensidade e tempo (vai do azul clarinho a azul vibrante)
  const pulse = 0.5 + 0.5 * Math.sin(tick / 10);
  const baseColor = `rgba(99, 102, 241, ${0.3 + 0.7 * intensity * pulse})`; // indigo com alpha pulsante
  const mainColor = `rgba(99, 102, 241, ${0.7 + 0.3 * intensity * pulse})`;

  // Equalizador - número de barras e alturas animadas
  const barCount = 20;
  const barMaxHeight = height / 3;
  const bars = [];
  for (let i = 0; i < barCount; i++) {
    // Altura animada com senos e intensidade
    const barHeight =
      barMaxHeight *
      intensity *
      (0.5 + 0.5 * Math.sin((tick + i * 10) / 10 + i));
    bars.push(barHeight);
  }

  return (
    <div className="flex gap-6 items-center justify-center">
      <svg width={width} height={height} className="block">
        {/* Fundo leve */}
        <rect width={width} height={height} fill="#1f2937" rx={12} ry={12} />

        {/* Ondas sobrepostas */}
        <path
          d={generateWavePath(12 * intensity, 2.2, 0, height / 2)}
          stroke={baseColor}
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={generateWavePath(8 * intensity, 3.5, Math.PI / 2, height / 2 + 10)}
          stroke={baseColor}
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={generateWavePath(18 * intensity, 1.1, Math.PI / 4, height / 2 - 8)}
          stroke={mainColor}
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Equalizador de barras */}
      <svg width={60} height={height} className="block">
        <rect width={60} height={height} fill="#1f2937" rx={12} ry={12} />
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 3 + 6}
            y={height - h - 20}
            width={2}
            height={h}
            rx={1}
            ry={1}
            fill={`rgba(99,102,241,${0.3 + 0.7 * intensity})`}
            style={{ transition: "height 0.1s ease-out" }}
          />
        ))}
      </svg>
    </div>
  );
};
