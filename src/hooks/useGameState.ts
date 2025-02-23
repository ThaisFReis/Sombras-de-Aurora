import { useState } from "react";
import act1 from "@/features/story/data/act1.json";

export const useGameState = () => {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

  const currentScene = act1.scenes[sceneIndex];

  const chooseOption = (choiceId: string) => {
    const choice = currentScene.choices.find((c) => c.id === choiceId);
    if (choice) {
      setHistory([...history, choice.text]);
      setSceneIndex(sceneIndex + 1);
    }
  };

  return { currentScene, chooseOption, history };
};
