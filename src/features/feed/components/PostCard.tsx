import { useState } from "react";
import { PostType } from "@/types/Post";
import { CommentCard } from "./CommentCard";
import { getCharacterById } from "@/utils/characterUtils";
import { Card } from "@/components/ui/Card"
import { highlightHashtags } from "@/components/ui/Hashtags";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";

export const PostCard = ({ post, classname }: { post: PostType, classname?: string }) => {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  // Busca o personagem correspondente ao userId do post
  const character = getCharacterById(post.userId);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev = 0) => (liked ? prev - 1 : prev + 1));
  };

  // Conteúdo do post (imagem e texto)
  const postContent = (
    <>
      {post.image && (
        <div className="w-full h-[176px]">
          <img
            src={post.image}
            alt="Imagem do post"
            className="w-full h-[176px] object-cover"
          />
        </div>
      )}
      {post.content && (
        <div className="w-full h-fit py-1">
          <p
            className="text-sm text-gray font-medium leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: highlightHashtags(post.content),
            }}
          />
        </div>
      )}
    </>
  );

  // Ações do post (curtir e comentar)
  const postActions = (
    <div className="flex items-center gap-6">
      <button
        onClick={toggleLike}
        className="flex items-center gap-1"
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
        <span className="text-sm">{likes}</span>
      </button>

      <button
        onClick={() => setShowComments(!showComments)}
        className="flex items-center gap-1"
      >
        {showComments ? (
          <InsertCommentRoundedIcon
            style={{ width: 15, height: 15, color: "#969EF5" }}
          />
        ) : (
          <InsertCommentRoundedIcon
            style={{ width: 15, height: 15, color: "#DDDEEB" }}
          />
        )}
        <span className="text-sm">{post.comments?.length ?? 0}</span>
      </button>
    </div>
  );

  return (
    <Card
      userId={post.userId}
      avatar={character?.avatar}
      name={character?.name || "Usuário Desconhecido"}
      timestamp={post.timestamp}
      content={postContent}
      actions={postActions}
      classname={`shadow-md p-6 hover:shadow-lg transition-shadow w-[600px] hover:shadow-[#969ef592] ${classname} `}
    >
      {/* Lista de Comentários */}
      {showComments && post.comments && (
        <div className="mt-4">
          {post.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </Card>
  );
};