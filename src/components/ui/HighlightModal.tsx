import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Icon } from "@/components/ui/Icon";
import { highlightHashtags } from "@/components/ui/Hashtags";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion, AnimatePresence } from "framer-motion";

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
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="relative w-[600px] h-[540px] p-6 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-lg bg-white/5 flex flex-col"
          >
            {/* Botão de Fechar */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-300 hover:text-white transition-colors"
            >
              <CloseRoundedIcon fontSize="medium" />
            </button>

            {/* Título */}
            <h2
              className={`text-2xl font-josefin font-bold mb-4 text-center ${currentTheme.textPrimary}`}
            >
              {highlight.title}
            </h2>

            {/* Carrossel */}
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              emulateTouch
              className="rounded-lg"
            >
              {highlight.posts.map((post, index) => (
                <div key={index} className="text-center px-2">
                  {post.image && (
                    <Icon
                      src={post.image}
                      alt={`Post ${index + 1}`}
                      className="w-full h-[360px] object-cover rounded-xl shadow-md"
                    />
                  )}
                  {post.text && (
                    <p
                      className={`text-sm font-medium leading-relaxed mt-3 ${currentTheme.textPrimary}`}
                      dangerouslySetInnerHTML={{
                        __html: highlightHashtags(
                          post.text,
                          currentTheme.hashtag
                        ),
                      }}
                    />
                  )}
                </div>
              ))}
            </Carousel>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
