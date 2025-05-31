import { useState, useEffect, useRef } from "react";
import { WindowApp } from "@/components/WindowApp";
import { MessageSquare } from "lucide-react";
import { characters } from "@/data/CharactersData";
import { Icon } from "@/components/ui/Icon";
import { X } from "lucide-react";
import { SendHorizonalIcon } from "lucide-react";

import { testChapter } from "@/data/chapter/chapter01";
import { ChatMessageRenderer } from "@/components/Chat/ChatMessageRenderer";
import { ChatMessage } from "@/types/types";

type MensagensAppProps = {
  onClose: () => void;
  onOpenApp: (appName: string, payload?: any) => void;
};

export const ChatApp = ({ onClose, onOpenApp }: MensagensAppProps) => {
  const [activeUserId, setActiveUserId] = useState<string | null>(null);

  // Chat log e índice para controlar avanço da conversa
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ref para scroll automático
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll para baixo quando chatLog mudar
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  useEffect(() => {
    if (activeUserId === "beatriz") {
      const firstMessage = testChapter.chat[0];
      const secondMessage = testChapter.chat[1]; // pode ser choice
      const initialLog = [firstMessage];

      if (secondMessage) {
        initialLog.push(secondMessage);
      }

      setChatLog(initialLog);
      setCurrentIndex(2); // já avançamos dois
    } else {
      setChatLog([]);
      setCurrentIndex(0);
    }
  }, [activeUserId]);

  const selectedUser = Object.values(characters).find(
    (c) => c.id === activeUserId
  );

  const handleChoice = (effect: string, text: string) => {
    const playerResponse: ChatMessage = {
      id: `choice-${Date.now()}`,
      sender: "player",
      type: "text",
      content: text,
    };

    const triggers = effect.split("|");

    // 🔓 Verifica se há um minigame para desbloquear
    const minigameTrigger = triggers.find((t) =>
      t.startsWith("unlock_minigame--")
    );
    if (minigameTrigger) {
      const gameId = minigameTrigger.split("--")[1];
      setChatLog((prev) => [...prev, playerResponse]);

      // Pequeno delay opcional para UX
      setTimeout(() => {
        onOpenApp("minigames", { gameId }); // 💡 Passa qual jogo abrir
      }, 800);

      return;
    }

    if (effect.includes("end_chat")) {
      setChatLog((prev) => [...prev, playerResponse]);
      setTimeout(() => setActiveUserId(null), 1000);
      return;
    }

    const next = testChapter.chat.find(
      (msg) =>
        (msg.triggers && msg.triggers.some((t) => triggers.includes(t))) ||
        msg.id === `b${currentIndex + 1}`
    );

    const newMessages: ChatMessage[] = [playerResponse];
    if (next) {
      newMessages.push(next);
      setCurrentIndex((prev) => prev + 1);
    }

    setChatLog((prev) => [...prev, ...newMessages]);
  };

  return (
      <div className="rounded-lg w-fit h-fit bg-green-800 mx-auto">
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
          <h2 className="text-sm font-medium text-zinc-200 tracking-wide">
            Chat
          </h2>
          <button
            onClick={onClose}
            className="flex text-zinc-400 hover:text-red-400 transition-colors hover:bg-zinc-700 h-7 w-7 rounded-full items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex flex-1 overflow-hidden w-[60vw]">
          {/* Lista de contatos */}
          <aside className="w-20 bg-zinc-800 flex flex-col items-center py-4 space-y-4 overflow-y-auto border-r border-zinc-700">
            {Object.values(characters).map((char) => (
              <button
                key={char.id}
                onClick={() => setActiveUserId(char.id)}
                title={char.name}
                className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all ${
                  activeUserId === char.id
                    ? "border-indigo-500"
                    : "border-transparent hover:border-indigo-400"
                }`}
              >
                <Icon
                  src={char.avatar}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </aside>

          {/* Janela de chat */}
          <main className="flex flex-col flex-1 bg-zinc-900 h-[68vh]">
            {selectedUser ? (
              <>
                <header className="flex items-center gap-4 p-4 border-b border-zinc-700 bg-zinc-800/90 backdrop-blur-sm sticky top-0 z-10">
                  <Icon
                    src={selectedUser.avatar}
                    className="w-12 h-12 rounded-full object-cover border border-zinc-700"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {selectedUser.name}
                    </h2>
                    <p className="text-xs text-zinc-400">{selectedUser.user}</p>
                  </div>
                </header>

                <div
                  className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-zinc-800"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {chatLog.map((msg) => (
                    <ChatMessageRenderer
                      key={msg.id}
                      message={msg}
                      onChoiceSelect={handleChoice}
                    />
                  ))}

                  <div ref={messagesEndRef} />
                </div>

                <footer className="p-3 bg-zinc-800 border-t border-zinc-700 flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Escreva uma mensagem..."
                    className="flex-1 rounded-xl bg-zinc-700 px-4 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <button
                    aria-label="Enviar"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white rounded-full p-2 transition"
                  >
                    {/* Ícone enviar poderia ir aqui, exemplo com SVG */}
                    <SendHorizonalIcon />
                  </button>
                </footer>
              </>
            ) : (
              <div className="flex flex-1 items-center justify-center text-zinc-500">
                <div className="flex flex-col items-center gap-2">
                  <MessageSquare size={48} />
                  <p>Selecione um contato para começar a conversar.</p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
  );
};
