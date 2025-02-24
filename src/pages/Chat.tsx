import { useState } from "react";
import { ChatBox } from "@/features/chat/components/ChatBox";
import { ChatHeader } from "@/features/chat/components/ChatHeader";
import { ChatHistory } from "@/features/chat/components/ChatHistory";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

export const Chat = () => {
  // Controla se o chat está minimizado ou aberto
  const [isMinimized, setIsMinimized] = useState(false);
  // Controla se estamos vendo o histórico de conversas ou a conversa em si
  const [activeConversation, setActiveConversation] = useState<number | null>(
    null
  );

  // Minimiza o chat
  const handleClose = () => {
    setIsMinimized(true);
  };

  // Reabre o chat
  const handleOpen = () => {
    setIsMinimized(false);
  };

  // Seleciona uma conversa do histórico
  const handleSelectConversation = (id: number) => {
    setActiveConversation(id);
  };

  // Volta para o histórico (caso queira um botão "Voltar")
  const handleBackToHistory = () => {
    setActiveConversation(null);
  };

  // Quando está minimizado, mostra apenas um ícone/flutuante
  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-background">
        <button
          className="bg-pink-600 text-white p-3 rounded-full shadow-lg relative"
          onClick={handleOpen}
        >
          {/* Ícone de chat */}
          <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />

          {/* Exemplo de badge com 2 mensagens novas */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 w-full max-w-md h-[500px] bg-background shadow-lg border-t border-l border-gray-200 flex flex-col z-50 ">
      {/* Header do chat */}
      <ChatHeader onClose={handleClose} newMessages={2} />

      {/* Se nenhuma conversa estiver selecionada, mostra o histórico */}
      {!activeConversation && (
        <>
          <div className="flex-1 overflow-y-auto">
            <ChatHistory onSelectConversation={handleSelectConversation} />
          </div>
          <div className="p-2 border-t border-gray-200 flex justify-end">
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md text-sm">
              Nova Conversa
            </button>
          </div>
        </>
      )}

      {/* Se tiver conversa selecionada, mostra o ChatBox */}
      {activeConversation && (
        <div className="flex-1 flex flex-col">
          {/* Botão "Voltar" para o histórico (opcional) */}
          <div className="p-2 border-b border-gray-200 flex justify-end">
            <button
              onClick={handleBackToHistory}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded text-sm"
            >
              Voltar
            </button>
          </div>
          <ChatBox />
        </div>
      )}
    </div>
  );
};
