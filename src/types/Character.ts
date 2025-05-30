export enum CharacterID {
  SEBASTIAN = "sebastian",
  BEATRIZ = "beatriz",
  OTAVIO = "otavio",
  // Adicione outros conforme necessário
}

export type CharacterType = {
  id: CharacterID;
  name: string;
  user: string;
  avatar: string;
  bio: string;
  trust?: number;          // 0 a 10
  relationship?: number;   // -5 (ódio) a +5 (amizade profunda)
  visible?: boolean;
  tags?: string[];
};