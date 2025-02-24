import { useState } from "react";
import { HeartIcon as SolidHeartIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { CommentType } from "@/types/Post";

export const CommentCard = ({ comment }: { comment: CommentType }) => {
  const [likes, setLikes] = useState(comment.likes);
  const [liked, setLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev = 0) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-4 ml-6">
      {/* Cabeçalho do comentário */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 font-semibold">
          {comment.user.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold">{comment.user}</h2>
          <span className="text-xs text-gray-400">{comment.hour}</span>
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

        {(comment.answer?.length ?? 0) > 0 && (
          <button onClick={() => setShowReplies(!showReplies)} className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
            {showReplies ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
            <span className="text-xs">{comment.answer?.length}</span>
          </button>
        )}
      </div>

      {/* Respostas */}
      {showReplies && comment.answer?.map((ans) => (
        <div key={ans.id} className="bg-gray-50 rounded-lg p-3 mt-3 ml-6 shadow-inner">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 font-semibold">
              {ans.user.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <h3 className="text-xs font-semibold">{ans.user}</h3>
              <span className="text-[10px] text-gray-400">{ans.hour}</span>
            </div>
          </div>
          <p className="text-xs text-gray-600">{ans.content}</p>

          {/* Ações da resposta */}
          <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors text-xs mt-1">
            <HeartIcon className="w-4 h-4" />
            <span className="text-xs">{ans.likes}</span>
          </button>
        </div>
      ))}
    </div>
  );
};
