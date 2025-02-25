import { ChatType } from "@/types/Chat";

// Chat com:
// id: "1",
// name: "Ryan Brooks",
// user: "@gamer_ryan",

const chatRyan: ChatType = {
  id: "gamer_ryan",
  name: "Ryan Brooks",
  characters: ["0", "1"], // IDs do jogador e do Ryan
  messages: [
    {
      id: "1",
      chatId: "gamer_ryan",
      senderId: "0",
      content:
        "E aí, Ryan! Tô travada no Malenia em Elden Ring... alguma dica? 😭",
      timestamp: "2023-10-01T14:30:00Z",
      type: "text",
    },
    {
      id: "2",
      chatId: "gamer_ryan",
      senderId: "1",
      content:
        "Hahaha, Malenia é osso mesmo! 🗡️ Tenta usar a espada Rivers of Blood, ela é OP contra ela. E leva muita poção de cura!",
      timestamp: "2023-10-01T14:32:00Z",
      type: "text",
    },
    {
      id: "3",
      chatId: "gamer_ryan",
      senderId: "0",
      content:
        "Valeu pela dica! Vou tentar hoje. Mas sério, quem criou esse boss não tem alma 😂",
      timestamp: "2023-10-01T14:35:00Z",
      type: "text",
    },
    {
      id: "4",
      chatId: "gamer_ryan",
      senderId: "1",
      content:
        "Pior que é verdade! 😂 Mas quando você derrota, a sensação é incrível. Depois me conta como foi!",
      timestamp: "2023-10-01T14:37:00Z",
      type: "text",
    },
    {
      id: "5",
      chatId: "gamer_ryan",
      senderId: "0",
      content: "Com certeza! Se eu não surtar antes hahaha 🎮",
      timestamp: "2023-10-01T14:40:00Z",
      type: "text",
    },
    {
      id: "6",
      chatId: "gamer_ryan",
      senderId: "0",
      content:
        "Oi, Ryan! Preciso da sua ajuda com o trabalho de algoritmos. Você topa dar uma olhada amanhã? 📚",
      timestamp: "2023-10-15T09:15:00Z",
      type: "text",
    },
    {
      id: "7",
      chatId: "gamer_ryan",
      senderId: "1",
      content:
        "Oi! Claro, sem problemas. Que tal a gente se encontrar na biblioteca às 14h? 👨‍💻",
      timestamp: "2023-10-15T09:20:00Z",
      type: "text",
    },
    {
      id: "8",
      chatId: "gamer_ryan",
      senderId: "0",
      content:
        "Perfeito! Vou levar café pra gente não dormir no código hahaha ☕",
      timestamp: "2023-10-15T09:22:00Z",
      type: "text",
    },
    {
      id: "9",
      chatId: "gamer_ryan",
      senderId: "1",
      content: "Hahaha, boa! Vou precisar mesmo. Até amanhã então! 👋",
      timestamp: "2023-10-15T09:25:00Z",
      type: "text",
    },
    {
      id: "10",
      chatId: "gamer_ryan",
      senderId: "1",
      content:
        "E aí, já ouviu falar de Lethal Company? É um jogo de terror cooperativo muito daora! 👻",
      timestamp: "2023-10-26T19:00:00Z",
      type: "text",
    },
    {
      id: "11",
      chatId: "gamer_ryan",
      senderId: "0",
      content: "Nunca joguei, mas tô curiosa! É muito assustador? 😱",
      timestamp: "2023-10-26T19:05:00Z",
      type: "text",
    },
    {
      id: "12",
      chatId: "gamer_ryan",
      senderId: "1",
      content:
        "É sim, mas é divertido demais! A gente tem que coletar itens num lugar cheio de monstros. Topa jogar hoje às 21h? 🎮",
      timestamp: "2023-10-26T19:10:00Z",
      type: "text",
    },
    {
      id: "13",
      chatId: "gamer_ryan",
      senderId: "0",
      content: "Bora! Mas se eu gritar, a culpa é sua hahaha 😂",
      timestamp: "2023-10-26T19:15:00Z",
      type: "text",
    },
    {
      id: "14",
      chatId: "gamer_ryan",
      senderId: "1",
      content: "Hahaha, pode gritar à vontade! Até mais tarde então! 👾",
      timestamp: "2023-10-26T19:20:00Z",
      type: "text",
    },
  ],
};

const chatMarcela: ChatType = {
  id: "marcela_art",
  name: "Marcela Fernandes",
  characters: ["0", "2"], // IDs do jogador e da Marcela
  messages: [
    {
      id: "1",
      chatId: "marcela_art",
      senderId: "0",
      content:
        "Oi, Marcela! Vi que você postou uma ilustração inspirada em 'A Bruxa'. Adorei o estilo sombrio! 🖤",
      timestamp: "2023-10-05T18:00:00Z",
      type: "text",
    },
    {
      id: "2",
      chatId: "marcela_art",
      senderId: "2",
      content:
        "Oi! Que bom que gostou! Esse filme me deu umas ideias bem sombrias... você já assistiu? 🎥",
      timestamp: "2023-10-05T18:05:00Z",
      type: "text",
    },
    {
      id: "3",
      chatId: "marcela_art",
      senderId: "0",
      content: "Já sim! A cena do corvo me deixou sem dormir por dias 😱",
      timestamp: "2023-10-05T18:10:00Z",
      type: "text",
    },
    {
      id: "4",
      chatId: "marcela_art",
      senderId: "2",
      content:
        "Hahaha, essa cena é perturbadora mesmo! Mas a fotografia do filme é incrível, né? Quero fazer uma série de ilustrações inspirada nisso. 🖌️",
      timestamp: "2023-10-05T18:15:00Z",
      type: "text",
    },
    {
      id: "5",
      chatId: "marcela_art",
      senderId: "0",
      content:
        "Adoraria ver essa série! Me avisa quando terminar, quero ser a primeira a ver 😊",
      timestamp: "2023-10-05T18:20:00Z",
      type: "text",
    },
    {
      id: "6",
      chatId: "marcela_art",
      senderId: "2",
      content:
        "Claro! Aliás, você tá a fim de ir ao cinema esse fim de semana? Tem um filme de terror novo que parece ser bem assustador... 👻",
      timestamp: "2023-10-12T12:00:00Z",
      type: "text",
    },
    {
      id: "7",
      chatId: "marcela_art",
      senderId: "0",
      content:
        "Bora! Qual filme? Já tô me preparando pra gritar no cinema hahaha 😂",
      timestamp: "2023-10-12T12:05:00Z",
      type: "text",
    },
    {
      id: "8",
      chatId: "marcela_art",
      senderId: "2",
      content:
        "É 'A Maldição da Chorona'. Dizem que é bem assustador! Que tal sábado às 19h? 🎬",
      timestamp: "2023-10-12T12:10:00Z",
      type: "text",
    },
    {
      id: "9",
      chatId: "marcela_art",
      senderId: "0",
      content:
        "Topo! Vou levar um casaco pra me esconder durante os sustos hahaha 🧥",
      timestamp: "2023-10-12T12:15:00Z",
      type: "text",
    },
    {
      id: "10",
      chatId: "marcela_art",
      senderId: "2",
      content: "Hahaha, boa! Combinado então. Te encontro no cinema! 🍿",
      timestamp: "2023-10-12T12:20:00Z",
      type: "text",
    },
  ],
};

const chatSebastian: ChatType = {
  id: "dark.wanderer",
  name: "Sebastian Grant",
  characters: ["0", "7"], // IDs do jogador e do Ryan
  messages: [
    {
      id: "1",
      chatId: "dark.wanderer",
      senderId: "0",
      content:
        "Oi, Seb. Topa assitir five nights at freddy's na estreia? Ganhei 1 par de ingressos em um sorteio 😬​",
      timestamp: "2023-10-23T18:00:00Z",
      type: "text",
    },
  ]
}
// Lista de chats disponíveis
export const chats: ChatType[] = [
  chatRyan,
  chatMarcela,
  chatSebastian
];
