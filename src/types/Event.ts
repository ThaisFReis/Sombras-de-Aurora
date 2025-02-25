export type EventType = {
    id: string; // Identificador único do evento
    type: "message" | "post" | "comment"; // Tipo de evento
    targetId: string; // ID da mensagem, post ou comentário que será renderizado
    trigger: {
        type: "choice" | "progress" | "time";
        condition: string;
    };
};