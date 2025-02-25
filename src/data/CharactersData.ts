import { CharacterType } from "@/types/Character";
import CarolineAvatar from "@/assets/characters/caroline/caroline1.jpeg"
import RyanAvatar from "@/assets/characters/ryan/download20250202023601.png";
// Modelo
// export const Characters: CharacterType[] = [
//     {
//         id: '',
//         name: '',
//         user: '',
//         avatar: '',
//         bio: '',
//         trust: 0
//     }
// ]

export const CharactersData: CharacterType[] = [
      {
        id: '0',
        name: 'Você',
        user: '@você',
        avatar: '',
        bio: '',
    },
    {
      // Postagens: Games, memes e discussões sobre finais de jogos.
      id: "1",
      name: "Ryan Brooks",
      user: "@gamer_ryan",
      avatar: RyanAvatar,
      bio: "🎮 Platinei jogos que você nunca terminou. Cuidado com os chefões, mas mais ainda com os spoilers.",
    },
    {
      // Postagens: Ilustrações, reflexões sobre sonhos e inspirações para arte.
      id: "2",
      name: "Marcela Fernandes",
      user: "@marcela.art",
      avatar: "",
      bio: "🎨 Artista amadora tentando capturar o que os olhos não veem. Às vezes sonho com coisas estranhas...",
    },
    {
      // Postagens: Treinos, desafios físicos e dicas de alimentação.
      id: "3",
      name: "Lucas Almeida",
      user: "@lucas_fitness",
      avatar: "",
      bio: "🏋️‍♂️ Viciado em academia e um bom hambúrguer. O equilíbrio é tudo!",
    },
    {
      // Postagens: Letras de músicas, álbuns underground e curiosidades sobre o significado das canções.
      id: "4",
      name: "Mirella Duarte",
      user: "@mirella.music",
      avatar: "",
      bio: "🎵 Música é minha religião. Gosto do que arrepia. Vocalista da banda Nocturna.",
    },
    {
      // Postagens: Atualizações diárias sobre crimes, desaparecimentos e eventos importantes.
      id: "5",
      name: "Notícias Hoje",
      user: "@noticias_hoje",
      avatar: "",
      bio: "📰 Últimas notícias de Aurora. Informação em tempo real.",
    },
    {
      // Postagens: Previsão do tempo.
      id: "6",
      name: "Clima Agora",
      user: "@clima_agora",
      avatar: "",
      bio: "🌤️ Previsão do tempo para os próximos dias. Não esqueça o guarda-chuva!",
    },
    {
      // Perfil do desaparecido.
      // Postagens: Mensagens enigmáticas, imagens misteriosas e frases que parecem pistas.
      id: "7",
      name: "Sebastian Grant",
      user: "@dark.wanderer",
      avatar: "",
      bio: "🔍 Algumas coisas deveriam permanecer ocultas. Mas eu nunca fui bom em seguir regras.",
    },
    {
      // Perfil do melhor amigo do desaparecido.
      // Postagens: Jogador de RPG, memes internos, e um tom de preocupação disfarçado.
      id: "8",
      name: "Aaron Jones",
      user: "@noble_jones",
      avatar: "",
      bio: "🎮 Gamer de coração, amigo de verdade. Se precisar, estou aqui. #SquadGoals",
      trust: 6,
    },
    {
      // Perfil do primo do desaparecido.
      // Postagens: Tecnologia, dicas de programação, e fotos de viagens.
      id: "9",
      name: "Ian Becker",
      user: "@becker.voyager",
      avatar: "",
      bio: "💻 Desenvolvedor de software e entusiasta de viagens. A vida é uma jornada, e eu estou só começando.",
      trust: 1,
    },
    {
      // Perfil da ex-namorada do desaparecido.
      // Postagens: Poesia, café, e reflexões sobre o amor.
      id: "10",
      name: "Amelia Clark",
      user: "@amy_whisper",
      avatar: "",
      bio: "💔 Nem tudo dura para sempre, mas as lições ficam. Amante de poesia e café.",
      trust: 0,
    },
    {
      // Perfil do amigo de infância do desaparecido.
      // Postagens: Fotos antigas, histórias engraçadas, e um tom de preocupação.
      id: "11",
      name: "David Wolf",
      user: "@david_wolf",
      avatar: "",
      bio: "🕵️‍♂️ Explorador de histórias e memórias. Às vezes, o passado volta para nos assombrar.",
      trust: 1,
    },
    {
      // Perfil da amiga de infância do desaparecido.
      // Postagens: Fotos de viagens, memórias felizes, e um tom de preocupação.
      id: "12",
      name: "Caroline Blanc",
      user: "@blanc.serenity",
      avatar: CarolineAvatar,
      bio: "✈️ Viajante de coração, colecionadora de momentos. A vida é feita de histórias, e eu adoro contá-las.",
      trust: 2,
    },
  ];