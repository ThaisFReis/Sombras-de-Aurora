import { Link } from "react-router-dom";
import { Icon } from "@/components/ui/Icon";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";
import { PostType } from "@/types/Post";
import { CommentCard } from "./CommentCard";
import { getCharacterById } from "@/utils/characterUtils";
import { highlightHashtags } from "@/components/ui/Hashtags";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";

type PostCardProps = {
  post: PostType;
  classname?: string;
  style?: React.CSSProperties;
};

export const PostCard = ({ post, classname, style }: PostCardProps) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const character = getCharacterById(post.userId);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01, boxShadow: "0px 0px 20px rgba(255,255,255,0.04)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`w-full max-w-[600px] rounded-xl p-5 border border-zinc-800 backdrop-blur-md transition-all bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 ${classname}`}
      style={style}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-3">
        <Link to={`/perfil/${post.userId}`}>
          {character?.avatar ? (
            <Icon
              src={character.avatar}
              className="w-[42px] h-[42px] rounded-full object-cover border border-zinc-700"
            />
          ) : (
            <div className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-zinc-700 text-white font-josefin font-bold">
              {character?.name?.charAt(0).toUpperCase() || "?"}
            </div>
          )}
        </Link>

        <div className="flex flex-col">
          <Link to={`/perfil/${post.userId}`}>
            <span className="text-sm font-josefin font-semibold text-white">
              {character?.name || "Usuário Desconhecido"}
            </span>
          </Link>
          <span className="text-xs font-ubuntu text-zinc-400">
            {new Date(post.timestamp).toLocaleString("pt-BR", {
              day: "2-digit",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>

      {/* Imagem */}
      {post.image && (
        <div className="rounded-md overflow-hidden mb-3 border border-zinc-700">
          <img
            src={post.image}
            alt="Imagem do post"
            className="w-full h-[180px] object-cover"
          />
        </div>
      )}

      {/* Conteúdo */}
      {post.content && (
        <p
          className="text-[15px] leading-relaxed font-ubuntu text-zinc-100 whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: highlightHashtags(post.content, "text-indigo-400"),
          }}
        />
      )}

      {/* Ações */}
      <div className="flex items-center gap-6 mt-4">
        <button
          onClick={toggleLike}
          className="flex items-center gap-1 text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
        >
          <FavoriteRoundedIcon
            style={{ width: 16, height: 16 }}
            className={liked ? "text-indigo-400" : "text-zinc-500"}
          />
          {likes}
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1 text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
        >
          <InsertCommentRoundedIcon
            style={{ width: 16, height: 16 }}
            className={showComments ? "text-indigo-400" : "text-zinc-500"}
          />
          {post.comments?.length ?? 0}
        </button>
      </div>

      {/* Comentários */}
      {showComments && post.comments && (
        <div className="mt-4 flex flex-col gap-3">
          {post.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </motion.div>
  );
};