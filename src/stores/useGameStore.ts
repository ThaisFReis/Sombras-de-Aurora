;import { create } from "zustand";
import { persist } from "zustand/middleware";

type PersonagemID = "sebastian" | "marina" | "dorian";

interface GameStore {
  capituloAtual: number;
  decisoes: Record<string, string>;
  minigamesResolvidos: string[];
  desbloqueios: string[];

  relacoes: Record<PersonagemID, number>;
  paranoia: number;
  tempoJogo: Date;

  setCapitulo: (n: number) => void;
  registrarDecisao: (id: string, valor: string) => void;
  resolverMinigame: (id: string) => void;
  desbloquearConteudo: (id: string) => void;
  alterarRelacao: (personagem: PersonagemID, valor: number) => void;
  ajustarParanoia: (valor: number) => void;
  avancarTempo: (minutos: number) => void;
  resetarJogo: () => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set) => ({
      capituloAtual: 1,
      decisoes: {},
      minigamesResolvidos: [],
      desbloqueios: [],
      relacoes: {
        sebastian: 50,
        marina: 50,
        dorian: 50,
      },
      paranoia: 0,
      tempoJogo: new Date(),

      setCapitulo: (n) => set({ capituloAtual: n }),

      registrarDecisao: (id, valor) =>
        set((state) => ({
          decisoes: { ...state.decisoes, [id]: valor },
        })),

      resolverMinigame: (id) =>
        set((state) => ({
          minigamesResolvidos: [...new Set([...state.minigamesResolvidos, id])],
        })),

      desbloquearConteudo: (id) =>
        set((state) => ({
          desbloqueios: [...new Set([...state.desbloqueios, id])],
        })),

      alterarRelacao: (personagem, valor) =>
        set((state) => ({
          relacoes: {
            ...state.relacoes,
            [personagem]: Math.min(100, Math.max(0, state.relacoes[personagem] + valor)),
          },
        })),

      ajustarParanoia: (valor) =>
        set((state) => ({
          paranoia: Math.min(100, Math.max(0, state.paranoia + valor)),
        })),

      avancarTempo: (minutos) =>
        set((state) => ({
          tempoJogo: new Date(state.tempoJogo.getTime() + minutos * 60 * 1000),
        })),

      resetarJogo: () =>
        set({
          capituloAtual: 1,
          decisoes: {},
          minigamesResolvidos: [],
          desbloqueios: [],
          relacoes: {
            sebastian: 50,
            marina: 50,
            dorian: 50,
          },
          paranoia: 0,
          tempoJogo: new Date(),
        }),
    }),
    {
      name: "sombras-de-aurora-store", // nome da chave no localStorage
      partialize: (state) => ({
        capituloAtual: state.capituloAtual,
        decisoes: state.decisoes,
        minigamesResolvidos: state.minigamesResolvidos,
        desbloqueios: state.desbloqueios,
        relacoes: state.relacoes,
        paranoia: state.paranoia,
        tempoJogo: state.tempoJogo.toISOString(), // salvar como string
      }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...(typeof persistedState === "object" && persistedState !== null ? persistedState : {}),
        tempoJogo: new Date((persistedState as any)?.tempoJogo),
      }),
    }
  )
);
