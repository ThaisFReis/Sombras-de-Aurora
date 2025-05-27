import { Dock } from "@/components/Dock";
import { IconDesktop } from "@/components/IconDesktop";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { ChatProvider } from "@/context/ChatContext";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";
import { SystemHeader } from "@/components/SystemHeader";

// Importe os componentes dos aplicativos simulados
import { SocialMedia } from "@/apps/SocialMedia"; // Exemplo — você criará esse depois
import { Forum } from "@/apps/Forum";
import { Arquivos } from "@/apps/Arquivos";
import { Settings } from "@/apps/Settings"; // Certifique-se de que o caminho está correto

const MainLayout = () => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const [janelaAtiva, setJanelaAtiva] = useState<string | null>(null);
  const [mostrarDock, setMostrarDock] = useState(false);

  // Mapeia os apps ativos
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

          {/* Zona sensível ao hover, sempre ativa */}
          <div
            className="absolute bottom-0 flex justify-center items-center mt-auto mb-0 w-full h-28 z-40"
            onMouseEnter={() => setMostrarDock(true)}
            onMouseLeave={() => setMostrarDock(false)}
          >
            {/* Dock fixo e animado */}
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
