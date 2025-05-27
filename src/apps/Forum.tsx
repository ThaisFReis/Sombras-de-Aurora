import { WindowApp } from "@/components/WindowApp";
import { useState } from "react";
import { Plus, MessageSquare, X } from "lucide-react";

type Topic = {
  id: number;
  title: string;
  author: string;
  replies: number;
  lastUpdate: string;
  category: string;
};

const categories = ["Geral", "Mistério", "Teorias", "Ajuda"];

const initialTopics: Topic[] = [
  {
    id: 1,
    title: "Quem é Radix, afinal?",
    author: "User123",
    replies: 14,
    lastUpdate: "2025-05-20",
    category: "Mistério",
  },
  {
    id: 2,
    title: "Dicas para desvendar os enigmas",
    author: "Explorador",
    replies: 7,
    lastUpdate: "2025-05-22",
    category: "Ajuda",
  },
  {
    id: 3,
    title: "Teoria sobre a Vigília do Olho",
    author: "DetectiveX",
    replies: 20,
    lastUpdate: "2025-05-23",
    category: "Teorias",
  },
];

export const Forum = ({ onClose }: { onClose: () => void }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Geral");
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [showNewTopic, setShowNewTopic] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState("");

  const filteredTopics = topics.filter(
    (topic) => topic.category === selectedCategory
  );

  const handleCreateTopic = () => {
    if (!newTopicTitle.trim()) return;

    const newTopic: Topic = {
      id: topics.length + 1,
      title: newTopicTitle,
      author: "Você",
      replies: 0,
      lastUpdate: new Date().toISOString().slice(0, 10),
      category: selectedCategory,
    };

    setTopics([newTopic, ...topics]);
    setNewTopicTitle("");
    setShowNewTopic(false);
  };

  return (
    <WindowApp title="Fórum" onClose={onClose}>
      <div className="flex h-full w-full bg-zinc-900 text-zinc-100 rounded-lg overflow-hidden">
        {/* Sidebar categorias */}
        <aside className="w-56 bg-zinc-800 p-4 border-r border-zinc-700 flex flex-col">
          <h2 className="text-lg font-semibold mb-6">Categorias</h2>
          <nav className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-left px-3 py-2 rounded-md transition-colors ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </aside>

        {/* Área principal tópicos */}
        <main className="flex-1 p-6 flex flex-col">
          <header className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">{selectedCategory}</h2>
            <button
              onClick={() => setShowNewTopic(true)}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-white transition"
            >
              <Plus size={16} /> Novo Tópico
            </button>
          </header>

          {/* Lista de tópicos */}
          <div className="flex-1 overflow-auto">
            {filteredTopics.length === 0 ? (
              <p className="text-zinc-400">Nenhum tópico nesta categoria.</p>
            ) : (
              <ul className="space-y-4">
                {filteredTopics.map((topic) => (
                  <li
                    key={topic.id}
                    className="p-4 bg-zinc-800 rounded-md hover:bg-indigo-700 cursor-pointer transition"
                  >
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{topic.title}</h3>
                      <span className="text-xs text-zinc-400">
                        {topic.replies} respostas
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-zinc-400 mt-1">
                      <span>Por {topic.author}</span>
                      <span>Última: {topic.lastUpdate}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>

        {/* Modal Novo Tópico */}
        {showNewTopic && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-zinc-900 rounded-lg p-6 w-96">
              <header className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Criar Novo Tópico</h3>
                <button
                  onClick={() => setShowNewTopic(false)}
                  className="text-zinc-400 hover:text-white transition"
                  aria-label="Fechar"
                >
                  <X size={20} />
                </button>
              </header>

              <input
                type="text"
                placeholder="Título do tópico"
                className="w-full p-2 mb-4 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={newTopicTitle}
                onChange={(e) => setNewTopicTitle(e.target.value)}
              />

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowNewTopic(false)}
                  className="px-4 py-2 rounded-md bg-zinc-700 hover:bg-zinc-600 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleCreateTopic}
                  className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition"
                >
                  Criar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </WindowApp>
  );
};
