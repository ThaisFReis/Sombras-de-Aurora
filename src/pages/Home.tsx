import { Chat } from "@/pages/Chat";
import { Feed } from "@/features/feed";
import { ChatProvider } from "@/context/ChatContext";

export const Home = () => {
  return (
    <div className="flex items-center w-screen min-h-screen p-2 bg-gradient-to-r from-[#dddeeb] to-[#ccd0ff]">
      <Feed />
      <ChatProvider>
        <Chat />
      </ChatProvider>
    </div>
  );
};
