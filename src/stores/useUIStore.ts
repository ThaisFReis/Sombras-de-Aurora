import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppKey =
  | "feed"
  | "forum"
  | "arquivos"
  | "settings"
  | "chat"
  | "minigames"
  | null;

interface UIStore {
  activeApp: AppKey;
  isDockVisible: boolean;
  modal: string | null;

  openApp: (app: AppKey) => void;
  closeApp: () => void;
  toggleDock: (visible: boolean) => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

export const useUIStore = create<UIStore>()(
  persist(
    (set) => ({
      activeApp: null,
      isDockVisible: false,
      modal: null,

      openApp: (app) => set({ activeApp: app }),
      closeApp: () => set({ activeApp: null }),
      toggleDock: (visible) => set({ isDockVisible: visible }),
      openModal: (modalId) => set({ modal: modalId }),
      closeModal: () => set({ modal: null }),
    }),
    {
      name: "ui-storage", // nome da chave no localStorage
    }
  )
);
