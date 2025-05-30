import {
  FolderOpen,
  MessageCircle,
  MapPinned,
  Ghost,
  Settings,
  AtSign,
  Gamepad2
} from "lucide-react";
interface DockProps {
  onSelectApp: (app: string | null) => void;
}

const apps = [
  {
    id: "feed",
    name: "Rede Social",
    icon: <AtSign />,
  },
  { id: "forum", name: "Deepfeed", icon: <Ghost /> },
  {
    id: "arquivos",
    name: "Arquivos",
    icon: <FolderOpen />,
    color: "bg-emerald-600",
  },
  { 
    id: "chat", 
    name: "Chat", 
    icon: <MessageCircle /> },
  {
    id: "settings",
    name: "Configurações",
    icon: <Settings />,
  },
  {
    id: "map",
    name: "Mapa",
    icon: <MapPinned />,
  },
  {
    id: "minigames",
    name: "Mini Jogos",
    icon: <Gamepad2 />
  }
];

export const Dock = ({ onSelectApp }: DockProps) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6 bg-zinc-800/60 rounded-full px-6 py-3 shadow-inner backdrop-blur-md">
      {apps.map((app) => (
        <button
          key={app.id + "dock"}
          onClick={() => onSelectApp(app.id)}
          className="flex flex-col items-center text-zinc-300 hover:text-white"
        >
          {app.icon}
          <span className="text-[10px] mt-1">{app.name}</span>
        </button>
      ))}
    </div>
  );
};
