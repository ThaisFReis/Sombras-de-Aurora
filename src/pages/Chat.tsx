import { ChatBox } from "@/features/chat/components/ChatBox";
import ChatInput from "@/components/ChatInput";

export const Chat = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-100">
      <ChatBox />
      <ChatInput />
    </div>
  );
};
