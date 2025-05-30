import { Wifi, Volume2, Settings, Bell, User } from "lucide-react";
import { useNotificationStore } from "@/stores/notificationStore";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("pt-br");
dayjs.extend(relativeTime);

interface SystemHeaderProps {
  onSelectApp: (app: string | null) => void;
  activeApp: string | null;
}

const apps = [
  {
    id: "settings",
    name: "Configurações",
    icon: <Settings />,
  },
];

export const SystemHeader = ({ onSelectApp, activeApp }: SystemHeaderProps) => {
  const [time, setTime] = useState(dayjs());
  const unreadCount = useNotificationStore((state) => state.unreadCount());
  const [showPanel, setShowPanel] = useState(false);
  const notifications = useNotificationStore((s) => s.notifications);
  const markAsRead = useNotificationStore((s) => s.markAsRead);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800 px-4 py-2 flex justify-between items-center text-zinc-300 text-sm shadow-md z-50">
      {/* Lado esquerdo */}
      <div className="font-medium tracking-wide flex items-center gap-2">
        <span className="text-emerald-400">●</span>
        <span>Online • Sombras de Aurora OS</span>
      </div>

      {/* Centro - Relógio */}
      <div className="font-mono text-zinc-100">
        {time.format("ddd, D [de] MMMM • HH:mm:ss")}
      </div>

      {/* Lado direito */}
      <div className="flex items-center gap-4 text-zinc-400 relative">
        <div className="relative">
          <div
            className="cursor-pointer"
            onClick={() => setShowPanel(!showPanel)}
          >
            <Bell className="w-4 h-4 hover:text-zinc-100" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
                {unreadCount}
              </span>
            )}
          </div>

          {showPanel && (
            <div className="absolute right-0 mt-2 w-72 max-h-96 overflow-y-auto bg-zinc-800 border border-zinc-700 shadow-lg rounded-md p-2 z-50 space-y-3">
              {notifications.length === 0 ? (
                <p className="text-zinc-400 text-sm">Sem notificações.</p>
              ) : (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`text-sm p-2 rounded-md transition-colors cursor-pointer ${
                      n.read ? "bg-zinc-700/50" : "bg-zinc-700"
                    } hover:bg-zinc-600`}
                    onClick={() => markAsRead(n.id)}
                  >
                    <strong className="text-zinc-200 block">{n.title}</strong>
                    <p className="text-zinc-400 text-xs line-clamp-3">
                      {n.message}
                    </p>
                    <span className="text-[10px] text-zinc-500 mt-1 block">
                      {dayjs(n.timestamp).fromNow()}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <Wifi className="w-4 h-4 hover:text-zinc-100" />
        <Volume2 className="w-4 h-4 hover:text-zinc-100" />

        {/* Apps */}
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => onSelectApp(activeApp === app.id ? null : app.id)}
            className="flex flex-col items-center hover:text-white"
          >
            {app.icon}
          </button>
        ))}

        {/* Ícone usuário, exemplo: poderia abrir app de perfil ou algo */}
        <button
          className="flex flex-col items-center hover:text-white"
          title="Perfil"
          onClick={() => onSelectApp("profile")}
        >
          <User className="w-4 h-4 hover:text-zinc-100" />
        </button>
      </div>
    </div>
  );
};
