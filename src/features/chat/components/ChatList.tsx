import { ChatType } from "@/types/Chat";

interface ChatListProps {
  conversations: ChatType[]; // Propriedade para receber as conversas
  onSelectConversation: (chat: ChatType) => void;
}

export const ChatList = ({
  conversations,
  onSelectConversation,
}: ChatListProps) => {
  // Ordena as conversas pela data da última mensagem
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
          className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full text-black font-bold bg-[#ccd0ff]">
            {conv.name?.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col ml-2 mr-2 w-80">
            <span className="font-semibold text-sm">{conv.name}</span>
            <span className="text-xs text-gray-600">
              {conv.messages?.[conv.messages.length - 1]?.content}
            </span>
          </div>
          {conv.messages && conv.messages.length > 0 && (
            <span className="text-white text-xs h-5 w-5 rounded-full flex items-center justify-center bg-blue-500">
              {conv.messages.length}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};