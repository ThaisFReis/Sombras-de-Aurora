import { useState } from "react";
import { highlightsData } from "@/data/HighlightsData";
import { HighlightModal } from "./ui/HighlightModal";
import { useTheme } from "@/context/ThemeContext"; // Importe o useTheme
import { themes } from "@/utils/themes";

export const Highlights = ({ userId }: { userId: string }) => {
  const [selectedHighlight, setSelectedHighlight] = useState<{
    id: number;
    title: string;
    posts: {
      text?: string;
      image?: string;
    }[];
  } | null>(null);

  const { theme } = useTheme(); // Acesse o tema atual
  const currentTheme = themes[theme]; // Obtenha as cores do tema atual

  // Filtra os destaques do personagem
  const characterHighlights = highlightsData.find(
    (post) => post.userId === userId
  );

  return (
    <div className="flex w-[550px] items-center justify-between p-2">
      {characterHighlights?.content.map((highlight) => (
        <div
          key={highlight.id}
          className={` rounded-lg w-[156px] h-[156px] cursor-pointer hover:shadow-lg ${currentTheme.cardHover} flex items-center ${currentTheme.cardBackground}`}// Aplica a cor de fundo do tema
          onClick={() => setSelectedHighlight(highlight)}
        >
          <div
            className="flex items-center w-full h-full rounded-lg justify-center"
            style={{ backgroundColor: currentTheme.cardBackground }} // Aplica a cor de fundo do tema
          >
            <p
              className={`font-semibold text-center text-pretty px-2 py-1 rounded w-full h-full items-center justify-center flex transition-colors hover:shadow-md ${currentTheme.highlightHover} ${currentTheme.textPrimary}`}
            >
              {highlight.title}
            </p>
          </div>
        </div>
      ))}

      {/* Modal */}
      <HighlightModal
        isOpen={!!selectedHighlight}
        onClose={() => setSelectedHighlight(null)}
        highlight={selectedHighlight || { id: 0, title: "", posts: [] }}
      />
    </div>
  );
};