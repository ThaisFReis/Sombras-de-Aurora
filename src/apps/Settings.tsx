import { useState } from "react";
import { themes } from "@/utils/themes";
import { useTheme } from "@/context/ThemeContext";
import { ProgressBar } from "@/components/ProgressBar";
import { WindowApp } from "@/components/WindowApp";

export const Settings = ({ onClose }: { onClose: () => void }) => {
  const { theme, setTheme, isDarkMode, toggleDarkMode } = useTheme();
  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof themes>(theme);

  const applyTheme = (themeKey: keyof typeof themes) => {
    const darkThemeKey = `${themeKey}Dark` as keyof typeof themes;
    const newTheme =
      isDarkMode && themes[darkThemeKey] ? darkThemeKey : themeKey;
    setSelectedTheme(newTheme);
    setTheme(newTheme);
  };

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    const baseTheme = selectedTheme.replace("Dark", "") as keyof typeof themes;
    const newTheme = isDarkMode
      ? baseTheme
      : (`${baseTheme}Dark` as keyof typeof themes);
    setSelectedTheme(newTheme);
    setTheme(newTheme);
  };

  const ThemePreview = ({ themeKey }: { themeKey: keyof typeof themes }) => {
    const theme = themes[themeKey];
    if (!theme) return null;

    return (
      <div
        className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
        style={{
          backgroundImage: `url(${theme.cardBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-sm mb-2 opacity-80">Prévia do Tema:</p>
        <div className={`mb-2 p-2 rounded ${theme.receivedBackground}`}>
          <p className="text-xs">Mensagem recebida</p>
        </div>
        <div className={`mb-2 p-2 rounded ${theme.sentBackground}`}>
          <p className="text-xs">Mensagem enviada</p>
        </div>
        <div className={`p-2 rounded ${theme.hashtag}`}>
          <p className="text-xs">Hashtag</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex-1 flex flex-col items-center gap-6">
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/10">
          <h1 className="text-2xl font-semibold mb-4 text-center tracking-wide">
            ⚙️ Configurações Gerais
          </h1>

          {/* Dark Mode Toggle */}
          <button
            onClick={handleToggleDarkMode}
            className="w-full mb-6 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-medium transition"
          >
            {isDarkMode ? "🌙 Dark Mode ativado" : "☀️ Ativar Dark Mode"}
          </button>

          {/* Escolha de Tema */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Escolha um tema:
            </label>
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.keys(themes).map((themeKey) => {
                if (themeKey.endsWith("Dark")) return null;

                const isSelected =
                  selectedTheme === themeKey ||
                  selectedTheme === `${themeKey}Dark`;
                const theme = themes[themeKey as keyof typeof themes];

                return (
                  <button
                    key={themeKey}
                    onClick={() => applyTheme(themeKey as keyof typeof themes)}
                    className={`w-12 h-12 rounded-full border-2 shadow-inner transition-all duration-200 ${
                      isSelected
                        ? "border-indigo-400 ring-2 ring-indigo-500"
                        : "border-zinc-700"
                    }`}
                    style={{
                      backgroundImage: `url(${theme.primaryBackground})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    title={`Tema: ${themeKey}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Prévia */}
          <ThemePreview themeKey={selectedTheme} />
        </div>
      </div>

      {/* Progress bar ou painel lateral */}
      <div className="md:w-64 w-full">
        <ProgressBar />
      </div>
    </>
  );
};
