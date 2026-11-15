# syntax=docker/dockerfile:1
ARG NODE_VERSION=24.14.0-alpine

# --- Etapa 1: Build da aplicação ---
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

# Copia os arquivos de dependência
COPY package.json package-lock.json ./

# Instala as dependências utilizando cache do npm para maior velocidade
RUN --mount=type=cache,target=/root/.npm npm ci

# Copia o restante do código fonte
COPY . .

# Executa o build de produção (gera a pasta 'dist')
RUN npm run build


# --- Etapa 2: Servir os arquivos estáticos com Nginx ---
FROM nginx:stable-alpine AS production

# Copia os arquivos gerados no estágio anterior para a pasta padrão do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80 do Nginx
EXPOSE 80

# Inicia o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]