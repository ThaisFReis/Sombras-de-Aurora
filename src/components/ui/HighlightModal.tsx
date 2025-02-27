import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos do carousel
import { Icon } from "@/components/ui/Icon";
import { highlightHashtags } from "@/components/ui/Hashtags";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg w-[600px] h-[540px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{highlight.title}</h2>
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
                  className="text-sm text-gray font-medium leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: highlightHashtags(post.text),
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
