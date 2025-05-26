import { WindowApp } from "@/components/WindowApp";
import { Search } from "lucide-react";
import { PostCard } from "@/features/feed/components/PostCard";
import { Sidebar } from "@/components/Feed/Sidebar";
import { posts } from "@/data/PostData";

export const Feed = ({ onClose }: { onClose: () => void }) => {
  return (
    <WindowApp title="Rede Social" onClose={onClose}>
      <div className="flex h-full w-full bg-zinc-950 text-zinc-100">
        <Sidebar />
        {/* Feed central */}
        <main className="flex-1 flex flex-col border-r border-zinc-800 overflow-y-auto">
          <header className="sticky top-0 z-10 backdrop-blur bg-zinc-900/70 border-b border-zinc-800 p-4 text-lg font-semibold">
            Início
          </header>

          <div className="p-4 space-y-4">
            {/* Aqui vão os posts */}
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
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
