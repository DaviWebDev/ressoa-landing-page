FROM node:26-alpine AS base
WORKDIR /app
RUN npm install --global --allow-scripts=pnpm pnpm@12.16.1
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
EXPOSE 4321

FROM base AS dev
CMD ["pnpm", "run", "dev","--host"]

FROM base AS build
RUN pnpm run build

FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80