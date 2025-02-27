import { Sidebar } from "@/components/Sidebar";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="absolute h-screen w-screen flex bg-gradient-to-r from-[#dddeeb] to-[#ccd0ff]">
      <Sidebar />{/* Ajuste a margem conforme a largura da Sidebar */}
        <Suspense>
          {children ?? <Outlet />}
        </Suspense>
    </div>
  );
};

export default MainLayout;