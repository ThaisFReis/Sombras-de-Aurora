import { X } from "lucide-react";
import { ReactNode } from "react";
import clsx from "clsx";

type WindowAppProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  isChat?: boolean;
};

export const WindowApp = ({
  title,
  onClose,
  children,
  className,
  isChat,
}: WindowAppProps) => {
  return (
    <div
      className={clsx(
        "bg-zinc-900 border border-zinc-700 backdrop-blur-md",
        "flex flex-col w-screen mx-auto h-full overflow-hidden",
        className
      )}
    >
      {/* Barra superior */}
      {isChat ? null : (
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
          <h2 className="text-sm font-medium text-zinc-200 tracking-wide">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="flex text-zinc-400 hover:text-red-400 transition-colors hover:bg-zinc-700 h-7 w-7 rounded-full items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Conteúdo da janela */}
      <div className="flex-1 overflow-y-auto p-4 text-zinc-100">{children}</div>
    </div>
  );
};
