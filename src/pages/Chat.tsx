import { ChatType } from "@/types/Chat";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

interface ChatListProps {
  conversations: ChatType[];
  onSelectConversation: (chat: ChatType) => void;
}

export const ChatList = ({ conversations, onSelectConversation }: ChatListProps) => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const sortedConversations = conversations.sort((a, b) => {
    const lastMessageA = a.messages?.[a.messages.length - 1]?.timestamp || "0";
    const lastMessageB = b.messages?.[b.messages.length - 1]?.timestamp || "0";
    return new Date(lastMessageB).getTime() - new Date(lastMessageA).getTime();
  });

  return (
    <div className="p-2">
      {sortedConversations.map((conv) => (
        <div
          key={conv.id}
          onClick={() => onSelectConversation(conv)}
          className={`flex items-center justify-between p-2 mb-2 rounded cursor-pointer ${currentTheme.receivedBackground} hover:${currentTheme.highlightHover} transition-colors`}
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full text-black font-bold bg-[#ccd0ff]">
            {conv.name?.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col ml-2 mr-2 w-80">
            <span className={`font-semibold text-sm ${currentTheme.hashtag}`}>{conv.name}</span>
            <span className={`text-xs ${currentTheme.textPrimary}`}>
              {conv.messages?.[conv.messages.length - 1]?.content}
            </span>
          </div>
          {conv.messages && conv.messages.length > 0 && (
            <CircleRoundedIcon className={`${currentTheme.hashtag}`} style={{ width: 5, height: 5 }} />
          )}
        </div>
      ))}
    </div>
  );
};