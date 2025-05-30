import { Dock } from "@/components/Dock";
import { IconDesktop } from "@/components/IconDesktop";
import { Suspense, useEffect, useState } from "react";
import { ChatProvider } from "@/context/ChatContext";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";
import { SystemHeader } from "@/components/SystemHeader";
import { AnimatePresence, motion } from "framer-motion";

// App imports
import { SocialMedia } from "@/apps/SocialMedia";
import { Forum } from "@/apps/Forum";
import { Arquivos } from "@/apps/Arquivos";
import { Settings } from "@/apps/Settings";
import { ChatApp } from "@/apps/ChatApp";
import { MiniGamesApp } from "@/apps/MiniGamesApp";
import { MapApp } from "@/apps/MapApp";
import { TerminalApp } from "@/apps/TerminalApp";

// Seed notifications
import { seedNotifications } from "@/utils/seedNotifications";
import { useNotificationStore } from "@/stores/notificationStore";

const MainLayout = () => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const [janelaAtiva, setJanelaAtiva] = useState<string | null>(null);
  const [mostrarDock, setMostrarDock] = useState(false);
  const [janelaAtivaPayload] = useState<{
    gameId?: string;
  } | null>(null);

  useEffect(() => {
    if (useNotificationStore.getState().notifications.length === 0) {
      seedNotifications();
    }
  }, []);

  const renderApp = () => {
    switch (janelaAtiva) {
      case "feed":
        return <SocialMedia onClose={() => setJanelaAtiva(null)} />;
      case "forum":
        return <Forum onClose={() => setJanelaAtiva(null)} />;
      case "arquivos":
        return <Arquivos onClose={() => setJanelaAtiva(null)} />;
      case "settings":
        return <Settings onClose={() => setJanelaAtiva(null)} />;
      case "chat":
        return (
          <ChatApp
            onClose={() => setJanelaAtiva(null)}
            onOpenApp={setJanelaAtiva}
          />
        );
      case "minigames":
        return (
          <MiniGamesApp
            onClose={() => setJanelaAtiva(null)}
            gameId={janelaAtivaPayload?.gameId}
          />
        );
      case "map":
        return <MapApp onClose={() => setJanelaAtiva(null)} />;
      case "terminal":
        return <TerminalApp onClose={() => setJanelaAtiva(null)} />;
      default:
        return <IconDesktop setJanelaAtiva={setJanelaAtiva} />;
    }
  };

  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{
        backgroundImage: `url(${currentTheme.primaryBackground})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <ChatProvider>
        <SystemHeader onSelectApp={setJanelaAtiva} activeApp={janelaAtiva} />

        <div className="flex-1 relative overflow-hidden">
          <Suspense fallback={<div>Carregando...</div>}>
            <AnimatePresence mode="wait">
              {janelaAtiva ? (
                <motion.div
                  key={janelaAtiva}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute inset-1 bg-zinc-900/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
                >
                  {renderApp()}
                </motion.div>
              ) : (
                <motion.div
                  key="desktop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <IconDesktop setJanelaAtiva={setJanelaAtiva} />
                </motion.div>
              )}
            </AnimatePresence>
          </Suspense>
          <div
            className="absolute bottom-0 flex justify-center items-center mt-auto mb-0 w-full h-28 z-40"
            onMouseEnter={() => setMostrarDock(true)}
            onMouseLeave={() => setMostrarDock(false)}
          >
            <div
              className={`transition-all duration-300 flex justify-center ${
                mostrarDock || !janelaAtiva
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <Dock onSelectApp={setJanelaAtiva} activeApp={janelaAtiva} />
            </div>
          </div>
        </div>
      </ChatProvider>
    </div>
  );
};

export default MainLayout;
