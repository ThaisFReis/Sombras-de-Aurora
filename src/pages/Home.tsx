import { Chat } from "@/pages/Chat";
import { Feed } from "@/features/feed";
import { ChatProvider } from "@/context/ChatContext";

export const Home = () => {
  return (
    <div className="flex flex-row items-center w-screen min-h-screen p-2 gap-2">
      <Feed />
      <ChatProvider>
        <Chat />
      </ChatProvider>
    </div>
  );
};
