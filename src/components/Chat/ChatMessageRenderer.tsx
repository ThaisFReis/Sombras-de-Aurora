import { useState } from "react";
import { motion } from "framer-motion";
import { ChatMessage } from "@/types/types";
import { HeartOff, Unlock, ThumbsUp } from "lucide-react";

type Props = {
  message: ChatMessage;
  onChoiceSelect?: (effect: string, text: string) => void;
};

const getEffectIcon = (effect: string) => {
  if (effect.includes("relationship--")) return <HeartOff size={16} />;
  if (effect.includes("unlock_minigame")) return <Unlock size={16} />;
  if (effect.includes("trust++")) return <ThumbsUp size={16} />;
  return null;
};

export const ChatMessageRenderer = ({ message, onChoiceSelect }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (message.type === "text") {
    const isPlayer = message.sender === "player";
    return (
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl break-words ${
          isPlayer
            ? "self-end bg-indigo-600 text-white rounded-br-none"
            : "self-start bg-zinc-700 text-zinc-200 rounded-bl-none"
        }`}
      >
        {message.content}
      </div>
    );
  }

  if (message.type === "choice" && message.choices) {
    return (
      <div className="flex flex-col gap-2 self-end bg-zinc-700/60 p-3 rounded-xl max-w-sm">
        {message.choices.map((choice, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => {
              if (selectedIndex === null) {
                setSelectedIndex(index);
                onChoiceSelect?.(choice.effect, choice.text);
              }
            }}
            title={`Efeito: ${choice.effect}`}
            disabled={selectedIndex !== null}
            className={`flex items-center gap-2 px-4 py-2 text-left text-sm rounded-lg transition-all ${
              selectedIndex === index
                ? "bg-indigo-600 text-white"
                : "bg-zinc-800 hover:bg-indigo-600 hover:text-white"
            }`}
          >
            {getEffectIcon(choice.effect)}
            {choice.text}
          </motion.button>
        ))}
      </div>
    );
  }

  return null;
};
