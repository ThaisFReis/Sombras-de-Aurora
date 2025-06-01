import { X, Maximize2, Minimize2 } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import clsx from "clsx";

type WindowAppProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  startMaximized?: boolean;
};

export const WindowApp = ({
  title,
  onClose,
  children,
  className,
  startMaximized,
}: WindowAppProps) => {
  const [isMaximized, setIsMaximized] = useState(startMaximized ?? true);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMaximized) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          windowRef.current &&
          !windowRef.current.contains(event.target as Node)
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

  const toggleMaximize = () => setIsMaximized((prev) => !prev);

  return (
    <Rnd
      default={{
        x: 120,
        y: 80,
        width: 900,
        height: 600,
      }}
      size={
        isMaximized
          ? { width: "100%", height: "100%" }
          : { width: "60%", height: "60%" }
      }
      position={isMaximized ? { x: 0, y: 0 } : undefined}
      minWidth={360}
      minHeight={300}
      bounds="parent"
      dragHandleClassName="drag-handle"
      enableResizing={!isMaximized}
      disableDragging={isMaximized}
      className="z-50"
    >
      <motion.div
        ref={windowRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className={clsx(
          "w-full h-full",
          "rounded-xl shadow-lg bg-zinc-900/90 border border-white/10 backdrop-blur-md",
          "flex flex-col overflow-hidden",
          className
        )}
      >
        {/* Barra superior estilo navegador */}
        <div className="drag-handle flex items-center justify-between px-4 py-2 bg-zinc-800/60 backdrop-blur-md border-b border-white/10 select-none cursor-move">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <h2 className="text-sm text-zinc-200 font-medium absolute left-1/2 -translate-x-1/2 pointer-events-none">
            {title}
          </h2>

          <div className="flex gap-2 items-center">
            <button
              onClick={toggleMaximize}
              className="text-zinc-400 hover:text-white transition-colors"
              title="Maximizar / Restaurar"
            >
              {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-red-400 transition-colors"
              title="Fechar"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-4 text-zinc-100 scrollbar-thin scrollbar-thumb-white/10">
          {children}
        </div>
      </motion.div>
    </Rnd>
  );
};
