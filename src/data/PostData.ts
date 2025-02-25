import { PostType } from "@/types/Post";

// Caroline
import caroline1 from "@/assets/characters/caroline/carolinetravelnight.jpeg"

const postsCaroline: PostType[] = [
  {
    id: "post1",
    userId: "12", // ID da Caroline
    content: "Lembranças de uma das minhas viagens favoritas: Paris. ❤️ A cidade luz sempre me inspira! Quem mais ama viajar? ✈️",
    timestamp: "2023-10-01T10:00:00Z",
    image: caroline1,
    comments: [
      {

        id: "comment1",
        userId: "1", // ID de outro personagem (ex: Ryan)
        content: "Paris é incrível! Qual foi seu lugar favorito lá?",
        timestamp: "2023-10-01T10:15:00Z",
        replies: [
          {
            id: "reply1",
            userId: "12", // Resposta da Caroline
            content: "O Museu do Louvre! Fiquei horas perdida nas obras de arte. 🎨",
            timestamp: "2023-10-01T10:20:00Z",
            likes: 2,
          },
        ],
        likes: 3,
      },
      {
        id: "comment2",
        userId: "2", // ID de outro personagem (ex: Marcela)
        content: "Adoro suas fotos de viagem! Me inspira a planejar a minha próxima aventura. 🌍",
        timestamp: "2023-10-01T10:30:00Z",
        replies: [],
        likes: 1,
      },
    ],
    likes: 10,
    type: "image",
  },
  {
    id: "post2",
    userId: "12",
    content: "Às vezes, sinto que o tempo passa rápido demais... Alguém mais sente isso? 🕰️",
    timestamp: "2023-10-05T14:00:00Z",
    comments: [
      {
        id: "comment3",
        userId: "3", // ID de outro personagem (ex: Lucas)
        content: "Demais! Parece que ontem era janeiro e já estamos em outubro. 😅",
        timestamp: "2023-10-05T14:10:00Z",
        replies: [
          {
            id: "reply2",
            userId: "12", // Resposta da Caroline
            content: "Exato! Precisamos aproveitar cada momento. 🍃",
            timestamp: "2023-10-05T14:15:00Z",
            likes: 5,
          },
        ],
        likes: 4,
      },
      {
        id: "comment4",
        userId: "4", // ID de outro personagem (ex: Mirella)
        content: "Concordo... Mas também acho que o tempo nos ensina a valorizar o que realmente importa. 💫",
        timestamp: "2023-10-05T14:20:00Z",
        replies: [],
        likes: 2,
      },
    ],
    likes: 8,
    type: "text",
  },
  {
    id: "post3",
    userId: "12",
    content: "Alguém já foi para o Japão? Estou planejando uma viagem e queria dicas! 🗾",
    timestamp: "2023-10-10T09:00:00Z",
    comments: [
      {
        id: "comment5",
        userId: "5", // ID de outro personagem (ex: Notícias Hoje)
        content: "Já fui! Recomendo muito Kyoto, é uma cidade cheia de história e cultura. 🏯",
        timestamp: "2023-10-10T09:15:00Z",
        replies: [
          {
            id: "reply3",
            userId: "12", // Resposta da Caroline
            content: "Obrigada pela dica! Vou incluir Kyoto no meu roteiro. 😊",
            timestamp: "2023-10-10T09:20:00Z",
            likes: 3,
          },
        ],
        likes: 6,
      },
      {
        id: "comment6",
        userId: "6", // ID de outro personagem (ex: Clima Agora)
        content: "Não esqueça de experimentar o ramen lá! É incrível. 🍜",
        timestamp: "2023-10-10T09:25:00Z",
        replies: [],
        likes: 4,
      },
    ],
    likes: 12,
    type: "text",
  },
  {
    id: "post4",
    userId: "12",
    content: "Às vezes, me pego pensando no passado... Será que estamos fazendo o suficiente para cuidar das pessoas que amamos? 💭",
    timestamp: "2023-10-15T18:00:00Z",
    comments: [
      {
        id: "comment7",
        userId: "7", // ID de outro personagem (ex: Sebastian)
        content: "Essa é uma reflexão importante. Acho que todos deveriamos parar para pensar nisso mais vezes. 🌟",
        timestamp: "2023-10-15T18:10:00Z",
        replies: [
          {
            id: "reply4",
            userId: "12", // Resposta da Caroline
            content: "Exato... Às vezes a correria do dia a dia nos distrai do que realmente importa. 💔",
            timestamp: "2023-10-15T18:15:00Z",
            likes: 7,
          },
        ],
        likes: 5,
      },
      {
        id: "comment8",
        userId: "8", // ID de outro personagem (ex: Aaron)
        content: "Concordo. Precisamos valorizar mais as pequenas coisas. ❤️",
        timestamp: "2023-10-15T18:20:00Z",
        replies: [],
        likes: 3,
      },
    ],
    likes: 15,
    type: "text",
  },
];

// Lista de posts disponíveis
export const posts: PostType[] = [
    ...postsCaroline
];
