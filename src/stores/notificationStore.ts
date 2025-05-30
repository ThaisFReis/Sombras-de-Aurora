import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Notification = {
  id: string;
  title: string;
  message: string;
  timestamp: number;
  read?: boolean;
};

interface NotificationStore {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  unreadCount: () => number;
  removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationStore>()(
  persist(
    (set, get) => ({
      notifications: [],
      addNotification: (notification) =>
        set((state) => ({
          notifications: [notification, ...state.notifications],
        })),
      markAsRead: (id) =>
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, read: true } : n
          ),
        })),
      markAllAsRead: () =>
        set((state) => ({
          notifications: state.notifications.map((n) => ({ ...n, read: true })),
        })),
      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),
      unreadCount: () =>
        get().notifications.filter((n) => !n.read).length,
    }),
    {
      name: 'sombras-de-aurora-notifications',
    }
  )
);