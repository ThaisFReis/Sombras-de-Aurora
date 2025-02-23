import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { PostType } from "@/types/Post";

export const PostCard = ({ post }: { post: PostType }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        {/* Cabeçalho do post: foto + nome + tempo */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={post.userImage}
            alt={post.alt}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">{post.username}</h1>
            <span className="text-xs text-gray-400">{post.time}</span>
          </div>
        </div>
  
        {/* Imagem do post (caso exista) */}
        {post.postImage && (
          <img
            src={post.postImage}
            alt="post"
            className="w-full h-72 object-cover rounded-lg mb-3"
          />
        )}
  
        {/* Legenda do post (caso exista) */}
        {post.postCaption && (
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">
            {post.postCaption}
          </p>
        )}
  
        {/* Barra de ações (likes, comentários) */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
            <HeartIcon className="w-5 h-5" />
            <span className="text-sm">{post.likes ?? 0}</span>
          </button>
          <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
            <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
            <span className="text-sm">{post.comments?.length ?? 0}</span>
          </button>
        </div>
      </div>
    );
  };