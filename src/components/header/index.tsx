import { MagnifyingGlassIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <header className="flex items-center w-full bg-[#a4a4a4] p-4 justify-between text-gray-700 shadow">
      {/* Nome do jogo (anagrama de "Thais Ferreira Reis") */}
      <h1 className="text-xl font-bold">
        StarfireHeirAries
        Sr
      </h1>

      {/* Barra de busca */}
      <div className="relative">
        <MagnifyingGlassIcon className="w-4 h-4 absolute left-2 top-2 text-gray-400" />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="pl-7 pr-2 py-1 rounded text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>

      {/* Botão de configurações */}
      <button
        title="Abrir configurações"
        className="p-2 rounded hover:bg-gray-200 transition-colors"
      >
        <Cog6ToothIcon className="w-6 h-6 text-gray-600" />
      </button>
    </header>
  );
};
