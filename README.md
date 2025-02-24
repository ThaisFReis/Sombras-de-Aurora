# Projeto de Narrativa Interativa

Este projeto é uma narrativa interativa onde o usuário pode acompanhar e interagir com diferentes postagens e destaques criados por personagens, com base no desenvolvimento de um enredo dinâmico. Os personagens principais e suas postagens são influenciados pelos atos da história, permitindo uma experiência imersiva e envolvente.

## Sumário

- [Descrição do Projeto](#descrição-do-projeto)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Tipos de Dados](#tipos-de-dados)
- [Postagens e Destaques](#postagens-e-destaques)
- [Licença](#licença)

## Descrição do Projeto

O projeto é um jogo de narrativa com eventos que alteram o comportamento e a interação entre os personagens, incluindo postagens em redes sociais e destaques fixados. Os dados das postagens e dos destaques são apresentados em tempo real, com um sistema de evolução de confiança e escolhas dos usuários.

## Como Rodar o Projeto

Para rodar o projeto, siga os passos abaixo:

1. **Clonar o repositório:**
git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. **Instalar as dependências:**
Certifique-se de ter o Node.js instalado. Se não tiver, baixe [aqui](https://nodejs.org/).
npm install

3. **Rodar o servidor de desenvolvimento:**
npm run dev

4. **Abrir o navegador:**
Abra seu navegador em [http://localhost:3000](http://localhost:3000).

## Estrutura de Arquivos

/src /components # Componentes principais da UI /data # Arquivos de dados, como postagens, destaques e narrativa /hooks # Hooks customizados /styles # Arquivos de estilo, incluindo Tailwind /types # Tipos e interfaces do TypeScript App.tsx # Arquivo principal do React index.tsx # Ponto de entrada do projeto /public index.html # Arquivo HTML principal

## Tipos de Dados

O projeto utiliza diversos tipos para estruturar as postagens e destaques. Aqui estão os tipos principais que você vai encontrar no código:

```typescript
interface Post {
  id: string;
  usuario: string;
  texto: string;
  tipo: 'texto' | 'imagem' | 'video' | 'audio';
  data?: string; // A data da postagem
}

interface Destaque {
  id: string;
  usuario: string;
  titulo: string;
  descricao: string;
  tipo: 'texto' | 'imagem' | 'video' | 'audio';
  descricao_imagem?: string; // Descrição para IA gerar imagens
  renderizar: string; // Determina quando o destaque será renderizado
}
Postagens e Destaques
As postagens e os destaques são carregados a partir de arquivos de dados em formato JSON. Eles são renderizados com base nas interações do usuário e na sequência dos atos da história.

Exemplo de Postagens
json
Copiar
Editar
{
  "usuario": "@gamer_ryan",
  "texto": "Finalmente platinei Eclipse Online! Depois de 142 horas e 3 rage quits. Nunca mais jogo isso (até lançarem a DLC 😅).",
  "tipo": "texto",
  "data": "3 meses atrás"
}
Exemplo de Destaques
json
Copiar
Editar
{
  "id": "destaque1",
  "usuario": "gamer_ryan",
  "titulo": "Top Chefões Injustos",
  "descricao": "Thread sobre os chefões mais difíceis e injustos dos games.",
  "tipo": "texto",
  "renderizar": "inicio_ato_1"
}
Licença
Este projeto está licenciado sob a Licença MIT.