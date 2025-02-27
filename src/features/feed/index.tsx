import { CharactersData } from "@/data/CharactersData";
import { posts } from "@/data/PostData";
import { PostCard } from "./components/PostCard";

export const Feed = () => {
  // Ordena os posts do mais novo para o mais antigo
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return (
      <div className="space-y-6 py-6 absolute left-44">
        {sortedPosts.map((post) => {
          // Busca o personagem correspondente ao userId do post
          const character = CharactersData.find((char) => char.id === post.userId);

          // Se o personagem não for encontrado, retorna null (ou exibe uma mensagem de erro)
          if (!character) return null;

          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
      </div>
  );
};