import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} className='bg-lightGray '
        sx={{
          backgroundColor: 'lightgray',
          fontColor: "messageReceived",
          color: "messageReceived"
        }} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export const ProgressBar = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 h-screen flex items-start pt-16 mr-36 max-tablet:hidden">
      <div className="bg-white rounded-lg flex flex-col shadow-md w-[275px] h-[588px] p-6 space-y-6">
        {/* Seção de Progresso do Jogo */}
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">Progresso do Jogo</p>
        </div>
        <LinearProgressWithLabel value={progress} />

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