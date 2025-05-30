import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Tipos básicos
type Trigger = string

interface GameState {
  currentChapterId: string
  activeTriggers: Set<Trigger>
  completedMinigames: Set<string>
  unlockedChats: Set<string>
  unlockedLocations: Set<string>
  relationship: Record<string, number>

  // Ações
  setChapter: (id: string) => void
  activateTrigger: (trigger: string) => void
  completeMinigame: (id: string) => void
  unlockChat: (id: string) => void
  unlockLocation: (location: string) => void
  adjustRelationship: (character: string, value: number) => void

  // Utilitários
  hasTrigger: (trigger: string) => boolean
  hasCompletedMinigame: (id: string) => boolean
  hasChat: (id: string) => boolean
}

export const useGameState = create<GameState>()(
  persist(
    (set, get) => ({
      currentChapterId: 'chapter01',
      activeTriggers: new Set(),
      completedMinigames: new Set(),
      unlockedChats: new Set(),
      unlockedLocations: new Set(),
      relationship: {},

      setChapter: (id) => set(() => ({ currentChapterId: id })),
      activateTrigger: (trigger) =>
        set((state) => {
          const updated = new Set(state.activeTriggers)
          updated.add(trigger)
          return { activeTriggers: updated }
        }),

      completeMinigame: (id) =>
        set((state) => {
          const updated = new Set(state.completedMinigames)
          updated.add(id)
          return { completedMinigames: updated }
        }),

      unlockChat: (id) =>
        set((state) => {
          const updated = new Set(state.unlockedChats)
          updated.add(id)
          return { unlockedChats: updated }
        }),

      unlockLocation: (location) =>
        set((state) => {
          const updated = new Set(state.unlockedLocations)
          updated.add(location)
          return { unlockedLocations: updated }
        }),

      adjustRelationship: (character, value) =>
        set((state) => ({
          relationship: {
            ...state.relationship,
            [character]: (state.relationship[character] || 0) + value
          }
        })),

      hasTrigger: (trigger) => get().activeTriggers.has(trigger),
      hasCompletedMinigame: (id) => get().completedMinigames.has(id),
      hasChat: (id) => get().unlockedChats.has(id)
    }),
    {
      name: 'sombras-de-aurora-game-state',
      partialize: (state) => ({
        currentChapterId: state.currentChapterId,
        activeTriggers: Array.from(state.activeTriggers),
        completedMinigames: Array.from(state.completedMinigames),
        unlockedChats: Array.from(state.unlockedChats),
        unlockedLocations: Array.from(state.unlockedLocations),
        relationship: state.relationship
      }),
      merge: (persistedState, currentState) => {
        const parsed = persistedState as any
        return {
          ...currentState,
          ...parsed,
          activeTriggers: new Set(parsed.activeTriggers || []),
          completedMinigames: new Set(parsed.completedMinigames || []),
          unlockedChats: new Set(parsed.unlockedChats || []),
          unlockedLocations: new Set(parsed.unlockedLocations || [])
        }
      }
    }
  )
)
