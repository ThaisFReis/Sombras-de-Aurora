import { createContext, useContext, useState } from "react";
import { ChatType } from "@/types/Chat";

type ChatContextType = {
  activeConversation: ChatType | null;
  setActiveConversation: (chat: ChatType | null) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeConversation, setActiveConversation] = useState<ChatType | null>(null);

  return (
    <ChatContext.Provider value={{ activeConversation, setActiveConversation }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within a ChatProvider");
  return context;
};