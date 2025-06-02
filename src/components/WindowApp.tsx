import {
  X,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  EllipsisVertical,
} from "lucide-react";
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
  onClose,
  children,
  className,
  startMaximized,
}: WindowAppProps) => {
  const [isMaximized, setIsMaximized] = useState(startMaximized ?? true);
  const windowRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: 900,
    height: 600,
  });

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
        x: 100,
        y: 80,
        width: windowSize.width,
        height: windowSize.height,
      }}
      size={
        isMaximized
          ? { width: "100%", height: "100%" }
          : windowSize
      }
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
        ref={windowRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className={clsx(
          "w-full h-full rounded-xl shadow-lg bg-zinc-900/90 border border-white/10 backdrop-blur-md flex flex-col overflow-hidden",
          className
        )}
      >
        {/* Barra superior 1 */}
        <div className="drag-handle flex items-center justify-between px-3 sm:px-4 py-2 bg-zinc-800/60 backdrop-blur-md border-b border-white/10 select-none cursor-move">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-zinc-600" />
            <span className="w-3 h-3 rounded-full bg-zinc-600" />
            <span className="w-3 h-3 rounded-full bg-zinc-600" />
          </div>

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

        {/* Barra superior 2 */}
        <div className="drag-handle flex items-center justify-between px-3 sm:px-4 py-2 bg-zinc-700/60 backdrop-blur-[3px] border-b border-white/10 select-none cursor-move h-fit">
          <div className="flex items-center gap-4 sm:gap-6">
            <ChevronLeft className="text-zinc-400 hover:text-white" size={18} />
            <ChevronRight className="text-zinc-400 hover:text-white" size={18} />
            <RotateCw className="text-zinc-400 hover:text-white" size={18} />
          </div>

          <div className="text-[10px] text-zinc-500 font-medium absolute left-1/2 -translate-x-1/2 pointer-events-none bg-zinc-800/90 backdrop-blur-[3px] w-4/5 sm:w-[400px] rounded-xl py-1 px-4 text-center">
            http://www.redesocial.com/
          </div>

          <div className="flex gap-2 items-center">
            <EllipsisVertical className="text-zinc-400 hover:text-white" size={18} />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 text-zinc-100 scrollbar-thin scrollbar-thumb-white/10">
          {children}
        </div>
      </motion.div>
    </Rnd>
  );
};
