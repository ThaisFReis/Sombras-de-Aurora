import { Message } from "@/types/Message";
import { Choice } from "@/types/Choices";

export type Ending = {
    id: string; // Identificador único do final (ex: "final_bom", "final_ruim")
    titulo: string; // Título do final (ex: "Final Bom")
    descricao: string; // Descrição do que acontece no final
    mensagem_grupo: Message; // Mensagem de grupo enviada ao final
    escolhas?: Choice[]; // Opções finais, se houver
  };
  