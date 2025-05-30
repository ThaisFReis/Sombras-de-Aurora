import { characters } from "@/data/CharactersData";
import { CharacterType } from "@/types/Character";

/**
 * Retorna o personagem correspondente ao userId fornecido.
 */
export const getCharacterById = (userId: string): CharacterType | undefined => {
  return Object.values(characters).find(char => char.id === userId);
};
