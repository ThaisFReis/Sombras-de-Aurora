import { useState } from "react";
import { CommentType } from "@/types/Post";
import { getCharacterById } from "@/utils/characterUtils";
import { Card } from "@/components/ui/Card";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useTheme } from "@/context/ThemeContext"; // Importe o useTheme
import { themes } from "@/utils/themes";

export const CommentCard = ({ comment }: { comment: CommentType }) => {
  const [likes, setLikes] = useState(comment.likes);
  const [liked, setLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const { theme } = useTheme(); // Acesse o tema atual
  const currentTheme = themes[theme]; // Obtenha as cores do tema atual

  // Busca o personagem correspondente ao userId do comentário
  const character = getCharacterById(comment.userId);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev = 0) => (liked ? prev - 1 : prev + 1));
  };

  // Ações do comentário (curtir e mostrar respostas)
  const commentActions = (
    <div className="flex items-center gap-4 mt-2">
      <button
        onClick={toggleLike}
        className="flex items-center gap-1 transition-colors"
      >
        {liked ? (
          <FavoriteRoundedIcon
            className={currentTheme.hashtag} // Cor do tema para ícone curtido
            style={{ width: 15, height: 15 }}
          />
        ) : (
          <FavoriteRoundedIcon
            className={currentTheme.textLight} // Cor do tema para ícone não curtido
            style={{ width: 15, height: 15 }}
          />
        )}
        <span className="text-xs">{likes}</span>
      </button>

      {(comment.replies?.length ?? 0) > 0 && (
        <button
          onClick={() => setShowReplies(!showReplies)}
          className="flex items-center gap-1 transition-colors"
        >
          {showReplies ? (
            <KeyboardArrowDownRoundedIcon
              className={currentTheme.hashtag} // Cor do tema para ícone ativo
              style={{ width: 15, height: 15 }}
            />
          ) : (
            <KeyboardArrowDownRoundedIcon
              className={currentTheme.textLight} // Cor do tema para ícone inativo
              style={{ width: 15, height: 15 }}
            />
          )}
          <span className="text-xs">{comment.replies?.length}</span>
        </button>
      )}
    </div>
  );

  return (
    <Card
      userId={comment.userId}
      avatar={character?.avatar}
      name={character?.name || "Usuário Desconhecido"}
      timestamp={comment.timestamp}
      content={<p className={`text-sm leading-relaxed ${currentTheme.textDefault}`}>{comment.content}</p>}
      actions={commentActions}
      classname="ml-[61px]"
      style={{ backgroundColor: currentTheme.cardBackground }} // Aplica a cor de fundo do tema
    >
      {/* Respostas */}
      {showReplies &&
        comment.replies?.map((reply) => {
          const replyCharacter = getCharacterById(reply.userId);
          return (
            <Card
              key={reply.id}
              userId={reply.userId}
              avatar={replyCharacter?.avatar}
              name={replyCharacter?.name || "Usuário Desconhecido"}
              timestamp={reply.timestamp}
              content={
                <p className={`text-sm leading-relaxed font-medium font-ubuntu ${currentTheme.textDefault}`}>
                  {reply.content}
                </p>
              }
              classname="ml-[61px]"
              style={{ backgroundColor: currentTheme.cardBackground }} // Aplica a cor de fundo do tema
            />
          );
        })}
    </Card>
  );
};