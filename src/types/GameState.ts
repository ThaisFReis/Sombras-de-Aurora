import { Act } from "@/types/Act";
import { Character } from "@/types/Character";
import { Relationship } from "@/types/Relationship";
import { Scene } from "@/types/Scene";
import { Ending } from "@/types/Ending";

export type GameState = {
  atos: Act[]; // Lista de atos
  personagens: Character[]; // Lista de personagens
  relacionamentos: Relationship[]; // Lista de relacionamentos entre o jogador e os outros personagens
  finalEscolhido: Ending | null; // O final escolhido pelo jogador (bom, ruim, neutro)
  cenaAtual: Scene; // A cena atual em que o jogador se encontra
};
