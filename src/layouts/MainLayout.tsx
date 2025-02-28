import { Sidebar } from "@/components/Sidebar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen w-screen flex justify-between">
      <Sidebar /> {/* Sidebar fixa no canto esquerdo */}
      <div className="ml-56 flex-1"> {/* Margem à esquerda para evitar sobreposição */}
        <Suspense>
          {children ?? <Outlet />}
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;