# BUILD
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# PRODUCTION
FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=builder /app/dist ./dist

ENV PORT=80
ENV NODE_ENV=production

EXPOSE 80

CMD ["node", "dist/index.js"]
