FROM node:slim

WORKDIR /

COPY . .

ENV PORT=3000

ENV ENV=prod

RUN npm install

CMD npm run server

EXPOSE ${PORT}