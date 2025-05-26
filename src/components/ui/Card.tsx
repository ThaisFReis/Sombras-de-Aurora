import { ReactNode, CSSProperties } from "react"; // Importe CSSProperties
import { Link } from "react-router-dom";
import { Icon } from "@/components/ui/Icon";
import { useTheme } from "@/context/ThemeContext"; // Importe o useTheme
import { themes } from "@/utils/themes";

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
}: CardProps) => {
  const { theme } = useTheme(); // Acesse o tema atual
  const currentTheme = themes[theme]; // Obtenha as cores do tema atual

  return (
    <div
      className={`rounded-lg flex flex-col ${classname} ${currentTheme.cardBackground} `}
    >
      {/* <div
      className={`rounded-lg flex flex-col ${classname} ${currentTheme.cardBackground} `}
    > */}
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
                <div
                  className={`w-[50px] h-[50px] flex items-center justify-center rounded-full font-semibold font-josefin ${currentTheme.receivedBackground} ${currentTheme.textDefault}`} // Aplica a cor de fundo do tema
                >
                  {name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </Link>
        </div>

        {/* Conteúdo Principal */}
        <div className={`w-full flex flex-col ${currentTheme.hashtag}`}>
          {/* Cabeçalho */}
          <div className="h-fit">
            <Link to={`/perfil/${userId}`}>
              <p
                className={`text-base font-bold font-josefin ${currentTheme.hashtag}`}
              >
                {name}
              </p>
            </Link>
            <p
              className={`text-xs -mt-0.5 mb-1 font-josefin ${currentTheme.textLight}`}
            >
              {new Date(timestamp).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          {/* Conteúdo Personalizado */}
          <span
            className={`${currentTheme.textPrimary} `}
            style={{ color: currentTheme.textPrimary }}
          >
            {content}
          </span>

          {/* Ações Personalizadas */}
          {actions && (
            <div className="flex h-fit w-fit ml-auto mr-0 mb-0 mt-auto py-0.5">
              {actions}
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo Adicional (como comentários ou respostas) */}
      {children && (
        <div className="mt-4 font-medium font-ubuntu">{children}</div>
      )}
    </div>
  );
};
