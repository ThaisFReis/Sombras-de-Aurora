import { NotificationType } from "@/types/Notification";

export const notifications: NotificationType[] = [
  {
    id: "notif1",
    type: "post",
    postId: "post1",
    sender: {
      name: "Sebastian Grant",
      username: "dark.wanderer",
      avatar: "/avatars/sebastian.jpg",
    },
    title: "🧩 Nova postagem de Sebastian Grant",
    content:
      "“A janela estava aberta naquela noite... e o vento não era o único que passou por ela.”",
    timestamp: "2025-05-30T01:00:00Z",
    extra: {
      image: "/assets/posts/janela_borrada.jpg",
      actions: {
        likes: {
          enabled: true,
          triggerEffect: "fragmento_memoria_minigame",
        },
        comments: {
          enabled: true,
          keywordTrigger: {
            keyword: "vento",
            effect: "desbloqueia_novo_caminho_chat",
          },
        },
      },
    },
  },
  {
    id: "notif2",
    type: "post",
    postId: "post2",
    sender: {
      name: "Notícias Hoje",
      username: "noticias_hoje",
      avatar: "/avatars/noticias.jpg",
    },
    title: "📸 Atualização do Notícias Hoje",
    content:
      "📍 Relato de moradores do Bairro Antares: sons estranhos durante a madrugada, janelas abertas sem motivo aparente. Polícia diz “não há registros de invasão”. #Mistério #AuroraNews",
    timestamp: "2025-05-30T12:30:00Z",
    extra: {
      actions: {
        likes: {
          enabled: true,
          effect: "reputacao_cresce_curioso",
        },
        comments: {
          enabled: true,
          effect: "reputacao_cresce_curioso",
        },
      },
    },
  },
  {
    id: "notif3",
    type: "post",
    postId: "post3",
    sender: {
      name: "Anônimo",
      username: "nevoa_vermelha",
      avatar: "/avatars/anonimo.png",
    },
    title: "🔔 Nova mensagem misteriosa",
    content: "Você também viu o vulto pela janela, não foi?",
    timestamp: "2025-05-30T19:40:00Z",
    extra: {
      image: "/assets/posts/vulto_glitch.jpg",
      actions: {
        likes: {
          enabled: false,
        },
        comments: {
          enabled: false,
        },
        special: {
          trigger: "abrir_minigame_automaticamente",
        },
      },
    },
  },
];
