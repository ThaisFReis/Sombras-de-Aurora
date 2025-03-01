import { useState } from "react";
import { themes } from "@/utils/themes";
import { ProgressBar } from "@/components/ProgressBar";
import { useTheme } from "@/context/ThemeContext";

export const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<keyof typeof themes>(theme);

  const applyTheme = (themeKey: keyof typeof themes) => {
    setSelectedTheme(themeKey);
    setTheme(themeKey);
  };

  // Componente interno para visualização do tema selecionado
  const ThemePreview = ({ themeKey }: { themeKey: keyof typeof themes }) => {
    const theme = themes[themeKey];

    // Verificação de segurança
    if (!theme) {
      return <div className="text-red-500">Tema não encontrado.</div>;
    }

    return (
      <div className={`w-full p-4 rounded-lg ${theme.primaryBackground}`}>
        <p className="text-sm">Este é um exemplo de como o tema selecionado será aplicado.</p>
        <div className={`mt-2 p-2 rounded-lg ${theme.messageReceived}`}>
          <p className="text-sm">Mensagem recebida</p>
        </div>
        <div className={`mt-2 p-2 rounded-lg ${theme.messageSent}`}>
          <p className="text-sm">Mensagem enviada</p>
        </div>
        <div className={`mt-2 p-2 rounded-lg ${theme.hashtag}`}>
          <p className="text-sm">Hashtag</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen flex justify-between py-6">
      <div className="flex flex-col space-y-6 items-center">
        <div className="bg-white rounded-lg flex flex-col shadow-md w-[550px] h-fit p-4 items-center justify-center">
          <h1 className="font-bold text-2xl mb-4">Configurações</h1>

          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Escolha um tema:
            </label>
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.keys(themes).map((themeKey) => {
                const isSelected = selectedTheme === themeKey;
                const theme = themes[themeKey as keyof typeof themes];

                // Verificação de segurança
                if (!theme) return null;

                return (
                  <button
                    key={themeKey}
                    onClick={() => applyTheme(themeKey as keyof typeof themes)}
                    className={`w-12 h-12 rounded-full ${theme.primaryBackground} border-2 ${
                      isSelected ? "border-[#969EF5]" : "border-transparent"
                    } focus:outline-none focus:ring-2 focus:ring-[#969EF5]`}
                    aria-label={`Selecionar tema ${themeKey}`}
                    aria-selected={isSelected}
                    title={themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
                  />
                );
              })}
            </div>
          </div>

          {/* Visualização do tema selecionado */}
          <ThemePreview themeKey={selectedTheme} />
        </div>
      </div>

      <ProgressBar />
    </div>
  );
};