# base image
FROM node:18-alpine

## ENV NEXTAUTH_URL="https://nextjs-cloud-run-km4wy7gmra-ue.a.run.app/"

WORKDIR /usr/app

COPY . .

RUN yarn install

RUN yarn run build

CMD ["yarn", "start"]