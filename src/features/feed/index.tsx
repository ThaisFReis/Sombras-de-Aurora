import { PostType } from "@/types/Post";
import { CharactersData } from "@/data/CharactersData";
import { posts } from "@/data/PostData";

import { PostCard } from "./components/PostCard";

export const Feed = () => {
  return (
    <div className="min-h-screen flex justify-center items-start py-8 px-4">
      {/* Container centralizado para o feed */}
      <div className="w-full max-w-2xl space-y-6">
        {posts.map((post) => {
          // Busca o personagem correspondente ao userId do post
          const character = CharactersData.find((char) => char.id === post.userId);

          // Se o personagem não for encontrado, retorna null (ou exibe uma mensagem de erro)
          if (!character) return null;

          return (
            <div key={post.id}>
              <PostCard post={post} character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
};