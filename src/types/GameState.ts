type GameState = {
  choices: string[]; // Escolhas feitas pelo jogador
  unlockedMessages: string[]; // IDs de mensagens desbloqueadas
  unlockedPosts: string[]; // IDs de posts desbloqueados
  trustLevels: Record<string, number>; // Níveis de confiança dos personagens
};