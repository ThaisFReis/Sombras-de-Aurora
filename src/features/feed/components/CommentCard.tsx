import { CommentType} from "@/types/Post";

export const CommentCard = ({ comment }: { comment: CommentType }) => {
    if (!comment) return null;
  
    return (
      <div className="bg-white shadow-sm rounded-lg p-4 mb-4 ml-6">
        {/* Informações do usuário que comentou */}
        <div className="flex items-center gap-3 mb-2">
          <img
            src={comment.userImage}
            alt={comment.alt}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold">{comment.username}</h2>
            <span className="text-xs text-gray-400">{comment.time}</span>
          </div>
        </div>
  
        {/* Conteúdo do comentário */}
        <p className="text-sm text-gray-700">{comment.comment}</p>
  
        {/* Respostas (answers) */}
        {comment.answer?.map((ans) => (
          <div
            key={ans.id}
            className="bg-gray-50 rounded-lg p-3 mt-3 ml-6 shadow-inner"
          >
            <div className="flex items-center gap-2 mb-2">
              <img
                src={ans.userImage}
                alt={ans.alt}
                className="w-6 h-6 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-xs font-semibold">{ans.username}</h3>
                <span className="text-[10px] text-gray-400">{ans.time}</span>
              </div>
            </div>
            <p className="text-xs text-gray-600">{ans.comment}</p>
          </div>
        ))}
      </div>
    );
  };