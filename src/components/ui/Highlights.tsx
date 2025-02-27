import { useState } from "react";
import { highlightsData } from "@/data/HighlightsData";
import { HighlightModal } from "./HighlightModal";

export const Highlights = ({ userId }: { userId: string }) => {
  const [selectedHighlight, setSelectedHighlight] = useState<{
    id: number;
    title: string;
    posts: {
      text?: string;
      image?: string;
    }[];
  } | null>(null);

  // Filtra os destaques do personagem
  const characterHighlights = highlightsData.find(
    (post) => post.userId === userId
  );

  return (
    <div className="flex w-[550px] ml-14 items-center justify-between p-2 rounded-lg">
      {characterHighlights?.content.map((highlight) => (
        <div
          className="bg-white rounded-lg w-[156px] h-[156px] cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#969ef592] flex items-center"
          key={highlight.id}
          onClick={() => setSelectedHighlight(highlight)}
        >
          <div
            className="flex items-center w-full h-full rounded-lg justify-center bg-white"
          >
            <p className="font-semibold text-center text-pretty px-2 py-1 rounded w-full h-full items-center justify-center flex hover:text-[#969EF5] transition-colors hover:border-[#c8cdfc] border border-white">
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