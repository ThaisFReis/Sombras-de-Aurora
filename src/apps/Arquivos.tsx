import { Folder, FileText, Image, Video, Music } from "lucide-react";
import { useState } from "react";

type FileItem = {
  id: number;
  name: string;
  type: "document" | "image" | "video" | "music" | "other";
};

type FolderItem = {
  id: string;
  name: string;
  files: FileItem[];
  icon: React.ReactNode;
};

const folders: FolderItem[] = [
  {
    id: "documents",
    name: "Documentos",
    icon: <FileText size={20} />,
    files: [
      { id: 1, name: "Relatório.pdf", type: "document" },
      { id: 2, name: "Resumo.txt", type: "document" },
    ],
  },
  {
    id: "images",
    name: "Imagens",
    icon: <Image size={20} />,
    files: [
      { id: 3, name: "foto_aurora.jpg", type: "image" },
      { id: 4, name: "paisagem.png", type: "image" },
    ],
  },
  {
    id: "videos",
    name: "Vídeos",
    icon: <Video size={20} />,
    files: [
      { id: 5, name: "trailer.mp4", type: "video" },
    ],
  },
  {
    id: "music",
    name: "Músicas",
    icon: <Music size={20} />,
    files: [
      { id: 6, name: "tema_principal.mp3", type: "music" },
    ],
  },
];

const FileIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "document":
      return <FileText size={32} className="text-indigo-400" />;
    case "image":
      return <Image size={32} className="text-indigo-400" />;
    case "video":
      return <Video size={32} className="text-indigo-400" />;
    case "music":
      return <Music size={32} className="text-indigo-400" />;
    default:
      return <Folder size={32} className="text-indigo-400" />;
  }
};

export const Arquivos = () => {
  const [selectedFolder, setSelectedFolder] = useState<FolderItem>(folders[0]);

  return (
      <div className="flex h-full w-full bg-zinc-900 text-zinc-100 rounded-lg overflow-hidden">
        {/* Sidebar das pastas */}
        <aside className="w-60 bg-zinc-800 p-4 border-r border-zinc-700 flex flex-col">
          <nav className="flex flex-col gap-2">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  folder.id === selectedFolder.id
                    ? "bg-indigo-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {folder.icon}
                <span>{folder.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Área principal dos arquivos */}
        <main className="flex-1 p-6 overflow-auto">
          <h2 className="text-xl font-semibold mb-6">{selectedFolder.name}</h2>

          {selectedFolder.files.length === 0 ? (
            <p className="text-zinc-400">Nenhum arquivo nesta pasta.</p>
          ) : (
            <div className="grid grid-cols-4 gap-6">
              {selectedFolder.files.map((file) => (
                <div
                  key={file.id}
                  className="flex flex-col items-center gap-2 p-4 bg-zinc-800 rounded-lg cursor-pointer hover:bg-indigo-700 transition"
                >
                  <FileIcon type={file.type} />
                  <span className="text-sm truncate max-w-full text-center">
                    {file.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
  );
};
