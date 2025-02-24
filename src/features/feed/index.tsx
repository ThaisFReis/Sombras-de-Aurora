import { PostType } from "@/types/Post";
import posts from "@/features/story/data/posts_history.json";

import { PostCard } from "./components/PostCard";
import { CommentCard } from "./components/CommentCard";

export const Feed = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-500 flex justify-center items-start py-8 px-4">
      {/* Container centralizado para o feed */}
      <div className="w-full max-w-2xl space-y-6">
        {posts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
            
            {/* Verifica se há comentários antes de renderizar */}
            {post.comments?.length > 0 && (
              <div className="mt-4 pl-6 border-l border-gray-300">
                {post.comments.map((comment) => (
                  <CommentCard key={comment.id} comment={comment} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};