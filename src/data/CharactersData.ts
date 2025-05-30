import CarolineAvatar from "@/assets/characters/caroline/caroline1.jpeg"
import RyanAvatar from "@/assets/characters/ryan/download20250202023601.png";
import post8 from "@/assets/post8.jpg"
import { CharacterType, CharacterID } from "@/types/Character";

export const characters: Record<CharacterID, CharacterType> = {
  [CharacterID.SEBASTIAN]: {
    id: CharacterID.SEBASTIAN,
    name: "Sebastian Grant",
    user: "@dark.wanderer",
    avatar: RyanAvatar,
    bio: "Explorador dos limites do desconhecido. Offline desde o desaparecimento.",
    visible: true,
    trust: 0,
    relationship: 0,
    tags: ["desaparecido", "ocultismo"]
  },
  [CharacterID.BEATRIZ]: {
    id: CharacterID.BEATRIZ,
    name: "Beatriz Leão",
    user: "@beatriz.leao",
    avatar: CarolineAvatar,
    bio: "Amiga próxima, cética e analítica. Sempre com um pé atrás.",
    visible: true,
    trust: 5,
    relationship: 2,
    tags: ["aliada"]
  },
  [CharacterID.OTAVIO]: {
    id: CharacterID.OTAVIO,
    name: "Otávio Marques",
    user: "@fenomenos.inexplicaveis",
    avatar: post8,
    bio: "Especialista em casos estranhos. Um tanto excêntrico.",
    visible: false,
    trust: 3,
    relationship: 1,
    tags: ["especialista", "teorias"]
  }
};