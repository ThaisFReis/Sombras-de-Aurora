export type highlightsType = {
    id: string; // ID do destaque
    userId: string; // ID do usuário dono do destaque
    content: {
        id: number; // Id do destaque
        title: string; // Título do destaque
        posts: {
            text?: string; // Texto do post (opcional)
            image?: string; // Imagem do post (opcional)
        }[];
    }[];
};