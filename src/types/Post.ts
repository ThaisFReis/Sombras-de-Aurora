export type PostType = {
    id: string;
    userId: string;
    content: string;
    timestamp: string;
    comments: CommentType[];
    likes: number;
    image?: string;
    type: "text" | "image" | "video";
    trigger?: {
        type: "choice" | "progress" | "time";
        condition: string;
    };
};

export type CommentType = {
    id: string;
    userId: string;
    content: string;
    timestamp: string;
    replies: ReplyType[];
    likes: number;
    trigger?: {
        type: "choice" | "progress" | "time";
        condition: string;
    };
};

export type ReplyType = {
    id: string;
    userId: string;
    content: string;
    timestamp: string;
    likes: number;
    trigger?: {
        type: "choice" | "progress" | "time";
        condition: string;
    };
};