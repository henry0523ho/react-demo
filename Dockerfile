FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

EXPOSE 27017

CMD ["npm", "run", "dev"]