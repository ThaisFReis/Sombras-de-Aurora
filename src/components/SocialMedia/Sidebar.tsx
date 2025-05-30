import { Home, User, Bell, Plus, Settings } from "lucide-react";

interface SidebarProps {
  onNavigate: (componente: string) => void;
}

export const Sidebar = ({ onNavigate }: SidebarProps) => {
  return (
    <aside className="w-64 p-6 border-r border-zinc-800 flex flex-col gap-6">
      <div className="text-xl font-bold text-indigo-400">aurora</div>

      <nav className="flex flex-col gap-4 mt-4">
        <button
          onClick={() => onNavigate("Feed")}
          className="flex items-center gap-3 text-zinc-300 hover:text-white transition"
        >
          <Home size={18} />
          Início
        </button>
        <button
          onClick={() => onNavigate("Perfil")}
          className="flex items-center gap-3 text-zinc-300 hover:text-white transition"
        >
          <User size={18} />
          Perfil
        </button>

        <button
          onClick={() => onNavigate("Notificacoes")}
          className="flex items-center gap-3 text-zinc-300 hover:text-white transition"
        >
          <Bell size={18} />
          Notificações
        </button>
        <button
          onClick={() => onNavigate("Configuracoes")}
          className="flex items-center gap-3 text-zinc-300 hover:text-white transition"
        >
          <Settings size={18} />
          Configurações
        </button>
      </nav>

      <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition">
        <Plus size={16} />
        Novo Post
      </button>
    </aside>
  );
};
