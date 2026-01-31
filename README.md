# Etapa de Matrículas 2026

Este projeto é uma ferramenta prática para identificar a série ou etapa escolar correta para estudantes no ano letivo de 2026, baseando-se na sua data de nascimento.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **React 19**: Biblioteca para construção da interface.
- **Vite**: Ferramenta de build rápida para o desenvolvimento moderno.
- **MUI (Material UI)**: Biblioteca de componentes de interface para um design consistente e responsivo.
- **React Router 7**: Gerenciamento de rotas e navegação da aplicação.

## 🛠️ Como Executar o Projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Instale as dependências do projeto:
   ```bash
   npm install
   ```

2. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse o endereço indicado no terminal (geralmente `http://localhost:5173`) para visualizar a aplicação.

## 📁 Estrutura de Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR).
- `npm run build`: Gera os arquivos otimizados para produção na pasta `dist`.
- `npm run lint`: Analisa o código em busca de erros e problemas de padronização.
- `npm run preview`: Executa um servidor local para testar a versão de produção gerada.

## 📝 Detalhes da Aplicação

A aplicação calcula a etapa escolar baseando-se em regras de corte de data de nascimento (geralmente considerando o limite de 31 de março para mudança de série no Brasil, conforme configurado nos dados do sistema).

---
Projeto desenvolvido para facilitar o processo de consulta de matrículas.
