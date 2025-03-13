import { useState } from "react";
import { PostType } from "@/types/Post";
import { CommentCard } from "./CommentCard";
import { getCharacterById } from "@/utils/characterUtils";
import { Card } from "@/components/ui/Card";
import { highlightHashtags } from "@/components/ui/Hashtags";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";

type PostCardProps = {
  post: PostType;
  classname?: string;
  style?: React.CSSProperties;
};

export const PostCard = ({ post, classname, style }: PostCardProps) => {
  const [likes, setLikes] = useState(post.likes || 0); // Corrigir tipagem
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const character = getCharacterById(post.userId);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const postContent = (
    <>
      {post.image && (
        <div className="w-full h-[176px]">
          <img
            src={post.image}
            alt="Imagem do post"
            className="w-full h-[176px] object-cover my-2"
          />
        </div>
      )}
      {post.content && (
        <div className="w-full h-fit py-1 mt-2">
          <p
            className={`text-[15px] leading-relaxed font-medium font-ubuntu ${currentTheme.textPrimary}`}
            dangerouslySetInnerHTML={{
              __html: highlightHashtags(post.content, currentTheme.hashtag),
            }}
          />
        </div>
      )}
    </>
  );

  const postActions = (
    <div className="flex items-center gap-6">
      <button onClick={toggleLike} className="flex items-center gap-1">
        {liked ? (
          <FavoriteRoundedIcon
            className={currentTheme.hashtag}
            style={{ width: 15, height: 15 }}
          />
        ) : (
          <FavoriteRoundedIcon
            className={currentTheme.textLight}
            style={{ width: 15, height: 15 }}
          />
        )}
        <span className="text-sm">{likes}</span>
      </button>

      <button
        onClick={() => setShowComments(!showComments)}
        className="flex items-center gap-1"
      >
        {showComments ? (
          <InsertCommentRoundedIcon
            className={currentTheme.hashtag}
            style={{ width: 15, height: 15 }}
          />
        ) : (
          <InsertCommentRoundedIcon
            className={currentTheme.textLight}
            style={{ width: 15, height: 15 }}
          />
        )}
        <span className="text-sm">{post.comments?.length ?? 0}</span>
      </button>
    </div>
  );

  return (
    <Card
      userId={post.userId}
      avatar={character?.avatar}
      name={character?.name || "Usuário Desconhecido"}
      timestamp={post.timestamp}
      content={postContent}
      actions={postActions}
      classname={`shadow-md p-6 hover:shadow-lg transition-shadow w-[600px] ${currentTheme.highlightHover} ${classname}`}
      style={{ backgroundColor: currentTheme.cardBackground }} // Corrigir nome da propriedade
    >
      {showComments && post.comments && (
        <div className="mt-4">
          {post.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </Card>
  );
};