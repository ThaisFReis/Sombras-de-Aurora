import { Sidebar } from "@/components/Sidebar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ChatProvider } from "@/context/ChatContext"; // Importe o ChatProvider

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen w-screen flex bg-gradient-to-r from-[#dddeeb] to-[#ccd0ff]">
      <Sidebar />
      <div className="ml-64 flex-1">
        <Suspense>
          <ChatProvider> {/* Envolva o conteúdo com ChatProvider */}
            {children ?? <Outlet />}
          </ChatProvider>
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;