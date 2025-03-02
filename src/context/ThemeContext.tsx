import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { themes } from "@/utils/themes";

type ThemeContextType = {
  theme: keyof typeof themes;
  setTheme: (theme: keyof typeof themes) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Carregue o tema e o modo dark salvos no localStorage
  const savedTheme = localStorage.getItem("theme") as keyof typeof themes;
  const savedDarkMode = localStorage.getItem("darkMode") === "true";

  // Estado para o tema atual
  const [theme, setTheme] = useState<keyof typeof themes>(
    savedTheme && themes[savedTheme] ? savedTheme : "default"
  );

  // Estado para o dark mode
  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

  // Função para alternar o dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Atualize o localStorage sempre que o tema ou o dark mode mudar
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [theme, isDarkMode]);

  // Aplique o tema dark correspondente quando o dark mode estiver ativo
  useEffect(() => {
    if (isDarkMode) {
      const darkTheme = `${theme}Dark` as keyof typeof themes;
      if (themes[darkTheme]) {
        setTheme(darkTheme);
      }
    } else {
      const lightTheme = theme.replace("Dark", "") as keyof typeof themes;
      setTheme(lightTheme);
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};