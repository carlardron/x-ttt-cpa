# Dockerfile for WS (backend)
FROM node:14
WORKDIR /app
COPY package.json ./
RUN npm install || true
COPY . .
EXPOSE 8080
CMD ["node", "Xttt.js"]
