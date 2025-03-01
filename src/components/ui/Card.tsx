import { ReactNode, CSSProperties } from "react"; // Importe CSSProperties
import { Link } from "react-router-dom";
import { Icon } from "@/components/ui/Icon";

type CardProps = {
  userId: string;
  avatar?: string;
  name: string;
  timestamp: string;
  content: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  classname?: string;
  style?: CSSProperties; // Adicione a propriedade style
};

export const Card = ({
  userId,
  avatar,
  name,
  timestamp,
  content,
  actions,
  children,
  classname,
  style, // Adicione a propriedade style
}: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg flex flex-col ${classname}`}
      style={style} // Aplique o estilo
    >
      <div className="flex">
        {/* Avatar */}
        <div className="w-[70px] flex justify-start items-start">
          <Link to={`/perfil/${userId}`}>
            <div>
              {avatar ? (
                <Icon
                  src={avatar}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              ) : (
                <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#ccd0ff] rounded-full text-gray font-semibold">
                  {name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </Link>
        </div>

        {/* Conteúdo Principal */}
        <div className="w-full flex flex-col">
          {/* Cabeçalho */}
          <div className="h-fit">
            <Link to={`/perfil/${userId}`}>
              <p className="text-base font-bold">{name}</p>
            </Link>
            <p className="text-xs text-[#979797] -mt-0.5 mb-1">
              {new Date(timestamp).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          {/* Conteúdo Personalizado */}
          {content}

          {/* Ações Personalizadas */}
          {actions && (
            <div className="flex h-fit w-fit ml-auto mr-0 mb-0 mt-auto py-0.5">
              {actions}
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo Adicional (como comentários ou respostas) */}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};