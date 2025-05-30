import { notifications as rawNotifs } from "@/data/ NotificationData";
import { useNotificationStore } from "@/stores/notificationStore";

export const seedNotifications = () => {
  const addNotification = useNotificationStore.getState().addNotification;

  rawNotifs.forEach((n) => {
    addNotification({
      id: n.id,
      title: n.title,
      message: n.content,
      timestamp: new Date(n.timestamp).getTime(),
    });
  });
};
