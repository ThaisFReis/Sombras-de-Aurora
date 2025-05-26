import { useState } from "react";
//import { UserProfile } from "@/components/UserProfile";
//import { Feed } from "@/components/Feed";
import { IconDesktop } from "@/components/IconDesktop";
import { Dock } from "@/components/Dock";
//import { ProfileView } from "@/components/ProfileView";

export const Home = () => {
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const renderApp = () => {
    switch (activeApp) {
      case "feed":
        //return <Feed onOpenProfile={() => setActiveApp("profile")}/>;
        return <p>Feed</p>
      case "profile":
        return (
          // <ProfileView
          //   name="Sebastian Grant"
          //   username="@dark.wanderer"
          //   avatar="https://i.pravatar.cc/150?u=dark.wanderer"
          //   description="Carismático e obcecado por ocultismo. Último a ser visto antes do desaparecimento."
          //   lastActive="há 2 dias"
          //   status="suspect"
          // />
          <p>Profile</p>
        );
      case "usuario":
        return (
          // <UserProfile
          //   name="Você"
          //   username="@player"
          //   avatar="https://i.pravatar.cc/150?u=player"
          //   bio="Estudante universitário investigando os mistérios de Aurora."
          //   posts={45}
          //   followers={120}
          //   following={85}
          // />
          <p>User profile</p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white">
      <div className="absolute top-4 left-4">
        <IconDesktop setJanelaAtiva={setActiveApp} />
      </div>

      <div className="flex justify-center items-center h-full pt-20">
        {renderApp() || (
          <div className="text-center opacity-30 font-mono">
            Selecione um aplicativo para começar
          </div>
        )}
      </div>

      <Dock onSelectApp={setActiveApp} />
    </div>
  );
};
