export type ChoiceType = {
  id: string; // Identificador único da escolha
  text: string; // Texto da escolha exibido ao jogador
  nextEvent?: string; // Evento que será disparado após essa escolha
  consequences?: {
      trustChange?: number; // Mudança na confiança de um personagem
      unlock?: string[]; // IDs de mensagens, posts ou comentários que serão desbloqueados
  };
};