import { useState } from "react";
import { Switch } from "@/components/ui/Switch";
import { useTheme } from "@/context/ThemeContext";
//import { themes } from "@/utils/themes";

export const Configuracoes = () => {
  const { theme, setTheme } = useTheme();
  //const currentTheme = themes[theme];

  const [username, setUsername] = useState("aurora_eco");
  const [bio, setBio] = useState("Observando o que não devia ser visto.");
  const [notifications, setNotifications] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);

  const handleThemeChange = () => {
    // Toggle between "default" and "defaultDark" as an example
    setTheme(theme === "pixelBlueDark" ? "pixelBlue" : "pixelBlueDark");
  };

  return (
    <div className="h-full w-3/4  text-zinc-100 overflow-y-auto space-y-6">
      {/* Seção: Perfil */}
      <section className="bg-zinc-900/60 backdrop-blur-md p-5 rounded-2xl border border-zinc-800 shadow-lg space-y-4">
        <h2 className="text-lg font-semibold">Perfil</h2>
        <div className="space-y-2">
          <label className="block text-sm text-zinc-400">Nome de usuário</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-zinc-800 text-zinc-100 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-zinc-400">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full bg-zinc-800 text-zinc-100 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={3}
          />
        </div>
      </section>

      {/* Seção: Preferências */}
      <section className="bg-zinc-900/60 backdrop-blur-md p-5 rounded-2xl border border-zinc-800 shadow-lg space-y-4">
        <h2 className="text-lg font-semibold">Preferências</h2>
        <div className="flex items-center justify-between">
          <Switch
            checked={theme === "pixelBlueDark"}
            onCheckedChange={handleThemeChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-300">Notificações</span>
          <Switch
            checked={notifications}
            onCheckedChange={() => setNotifications(!notifications)}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-300">Perfil privado</span>
          <Switch
            checked={privateProfile}
            onCheckedChange={() => setPrivateProfile(!privateProfile)}
          />
        </div>
      </section>

      {/* Seção: Perigo */}
      <section className="bg-zinc-900/60 backdrop-blur-md p-5 rounded-2xl border border-red-500/30 shadow-lg space-y-4">
        <h2 className="text-lg font-semibold text-red-400">Ações perigosas</h2>
        <button
          className="w-full text-red-400 text-sm py-2 px-4 border border-red-500/40 rounded-xl hover:bg-red-500/10 transition"
          onClick={() => alert("Progresso redefinido (placeholder).")}
        >
          Redefinir jogo
        </button>
        <button
          className="w-full text-red-400 text-sm py-2 px-4 border border-red-500/40 rounded-xl hover:bg-red-500/10 transition"
          onClick={() => alert("Você saiu da rede (placeholder).")}
        >
          Sair da conta
        </button>
      </section>
    </div>
  );
};
