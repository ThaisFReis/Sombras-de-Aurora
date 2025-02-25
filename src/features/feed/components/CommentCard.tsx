import { useState } from "react";
import { HeartIcon as SolidHeartIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { CommentType } from "@/types/Post";
import { getCharacterById } from "@/utils/characterUtils";

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

  return (
    <div className="bg-white border-b-2 border-b-[#dfdfdf] rounded-lg p-4 mb-4 ml-6">
      {/* Cabeçalho do comentário */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 font-semibold">
          {character?.name.charAt(0).toUpperCase() || "?"}
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold">{character?.name || "Usuário Desconhecido"}</h2>
          <span className="text-xs text-gray-400">
            {new Date(comment.timestamp).toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>

      {/* Conteúdo do comentário */}
      <p className="text-sm text-gray-700">{comment.content}</p>

      {/* Ações */}
      <div className="flex items-center gap-4 mt-2">
        <button onClick={toggleLike} className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
          {liked ? <SolidHeartIcon className="w-4 h-4 text-red-500" /> : <OutlineHeartIcon className="w-4 h-4" />}
          <span className="text-xs">{likes}</span>
        </button>

        {(comment.replies?.length ?? 0) > 0 && (
          <button onClick={() => setShowReplies(!showReplies)} className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
            {showReplies ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
            <span className="text-xs">{comment.replies?.length}</span>
          </button>
        )}
      </div>

      {/* Respostas */}
      {showReplies && comment.replies?.map((reply) => {
        const replyCharacter = getCharacterById(reply.userId); // Busca o personagem da resposta
        return (
          <div key={reply.id} className="rounded-lg p-3 mt-3 ml-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 font-semibold">
                {replyCharacter?.name.charAt(0).toUpperCase() || "?"}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-semibold">{replyCharacter?.name || "Usuário Desconhecido"}</h3>
                <span className="text-[10px] text-gray-400">
                  {new Date(reply.timestamp).toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-600">{reply.content}</p>

            {/* Ações da resposta */}
            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors text-xs mt-1">
              <HeartIcon className="w-4 h-4" />
              <span className="text-xs">{reply.likes}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};