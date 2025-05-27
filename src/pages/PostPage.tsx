import { useParams } from "react-router-dom";
import { posts } from "@/data/PostData";
import { PostCard } from "@/components/ui/PostCard";

export const PostPage = () => {
  const { postId } = useParams();

  // get post by ID
  const post = posts.find((p) => p.id === postId);

  if (!post) return <div className="text-white p-4">Post não encontrado.</div>;

  return (
    <div className="flex justify-center mt-8 px-4">
      <PostCard post={post} />
    </div>
  );
};
