import { Chapter } from "@/types/types";

export const testChapter: Chapter = {
  id: "chapter-1",
  title: "A Janela Aberta",
  posts: [], // já tratados em outro lugar
  chat: [
    {
      id: "b1",
      sender: "beatriz",
      type: "text",
      content: "Ei… só eu achei muito estranho aquele post do Sebastian? Tem algo nele. Você viu a janela?",
    },
    {
      id: "b2",
      sender: "player",
      type: "choice",
      content: "Escolha uma resposta:",
      choices: [
        {
          text: "Sim. Parece um pedido de ajuda.",
          effect: "trust++",
        },
        {
          text: "Acho que ele só tá tentando chamar atenção.",
          effect: "relationship--|end_chat",
        },
        {
          text: "Notei algo estranho… vou investigar.",
          effect: "unlock_minigame--audio-decoder-janela",
        },
      ],
    },
    {
      id: "b3",
      sender: "beatriz",
      type: "text",
      content: "Então é melhor você ouvir esse áudio… eu tentei limpar o som, mas tem algo mais fundo. Boa sorte. Só... não escute até o fim se não tiver certeza.",
      triggers: ["unlock_minigame"],
    },
  ],
  minigames: [
    {
      id: "audio-decoder-janela",
      name: "Decodificador de Áudio - A Janela",
      description: "Um som estranho capturado da janela... algo está escondido no fundo.",
      layers: [
        { id: "1", description: "Chiado inicial" },
        { id: "2", description: "Sussurros" },
        { id: "3", description: "Mensagem reversa", effect: "trauma++" },
      ],
      consequences: [
        {
          condition: "heardAll",
          result: ["desbloqueia nova info", "altera relacionamento"],
        },
      ],
    },
  ],
  unlocks: {
    newCharacterChats: [],
  },
};
