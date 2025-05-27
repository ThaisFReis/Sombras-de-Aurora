import { WindowApp } from "@/components/WindowApp";
import { Bell, MessageCircle, Heart, AlertTriangle } from "lucide-react";
import { useState } from "react";

type Notification = {
  id: string;
  type: "like" | "comment" | "message" | "alert" | "story";
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
};

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "like",
    title: "Nova curtida",
    description: "Elias curtiu sua publicação.",
    timestamp: "2025-05-26T10:15:00Z",
    read: false,
  },
  {
    id: "2",
    type: "comment",
    title: "Novo comentário",
    description: "Diana comentou: 'Você viu aquilo no espelho...?'",
    timestamp: "2025-05-26T09:45:00Z",
    read: false,
  },
  {
    id: "3",
    type: "alert",
    title: "Aviso da Vigília",
    description: "⚠️ Uma nova mensagem foi interceptada no Deepfeed.",
    timestamp: "2025-05-25T22:30:00Z",
    read: true,
  },
  {
    id: "4",
    type: "story",
    title: "Novo capítulo disponível",
    description: "Você desbloqueou um novo fragmento do diário de Clara.",
    timestamp: "2025-05-25T20:10:00Z",
    read: true,
  },
];

export const Notificacoes = ({ onClose }: { onClose: () => void }) => {
  const [notificacoes, setNotificacoes] = useState(mockNotifications);

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "like":
        return <Heart size={18} className="text-pink-400" />;
      case "comment":
        return <MessageCircle size={18} className="text-green-400" />;
      case "message":
        return <MessageCircle size={18} className="text-blue-400" />;
      case "alert":
        return <AlertTriangle size={18} className="text-yellow-400" />;
      case "story":
        return <Bell size={18} className="text-indigo-400" />;
    }
  };

  const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <WindowApp title="Notificações" onClose={onClose}>
      <div className="flex flex-col h-full w-full bg-zinc-950 text-zinc-100 overflow-y-auto">
        {notificacoes.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-zinc-500 text-sm">
            Nenhuma notificação no momento.
          </div>
        ) : (
          <ul className="divide-y divide-zinc-800">
            {notificacoes.map((notif) => (
              <li
                key={notif.id}
                className={`p-4 flex items-start gap-3 transition hover:bg-zinc-900/50 ${
                  notif.read ? "opacity-60" : "opacity-100"
                }`}
              >
                <div className="mt-1">{getIcon(notif.type)}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{notif.title}</p>
                  <p className="text-xs text-zinc-400 mt-1">{notif.description}</p>
                </div>
                <div className="text-[10px] text-zinc-500 mt-1">
                  {formatTime(notif.timestamp)}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </WindowApp>
  );
};
