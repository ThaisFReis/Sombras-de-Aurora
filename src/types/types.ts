// types.ts

export type Post = {
  id: string
  author: string
  username: string
  avatarUrl: string
  content: string
  mediaUrl?: string
  timestamp: string
  canComment: boolean
  canLike: boolean
  triggers?: {
    onLike?: string[]
    onCommentKeywords?: { [keyword: string]: string[] }
  }
}

export type ChatMessage = {
  id: string
  sender: string
  content: string
  type: 'text' | 'choice' | 'system'
  choices?: {
    text: string
    effect: string // Ex: 'unlock_minigame', 'end_chat', 'relationship--'
  }[]
  triggers?: string[] // IDs de gatilhos ativados por esse chat
}

export type Minigame = {
  id: string
  name: string
  description: string
  layers: {
    id: string
    description: string
    effect?: string // Ex: desbloqueia nova info, ativa trauma, etc.
  }[]
  consequences: {
    condition: string // ex: 'stoppedAtLayer2', 'heardAll'
    result: string[]
  }[]
}

export type Chapter = {
  id: string
  title: string
  posts: Post[]
  chat: ChatMessage[]
  minigames: Minigame[]
  unlocks: {
    mapLocation?: string
    newCharacterChats?: string[]
  }
}

export type Character = {
  id: string;            // Identificador único do personagem (ex: "beatriz")
  name: string;          // Nome completo (ex: "Beatriz Leão")
  user: string;          // Username (ex: "@beatriz.leao")
  avatar: string;        // URL ou caminho do avatar
  bio: string;           // Biografia resumida do personagem
  trust?: number;        // Nível de confiança de 0 a 10
  visible?: boolean;     // Se o personagem está desbloqueado no momento
  relationship?: number; // Grau geral de afinidade (ex: de -5 a +5)
  tags?: string[];       // Tags úteis para categorizar (ex: ["aliado", "cientista", "Vigília"])
}
