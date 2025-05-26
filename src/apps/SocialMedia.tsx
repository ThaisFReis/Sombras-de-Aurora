import { WindowApp } from "@/components/WindowApp";
import { Search } from "lucide-react";
import { PostCard } from "@/components/ui/PostCard";
import { Sidebar } from "@/components/SocialMedia/Sidebar";
import { posts } from "@/data/PostData";
import { useState } from "react";
import { Perfil } from "@/components/SocialMedia/Perfil";

export const SocialMedia = ({ onClose }: { onClose: () => void }) => {
  const [componenteAtivo, setComponenteAtivo] = useState("Feed");

  const renderComponente = () => {
    switch (componenteAtivo) {
      case "Feed":
      case "Início":
        return (
          <div className="p-4 space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        );
      case "Mensagens":
        return <div className="p-4">Mensagens</div>;
      case "Perfil":
        return <Perfil />;
      case "Notificacoes":
        return <div className="p-4">Notificações</div>;
      case "Configuracoes":
        return <div className="p-4">Configurações</div>;
      default:
        return <div className="p-4">Componente não encontrado.</div>;
    }
  };

  return (
    <WindowApp title="Rede Social" onClose={onClose}>
      <div className="flex h-full w-full bg-zinc-950 text-zinc-100">
        {/* Sidebar esquerda com controle de navegação */}
        <Sidebar onNavigate={setComponenteAtivo} />

        {/* Conteúdo central */}
        <main className="flex-1 flex flex-col border-r border-zinc-800 overflow-y-auto">
          <header className="sticky top-0 z-10 backdrop-blur bg-zinc-900/70 border-b border-zinc-800 p-4 text-lg font-semibold">
            {componenteAtivo === "feed"
              ? "Início"
              : componenteAtivo.charAt(0).toUpperCase() +
                componenteAtivo.slice(1)}
          </header>
          {renderComponente()}
        </main>

        {/* Sidebar direita */}
        <aside className="w-80 p-6 hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full bg-zinc-800 rounded-xl px-4 py-2 pr-10 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search
              className="absolute top-2.5 right-3 text-zinc-400"
              size={16}
            />
          </div>

          <div className="mt-6 text-sm text-zinc-400">
            <p>🕯️ Algo está se movendo em Aurora.</p>
          </div>
        </aside>
      </div>
    </WindowApp>
  );
};
