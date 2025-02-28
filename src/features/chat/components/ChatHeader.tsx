import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

export const ChatHeader = ({
  onClose,
  newMessages = 0,
}: {
  onClose: () => void;
  newMessages?: number;
}) => {
  return (
    <div className="flex items-center justify-between p-2 bg-pink-600 text-white">
      {/* Título + badge de novas mensagens */}
      <div className="flex items-center gap-2">
        <span className="font-semibold">Chat</span>
        {newMessages > 0 && (
          <span className="bg-red-500 rounded-full px-2 py-1 text-xs">
            {newMessages} novas
          </span>
        )}
      </div>

      {/* Busca + botão fechar */}
      <div className="flex items-center gap-2">
        {/* Input de pesquisa */}
        <div className="relative">
          <ArrowBackIosRoundedIcon className="w-4 h-4 absolute left-2 top-2 text-gray" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="pl-7 pr-2 py-1 rounded text-black text-sm"
          />
        </div>

        {/* Botão para minimizar/fechar o chat */}
        <button onClick={onClose} title="Minimizar chat">
          <CloseRoundedIcon className="w-5 h-5 text-gray" />
        </button>
      </div>
    </div>
  );
};
