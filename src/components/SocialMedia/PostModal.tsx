import { motion, AnimatePresence } from "framer-motion";
import { PostCard } from "@/components/ui/PostCard";
import { PostType } from "@/types/Post";
import { X } from "lucide-react";

type PostModalProps = {
  post: PostType;
  onClose: () => void;
};

export const PostModal = ({ post, onClose }: PostModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-2xl max-h-[95vh] mx-4 bg-zinc-900 rounded-2xl shadow-xl overflow-hidden p-6"
          initial={{ y: 50, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 50, scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-100 z-10"
            onClick={onClose}
          >
            <X size={20} className="transition-colors duration-200 font-extrabold" />
          </button>

          <div className="h-[85vh] overflow-y-auto p-4 pr-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
            <PostCard post={post} expandido />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
