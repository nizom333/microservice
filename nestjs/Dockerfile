FROM node:12.13-alpine

WORKDIR /nestjs

COPY package*.json ./

RUN npm i

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]