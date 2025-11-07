# 1. Basimage
FROM node:20

# 2. Skapa arbetskatalog i containern
WORKDIR /app

# 3. installera beroenden
COPY package*.json ./
RUN npm install

# 4. Kopiera resten av applikationen
COPY . .

# 5. Exponera porten
EXPOSE 3000

# 6. starta servern
CMD ["node", "server.js"]
