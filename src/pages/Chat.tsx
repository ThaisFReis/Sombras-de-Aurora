import { useState } from "react";
import { ChatBox } from "@/features/chat/components/ChatBox";
import { ChatHeader } from "@/features/chat/components/ChatHeader";
import { ChatList } from "@/features/chat/components/ChatList";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { useChat } from "@/context/ChatContext";
import { ChatType } from "@/types/Chat";

export const Chat = () => {
  const { activeConversation, setActiveConversation } = useChat();
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClose = () => setIsMinimized(true);
  const handleOpen = () => setIsMinimized(false);

  const handleSelectConversation = (chat: ChatType) => {
    setActiveConversation(chat);
  };

  const handleBackToHistory = () => {
    setActiveConversation(null);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-background">
        <button
          className="bg-pink-600 text-white p-3 rounded-full shadow-lg relative"
          onClick={handleOpen}
        >
          <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 w-full max-w-md h-[500px] bg-background shadow-lg border-t border-l border-gray-200 flex flex-col z-50">
      <ChatHeader onClose={handleClose} newMessages={2} />

      {!activeConversation && (
        <>
          <div className="flex-1 overflow-y-auto">
            <ChatList onSelectConversation={handleSelectConversation} />
          </div>
        </>
      )}

      {activeConversation && (
        <div className="flex-1 flex flex-col">
          <div className="p-2 border-b border-gray-200 flex justify-end">
            <button
              onClick={handleBackToHistory}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded text-sm"
            >
              Voltar
            </button>
          </div>
          <ChatBox chat={activeConversation} />
        </div>
      )}
    </div>
  );
};