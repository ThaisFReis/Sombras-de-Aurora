import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useTheme } from "@/context/ThemeContext"; // Importe o useTheme
import { themes } from "@/utils/themes";

interface IconMenuProps {
  link: string;
  icon: React.ElementType; // Tipo para componentes de ícone
  classname?: string;
  size?: number; // Tamanho do ícone
}

const menuData: IconMenuProps[] = [
  {
    link: "/",
    icon: PeopleRoundedIcon,
    classname: "mt-0 mb-auto",
    size: 36, // Ícone do topo (maior)
  },
  {
    link: "/",
    icon: HomeRoundedIcon,
    classname: "mt-auto -mb-8",
    size: 28, // Ícone do meio (menor)
  },
  {
    link: "/perfil/0",
    icon: PersonRoundedIcon,
    classname: "mt-auto -mb-8",
    size: 28, // Ícone do meio (menor)
  },
  {
    link: "/chat",
    icon: SmsRoundedIcon,
    classname: "mt-auto mb-auto",
    size: 28, // Ícone do meio (menor)
  },
  {
    link: "/settings",
    icon: SettingsRoundedIcon,
    classname: "mt-auto mb-0",
    size: 36, // Ícone do último (maior)
  },
];

const IconMenu = ({ link, icon: IconComponent, classname, size }: IconMenuProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation(); // Obtém a localização atual
  const { theme } = useTheme(); // Acesse o tema atual

  // Verifica se o ícone está ativo (na página atual)
  const isActive = location.pathname === link;

  return (
    <Link
      to={link}
      className={classname}
      onMouseEnter={() => setIsHovered(true)} // Ativa o hover
      onMouseLeave={() => setIsHovered(false)} // Desativa o hover
      aria-label={`Navegar para ${link}`} // Melhora a acessibilidade
    >
      <IconComponent
        className={`transition-colors duration-200 ${
          isActive || isHovered ? themes[theme].iconAtive : themes[theme].iconDisable
        }`} // Aplica a cor correta
        style={{ fontSize: isHovered ? (size || 0) + 2 : size }} // Aumenta o tamanho em 2px no hover
      />
    </Link>
  );
};

export const Sidebar = () => {
  const { theme } = useTheme(); // Acesse o tema atual

  return (
    <div
      className="fixed top-0 left-0 h-screen w-[100px] bg-white flex flex-col items-center rounded-r-xl rounded-br-xl shadow-sm p-8 justify-center"
      style={{ backgroundColor: themes[theme].cardBackground }} // Aplica o fundo do tema
    >
      {menuData.map((item, index) => (
        <IconMenu
          key={index}
          link={item.link}
          icon={item.icon}
          classname={item.classname}
          size={item.size} // Passa o tamanho do ícone
        />
      ))}
    </div>
  );
};