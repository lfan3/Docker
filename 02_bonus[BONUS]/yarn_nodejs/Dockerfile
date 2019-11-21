FROM node:10

WORKDIR /usr/src/app

RUN apt-get update && apt-get install apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn

RUN apt update && apt install -y yarn

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["node","server.js"]
