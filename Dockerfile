# base image
FROM node:18-alpine

WORKDIR /usr/app

COPY . .

RUN yarn install

RUN yarn run build

CMD ["yarn", "start"]