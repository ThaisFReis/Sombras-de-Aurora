import { useState } from "react";
import { HeartIcon as SolidHeartIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { PostType } from "@/types/Post";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CommentCard } from "./CommentCard";

export const PostCard = ({ post }: { post: PostType }) => {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev = 0) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      {/* Cabeçalho do post */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 font-semibold">
          {post.user.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">{post.user}</h1>
          <span className="text-xs text-gray-400">
            {formatDistanceToNow(new Date(post.hour), { addSuffix: true, locale: ptBR })}
          </span>
        </div>
      </div>

      {/* Conteúdo do post */}
      <p className="text-sm text-gray-700 mb-3 leading-relaxed">{post.content}</p>

      {/* Barra de ações */}
      <div className="flex items-center gap-6">
        <button onClick={toggleLike} className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
          {liked ? <SolidHeartIcon className="w-5 h-5 text-red-500" /> : <OutlineHeartIcon className="w-5 h-5" />}
          <span className="text-sm">{likes}</span>
        </button>

        <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
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
