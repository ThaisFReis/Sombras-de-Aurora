import { useState } from "react";

type Conversation = {
  id: number;
  name: string;
  lastMessage: string;
  newMessages: number;
};

const dummyConversations: Conversation[] = [
  { id: 1, name: "John Doe", lastMessage: "Olá, tudo bem?", newMessages: 2 },
  { id: 2, name: "Jane Smith", lastMessage: "Me ligue quando puder.", newMessages: 0 },
  { id: 3, name: "Bob Johnson", lastMessage: "Reunião hoje às 15h.", newMessages: 1 },
];

export const ChatHistory = ({
  onSelectConversation,
}: {
  onSelectConversation: (id: number) => void;
}) => {
  const [conversations] = useState<Conversation[]>(dummyConversations);

  return (
    <div className="p-2">
      {conversations.map((conv) => (
        <div
          key={conv.id}
          onClick={() => onSelectConversation(conv.id)}
          className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{conv.name}</span>
            <span className="text-xs text-gray-600">{conv.lastMessage}</span>
          </div>
          {conv.newMessages > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {conv.newMessages}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
