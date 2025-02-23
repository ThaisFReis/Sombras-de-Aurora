import { PostType } from "@/types/Post";

import { PostCard } from "./components/PostCard";
import { CommentCard } from "./components/CommentCard";

const posts: PostType[] = [
  {
    id: 1,
    username: "John Doe",
    userImage:
      "https://i.pinimg.com/736x/44/a6/71/44a67140daac9f67b93315c07b8e2ae0.jpg",
    alt: "user",
    postImage:
      "https://th.bing.com/th/id/R.6149d8b9b80d8db1801a87bbd152865e?rik=j5FzJKcg7QGrHA&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2017%2f01%2frandom-pictures-109.jpg&ehk=HfmMsSc0H%2f3ldEQNZhnaDTN2LVFZyRuKDHzGd8JXHpw%3d&risl=&pid=ImgRaw&r=0",
    postCaption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non cursus massa. Phasellus faucibus enim nec ex congue, et fringilla enim sollicitudin. Vestibulum porttitor vehicula risus, id tempus erat cursus vitae. Etiam nibh sem, dictum at dictum eget, luctus nec elit. Duis nec orci sed lorem bibendum ultricies. Nulla eu rutrum turpis. Donec vestibulum leo a sapien pulvinar laoreet sit amet non ex. Duis finibus faucibus dolor, id placerat magna auctor a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquet mauris a purus lacinia efficitur. Nam posuere lectus tempor erat posuere, ut mattis metus sodales. Nulla dictum odio quis nibh congue, eget volutpat metus ullamcorper. Nulla ipsum risus, lacinia id maximus at, tempus in mauris. Pellentesque eleifend ligula a lorem porta gravida. Vestibulum posuere nec lorem ac accumsan. Integer dolor ex, sollicitudin laoreet lorem sit amet, feugiat finibus augue.",
    likes: 100,
    comments: [
      {
        id: 1,
        username: "Jane Doe",
        userImage:
          "https://i.pinimg.com/736x/44/a6/71/44a67140daac9f67b93315c07b8e2ae0.jpg",
        alt: "user",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor lorem. Vestibulum leo elit, vulputate id sollicitudin ultricies, pulvinar sit amet ante. Vivamus non lacinia ante. Vestibulum sapien enim.",
        time: "2 hours ago",
        answer: [
          {
            id: 1,
            username: "John Doe",
            userImage:
              "https://i.pinimg.com/736x/44/a6/71/44a67140daac9f67b93315c07b8e2ae0.jpg",
            alt: "user",
            comment: "Nice!",
            time: "1 hour ago",
          },
        ],
      },
    ],
    time: "2 hours ago",
  },
];

export const Feed = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-500 flex justify-center items-start py-8 px-4">
        {/* Container centralizado para o feed */}
        <div className="w-full max-w-2xl">
          {/* Renderiza o post */}
          <PostCard post={posts[0]} />
  
          {/* Renderiza os comentários do post */}
          {posts[0].comments?.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  };