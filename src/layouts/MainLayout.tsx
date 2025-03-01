import { Sidebar } from "@/components/Sidebar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ChatProvider } from "@/context/ChatContext";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const { theme } = useTheme(); // Acesse o tema atual
  const currentTheme = themes[theme]; // Obtenha as cores do tema atual

  return (
    <div
      className={`min-h-screen w-screen flex ${currentTheme.primaryBackground}`}
    >
      <Sidebar />
      <div className="ml-64 flex-1">
        <Suspense>
          <ChatProvider>
            {children ?? <Outlet />}
          </ChatProvider>
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;