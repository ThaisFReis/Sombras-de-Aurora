import {
  Home,
  User,
  Mail,
  Bell,
  Plus,
  Settings,
} from "lucide-react";
import { NavItem } from "@/components/Feed/NavItem";

export const Sidebar = () => {
  return (
    <aside className="w-64 p-6 border-r border-zinc-800 flex flex-col gap-6">
      <div className="text-xl font-bold text-indigo-400">aurora</div>

      <nav className="flex flex-col gap-4 mt-4">
        <NavItem icon={<Home />} label="Início" />
        <NavItem icon={<User />} label="Perfil" />
        <NavItem icon={<Mail />} label="Mensagens" />
        <NavItem icon={<Bell />} label="Notificações" />
        <NavItem icon={<Settings />} label="Configurações" />
      </nav>

      <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition">
        <Plus size={16} />
        Novo Post
      </button>
    </aside>
  );
};
