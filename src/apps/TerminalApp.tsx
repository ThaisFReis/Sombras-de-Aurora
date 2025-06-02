import { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import clsx from "clsx";
import { X, Maximize2, Minimize2 } from "lucide-react";

interface TerminalAppProps {
  onClose: () => void;
}

export const TerminalApp = ({ onClose }: TerminalAppProps) => {
  const [logs, setLogs] = useState<string[]>([
    "Inicializando terminal...",
    "Conectando ao servidor de memória...",
    "Acesso parcial concedido.",
  ]);
  const [, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 500, height: 300 });
  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (command: string) => {
    if (!command.trim()) return;
    setLogs((prev) => [...prev, `> ${command}`]);

    switch (command.toLowerCase()) {
      case "help":
        setLogs((prev) => [
          ...prev,
          "Comandos disponíveis:",
          "- help",
          "- status",
          "- limpar",
        ]);
        break;
      case "status":
        setLogs((prev) => [
          ...prev,
          "Estado atual: 🟢 OBSERVAÇÃO ATIVA",
          "Fragmentos de memória: 2/7 recuperados.",
        ]);
        break;
      case "limpar":
        setLogs([]);
        break;
      default:
        setLogs((prev) => [
          ...prev,
          `Comando não reconhecido: '${command}'`,
          "Digite 'help' para ver os comandos disponíveis.",
        ]);
    }

    setInput("");
  };

  const toggleMaximize = () => setIsMaximized((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const width = Math.min(900, vw * 0.9);
      const height = Math.min(600, vh * 0.85);
      setWindowSize({ width, height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMaximized) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMaximized, onClose]);

  const formatLine = (line: string) => {
    if (line.startsWith(">")) {
      return <span className="text-pink-400">{line}</span>; // comando
    }
    if (
      line.toLowerCase().includes("erro") ||
      line.includes("não reconhecido")
    ) {
      return <span className="text-red-400">{line}</span>; // erro
    }
    if (line.includes("🟢")) {
      return <span className="text-green-400">{line}</span>; // status
    }
    if (line.startsWith("-")) {
      return <span className="text-yellow-300">{line}</span>; // item da lista
    }
    return <span className="text-purple-300">{line}</span>; // default
  };

  return (
    <Rnd
      default={{
        x: 100,
        y: 80,
        width: windowSize.width,
        height: windowSize.height,
      }}
      size={isMaximized ? { width: "100%", height: "100%" } : windowSize}
      position={isMaximized ? { x: 0, y: 0 } : undefined}
      minWidth={320}
      minHeight={240}
      bounds="parent"
      dragHandleClassName="drag-handle"
      enableResizing={!isMaximized}
      disableDragging={isMaximized}
      className="z-50"
    >
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className={clsx(
          "w-full h-full rounded-xl shadow-lg border border-[#6272a4]/30 flex flex-col overflow-hidden"
        )}
      >
        {/* Barra superior */}
        <div className="drag-handle flex items-center justify-between px-3 py-2 bg-zinc-800/60 backdrop-blur-md select-none cursor-move">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <h2 className="text-sm font-semibold text-[#f8f8f2] tracking-wide">
            Terminal
          </h2>
          <div className="flex gap-2 items-center">
            <button
              onClick={toggleMaximize}
              className="text-[#bd93f9] hover:text-white transition-colors"
              title="Maximizar / Restaurar"
            >
              {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              onClick={onClose}
              className="text-red-400 hover:text-red-300 transition-colors"
              title="Fechar"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Output + Simulação de Input */}
        <div
          className="flex-1 overflow-y-auto p-4 font-mono text-sm bg-zinc-900/30 backdrop-blur-[3px] text-[#f8f8f2]"
          onClick={() => {
            // Foco automático no inputDiv ao clicar na área
            inputDivRef.current?.focus();
          }}
        >
          {logs.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {formatLine(line)}
            </div>
          ))}

          {/* Linha de comando atual (contentEditable) */}
          <div className="flex items-start whitespace-pre-wrap">
            <span className="text-pink-400 mr-1">{">"}</span>
            <div
              ref={inputDivRef}
              contentEditable
              suppressContentEditableWarning
              className="outline-none flex-1 text-[#f8f8f2] min-h-[1em]"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // Impede nova linha
                  const command = inputDivRef.current?.innerText.trim() ?? "";
                  handleCommand(command);
                  if (inputDivRef.current) inputDivRef.current.innerText = "";
                }
              }}
            />
          </div>

          <div ref={terminalEndRef} />
        </div>
      </motion.div>
    </Rnd>
  );
};
