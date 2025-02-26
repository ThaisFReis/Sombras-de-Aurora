import { Sidebar } from "@/components/Sidebar";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
//import { toast } from "react-toastify";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen w-screen flex bg-gradient-to-r from-[#dddeeb] to-[#ccd0ff]">
      <Sidebar />
      <div className="">
      <Suspense>
      {children ?? <Outlet />}
      </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
