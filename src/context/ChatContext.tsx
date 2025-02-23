import { createContext, useContext, useState, useEffect } from "react";
import act1 from "@/features/story/data/act1.json";

interface Message {
  sender: string;
  text: string;
  timestamp: string;
}

interface Choice {
  id: string;
  text: string;
  result: string;
}

interface Scene {
  id: number;
  title: string;
  location: string;
  messages?: Message[];
  posts?: {
    id: string;
    text: string;
    timestamp: string;
    likes: number;
    comments: string | never[];
  }[];
  choices: Choice[];
}

interface ChatContextType {
  scene: Scene;
  sendMessage: (choice: Choice) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [scene, setScene] = useState<Scene>(act1.scenes[sceneIndex]);

  const sendMessage = (choice: Choice) => {
    alert(choice.result); // Simula um avanço na história
    setSceneIndex((prev) => prev + 1);
    setScene(act1.scenes[sceneIndex + 1]);
  };

  return (
    <ChatContext.Provider value={{ scene, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within a ChatProvider");
  return context;
};
