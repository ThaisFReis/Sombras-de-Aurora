export type MessageType = {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead?: boolean;
  type: "text" | "image" | "video";
  trigger?: {
      type: "choice" | "progress" | "time"; // Tipo de gatilho
      condition: string; // Condição específica (ex: "após escolha X")
  };
};