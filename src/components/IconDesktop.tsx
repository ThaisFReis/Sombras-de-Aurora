import { useState, Dispatch, SetStateAction } from "react";
import {
  Monitor,
  FolderOpen,
  MessageCircle,
  MapPinned,
  Ghost,
} from "lucide-react";

interface IconDesktopProps {
  setJanelaAtiva: Dispatch<SetStateAction<string | null>>;
}

const apps = [
  {
    id: "feed",
    name: "Rede Social",
    icon: <MessageCircle />,
    color: "bg-indigo-500",
  },
  { id: "forum", name: "Deepfeed", icon: <Ghost />, color: "bg-purple-600" },
  {
    id: "arquivos",
    name: "Arquivos",
    icon: <FolderOpen />,
    color: "bg-emerald-600",
  },
];

export const IconDesktop = ({ setJanelaAtiva }: IconDesktopProps) => {
  return (
    <div className="p-6 grid grid-cols-4 gap-6">
      {apps.map((app) => (
        <button
          key={app.id}
          onClick={() => setJanelaAtiva(app.id)}
          className="flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <div className={`rounded-2xl p-4 ${app.color} shadow-lg`}>
            {app.icon}
          </div>
          <span className="mt-2 text-xs text-zinc-300">{app.name}</span>
        </button>
      ))}
    </div>
  );
};
