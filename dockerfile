FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install nodemon ts-node

CMD [ "npm", "run", "dev" ]