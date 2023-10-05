FROM node:18

LABEL authors="Gabriel Garcia"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]