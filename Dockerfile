FROM node:16.13.2-alpine

WORKDIR /app

COPY package.json /app
ADD ./public /app/public
ADD ./src /app/src/

RUN npm i

CMD ["npm", "start"]
