export type PostType = {
    id: string | number;
    user: string;
    content: string;
    hour: string;
    comments?: CommentType[];
    likes?: number;
    image?: string;
};

export type CommentType = {
    id: number;
    user: string;
    content: string;
    hour: string;
    answer?: AnswerType[];
    likes?: number;
};

export type AnswerType = {
    id: number;
    user: string;
    content: string;
    hour: string;
    likes?: number;
};
