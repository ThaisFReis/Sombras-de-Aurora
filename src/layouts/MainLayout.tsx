import { Dock } from "@/components/Dock";
import { IconDesktop } from "@/components/IconDesktop";
import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ChatProvider } from "@/context/ChatContext";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";
import { SystemHeader } from "@/components/SystemHeader";

// App imports
import { SocialMedia } from "@/apps/SocialMedia";
import { Forum } from "@/apps/Forum";
import { Arquivos } from "@/apps/Arquivos";
import { Settings } from "@/apps/Settings";
import { ChatApp } from "@/apps/ChatApp";
import { MiniGamesApp } from "@/apps/MiniGamesApp";

// Seed notifications
import { seedNotifications } from "@/utils/seedNotifications";
import { useNotificationStore } from "@/stores/notificationStore";

const MainLayout = () => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const [janelaAtiva, setJanelaAtiva] = useState<string | null>(null);
  const [mostrarDock, setMostrarDock] = useState(false);

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
        return <ChatApp onClose={() => setJanelaAtiva(null)} />;
      case "minigames":
        return <MiniGamesApp onClose={() => setJanelaAtiva(null)} />;
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
        <SystemHeader />
        <div className="flex-1 relative overflow-hidden">
          <Suspense fallback={<div>Carregando...</div>}>{renderApp()}</Suspense>
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
              <Dock onSelectApp={setJanelaAtiva} />
            </div>
          </div>
        </div>
      </ChatProvider>
    </div>
  );
};

export default MainLayout;