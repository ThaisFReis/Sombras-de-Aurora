export type Character = {
    id: string; // Identificador único do personagem
    nome: string; // Nome do personagem
    bio: string; // Bio do personagem
    confiança: number; // Confiança do personagem em relação ao jogador, pode ser entre 0 e 10
    status: 'ativo' | 'desaparecido' | 'inativo'; // Status do personagem (por exemplo, "desaparecido" para Sebastian)
  };
  