import { useEffect, useState, useRef } from "react";
import { groupMessagesByDay, getDaysDifference } from "@/utils/dateUtils";
import { ChatType } from "@/types/Chat";
import { CharacterType } from "@/types/Character";
import { MessageType } from "@/types/Message";
import { useTheme } from "@/context/ThemeContext"; // Importe o useTheme
import { themes } from "@/utils/themes";

type ChatBoxProps = {
  chat: ChatType;
  character: CharacterType | undefined; // Adicione o personagem como prop
};

export const ChatBox = ({ chat, character }: ChatBoxProps) => {
  const [groupedMessages, setGroupedMessages] = useState<{
    [key: string]: MessageType[];
  }>({});
  const messagesContainerRef = useRef<HTMLDivElement>(null); // Referência para o contêiner de mensagens
  const { theme } = useTheme(); // Acesse o tema atual
  const currentTheme = themes[theme]; // Obtenha as cores do tema atual

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
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [groupedMessages]); // Executa sempre que groupedMessages mudar

  // Verifica se o personagem tem o campo "trust"
  const hasTrustField = character && "trust" in character;

  return (
    <div
      className={`w-full h-full rounded p-4 overflow-y-auto flex flex-col`}
      style={{ backgroundColor: currentTheme.cardBackground }} // Aplica a cor de fundo do tema e a cor do scroll
      ref={messagesContainerRef}
    >
      {/* Exibe a mensagem de erro se o personagem não tiver o campo "trust" */}
      {!hasTrustField && (
        <div
          className={`text-sm mb-4 ml-auto mr-auto ${currentTheme.hashtag}`}
        >
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
            <div className={`text-xs font-medium mb-2 ${currentTheme.hashtag}`}>
              {daysDifference === 0
                ? "Hoje"
                : `Há ${daysDifference} dia${daysDifference !== 1 ? "s" : ""}`}
            </div>

            {/* Renderiza as mensagens do bloco */}
            {messages.map((msg, index) => (
              <div key={index} className="my-2">
                <div
                  className={`flex min-h-14 text-sm p-2 rounded ${
                    msg.senderId !== "0"
                      ? `${currentTheme.receivedBackground} text-black mr-10` // Mensagem recebida
                      : `${currentTheme.sentBackground} text-black ml-10` // Mensagem enviada
                  }`}
                >
                  <span>{msg.content}</span>
                  <div
                    className={`text-[10px] mb-0 mt-auto ml-auto mr-0 ${currentTheme.textDefault}`}
                  >
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
