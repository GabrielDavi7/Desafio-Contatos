# 🧠 Desafio Técnico — Cadastro de Contatos

## Teste Backend

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
    ```bash
    npx prisma migrate dev
    ```
5.  **Inicie o servidor de desenvolvimento:**
    `bash
npm run dev
`
    O servidor backend estará rodando em `http://localhost:3000`.

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
> **Contra** Menor suporte nativo a validações assíncronas

_Estrutura REACT:_

> **Decisão:** Usar Vite
> **Alternativa:** CRA
> **Motivo:** Porque é a escolha moderna, rápida e recomendada pela comunidade.
> **Contra** Um pouco mais novo que o do CRA talvez dificil achar material

_Sistema de Modulos:_

> **Decisão:** Usar ES Modules
> **Alternativa:** Manter o padrão legado do Node.js, CommonJS (CJS)
> **Motivo:** práticas mais modernas e sustentáveis da engenharia de software
> **Contra** Algumas bibliotecas mais antigas ou que não recebem manutenção constante no ecossistema Node.js podem ter sido escritas exclusivamente para CommonJS
