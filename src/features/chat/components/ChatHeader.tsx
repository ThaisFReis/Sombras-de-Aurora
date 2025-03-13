import { Input } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

interface ChatHeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onBack?: () => void; // Função opcional para voltar
  isOpen?: boolean; // Controla a exibição do botão de voltar
  chatName?: string | string[];
}

export const ChatHeader = ({
  searchTerm,
  onSearchChange,
  onBack,
  isOpen,
  chatName,
}: ChatHeaderProps) => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div
      className={`flex items-center justify-between rounded-lg bg-[${currentTheme.hashtag}]`}
    >
      {/* Botão de voltar (opcional) */}
      {isOpen && onBack && (
        <div className={`flex w-full p-4 justify-between items-center rounded-t-lg ${currentTheme.cardHeader}`}>
          <ArrowBackIosRoundedIcon onClick={onBack} className={`text-white mr-4`} />
          <h2 className={`text-lg font-bold text-white mr-6`}>
            {chatName}
          </h2>
        </div>
      )}

      {isOpen ? (
        // Campo de busca
        <div></div>
      ) : (
        <div className="flex-1 flex items-center">
          <Input
            className={`${currentTheme.sentBackground} border-none rounded-lg w-full p-1 shadow-none`}
            placeholder="Buscar conversas..."
            startAdornment={
              <SearchRoundedIcon className={`${currentTheme.hashtag} mr-2`} />
            }
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{ color: currentTheme.textDefault }}
          />
        </div>
      )}
    </div>
  );
};
