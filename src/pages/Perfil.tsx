import { useParams } from "react-router-dom";
import { PostCard } from "@/features/feed/components/PostCard";
import { Highlights } from "@/components/ui/Highlights";
import { CharactersData } from "@/data/CharactersData";
import { posts } from "@/data/PostData";
import { Icon } from "@/components/ui/Icon";

export const Perfil = () => {
  // Obtém o userId da URL
  const { userId } = useParams<{ userId: string }>();

  if (!userId) return null;

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

  const sortedPosts = characterPosts.sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return (
    <div className="flex flex-col items-center w-full min-h-screen space-y-6 py-6">
      <div className="bg-white rounded-lg flex flex-col shadow-md w-[550px] h-fit p-4 items-center justify-center ml-14">
        {character.avatar ? (
          <Icon
            src={character.avatar}
            className="w-[170px] h-[170px] rounded-full object-cover border-[#ccd0ff] border-2"
          />
        ) : (
          <div className="w-[130px] h-[130px] flex items-center justify-center bg-[#ccd0ff] rounded-full text-gray font-semibold">
            {character.name.charAt(0).toUpperCase()}
          </div>
        )}
        <p className="font-bold text-2xl mt-2">{character.name}</p>
        <p className="text-[#ccd0ff]">{character.user}</p>
        <p className="leading-relaxed text-center text-sm p-4">
          {character.bio}
        </p>
      </div>
      <hr className="w-[550px] ml-14 text-[#e9ebf958]" />
      <Highlights userId={userId} />
      <hr className="w-[550px] ml-14 text-[#e9ebf958]" />
      {sortedPosts.map((post) => {
        return (
          <PostCard key={post.id} post={post} classname={"!w-[550px] ml-14"} />
        );
      })}
    </div>
  );
};
