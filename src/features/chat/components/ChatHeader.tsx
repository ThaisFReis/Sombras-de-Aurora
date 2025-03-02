import { Input } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/themes";

interface ChatHeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onBack?: () => void; // Função opcional para voltar
  showBackButton?: boolean; // Controla a exibição do botão de voltar
}

export const ChatHeader = ({
  searchTerm,
  onSearchChange,
  onBack,
  showBackButton,
}: ChatHeaderProps) => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className={`flex items-center justify-between p-4 ${currentTheme.cardBackground}`}>
      {/* Botão de voltar (opcional) */}
      {showBackButton && onBack && (
        <button
          onClick={onBack}
          className={`${currentTheme.sentBackground} ${currentTheme.textDefault} px-2 py-1 rounded text-sm mr-2`}
        >
          Voltar
        </button>
      )}

      {/* Campo de busca */}
      <div className="flex-1 flex items-center">
        <Input
          className={`${currentTheme.sentBackground} border-none rounded-lg w-full p-1 shadow-none`}
          placeholder="Buscar conversas..."
          startAdornment={<SearchRoundedIcon className={`${currentTheme.hashtag} mr-2`} />}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{ color: currentTheme.textDefault }}
        />
      </div>
    </div>
  );
};