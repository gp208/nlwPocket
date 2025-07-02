# in.Orbit

Aplicativo para registrar metas semanais e monitorar o progresso até seu cumprimento. O usuário define uma atividade e sua frequência semanal para cada meta e registra cada 
vez que realiza a atividade. As metas pendentes e concluídas são listadas, juntamente com o andamento de cada uma.

> Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST,
 utilizando TypeScript, Fastify como framework, integração do DrizzleORM + PostgreSQL, Docker e Zod para validação
 de dados. Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades,
 Estados e Componentes, tipagem com Typescript, tooling com Vite, interface responsiva com TailwindCSS, consumo
 de API Node.js, gerenciamento de dados assíncronos com TanStack Query.

Desenvolvido no evento <b>NLW Pocket: Javascript - Full-stack Intermediário</b> (09&ndash;14/09/2024) da [Rocketseat](https://github.com/rocketseat)

## Requisitos
• Node.js • Docker

## Instalação
1. Configurar back-end em um terminal:
```bash
git clone https://github.com/gp208/nlwPocket
cd nlwPocket/server
docker compose up -d
npx drizzle-kit generate
npx drizzle-kit migrate
npm run seed # metas predefinidas; opcional
npm run dev # inicializa
```
2. Configurar front-end em novo terminal:
```bash
cd nlwPocket/web
npm install # instala dependências
npm run dev # inicializa
```
