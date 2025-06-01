import { Dock } from "@/components/Dock";
import { IconDesktop } from "@/components/IconDesktop";
import { Suspense, useEffect, useState } from "react";
import { ChatProvider } from "@/context/ChatContext";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";
import { SystemHeader } from "@/components/SystemHeader";
import { AnimatePresence, motion } from "framer-motion";
import { WindowApp } from "@/components/WindowApp";

// App imports
import { SocialMedia } from "@/apps/SocialMedia";
import { Forum } from "@/apps/Forum";
import { Arquivos } from "@/apps/Arquivos";
import { Settings } from "@/apps/Settings";
import { ChatApp } from "@/apps/ChatApp";
import { MiniGamesApp } from "@/apps/MiniGamesApp";
import { MapApp } from "@/apps/MapApp";

// Seed notifications
import { seedNotifications } from "@/utils/seedNotifications";
import { useNotificationStore } from "@/stores/notificationStore";

export const MainLayout = () => {
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
    const onClose = () => setJanelaAtiva(null);

    let appContent = null;
    let title = "";

    switch (janelaAtiva) {
      case "feed":
        appContent = <SocialMedia />;
        title = "Rede Social";
        break;
      case "forum":
        appContent = <Forum />;
        title = "Fórum";
        break;
      case "arquivos":
        appContent = <Arquivos />;
        title = "Arquivos";
        break;
      case "settings":
        appContent = <Settings />;
        title = "Configurações";
        break;
      case "chat":
        appContent = <ChatApp onOpenApp={setJanelaAtiva} />;
        title = "Mensagens";
        break;
      case "minigames":
        appContent = (
          <MiniGamesApp gameId={janelaAtivaPayload?.gameId} />
        );
        title = "Minijogos";
        break;
      case "map":
        appContent = <MapApp onClose={onClose} />;
        title = "Mapa";
        break;
      default:
        return null;
    }

    return (
      <motion.div
        key={janelaAtiva}
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <WindowApp title={title} onClose={onClose}>
          {appContent}
        </WindowApp>
      </motion.div>
    );
  };

  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{
        backgroundImage: `url(${currentTheme.primaryBackground})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <ChatProvider>
        <SystemHeader onSelectApp={setJanelaAtiva} activeApp={janelaAtiva} />

        <div className="flex-1 relative overflow-hidden">
          <Suspense fallback={<div>Carregando...</div>}>
            <AnimatePresence mode="wait">{renderApp()}</AnimatePresence>
          </Suspense>
          <IconDesktop setJanelaAtiva={setJanelaAtiva} />

          {/* Dock */}
          <div
            className="absolute bottom-0 flex justify-center items-center mt-auto mb-0 w-full h-28 z-50"
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
