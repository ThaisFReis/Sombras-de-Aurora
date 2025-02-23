export type Choice = {
    texto: string; // Texto exibido para o jogador
    efeito: {
      confiança_amigos: number; // Alteração na confiança dos amigos, pode ser positivo ou negativo
      relacionamento_amigos: string; // Descrição do relacionamento após a escolha
    };
  };
  