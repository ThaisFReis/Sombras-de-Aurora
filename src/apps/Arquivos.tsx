import {
  Folder,
  FileText,
  Image,
  Video,
  Music,
  Play,
  Pause,
  RotateCcw,
  RotateCw,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import concepMap from "@/assets/concepMap.png";
import pdfFile from "@/assets/testsPDF.pdf";
import testeTXT from "@/assets/teste.txt"

type FileItem = {
  id: number;
  name: string;
  type: "document" | "image" | "video" | "music" | "other";
  size?: string;
  duration?: string;
  lastEdit?: string;
  url?: string; // URL do áudio, se for música
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
    icon: <FileText size={16} />,
    files: [
      {
        id: 1,
        name: "Relatório.pdf",
        type: "document",
        size: "1mb",
        duration: "-",
        lastEdit: "01.06.2025",
        url: pdfFile,
      },
      {
        id: 2,
        name: "Resumo.txt",
        type: "document",
        size: "500kb",
        duration: "-",
        lastEdit: "15.05.2025",
        url: testeTXT,
      },
    ],
  },
  {
    id: "images",
    name: "Imagens",
    icon: <Image size={16} />,
    files: [
      {
        id: 3,
        name: "concepmMap.png",
        type: "image",
        size: "2mb",
        duration: "-",
        lastEdit: "21.05.2025",
        url: concepMap,
      },
    ],
  },
  {
    id: "videos",
    name: "Vídeos",
    icon: <Video size={16} />,
    files: [
      {
        id: 5,
        name: "trailer.mp4",
        type: "video",
        size: "12mb",
        duration: "1m30s",
        lastEdit: "12.04.2025",
      },
    ],
  },
  {
    id: "music",
    name: "Músicas",
    icon: <Music size={16} />,
    files: [
      {
        id: 6,
        name: "tema_principal.mp3",
        type: "music",
        size: "5mb",
        duration: "3m12s",
        lastEdit: "05.04.2025",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // exemplo público
      },
    ],
  },
];

const FileIcon = ({ type }: { type: string }) => {
  const common = "text-indigo-400";
  switch (type) {
    case "document":
      return <FileText size={20} className={common} />;
    case "image":
      return <Image size={20} className={common} />;
    case "video":
      return <Video size={20} className={common} />;
    case "music":
      return <Music size={20} className={common} />;
    default:
      return <Folder size={20} className={common} />;
  }
};

export const Arquivos = () => {
  const [selectedFolder, setSelectedFolder] = useState<FolderItem>(folders[0]);
  const [playingFileId, setPlayingFileId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 a 1
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<{
    name: string;
    content?: string;
    url?: string;
  } | null>(null);

  // Função para animar a waveform
  const animateWaveform = () => {
    setProgress((old) => (old >= 1 ? 0 : old + 0.01));
    animationRef.current = requestAnimationFrame(animateWaveform);
  };

  // Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      animationRef.current = requestAnimationFrame(animateWaveform);
    }
  };

  // Voltar 10 segundos
  const back10s = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(
      0,
      audioRef.current.currentTime - 10
    );
    setProgress(audioRef.current.currentTime / audioRef.current.duration);
  };

  // Avançar 10 segundos
  const forward10s = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      audioRef.current.duration,
      audioRef.current.currentTime + 10
    );
    setProgress(audioRef.current.currentTime / audioRef.current.duration);
  };

  // Quando clicar num arquivo de áudio
  const handlePlayFile = (file: FileItem) => {
    if (playingFileId === file.id) {
      togglePlay();
      return;
    }

    // Para o áudio atual, se houver
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      setProgress(0);
    }

    setPlayingFileId(file.id);
  };

  // Sempre que mudar o arquivo em reprodução, trocar a src do audio
  useEffect(() => {
    if (playingFileId === null) return;

    const currentFile = selectedFolder.files.find(
      (f) => f.id === playingFileId
    );
    if (!currentFile || currentFile.type !== "music" || !currentFile.url)
      return;

    if (!audioRef.current) {
      audioRef.current = new Audio(currentFile.url);
    } else {
      audioRef.current.src = currentFile.url;
    }

    audioRef.current.onended = () => {
      setIsPlaying(false);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      setProgress(0);
      setPlayingFileId(null);
    };

    audioRef.current.ontimeupdate = () => {
      if (!audioRef.current) return;
      setProgress(audioRef.current.currentTime / audioRef.current.duration);
    };

    audioRef.current.play();
    setIsPlaying(true);
    animationRef.current = requestAnimationFrame(animateWaveform);

    // Cleanup na desmontagem
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.onended = null;
        audioRef.current.ontimeupdate = null;
      }
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [playingFileId]);

  // Render waveform como barras animadas
  const Waveform = () => {
    const bars = 30;
    return (
      <div className="flex h-full items-center gap-0.5 px-1 overflow-hidden">
        {[...Array(bars)].map((_, i) => {
          // Faz uma animação de onda com base no progresso e índice das barras
          const height =
            10 +
            10 *
              Math.abs(
                Math.sin(progress * 2 * Math.PI + (i / bars) * Math.PI * 2)
              );
          const opacity =
            0.3 +
            0.7 *
              Math.abs(
                Math.sin(progress * 2 * Math.PI + (i / bars) * Math.PI * 2)
              );
          return (
            <div
              key={i}
              className="bg-indigo-400 rounded"
              style={{
                width: 3,
                height,
                opacity,
                transition: "height 0.1s ease",
              }}
            />
          );
        })}
      </div>
    );
  };

  // Função ao clicar num arquivo
  const handleFileClick = async (file: FileItem) => {
    if (file.type === "music") {
      handlePlayFile(file);
    } else if (file.type === "image" && file.url) {
      setSelectedImage(file.url);
    } else if (file.type === "document") {
      // PDF
      if (file.name.endsWith(".pdf") && file.url) {
        setSelectedDocument({
          name: file.name,
          url: file.url,
        });
      }

      // TXT - carregar e mostrar conteúdo
      else if (file.name.endsWith(".txt") && file.url) {
        try {
          const response = await fetch(file.url);
          const text = await response.text();
          setSelectedDocument({
            name: file.name,
            content: text,
          });
        } catch (err) {
          setSelectedDocument({
            name: file.name,
            content: "Erro ao carregar conteúdo.",
          });
        }
      }
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-zinc-900 text-zinc-100 rounded-lg overflow-hidden font-sans">
      <div className="flex flex-1">
        {/* Sidebar Esquerda */}
        <aside className="bg-zinc-800 w-1/5 p-4 space-y-4 text-sm border-r border-zinc-700">
          <h2 className="text-xs text-zinc-400 mb-2 uppercase">Pastas</h2>
          {folders.map((folder) => (
            <div
              key={folder.id}
              className={clsx(
                "flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-zinc-700",
                selectedFolder.id === folder.id && "bg-zinc-700"
              )}
              onClick={() => {
                setSelectedFolder(folder);
                setPlayingFileId(null);
                setIsPlaying(false);
                setProgress(0);
              }}
            >
              {folder.icon}
              <span>{folder.name}</span>
            </div>
          ))}
        </aside>

        {/* Painel Central */}
        <main className="w-3/5 bg-zinc-900 p-4 border-r border-zinc-700 overflow-y-auto">
          <h2 className="text-sm font-semibold mb-4">{selectedFolder.name}</h2>
          <ul className="space-y-2">
            {selectedFolder.files.map((file) => (
              <li
                key={file.id}
                className={clsx(
                  "flex items-center gap-3 hover:bg-zinc-800 p-2 rounded cursor-pointer select-none",
                  playingFileId === file.id && "bg-indigo-700"
                )}
                onClick={() => handleFileClick(file)}
              >
                {FileIcon({ type: file.type })}
                <span className="text-sm flex-1">{file.name}</span>
                {file.type === "music" && playingFileId === file.id && (
                  <span className="text-xs text-green-400 ml-auto">
                    {isPlaying ? "▶️ Tocando" : "⏸️ Pausado"}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </main>
        {/* Modal da imagem */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] p-2 sm:p-4 bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 p-2 rounded-full transition"
                title="Fechar"
              >
                <span className="sr-only">Fechar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Imagem aberta"
                className="max-w-full max-h-[80vh] rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        )}

        {selectedDocument && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
            onClick={() => setSelectedDocument(null)}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 rounded-lg shadow-xl p-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDocument(null)}
                className="absolute top-2 right-2 text-white bg-zinc-800 rounded-full p-1 hover:bg-zinc-700"
              >
                ✕
              </button>
              <h3 className="text-lg font-semibold text-white mb-4">
                {selectedDocument.name}
              </h3>

              {/* PDF Viewer */}
              {selectedDocument.url &&
                selectedDocument.name.endsWith(".pdf") && (
                  <iframe
                    src={selectedDocument.url}
                    className="w-full h-[70vh] rounded bg-white"
                  />
                )}

              {/* TXT Viewer */}
              {selectedDocument.content && (
                <pre className="text-sm text-zinc-200 bg-zinc-800 p-4 rounded overflow-auto max-h-[70vh] whitespace-pre-wrap">
                  {selectedDocument.content}
                </pre>
              )}
            </div>
          </div>
        )}

        {/* Sidebar Direita */}
        <aside className="w-1/5 bg-zinc-800 p-4 text-xs space-y-2 overflow-y-auto">
          <div className="grid grid-cols-3 gap-2 text-zinc-400 mb-1">
            <span>Tamanho</span>
            <span>Duração</span>
            <span>Modificado</span>
          </div>
          {selectedFolder.files.map((file) => (
            <div
              key={file.id}
              className="grid grid-cols-3 gap-2 text-zinc-100 hover:bg-zinc-700 p-1 rounded"
            >
              <span>{file.size}</span>
              <span>{file.duration}</span>
              <span>{file.lastEdit}</span>
            </div>
          ))}
        </aside>
      </div>

      {/* Rodapé */}
      <footer className="bg-zinc-800 h-20 px-4 flex items-center justify-between border-t border-zinc-700">
        <div className="flex items-center gap-4">
          <button className="text-green-400 text-xs">Autoplay</button>
          <button className="text-zinc-400 text-xs">Reverse</button>
          <button className="text-zinc-400 text-xs">
            Tempo Match: <span className="text-green-400">On</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          {/* Controles de áudio */}
          <button
            onClick={back10s}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-700"
            title="Voltar 10s"
          >
            <RotateCcw size={16} className="text-indigo-400" />
          </button>
          <button
            onClick={togglePlay}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-700"
            title={isPlaying ? "Pausar" : "Tocar"}
            disabled={playingFileId === null}
          >
            {isPlaying ? (
              <Pause size={16} className="text-indigo-400" />
            ) : (
              <Play size={16} className="text-indigo-400" />
            )}
          </button>
          <button
            onClick={forward10s}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-700"
            title="Avançar 10s"
          >
            <RotateCw size={16} className="text-indigo-400" />
          </button>
        </div>
        <div className="w-1/3 h-8 bg-zinc-700 rounded overflow-hidden">
          {/* Waveform animada */}
          {playingFileId !== null ? (
            <Waveform />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30" />
          )}
        </div>
      </footer>
    </div>
  );
};
