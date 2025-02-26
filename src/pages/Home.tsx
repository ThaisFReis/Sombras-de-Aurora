import { Chat } from "@/pages/Chat";
import { Feed } from "@/features/feed";
import { ChatProvider } from "@/context/ChatContext";

export const Home = () => {
  return (
    <div className="flex items-center w-full min-h-screen p-2">
      <Feed />
    </div>
  );
};
