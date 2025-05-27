import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Perfil } from "./Perfil";

type PerfilModalProps = {
  userId: string;
  onClose: () => void;
};

export const PerfilModal = ({ userId, onClose }: PerfilModalProps) => (
  <AnimatePresence>
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center w-screen h-screen overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="w-full h-full flex items-center justify-center"
      >
        <motion.div
          className="relative max-w-4xl w-full mx-4 bg-zinc-900 rounded-2xl shadow-lg overflow-hidden"
          initial={{ y: 50, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 50, scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100"
            onClick={onClose}
          >
            <X size={20} />
          </button>
          <Perfil userId={userId} />
        </motion.div>
      </motion.div>
    </div>
  </AnimatePresence>
);
