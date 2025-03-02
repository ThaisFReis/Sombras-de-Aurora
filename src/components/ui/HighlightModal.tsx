import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos do carousel
import { Icon } from "@/components/ui/Icon";
import { highlightHashtags } from "@/components/ui/Hashtags";
import { useTheme } from "@/context/ThemeContext"; // Importe o useTheme
import { themes } from "@/utils/themes";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface HighlightModalProps {
  isOpen: boolean;
  onClose: () => void;
  highlight: {
    id: number;
    title: string;
    posts: {
      text?: string;
      image?: string;
    }[];
  };
}

export const HighlightModal = ({
  isOpen,
  onClose,
  highlight,
}: HighlightModalProps) => {
  const { theme } = useTheme(); // Acesse o tema atual
  const currentTheme = themes[theme]; // Obtenha as cores do tema atual

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div
        className={`rounded-lg w-[600px] h-[540px] p-6 relative ${currentTheme.cardBackground}`}
      >
        <CloseRoundedIcon className="absolute top-2 right-2 text-gray-700 hover:text-gray" />
        <h2
          className="text-xl font-bold mb-4"
          style={{ color: currentTheme.textPrimary }}
        >
          {highlight.title}
        </h2>
        <Carousel showThumbs={false} showStatus={false}>
          {highlight.posts.map((post, index) => (
            <div key={index} className="text-center">
              {post.image && (
                <Icon
                  src={post.image}
                  alt={`Post ${index + 1}`}
                  className="w-full h-96 object-cover !rounded-lg"
                />
              )}
              {post.text && (
                <p
                  className="text-sm font-medium leading-relaxed"
                  style={{ color: currentTheme.textPrimary }}
                  dangerouslySetInnerHTML={{
                    __html: highlightHashtags(post.text, currentTheme.hashtag),
                  }}
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
