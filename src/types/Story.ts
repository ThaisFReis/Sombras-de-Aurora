export type Choice = {
    label: string;
    nextScene: string;
  };
  
  export type Scene = {
    text: string;
    choices: Choice[];
  };
  
  export type StoryData = {
    startScene: string;
    scenes: Record<string, Scene>;
  };
  