# Dockerfile for thenormvg Vue 3 + Vite app
FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm run build

EXPOSE 5173

CMD ["pnpm", "run", "preview", "--host"]


