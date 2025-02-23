export type PostType = {
    id: number;
    username: string;
    userImage: string;
    alt: string;
    postImage?: string;
    postCaption?: string;
    likes?: number;
    comments?: CommentType[];
    time: string;
};

export type CommentType = {
    id: number;
    username: string;
    userImage: string;
    alt: string;
    comment: string;
    time: string;
    answer?: AnswerType[];
  };

export type AnswerType = {
    id: number;
    username: string;
    userImage: string;
    alt: string;
    comment: string;
    time: string;
};