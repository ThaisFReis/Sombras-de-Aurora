# E-commerce Simples

Um e-commerce simples desenvolvido com React (TSX) no front-end e Node.js (Express) no back-end. O projeto inclui funcionalidades como listagem de produtos, detalhes do produto, carrinho de compras e integração com uma API RESTful.

## 🚀 Tecnologias Utilizadas

### Front-end

- **React** com TypeScript (TSX)
- **Tailwind CSS** para estilização
- **React Router** para navegação
- **Axios** para chamadas à API
- **Vite** como bundler

### Back-end

- **Node.js** com **Express**
- **Mongoose** para conexão com o MongoDB
- **TypeScript** para tipagem estática
- **CORS** para permitir requisições do front-end

## 📦 Estrutura do Projeto

### Front-end

ecommerce-frontend/
├── public/
├── src/
│ ├── components/ # Componentes reutilizáveis
│ ├── pages/ # Páginas do e-commerce
│ ├── services/ # Chamadas à API
│ ├── types/ # Tipos TypeScript
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.ts

### Back-end

ecommerce-backend/
├── src/
│ ├── controllers/ # Lógica das rotas
│ ├── models/ # Modelos do banco de dados
│ ├── routes/ # Definição das rotas
│ ├── services/ # Lógica de negócios
│ ├── utils/ # Funções utilitárias
│ ├── app.ts # Configuração do Express
│ └── server.ts # Inicialização do servidor
├── package.json
├── tsconfig.json
└── .env # Variáveis de ambiente

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

- Node.js (v16 ou superior)
- Yarn (ou npm)
- MongoDB (local ou Atlas)

### Passos para Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/ecommerce.git
   cd ecommerce
   Configure o back-end:
   ```

Acesse a pasta do back-end:

bash

cd ecommerce-backend
Instale as dependências:

bash

yarn install
Crie um arquivo .env na raiz do back-end e configure as variáveis de ambiente:

env

PORT=5000
MONGO_URI=sua_string_de_conexao_do_mongodb
Inicie o servidor:

bash

yarn dev
Configure o front-end:

Acesse a pasta do front-end:

bash

cd ../ecommerce-frontend
Instale as dependências:

bash

yarn install
Inicie o servidor de desenvolvimento:

bash

yarn dev
Acesse o projeto:

O front-end estará disponível em: http://localhost:5173

O back-end estará disponível em: http://localhost:5000

🌐 Rotas da API
Produtos
GET /api/products - Lista todos os produtos.

GET /api/products/:id - Retorna detalhes de um produto específico.

Carrinho
POST /api/cart - Adiciona um item ao carrinho.

GET /api/cart - Retorna os itens do carrinho.

DELETE /api/cart/:id - Remove um item do carrinho.

🖼️ Screenshots
Adicione algumas capturas de tela do projeto aqui. Por exemplo:

Página inicial com a listagem de produtos.

Página de detalhes do produto.

Carrinho de compras.

📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🤝 Como Contribuir
Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adiciona nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

🙏 Agradecimentos
Vite por fornecer um ambiente de desenvolvimento rápido.

Tailwind CSS por facilitar a estilização.

MongoDB por fornecer um banco de dados flexível.
