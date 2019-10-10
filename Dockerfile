#Pick base image
FROM node:10
#Select app dir
WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD [ "node", "app.js" ]
