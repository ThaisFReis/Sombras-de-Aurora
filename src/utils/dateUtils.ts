import { MessageType } from "@/types/Message";

export const groupMessagesByDay = (messages: MessageType[]) => {
  const groupedMessages: { [key: string]: MessageType[] } = {};

  messages.forEach((message) => {
    const date = new Date(message.timestamp).toDateString(); // Converte para formato "Day Month Date Year"
    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }
    groupedMessages[date].push(message);
  });

  return groupedMessages;
};

export const getDaysDifference = (date1: Date, date2: Date): number => {
  const timeDifference = date2.getTime() - date1.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Converte para dias
  return daysDifference;
};
