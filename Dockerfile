FROM node:16-alpine
MAINTAINER ksuke nakamura

WORKDIR /app

ADD . /app

RUN npm install -g npm@7.18.1

CMD ["npm", "run", "serve"]