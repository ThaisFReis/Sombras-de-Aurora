import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

interface TerminalAppProps {
  onClose: () => void;
}

export const TerminalApp = ({ onClose }: TerminalAppProps) => {
  const [logs, setLogs] = useState<string[]>([
    "Inicializando terminal...",
    "Conectando ao servidor de memória...",
    "Acesso parcial concedido.",
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (command: string) => {
    if (!command.trim()) return;

    setLogs((prev) => [...prev, `> ${command}`]);

    // Simulação de comandos
    switch (command.toLowerCase()) {
      case "help":
        setLogs((prev) => [...prev, "Comandos disponíveis: help, status, limpar"]);
        break;
      case "status":
        setLogs((prev) => [
          ...prev,
          "Estado atual: [OBSERVAÇÃO ATIVA]",
          "Fragmentos de memória: 2/7 recuperados.",
        ]);
        break;
      case "limpar":
        setLogs([]);
        break;
      default:
        setLogs((prev) => [...prev, `Comando não reconhecido: '${command}'`]);
    }

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div className="w-full h-full bg-black text-green-400 font-mono p-4 flex flex-col">
      <div className="flex justify-between mb-2">
        <h2 className="text-lg">Terminal Sombras</h2>
        <Button variant="ghost" onClick={onClose}>
          Fechar
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto bg-zinc-900 p-2 rounded-md shadow-inner">
        {logs.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">{line}</div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      <div className="mt-2 flex">
        <span className="mr-2">{">"}</span>
        <input
          type="text"
          className="bg-transparent border-b border-green-400 focus:outline-none flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite um comando..."
        />
      </div>
    </div>
  );
};
