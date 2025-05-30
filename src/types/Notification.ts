export type NotificationType = {
  id: string;
  type: "post" | "message" | "system";
  postId?: string;
  sender: {
    name: string;
    username: string;
    avatar?: string;
  };
  title: string;
  content: string;
  timestamp: string;
  extra?: {
    image?: string;
    actions?: {
      likes?: {
        enabled: boolean;
        triggerEffect?: string;
        effect?: string;
      };
      comments?: {
        enabled: boolean;
        keywordTrigger?: {
          keyword: string;
          effect: string;
        };
        effect?: string;
      };
      special?: {
        trigger: string;
      };
    };
  };
};
