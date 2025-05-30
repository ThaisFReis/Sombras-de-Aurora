import { useState } from "react";
import { IconDesktop } from "@/components/IconDesktop";
import { Dock } from "@/components/Dock";

export const Home = () => {
  const [activeApp, setActiveApp] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white">
      <div className="absolute top-4 left-4 bg-orange-500">
        <IconDesktop setJanelaAtiva={setActiveApp} />
      </div>

      <div className="flex justify-center items-center h-full pt-20">
        renderApp()
      </div>

      <Dock onSelectApp={setActiveApp} activeApp={activeApp} />
    </div>
  );
};
