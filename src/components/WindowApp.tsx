import { X, Minus, Maximize2, Minimize2 } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
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
      // Quando não maximizada, escuta clique fora para fechar
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
        y: 100,
        width: 700,
        height: 500,
      }}
      size={
        isMaximized
          ? { width: "100%", height: "100%" }
          : { width: "50%", height: "50%" }
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
      <div
        ref={windowRef}
        className={clsx(
          "w-full h-full",
          "bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl backdrop-blur-md",
          "flex flex-col overflow-hidden",
          className
        )}
      >
        <div className="drag-handle flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700 cursor-move select-none">
          <h2 className="text-sm font-medium text-zinc-200 tracking-wide">
            {title}
          </h2>

          <div className="flex gap-1 items-center">
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-yellow-400 hover:bg-zinc-700 h-7 w-7 rounded-full flex items-center justify-center transition-colors"
            >
              <Minus size={16} />
            </button>
            <button
              onClick={toggleMaximize}
              className="text-zinc-400 hover:text-green-400 hover:bg-zinc-700 h-7 w-7 rounded-full flex items-center justify-center transition-colors"
            >
              {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-red-400 hover:bg-zinc-700 h-7 w-7 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 text-zinc-100">
          {children}
        </div>
      </div>
    </Rnd>
  );
};
