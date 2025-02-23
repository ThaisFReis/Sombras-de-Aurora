import { Header } from "@/components/header";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
//import { toast } from "react-toastify";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="">
      <Suspense>
      {children ?? <Outlet />}
      </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
