import { WindowApp } from "@/components/WindowApp";
import { useState } from "react";
import { CharactersData } from "@/data/CharactersData";
import { Icon } from "@/components/ui/Icon";
import { Send } from "lucide-react";

type Message = {
  senderId: string;
  content: string;
  timestamp: string;
};

export const Chat = ({ onClose }: { onClose: () => void }) => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Record<string, Message[]>>({});

  const handleSendMessage = () => {
    if (!selectedUserId || !messageInput.trim()) return;
    const newMsg: Message = {
      senderId: "0", // jogador
      content: messageInput,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => ({
      ...prev,
      [selectedUserId]: [...(prev[selectedUserId] || []), newMsg],
    }));
    setMessageInput("");
  };

  const selectedMessages = selectedUserId ? messages[selectedUserId] || [] : [];

  return (
    <WindowApp title="Mensagens" onClose={onClose}>
      <div className="flex h-full w-full bg-zinc-950 text-zinc-100">
        {/* Lista de contatos */}
        <aside className="w-64 border-r border-zinc-800 overflow-y-auto">
          <div className="p-4 font-semibold text-zinc-400">Contatos</div>
          <ul>
            {CharactersData.map((user) => (
              <li
                key={user.id}
                className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-zinc-800 transition ${
                  selectedUserId === user.id ? "bg-zinc-800" : ""
                }`}
                onClick={() => setSelectedUserId(user.id)}
              >
                <Icon src={user.avatar} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-zinc-400">{user.user}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Janela de conversa */}
        <main className="flex-1 flex flex-col">
          {selectedUserId ? (
            <>
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800 bg-zinc-900/70 backdrop-blur sticky top-0 z-10">
                <Icon
                  src={CharactersData.find((u) => u.id === selectedUserId)?.avatar}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">
                    {CharactersData.find((u) => u.id === selectedUserId)?.name}
                  </p>
                  <p className="text-xs text-zinc-400">
                    @{CharactersData.find((u) => u.id === selectedUserId)?.user}
                  </p>
                </div>
              </div>

              {/* Mensagens */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.senderId === "0" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-xl shadow ${
                        msg.senderId === "0"
                          ? "bg-indigo-600 text-white"
                          : "bg-zinc-800 text-zinc-200"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className="text-[10px] text-zinc-400 text-right mt-1">
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Campo de envio */}
              <div className="p-4 border-t border-zinc-800 bg-zinc-900/70 backdrop-blur">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Digite uma mensagem..."
                    className="flex-1 bg-zinc-800 rounded-xl px-4 py-2 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="p-2 rounded-full hover:bg-zinc-800 transition"
                  >
                    <Send className="text-indigo-400" size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-zinc-500">
              Selecione um contato para iniciar a conversa.
            </div>
          )}
        </main>
      </div>
    </WindowApp>
  );
};
