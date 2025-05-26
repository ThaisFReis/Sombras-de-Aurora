import { Wifi, Volume2, Settings, Bell, User } from "lucide-react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

// Simula conexão ou estado do sistema
const statusSistema = {
  conectado: true,
  notificacoes: 3,
};

dayjs.locale("pt-br");

export const SystemHeader = () => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800 px-4 py-2 flex justify-between items-center text-zinc-300 text-sm shadow-md z-50">
      {/* Lado esquerdo - nome do sistema */}
      <div className="font-medium tracking-wide flex items-center gap-2">
        <span className="text-emerald-400">●</span>
        <span>
          {statusSistema.conectado ? "Online" : "Offline"} • Sombras de Aurora OS
        </span>
      </div>

      {/* Centro - relógio */}
      <div className="font-mono text-zinc-100">
        {time.format("ddd, D [de] MMMM • HH:mm:ss")}
      </div>

      {/* Lado direito - ícones de status */}
      <div className="flex items-center gap-4 text-zinc-400 relative">
        <div className="relative">
          <Bell className="w-4 h-4 hover:text-zinc-100 cursor-pointer" />
          {statusSistema.notificacoes > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
              {statusSistema.notificacoes}
            </span>
          )}
        </div>
        <Wifi className="w-4 h-4 hover:text-zinc-100" />
        <Volume2 className="w-4 h-4 hover:text-zinc-100" />
        <Settings className="w-4 h-4 hover:text-zinc-100" />
        <User className="w-4 h-4 hover:text-zinc-100" />
      </div>
    </div>
  );
};
