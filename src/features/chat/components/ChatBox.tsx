import { useEffect, useState, useRef } from "react";
import { groupMessagesByDay, getDaysDifference } from "@/utils/dateUtils";
import { ChatType} from "@/types/Chat";
import { CharacterType } from "@/types/Character";
import { MessageType } from "@/types/Message";

type ChatBoxProps = {
  chat: ChatType;
  character: CharacterType | undefined; // Adicione o personagem como prop
};

export const ChatBox = ({ chat, character }: ChatBoxProps) => {
  const [groupedMessages, setGroupedMessages] = useState<{ [key: string]: MessageType[] }>({});
  const messagesContainerRef = useRef<HTMLDivElement>(null); // Referência para o contêiner de mensagens


  useEffect(() => {
    if ((chat.messages ?? []).length > 0) {
      // Agrupa as mensagens por dia
      const grouped = groupMessagesByDay(chat.messages ?? []);
      setGroupedMessages(grouped);
    }
  }, [chat.messages]);

  // Rola para o final do chat sempre que as mensagens forem atualizadas
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [groupedMessages]); // Executa sempre que groupedMessages mudar


  // Verifica se o personagem tem o campo "trust"
  const hasTrustField = character && "trust" in character;

  return (
    <div className="w-full h-96 bg-white rounded p-4 overflow-y-auto flex flex-col" ref={messagesContainerRef}>
      <h2 className="text-lg font-bold mb-4">{chat.name}</h2>

      {/* Exibe a mensagem de erro se o personagem não tiver o campo "trust" */}
      {!hasTrustField && (
        <div className="text-sm text-black mb-4 ml-auto mr-auto">
          Erro ao carregar o histórico da conversa.
        </div>
      )}

      {Object.entries(groupedMessages).map(([date, messages]) => {
        const messageDate = new Date(date);
        const currentDate = new Date("2023-11-01"); // Substitua pela data atual do jogo
        const daysDifference = getDaysDifference(messageDate, currentDate);

        return (
          <div key={date} className="mb-4">
            {/* Exibe a diferença de dias para o bloco de mensagens */}
            <div className="text-sm text-gray-500 mb-2">
              {daysDifference === 0
                ? "Hoje"
                : `Há ${daysDifference} dia${daysDifference !== 1 ? "s" : ""}`}
            </div>

            {/* Renderiza as mensagens do bloco */}
            {messages.map((msg, index) => (
              <div key={index} className="my-2">
                <div
                  className={`flex min-h-14 text-sm ${
                    msg.senderId !== "0"
                      ? "text-black bg-[#ccd0ff] p-2 rounded mr-10"
                      : "text-black bg-[#d3d3d3] ml-10 p-2 rounded"
                  }`}
                >
                  <span>{msg.content}</span>
                  <div className="text-[10px] text-gray mb-0 mt-auto ml-auto mr-0">
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};