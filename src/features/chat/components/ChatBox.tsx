import { useChat } from "@/context/ChatContext";
import Message from "@/components/Message";

export const ChatBox = () => {
  const { scene } = useChat();

  return (
    <div className="w-full h-96 bg-white rounded shadow p-4 overflow-y-auto">
      <h2 className="text-lg font-bold">{scene.title}</h2>
      {scene.messages?.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} timestamp={msg.timestamp} />
      ))}
    </div>
  );
};
