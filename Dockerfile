# Estágio de build
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN pnpm install

# Copiar o resto dos arquivos
COPY . .

# Build da aplicação
RUN pnpm build

# Estágio de produção
FROM node:20-alpine AS runner

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar apenas os arquivos necessários do estágio de build
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expor a porta 3000
EXPOSE 3000

# Definir variável de ambiente
ENV PORT=3000
ENV NODE_ENV=production

# Comando para iniciar a aplicação
CMD ["node", "server.js"] 