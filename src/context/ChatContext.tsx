import { createContext, useContext, useState } from "react";
import act1 from "@/features/story/data/act1.json";

interface Message {
  from: string; // O user do personagem que enviou a mensagem
  content: string; // O conteúdo da mensagem
  timestamp: string; // O timestamp da mensagem
}

interface Post {
  content: string;
  data: string;
}

interface Choice {
  text: string;
  effect: {
    trust_aaron?: number;
    relationship_aaron?: string;
    trust_amigos?: number;
    relationship_amigos?: string;
  };
}

interface Scene {
  id: string;
  title: string;
  description: string;
  message?: Message;
  message_grupo?: Message;
  posts?: Post[];
  choices: Choice[];
}

interface ChatContextType {
  scene: Scene;
  sendMessage: (choice: Choice) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [scene, setScene] = useState<Scene>(act1.act1.scenes[sceneIndex]);

  const sendMessage = (choice: Choice) => {
    // Atualiza a cena de acordo com a escolha feita
    alert(
      choice.effect.relationship_aaron || choice.effect.relationship_amigos
    ); // Exibe o efeito
    const nextSceneIndex = sceneIndex + 1; // Avança para a próxima cena
    if (act1.act1.scenes[nextSceneIndex]) {
      setSceneIndex(nextSceneIndex);
      setScene(act1.act1.scenes[nextSceneIndex]);
    }
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
