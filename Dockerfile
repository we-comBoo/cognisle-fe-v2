# base image
FROM node:18-alpine


# ⭐ 'ARG' 예약어를 통해 인자로 전달 받아야 한다.
ARG NEXTAUTH_SECRET 
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}

ARG NEXTAUTH_URL 
ENV NEXTAUTH_URL=${NEXTAUTH_URL}

WORKDIR /usr/app

COPY . .

RUN yarn install

RUN yarn run build

CMD ["yarn", "start"]