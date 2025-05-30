import { useParams } from "react-router-dom";
// import { PostCard } from "@/features/feed/components/PostCard";
import { Highlights } from "@/components/Highlights";
import { ProgressBar } from "@/components/ProgressBar";
import { characters } from "@/data/CharactersData";
import { posts } from "@/data/PostData";
import { Icon } from "@/components/ui/Icon";
import { useTheme } from "@/context/ThemeContext"; // Importe o useTheme
import { themes } from "@/utils/themes";
import { PostCard } from "../ui/PostCard";

export const Perfil = (props: { userId?: string } = {}) => {
  const { userId: paramUserId } = useParams<{ userId: string }>();
  const userId = props.userId ?? paramUserId;

  const { theme } = useTheme();
  const currentTheme = themes[theme];

  if (!userId) return null;

  const character = Object.values(characters).find((char: { id: string }) => char.id === userId);
  const characterPosts = posts.filter((post) => post.userId === userId);

  if (!character) {
    return (
      <div
        className={`w-full min-h-screen flex items-center justify-center ${currentTheme.cardBackground}`}
      >
        <p className="text-xl text-gray-400">Personagem não encontrado.</p>
      </div>
    );
  }

  const sortedPosts = characterPosts.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="w-full min-h-screen flex justify-center py-10 px-4">
      <div className="flex flex-col items-center gap-6 max-w-[650px] w-full">
        {/* Card do Perfil */}
        <div className="w-full backdrop-blur-lg bg-white/5 rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all hover:shadow-2xl border border-white/10">
          {character.avatar ? (
            <Icon
              src={character.avatar}
              className="w-[160px] h-[160px] rounded-full object-cover shadow-md"
            />
          ) : (
            <div
              className="w-[160px] h-[160px] flex items-center justify-center rounded-full border-2 border-gray-400 text-6xl font-josefin"
              style={{ backgroundColor: currentTheme.receivedBackground }}
            >
              {character.name.charAt(0).toUpperCase()}
            </div>
          )}
          <h1
            className={`font-josefin text-3xl font-bold mt-4 ${currentTheme.textPrimary}`}
          >
            {character.name}
          </h1>
          <p className={`font-josefin text-sm text-gray-400`}>
            {character.user}
          </p>
          <p
            className={`font-ubuntu text-sm text-center mt-4 ${currentTheme.textPrimary}`}
          >
            {character.bio}
          </p>
        </div>

        {/* Destaques */}
        <Highlights userId={userId} />

        {/* Posts */}
        <div className="flex flex-col gap-6 w-full">
          {sortedPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              classname="w-full max-w-[600px] mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
