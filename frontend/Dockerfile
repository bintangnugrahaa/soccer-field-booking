FROM node:lts-alpine3.21
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run consul
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
