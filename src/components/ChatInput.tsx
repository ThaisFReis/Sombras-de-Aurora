import { useChat } from "@/context/ChatContext";

const ChatInput = () => {
  const { scene, sendMessage } = useChat();

  return (
    <div className="w-full p-2">
      {scene.choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => sendMessage(choice)}
          className="block w-full bg-blue-500 text-white p-2 mt-2 rounded"
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
};

export default ChatInput;
