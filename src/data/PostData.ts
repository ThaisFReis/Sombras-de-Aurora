import { PostType } from "@/types/Post";

// Caroline
import caroline1 from "@/assets/characters/caroline/carolinetravelnight.jpeg"

// Ryan
import eldenRing from "@/assets/characters/ryan/Gaming room.jpg"
import silenthill from "@/assets/characters/ryan/Silent Hill Collection.jpg"

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

const postsRyan: PostType[] = [
  {
    id: "post1",
    userId: "1", // ID do Ryan
    content: "Finalmente terminei a montagem do meu setup novo! Agora é só esperar a meia-noite pra começar Elden Ring. Alguém mais hypado? 🎮🔥 #EldenRing #Gaming",
    timestamp: "2023-10-01T20:00:00Z",
    image: eldenRing,
    comments: [
      {
        id: "comment1",
        userId: "2", // ID de outro personagem (ex: Marcela)
        content: "Boa sorte, Ryan! Eu não tenho coragem pra esses jogos difíceis hahaha 😅",
        timestamp: "2023-10-01T20:15:00Z",
        replies: [
          {
            id: "reply1",
            userId: "1", // Resposta do Ryan
            content: "Valeu, Marcela! Depois te conto como foi a experiência. 😄",
            timestamp: "2023-10-01T20:20:00Z",
            likes: 2,
          },
        ],
        likes: 3,
      },
      {
        id: "comment2",
        userId: "3", // ID de outro personagem (ex: Lucas)
        content: "Já tô jogando há uma hora! O jogo é incrível, mas os chefes são insanos. 🗡️",
        timestamp: "2023-10-01T20:30:00Z",
        replies: [],
        likes: 5,
      },
    ],
    likes: 12,// URL da imagem do setup
    type: "image",
  },
  {
    id: "post2",
    userId: "1",
    content: "Alguém mais sente saudade de jogar Silent Hill no PS2? Aquela atmosfera sombria e a trilha sonora assustadora eram incríveis. 🎮👻 #SilentHill #PS2 #Nostalgia",
    timestamp: "2023-10-05T14:00:00Z",
    comments: [
      {
        id: "comment3",
        userId: "4", // ID de outro personagem (ex: Mirella)
        content: "Cara, Silent Hill 2 é uma obra-prima! A história do James ainda me dá arrepios. 😱",
        timestamp: "2023-10-05T14:15:00Z",
        replies: [
          {
            id: "reply2",
            userId: "1", // Resposta do Ryan
            content: "Sim! E aquela cena do espelho? Nunca vou esquecer. 🪞",
            timestamp: "2023-10-05T14:20:00Z",
            likes: 4,
          },
        ],
        likes: 7,
      },
      {
        id: "comment4",
        userId: "5", // ID de outro personagem (ex: Notícias Hoje)
        content: "Eu ainda tenho meu PS2 funcionando! Vou revisitar Silent Hill esse fim de semana. 🕹️",
        timestamp: "2023-10-05T14:25:00Z",
        replies: [],
        likes: 3,
      },
    ],
    likes: 15,
    type: "image",
    image: silenthill
  },
  {
    id: "post3",
    userId: "1",
    content: "Acabei de zerar Bloodborne pela terceira vez. Esse jogo nunca perde a graça! Alguém mais aí é fã da FromSoftware? 🩸🪓 #Bloodborne #FromSoftware",
    timestamp: "2023-10-10T18:00:00Z",
    comments: [
      {
        id: "comment5",
        userId: "6", // ID de outro personagem (ex: Clima Agora)
        content: "Eu ainda tô preso no primeiro chefe... 😅",
        timestamp: "2023-10-10T18:15:00Z",
        replies: [
          {
            id: "reply3",
            userId: "1", // Resposta do Ryan
            content: "Hahaha, o Father Gascoigne é osso mesmo! Dica: use o ambiente ao seu favor. 🏙️",
            timestamp: "2023-10-10T18:20:00Z",
            likes: 5,
          },
        ],
        likes: 6,
      },
    ],
    likes: 10,
    type: "text",
  },
  {
    id: "post4",
    userId: "1",
    content: "Qual foi o jogo mais difícil que vocês já jogaram? Pra mim, foi Sekiro: Shadows Die Twice. Aquele Genichiro quase me fez desistir! 🗡️😤 #Sekiro #Gaming",
    timestamp: "2023-10-15T12:00:00Z",
    comments: [
      {
        id: "comment6",
        userId: "7", // ID de outro personagem (ex: Sebastian)
        content: "Cuphead! Aquele jogo é puro suco de frustração. 😂",
        timestamp: "2023-10-15T12:15:00Z",
        replies: [
          {
            id: "reply4",
            userId: "1", // Resposta do Ryan
            content: "Cuphead é difícil mesmo! Mas a arte estilo cartoon é incrível. 🎨",
            timestamp: "2023-10-15T12:20:00Z",
            likes: 3,
          },
        ],
        likes: 8,
      },
      {
        id: "comment7",
        userId: "8", // ID de outro personagem (ex: Aaron)
        content: "Dark Souls 3. Aquele chefe final me fez chorar de raiva. 🐉",
        timestamp: "2023-10-15T12:25:00Z",
        replies: [],
        likes: 4,
      },
    ],
    likes: 18,
    type: "text",
  },
  {
    id: "post5",
    userId: "1",
    content: "Acabei de descobrir que tem um novo jogo do Silent Hill em desenvolvimento! Alguém mais animado? 🎮👀 #SilentHill #GamingNews",
    timestamp: "2023-10-20T09:00:00Z",
    comments: [
      {
        id: "comment8",
        userId: "9", // ID de outro personagem (ex: Ian)
        content: "Sério? Espero que mantenha a atmosfera clássica do PS2. 🤞",
        timestamp: "2023-10-20T09:15:00Z",
        replies: [
          {
            id: "reply5",
            userId: "1", // Resposta do Ryan
            content: "Tomara! Se for metade do que foi o Silent Hill 2, já tá ótimo. 🎮",
            timestamp: "2023-10-20T09:20:00Z",
            likes: 2,
          },
        ],
        likes: 5,
      },
    ],
    likes: 14,
    type: "text",
  },
];

// Lista de posts disponíveis
export const posts: PostType[] = [
    ...postsCaroline,
    ...postsRyan
];
