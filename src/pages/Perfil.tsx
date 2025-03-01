import { useParams } from "react-router-dom";
import { PostCard } from "@/features/feed/components/PostCard";
import { Highlights } from "@/components/Highlights";
import { ProgressBar } from "@/components/ProgressBar";
import { CharactersData } from "@/data/CharactersData";
import { posts } from "@/data/PostData";
import { Icon } from "@/components/ui/Icon";
import { useTheme } from "@/context/ThemeContext"; // Importe o useTheme
import { themes } from "@/utils/themes";

export const Perfil = () => {
  const { userId } = useParams<{ userId: string }>();
  const { theme } = useTheme(); // Acesse o tema atual
  const currentTheme = themes[theme]; // Obtenha as cores do tema atual

  if (!userId) return null;

  const character = CharactersData.find((char) => char.id === userId);
  const characterPosts = posts.filter((post) => post.userId === userId);

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
    <div className="w-full min-h-screen flex justify-between py-6">
      {/* Card do Perfil */}
      <div className="flex flex-col space-y-6 items-center">
        <div
          className="rounded-lg flex flex-col shadow-md w-[550px] h-fit p-4 items-center justify-center bg-white"
        >
          {character.avatar ? (
            <Icon
              src={character.avatar}
              className="w-[170px] h-[170px] rounded-full object-cover border-[#ccd0ff] border-2"
            />
          ) : (
            <div
              className="w-[130px] h-[130px] flex items-center justify-center rounded-full text-gray font-semibold"
              style={{ backgroundColor: currentTheme.messageReceived }}
            >
              {character.name.charAt(0).toUpperCase()}
            </div>
          )}
          <p className="font-bold text-2xl mt-2">{character.name}</p>
          <p style={{ color: currentTheme.hashtag }}>{character.user}</p>
          <p className="leading-relaxed text-center text-sm p-4">
            {character.bio}
          </p>
        </div>

        {/* Linha Divisória */}
        <hr className="w-[550px] text-[#e9ebf958]" />

        {/* Destaques */}
        <Highlights userId={userId} />

        {/* Linha Divisória */}
        <hr className="w-[550px] text-[#e9ebf958]" />

        {/* Posts */}
        {sortedPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            classname={"!w-[550px]"}
            style={{ backgroundColor: currentTheme.cardBackground }}
          />
        ))}
      </div>
      {/* ProgressBar */}
      <ProgressBar />
    </div>
  );
};