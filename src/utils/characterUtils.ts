import { CharactersData } from "@/data/CharactersData";
import { CharacterType } from "@/types/Character";

export const getCharacterById = (userId: string): CharacterType | undefined => {
  return CharactersData.find((char) => char.id === userId);
};