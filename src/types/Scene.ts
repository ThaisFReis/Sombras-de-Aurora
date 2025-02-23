import { Message } from "@/types/Message";
import { Choice } from "@/types/Choices";

export type Scene = {
    id: string; // Identificador único para a cena
    titulo: string; // Título da cena
    descricao: string; // Descrição detalhada da cena
    mensagem_grupo: Message; // A mensagem de grupo que pode ser enviada nessa cena
    escolhas: Choice[]; // Lista de escolhas possíveis que o jogador pode fazer
  };
  