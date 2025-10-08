
**“Spec Engineering”**

    Comunicação com o Banco de Dados:
> **Decisão:** Usar Prisma
> **Alternativa:** Knex e TypeORM
> **Motivo:** A segurança de tipos que ele oferece
> **Contra:** Possível aumento no tempo de build em projetos grandes

    Biblioteca de Validação de Dados:
> **Decisão:** Usar Zod
> **Alternativa:** Yup
> **Motivo:** A integração com a linguagem é perfeita
  **Contra** Menor suporte nativo a validações assíncronas

    Estrutura REACT:
> **Decisão:** Usar Vite
> **Alternativa:** CRA
> **Motivo:** Porque é a escolha moderna, rápida e recomendada pela comunidade.
  **Contra** Um pouco mais novo que o do CRA talvez dificil achar material

    Sistema de Modulos:
> **Decisão:** Usar ES Modules
> **Alternativa:** Manter o padrão legado do Node.js, CommonJS (CJS)
> **Motivo:** práticas mais modernas e sustentáveis da engenharia de software
  **Contra** Algumas bibliotecas mais antigas ou que não recebem manutenção constante no ecossistema Node.js podem ter sido escritas exclusivamente para CommonJS
