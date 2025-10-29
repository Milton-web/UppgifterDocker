#------------------------ Builder ---------------------

FROM node:20 AS builder

# arbetsmapp
WORKDIR /app

# kopiera package.json
COPY package*.json ./

# Installera beroenden
RUN npm install

# Kopiera resten av applikationen
COPY . . 

# Jest körs i CI-miljö och kör testerna sekventiellt. (Lagt till efter fel permission denied) 
RUN npx jest --ci --runInBand

# ------------------------ RUNTIME ---------------

FROM node:20-alpine AS runtime

# Arbetsmapp
WORKDIR /app

# Kopiera endast package.json
COPY package*.json ./

# Installera bara produktionsberoenden
RUN npm install --only=production

# kopiera från builder
COPY --from=builder /app .

# Exponera port
EXPOSE 3000

# Bash kommando
CMD ["node", "server.js"]