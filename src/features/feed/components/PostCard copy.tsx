import { useState } from "react";
import {
  HeartIcon as SolidHeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { PostType } from "@/types/Post";
import { CommentCard } from "./CommentCard";
import { getCharacterById } from "@/utils/characterUtils"; // Importe a função utilitária
import { Link } from "react-router-dom";

export const PostCard = ({ post }: { post: PostType }) => {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  // Busca o personagem correspondente ao userId do post
  const character = getCharacterById(post.userId);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev = 0) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-background rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Cabeçalho do post */}
      <div className="flex items-center space-x-4 mb-4">
        <Link to={`/perfil/${post.userId}`}>
          <div className="w-12 h-12 flex items-center justify-center bg-[#ccd0ff] rounded-full text-gray-700 font-semibold">
            {character?.name.charAt(0).toUpperCase() || "?"}
          </div>
        </Link>
        <div>
          <Link to={`/perfil/${post.userId}`}>
            <p className="text-base font-semibold">
              {character?.name || "Usuário Desconhecido"}
            </p>
          </Link>
          <p className="text-sm text-gray-500">
            {new Date(post.timestamp).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Imagem do post, se houver */}
      {post.image && (
        <div className="mb-3">
          <img
            src={post.image}
            alt="Imagem do post"
            className="w-[350px] h-[350px] object-cover rounded-lg mx-auto"
          />
        </div>
      )}

      {/* Conteúdo do post */}
      <p className="text-sm text-gray-700 mb-3 leading-relaxed">
        {post.content}
      </p>

      {/* Barra de ações */}
      <div className="flex items-center gap-6">
        <button
          onClick={toggleLike}
          className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors"
        >
          {liked ? (
            <SolidHeartIcon className="w-5 h-5 text-red-500" />
          ) : (
            <OutlineHeartIcon className="w-5 h-5" />
          )}
          <span className="text-sm">{likes}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
          <span className="text-sm">{post.comments?.length ?? 0}</span>
        </button>
      </div>

      {/* Lista de Comentários */}
      {showComments && post.comments && (
        <div className="mt-4">
          {post.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
