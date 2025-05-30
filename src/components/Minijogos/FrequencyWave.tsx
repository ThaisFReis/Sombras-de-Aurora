type FrequencyWaveProps = {
  intensity: number; // 0 a 1 para controlar a amplitude da onda
  color?: string;
  width?: number;
  height?: number;
};

export const FrequencyWave = ({
  intensity,
  color = "#6366F1", // indigo-500
  width = 300,
  height = 80,
}: FrequencyWaveProps) => {
  // intensity controla a amplitude da onda (máx 1)
  // vamos fazer uma onda senoidal simples animada

  const amplitude = 15 * intensity; // altura da onda
  const frequency = 0.05; // número de ondas no svg
  const points = 100; // número de pontos para suavizar

  // Gera path SVG da onda senoidal
  const pathPoints = [];
  for (let x = 0; x <= points; x++) {
    const dx = (x / points) * width;
    const dy =
      height / 2 +
      amplitude * Math.sin(2 * Math.PI * frequency * dx + Date.now() / 300);
    pathPoints.push(`${x === 0 ? "M" : "L"}${dx.toFixed(2)} ${dy.toFixed(2)}`);
  }
  const pathData = pathPoints.join(" ");

  return (
    <svg width={width} height={height} className="block mx-auto" >
      <path
        d={pathData}
        stroke={color}
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};
