import { useState } from "react";
import { ChatBox } from "@/features/chat/components/ChatBox";
import { ChatList } from "@/features/chat/components/ChatList";
import { useChat } from "@/context/ChatContext";
import { ChatType } from "@/types/Chat";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import { ProgressBar } from "@/components/ProgressBar";
import { chats } from "@/data/ChatData";
import { CharactersData } from "@/data/CharactersData";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";
import { ChatHeader } from "@/features/chat/components/ChatHeader"; // Importe o ChatHeader

export const Chat = () => {
  const { activeConversation, setActiveConversation } = useChat();
  const [isMinimized, setIsMinimized] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const handleClose = () => setIsMinimized(true);
  const handleOpen = () => setIsMinimized(false);

  const handleSelectConversation = (chat: ChatType) => {
    setActiveConversation(chat);
  };

  const handleBackToHistory = () => {
    setActiveConversation(null);
  };

  const filteredConversations = chats.filter((chat) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      chat.name?.toLowerCase().includes(searchLower) ||
      chat.characters.some((characterId) => {
        const character = CharactersData.find((char) => char.id === characterId);
        return character?.name.toLowerCase().includes(searchLower);
      })
    );
  });

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4">
        <button
          className={`${currentTheme.receivedBackground} text-white p-3 rounded-full shadow-lg relative`}
          onClick={handleOpen}
        >
          <SmsRoundedIcon className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg flex flex-col shadow-md w-[550px] h-[750px] my-[75px] ${currentTheme.cardBackground} `}
    >
      {/* ChatHeader */}
      <ChatHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onBack={handleBackToHistory}
        isOpen={!!activeConversation} // Mostra o botão de voltar apenas quando há uma conversa ativa
        chatName={activeConversation?.name}
      />

      {/* Lista de conversas ou conversa ativa */}
      <div className="flex-1 overflow-y-auto p-4">
        {!activeConversation ? (
          <ChatList
            conversations={filteredConversations}
            onSelectConversation={handleSelectConversation}
          />
        ) : (
          <ChatBox chat={activeConversation} character={undefined} />
        )}
      </div>

      {/* Barra de progresso (opcional) */}
      {/* <ProgressBar /> */}
    </div>
  );
};