import {
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center w-full bg-background p-4 justify-between shadow-lg">
      {/* Logo e Nome do Jogo */}
      <div className="flex items-center space-x-2">
        {/* <img
          src="/logo.png" // Substitua pelo caminho do seu logo
          alt="Logo do Jogo"
          className="w-8 h-8"
        /> */}
        <Link to={"/"}>
          <p className="text-2xl font-bold text-[#8488b2] ">Sombras de Aurora</p>
        </Link>
      </div>
      {/* Barra de Busca */}
      {/* <div className="relative flex-1 mx-8 max-w-md">
        <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full pl-10 pr-3 py-2 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
        />
      </div> */}

      {/* Ícones de Ações */}
      <div className="flex items-center space-x-4">
        {/* Ícone de Notificações */}
        <button
          title="Notificações"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
        >
          <BellIcon className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="relative group">
          {/* Ícone de Configurações */}
          <button
            title="Configurações"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Cog6ToothIcon className="w-6 h-6 text-gray-600" />
          </button>
          {/* Menu Dropdown (opcional) */}
          <div className="absolute right-0 mt-2 w-48 bg-background rounded-lg shadow-sm hidden group-hover:block">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Meu Perfil
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Configurações
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                Sair
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
