export const ProgressBar = () => {
  return (
    <div className="fixed top-0 right-0 h-screen flex items-start pt-16 mr-36 max-tablet:hidden">
      <div className="bg-white rounded-lg flex flex-col shadow-md w-[275px] h-[588px] p-6">
        {/* Seção de Progresso do Jogo */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Progresso do Jogo</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "45%" }} // Exemplo de progresso (45%)
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">45% concluído</p>
        </div>

        {/* Seção de Notificações */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Notificações</h2>
          <div className="space-y-2">
            <div className="flex items-center p-2 bg-gray-50 rounded-lg">
              <span className="text-sm">Nova mensagem recebida</span>
            </div>
            <div className="flex items-center p-2 bg-gray-50 rounded-lg">
              <span className="text-sm">Você tem uma nova escolha</span>
            </div>
          </div>
        </div>

        {/* Seção de Última Escolha */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Última Escolha</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Você escolheu investigar o apartamento de Sebastian.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};