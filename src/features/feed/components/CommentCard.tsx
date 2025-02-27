import { useState } from "react";
import { CommentType } from "@/types/Post";
import { getCharacterById } from "@/utils/characterUtils";
import { Card } from "@/components/ui/Card";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

export const CommentCard = ({ comment }: { comment: CommentType }) => {
  const [likes, setLikes] = useState(comment.likes);
  const [liked, setLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

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
        className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors"
      >
        {liked ? (
          <FavoriteRoundedIcon
            style={{ width: 15, height: 15, color: "#969EF5" }}
          />
        ) : (
          <FavoriteRoundedIcon
            style={{ width: 15, height: 15, color: "#DDDEEB" }}
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
              style={{ width: 15, height: 15, color: "#969EF5" }}
            />
          ) : (
            <KeyboardArrowDownRoundedIcon
              style={{ width: 15, height: 15, color: "#DDDEEB" }}
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
      content={<p className="text-sm text-gray leading-relaxed">{comment.content}</p>}
      actions={commentActions}
      classname="ml-[61px]"
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
                <p className="text-sm text-gray !shadow-none !border-none leading-relaxed">
                  {reply.content}
                </p>
              }
              classname="ml-[61px]"
            />
          );
        })}
    </Card>
  );
};
