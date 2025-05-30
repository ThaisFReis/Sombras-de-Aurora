import { PostType } from "@/types/Post";

export const posts: PostType[] = [
  {
    id: "post1",
    userId: "beatriz",
    content: `Vocês ouviram aquele barulho ontem à noite? Soou como... passos no sótão.`,
    timestamp: "2025-05-30T02:14:00Z",
    likes: 12,
    image: undefined,
    type: "text",
    comments: [
      {
        id: "c1",
        userId: "lucas",
        content: "Achei que fosse só minha imaginação… agora fiquei encucado.",
        timestamp: "2025-05-30T03:00:00Z",
        likes: 3,
        replies: [
          {
            id: "r1",
            userId: "beatriz",
            content: "Você também ouviu? Isso confirma que não estou maluca.",
            timestamp: "2025-05-30T03:05:00Z",
            likes: 2,
          },
        ],
      },
    ],
    trigger: {
      type: "progress",
      condition: "capitulo1_inicio",
    },
  },
  {
    id: "post2",
    userId: "arthur",
    content: `Registro antigo encontrado nos arquivos da escola. Alguém conhece esse símbolo?`,
    timestamp: "2025-05-30T12:30:00Z",
    likes: 7,
    image: "/assets/posts/simbolo_antigo.jpg",
    type: "image",
    comments: [
      {
        id: "c2",
        userId: "beatriz",
        content: "Parece algo relacionado à Vigília... você encontrou isso onde exatamente?",
        timestamp: "2025-05-30T13:00:00Z",
        likes: 5,
        replies: [],
      },
    ],
    trigger: {
      type: "choice",
      condition: "investigar_simbolo",
    },
  },
  {
    id: "post3",
    userId: "carla",
    content: `Achei esse vídeo no celular do meu irmão depois que ele desapareceu. Está... estranho.`,
    timestamp: "2025-05-30T19:42:00Z",
    likes: 21,
    image: "/assets/posts/video_thumbnail.jpg", // thumbnail
    type: "video",
    comments: [],
    trigger: {
      type: "time",
      condition: "2025-05-31T00:00:00Z",
    },
  },
];
