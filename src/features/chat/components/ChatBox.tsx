import { useChat } from "@/context/ChatContext";
import Message from "@/components/Message";

export const ChatBox = () => {
  const { scene } = useChat();

  // Adicionando verificação para "where" e filtrando as mensagens
  const messages = scene.message
    ? [{ from: scene.message.from, content: scene.message.content, timestamp: scene.message.timestamp }]
    : scene.message || [];

  return (
    <div className="w-full h-96 bg-white rounded shadow p-4 overflow-y-auto">
      <h2 className="content-lg font-bold">{scene.title}</h2>

      {messages.map((msg, index) => (
        <Message
          key={index}
          from={msg.from}
          content={msg.content}
          timestamp={msg.timestamp || "Desconhecido"}
        />
      ))}
    </div>
  );
};
