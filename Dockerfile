FROM node:16-alpine
MAINTAINER ksuke nakamura

ADD . /app

WORKDIR /app

RUN npm install -g npm

CMD ["npm", "run", "serve"]