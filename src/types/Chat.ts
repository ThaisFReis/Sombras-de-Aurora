import { CharacterType } from "./Character";
import { MessageType } from "./Message";

export type ChatType = {
  id: string; // Identificador único do chat
  name?: string; // Nome do chat
  characters: string[]; // IDs dos personagens que estão no chat
  messages?: MessageType[]; // Mensagens trocadas no chat
};