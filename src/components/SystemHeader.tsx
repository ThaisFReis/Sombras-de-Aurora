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
    icon: <Settings size={16} />,
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
    <div className="w-full px-4 py-2 backdrop-blur-[1px] rounded-t-xl shadow-md flex justify-between items-center text-white text-xs font-medium z-50">
      {/* Esquerda (vazio ou ícones futuros) */}
      <div className="flex items-center gap-3 min-w-[120px]" />

      {/* Centro - Data e clima */}
      <div className="text-white font-mono text-sm text-center mx-auto">
        {time.format("ddd HH:mm A")} &nbsp;•&nbsp; 72° & Sunny
      </div>

      {/* Direita - Ícones do sistema */}
      <div className="flex items-center gap-3 text-white relative">
        <div className="relative">
          <button
            onClick={() => setShowPanel(!showPanel)}
            className="hover:text-slate-500 transition-colors"
            title="Notificações"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
                {unreadCount}
              </span>
            )}
          </button>

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

        <span title="Wi-Fi">
          <Wifi className="w-4 h-4 hover:text-slate-300" />
        </span>
        <span title="Volume">
          <Volume2 className="w-4 h-4 hover:text-slate-300" />
        </span>

        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => onSelectApp(activeApp === app.id ? null : app.id)}
            className="hover:text-slate-300"
            title={app.name}
          >
            {app.icon}
          </button>
        ))}

        <button
          onClick={() => onSelectApp("profile")}
          className="hover:text-slate-300"
          title="Perfil"
        >
          <User className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
