FROM node:10

WORKDIR /usr/app

COPY package*.json ./
RUN yarn

COPY . .

EXPOSE 1000

CMD ["yarn", "start" ]