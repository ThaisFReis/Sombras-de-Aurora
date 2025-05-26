import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";
import { getCharacterById } from "@/utils/characterUtils";
import { Icon } from "@/components/ui/Icon";
import { Link } from "react-router-dom";
import { CommentType } from "@/types/Post";

type Comment = CommentType;

export const CommentCard = ({ comment }: { comment: Comment }) => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const character = getCharacterById(comment.userId);

  return (
    <div className="w-full flex gap-3 p-3 rounded-md border border-zinc-800 bg-zinc-900/70 backdrop-blur-md transition-all hover:shadow-md">
      {/* Avatar */}
      <div className="min-w-[40px]">
        <Link to={`/perfil/${comment.userId}`}>
          {character?.avatar ? (
            <Icon
              src={character.avatar}
              className="w-[38px] h-[38px] rounded-full object-cover border border-zinc-700"
            />
          ) : (
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-zinc-700 text-white font-josefin font-semibold">
              {character?.name?.charAt(0).toUpperCase() || "?"}
            </div>
          )}
        </Link>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <Link to={`/perfil/${comment.userId}`}>
            <span className="text-sm font-josefin font-semibold text-white hover:underline">
              {character?.name || "Usuário"}
            </span>
          </Link>
          <span className="text-xs text-zinc-500 font-ubuntu">
            {new Date(comment.timestamp).toLocaleString("pt-BR", {
              day: "2-digit",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <p className="mt-1 text-sm text-zinc-200 font-ubuntu whitespace-pre-line leading-relaxed">
          {comment.content}
        </p>
      </div>
    </div>
  );
};
