import { useParams } from "react-router-dom";
import { PostCard } from "@/features/feed/components/PostCard";
import { CharactersData } from "@/data/CharactersData";
import { posts } from "@/data/PostData";

export const Perfil = () => {
  // Obtém o userId da URL
  const { userId } = useParams<{ userId: string }>();

  // Busca os dados do personagem com base no userId
  const character = CharactersData.find((char) => char.id === userId);

  // Filtra os posts do personagem
  const characterPosts = posts.filter((post) => post.userId === userId);

  // Se o personagem não for encontrado, exibe uma mensagem de erro
  if (!character) {
    return (
      <div className="bg-[#f5f5f5] w-full min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-800">Personagem não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] w-full min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f0c8ff] to-[#ccd0ff] w-full py-8 flex flex-col items-center justify-center shadow-lg">
        <img
          src={character.avatar || "/default-avatar.png"} // Use um avatar padrão se não houver
          alt={`Avatar de ${character.name}`}
          className="w-36 h-36 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">{character.name}</h1>
        <p className="text-gray-600">{character.user}</p>
        <p className="text-center text-gray-700 mt-2 max-w-md px-4">
          {character.bio}
        </p>
      </div>

      {/* Posts */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Publicações</h2>
        <div className="space-y-6">
          {characterPosts.map((post) => (
            <PostCard key={post.id} post={post} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};