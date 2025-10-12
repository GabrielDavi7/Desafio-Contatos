# 🧠 Desafio Técnico — Cadastro de Contatos

Aplicação full-stack de um sistema de gerenciamento de contatos.

- **Backend:**
  - CRUD completo para contatos (`Create`, `Read`, `Update`, `Delete`).
  - Listagem com busca, paginação e ordenação.
  - Validação de dados de entrada com Zod.
  - Script de "seed" para popular o banco de dados com dados de exemplo.
- **Frontend:**
  - Interface reativa para visualizar, criar, editar e excluir contatos.
  - Atualização da UI em tempo real.
  - Controles de paginação e ordenação pela interface.

## Backend

_Pré-requisitos_

- Node.js
- npm
- PostgreSQL instalado e rodando

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/GabrielDavi7/Desafio-Contatos](https://github.com/GabrielDavi7/Desafio-Contatos)
    cd Desafio-Contatos/backend
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Crie e configure as variáveis de ambiente:**
    - Na raiz da pasta `backend`, crie um novo arquivo chamado `.env`.
    - Dentro deste arquivo, adicione a linha abaixo, substituindo pelos seus dados do PostgreSQL (seu usuário, sua senha e o nome do banco `contatos_base`):
    ```.env
    DATABASE_URL="postgresql://SEU_USUARIO:SUA_SENHA@localhost:5432/contatos_base"
    ```
4.  **Execute as migrações do banco de dados:**

    Execute as migrações para criar as tabelas:

    ```bash
    npx prisma migrate dev
    ```

    Popule o banco com dados de exemplo:

    ```bash
    npx prisma db seed
    ```

5.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    O servidor backend estará rodando em `http://localhost:3000`.

    Para rodar os testes do backend (em um terminal separado):

    ```bash
    npm run test
    ```

## Frontend

1.  **Entre na pasta:**
    ```bash
    cd Desafio-Contatos/frontend
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie a aplicação:**
    ```bash
    npm run dev
    ```
4.  **Para rodar os teste do frontend:**
    ```bash
    npm run test
    ```

## Api Endpoints

`GET` | `/contacts` | Lista contatos. Query params: `q`, `page`, `pageSize`, `sort`, `order`.
`POST` | `/contacts` | Cria um novo contato.  
`PUT` | `/contacts/:id` | Atualiza um contato existente.  
`DELETE` | `/contacts/:id` | Deleta um contato existente.

## Spec Engineering

_Comunicação com o Banco de Dados:_

> **Decisão:** Usar Prisma
> **Alternativa:** Knex e TypeORM
> **Motivo:** A segurança de tipos que ele oferece
> **Contra:** Possível aumento no tempo de build em projetos grandes

_Biblioteca de Validação de Dados:_

> **Decisão:** Usar Zod
> **Alternativa:** Yup
> **Motivo:** A integração com a linguagem é perfeita
> **Contra:** Menor suporte nativo a validações assíncronas

_Estrutura REACT:_

> **Decisão:** Usar Vite
> **Alternativa:** CRA
> **Motivo:** Porque é a escolha moderna, rápida e recomendada pela comunidade.
> **Contra:** Um pouco mais novo que o do CRA talvez dificil achar material

_Sistema de Modulos:_

> **Decisão:** Usar ES Modules
> **Alternativa:** Manter o padrão legado do Node.js, CommonJS (CJS)
> **Motivo:** práticas mais modernas e sustentáveis da engenharia de software
> **Contra:** Algumas bibliotecas mais antigas ou que não recebem manutenção constante no ecossistema Node.js podem ter sido escritas exclusivamente para CommonJS

## Prompt Engineering

Utilizei uma IA generativa (Gemini) como assistente de pair programming e para acelerar meu processo de aprendizado. Minha estratégia foi híbrida: usei a IA para um diálogo contínuo de planejamento, implementação incremental e aplicação de boas práticas, enquanto recorria a vídeos no YouTube para aprofundar conceitos fundamentais de React, backend e frontend. A IA foi especialmente valiosa na depuração, onde eu apresentava os logs de erro que não conseguia identificar de imediato e, através da colaboração passo a passo, chegávamos à causa raiz do problema.
