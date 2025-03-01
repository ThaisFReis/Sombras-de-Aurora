import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { themes } from "@/utils/themes";

type ThemeContextType = {
  theme: keyof typeof themes;
  setTheme: (theme: keyof typeof themes) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Carregue o tema salvo no localStorage ou use o tema padrão ("default")
  const savedTheme = localStorage.getItem("theme") as keyof typeof themes;
  const [theme, setTheme] = useState<keyof typeof themes>(
    savedTheme && themes[savedTheme] ? savedTheme : "default"
  );

  // Atualize o localStorage sempre que o tema mudar
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};