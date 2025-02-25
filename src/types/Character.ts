export type CharacterType = {
    id: string; // Identificador único do personagem
    name: string; // Nome do personagem
    user: string; // User do personagem
    avatar: string; // Avatar do personagem
    bio: string; // Bio do personagem
    trust?: number; // Confiança do personagem em relação ao jogador, pode ser entre 0 e 10
  };
  