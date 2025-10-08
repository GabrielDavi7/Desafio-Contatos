# 🧠 Desafio Técnico — Context Challenge

**Stack:** Node.js + React + TypeScript + PostgreSQL

> Este desafio foi criado para avaliar **engenharia de software, clareza contextual e raciocínio técnico**.
> Queremos ver **como você pensa**, **como comunica decisões** e **como estrutura código de forma sustentável** — não apenas se “funciona”.

---

## 🎯 Objetivo

Crie uma pequena aplicação full-stack de **cadastro de contatos**, com backend em **Node/TypeScript** e frontend em **React/TypeScript**.

O foco é avaliar sua capacidade de:

1. **Compreender contexto e modelar corretamente.**
2. **Comunicar decisões e trade-offs.**
3. **Escrever código limpo, tipado, modular e previsível.**
4. **Validar e documentar API e comportamento do sistema.**
5. **Demonstrar clareza de raciocínio técnico.**

---

## ⚙️ Requisitos obrigatórios

### **Entidade única: `Contact`**

Campos: `id`, `name`, `email`, `phone`, `createdAt`, `updatedAt`.

### **API REST (Node + TypeScript)**

- `GET /contacts?q=term&page=1&pageSize=10` → listar com **paginação** e **busca** por nome/email
- `POST /contacts` → criar
- `PUT /contacts/:id` → atualizar
- `DELETE /contacts/:id` → excluir
- Retornar **status HTTP corretos** e mensagens de erro claras

### **Banco de Dados: PostgreSQL**

- Utilize **Prisma**, **Knex** ou **TypeORM**
- Inclua **migrações versionadas** e **seed** com pelo menos **10 contatos**

### **Validação e Tipagem**

- Tipos fortes em **TypeScript** (DTOs, services, controllers)
- Validação server-side (**Zod**, **Yup** ou **class-validator**) para `email` e campos obrigatórios

### **Frontend (React + TypeScript)**

- Tela única com:
  - Lista de contatos com **busca** e **paginação**
  - Formulário de **criação/edição** com **validação inline**
  - Feedback de **loading** e **erro**

### **Qualidade mínima**

- `README` claro explicando como rodar
- Scripts: `dev`, `build`, `test` (pelo menos 1 teste simples)
- **ESLint + Prettier** configurados

---

## 🌟 Opcionais (valem pontos extras)

- Ordenação: `?sort=name|createdAt&order=asc|desc`
- Testes: 1 unit no backend e 1 no frontend
- Docker Compose com Postgres e API
- CI (GitHub Actions)
- Deploy (Vercel/Render/Railway)

> 💡 **Nota:** Deploy e CI são opcionais e **não decisivos**.
> O principal critério é **clareza de decisão e maturidade de engenharia.**

---

## 🧭 Opcionais de Engenharia (🏆 Decisivos)

Esses três blocos somam até **+18 pontos bônus** e podem definir o resultado final.
Eles medem **pensamento técnico, clareza e contexto**, não apenas execução.

---

### ⚙️ **1. Spec Engineering (+6 pts)**

Inclua no README uma seção **“Spec Engineering”** com:

- **Assunções explícitas:** hipóteses feitas (ex: paginação padrão, formato de telefone, unicidade de email)
- **Perguntas que faria ao time:** decisões ambíguas ou regras ausentes
- **Mini-ADRs (Arquitetural Decision Records):**
  - Contexto
  - Alternativas consideradas
  - Decisão final
  - Consequência (positiva e negativa)

> 💡 Exemplo curto:
> **Decisão:** Usar Prisma
> **Alternativa:** Knex
> **Motivo:** Tipagem mais forte e integração simplificada
> **Custo:** Menor flexibilidade em queries raw

---

### 🌐 **2. Context Engineering (+6 pts)**

Inclua no README uma seção **“Context Engineering”** explicando:

- **Escalabilidade:** e se houver 1 milhão de contatos? (índices, caching, paginação keyset)
- **Confiabilidade:** transações, idempotência, tratamento de falhas
- **Evolução:** adicionar `Company` (1:N) sem quebrar a API
- **Observabilidade:** logs estruturados, métricas, correlação de requests

> 💡 Pense como se seu backend estivesse num ecossistema Synkro: múltiplas APIs, filas e integrações simultâneas.

---

### 🧠 **3. Prompt Engineering (+6 pts)**

Inclua no README uma seção **“Prompt Engineering”**, descrevendo:

- **Como usou (ou usaria) IA** no processo (ChatGPT, Copilot, Windsurf, Cursor)
- **2 prompts reais** que geraram valor (ex: gerar schema, revisar API, criar testes)
- **Checklist de revisão manual** (tipagem, segurança, erros, edge cases)

> 💡 Use IA como **copiloto**, não substituto. Mostre como filtrou e aprimorou o output.

---

## ⚒️ Dicas de Produtividade — Cursor e Windsurf

Ferramentas de IA podem acelerar o desenvolvimento se usadas com consciência.

### 🧭 **Cursor**

- `⌘ + K` (Mac) / `Ctrl + K` (Win/Linux) abre o **Command Palette**
- Comandos úteis:
  - `"Generate validation for Zod schema"`
  - `"Refactor controller for better error handling"`
  - `"Write Jest test for service"`
- Revise manualmente cada sugestão e **documente no README** o que aceitou ou descartou

### 🌊 **Windsurf (AI Pair Programming)**

- Use o painel **Context Chat** para discutir seu repositório:
  > “Como posso separar regras de negócio do controller?”
- O Windsurf entende o projeto inteiro e sugere melhorias arquiteturais e de tipagem
- Armazene prompts reutilizáveis e descreva no README como os aplicou

> ⚠️ Todo uso de IA deve ser descrito na seção **Prompt Engineering**, com:
>
> - Onde foi usada
> - Como foi revisada
> - O que foi aceito ou descartado

---

## 🧮 Critérios de Avaliação (60 pts + até 28 pts bônus)

| Critério                | Pontos | Descrição                             |
| ----------------------- | ------ | ------------------------------------- |
| **Funcional**           | 20     | CRUD, busca e paginação funcionando   |
| **Código & TS**         | 15     | Estrutura modular e tipagem rigorosa  |
| **API & Erros**         | 10     | Status, mensagens, validações         |
| **Frontend/UX**         | 10     | Usabilidade, feedback, UX simples     |
| **DevEx**               | 5      | Scripts, lint, clareza do README      |
| **Spec Engineering**    | +6     | Clareza de decisão e trade-offs       |
| **Context Engineering** | +6     | Escalabilidade e confiabilidade       |
| **Prompt Engineering**  | +6     | Uso inteligente de IA                 |
| **Outros Bônus**        | +10    | Ordenação, testes, Docker, CI, deploy |

> 🏁 **Nota:** Os blocos de engenharia têm **peso maior e caráter decisivo**.
> Mesmo sem deploy, um candidato com raciocínio claro pode atingir **nota máxima**.

---

## ⚖️ Conduta e Anti-plágio

- Pode **pesquisar**, mas documente **decisões e fontes** no README
- **Proibido** copiar projetos prontos sem atribuição
- Se usar **IA**, explique:
  - **Como** foi usada e **o que** revisou manualmente
  - **Prompts e links** relevantes
- **Histórico de commits coerente** será avaliado — commits granulares > commits únicos

---

## 📡 Contrato da API (resumo)

**Listar** — `GET /contacts?q=ana&page=1&pageSize=10`

```json
{ "data": [...], "page": 1, "pageSize": 10, "total": 42 }
```

````

**Criar** — `POST /contacts`

```json
{ "name": "Ana", "email": "ana@ex.com", "phone": "+55 31 90000-0000" }
```

**Atualizar** — `PUT /contacts/:id`
**Excluir** — `DELETE /contacts/:id`

**Erros esperados:**
`400` ValidationError · `404` NotFound · `409` Conflict (email duplicado) · `500` InternalError

---

## 🚀 Entrega

Envie um **repositório público no GitHub** contendo:

- Código completo
- Migrações e seed
- README com:
  - Instruções de execução
  - Variáveis de ambiente
  - O que foi implementado e o que ficou de fora
  - Seções opcionais: **Spec**, **Context** e **Prompt Engineering**

📆 **Prazo:** 7 dias corridos a partir do envio

---

## ✅ Checklist Final

- [ ] CRUD funcional (Node/React/Postgres)
- [ ] Tipagem e validação corretas
- [ ] README completo e claro
- [ ] Histórico de commits coerente
- [ ] Uso de IA documentado
- [ ] Seções de engenharia preenchidas (fortemente recomendadas)
- [ ] Deploy opcional — **não decisivo**

---

💬 **Mensagem final**

> Este desafio não mede quem “faz mais”, mas quem **pensa melhor**.
> Entregas com **raciocínio estruturado, clareza de decisão e uso inteligente de IA** terão prioridade.
> Use ferramentas como **Cursor** e **Windsurf** para acelerar, mas use o cérebro para liderar.
````
