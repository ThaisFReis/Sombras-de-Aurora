import {
  FolderOpen,
  MessageCircle,
  MapPinned,
  Ghost,
  SquareTerminal,
  AtSign,
  Gamepad2,
  Settings,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DockProps {
  onSelectApp: (app: string | null) => void;
  activeApp: string | null;
}

const categories = [
  {
    id: "social",
    icon: <AtSign />,
    apps: [
      { id: "feed", name: "Rede Social", icon: <AtSign /> },
      { id: "forum", name: "Deepfeed", icon: <Ghost /> },
      { id: "chat", name: "Chat", icon: <MessageCircle /> },
    ],
  },
  {
    id: "navegacao",
    icon: <MapPinned />,
    apps: [{ id: "map", name: "Mapa", icon: <MapPinned /> }],
  },
  {
    id: "jogos",
    icon: <Gamepad2 />,
    apps: [{ id: "minigames", name: "Mini Jogos", icon: <Gamepad2 /> }],
  },
  {
    id: "sistema",
    icon: <Settings />,
    apps: [
      { id: "arquivos", name: "Arquivos", icon: <FolderOpen /> },
      { id: "terminal", name: "Terminal", icon: <SquareTerminal /> },
      { id: "settings", name: "Configurações", icon: <Settings /> },
    ],
  },
];

export const Dock = ({ onSelectApp }: DockProps) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement | null>(null);
  const dockRef = useRef<HTMLDivElement | null>(null);
  const [isHoveringDock, setIsHoveringDock] = useState(false);
  const [isHoveringMenu, setIsHoveringMenu] = useState(false);

  useEffect(() => {
    if (!isHoveringDock && !isHoveringMenu) {
      const timeout = setTimeout(() => setOpenCategory(null), 200); // delay para transição suave
      return () => clearTimeout(timeout);
    }
  }, [isHoveringDock, isHoveringMenu]);

  // Fechar submenu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        submenuRef.current &&
        !submenuRef.current.contains(target) &&
        dockRef.current &&
        !dockRef.current.contains(target)
      ) {
        setOpenCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50">
      {/* Submenu global */}
      <AnimatePresence>
        {openCategory && (
          <motion.div
            ref={submenuRef}
            onMouseEnter={() => setIsHoveringMenu(true)}
            onMouseLeave={() => setIsHoveringMenu(false)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-5 -left-48 flex flex-col gap-2 
        bg-zinc-700/90 backdrop-blur-[3px] rounded-xl p-3 shadow-xl 
        w-96 -z-10 rounded-b-3xl h-52 overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {
                  transition: { staggerChildren: 0.03, staggerDirection: -1 },
                },
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="flex flex-col gap-2"
            >
              {categories
                .find((cat) => cat.id === openCategory)!
                .apps.map((app) => (
                  <motion.button
                    key={app.id}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    onClick={() => {
                      onSelectApp(app.id);
                      setOpenCategory(null);
                    }}
                    className="flex items-center gap-2 text-zinc-200 hover:text-white hover:bg-zinc-600 px-3 py-1.5 rounded-lg text-sm transition-colors duration-200"
                  >
                    {app.icon}
                    {app.name}
                  </motion.button>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dock horizontal */}
      <div
        ref={dockRef}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center z-50 w-96 h-14"
      >
        {/* Fundo translúcido atrás dos botões */}
        <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-[3px] rounded-full shadow-lg z-10" />

        {/* Botões acima do fundo */}
        <div className="relative flex gap-8 px-3 pb-3.5 z-20">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative flex flex-col items-end justify-end z-30"
              onMouseEnter={() => {
                setOpenCategory(cat.id);
                setIsHoveringDock(true);
              }}
              onMouseLeave={() => setIsHoveringDock(false)}
            >
              <button
                className={`w-10 h-[52.5px] flex items-end justify-center pb-[6.5px] rounded-b-2xl
          text-zinc-300 hover:text-white transition ${
            openCategory === cat.id ? "bg-zinc-700/90 backdrop-blur-[3px]" : ""
          }`}
                title={cat.id}
              >
                {cat.icon}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
