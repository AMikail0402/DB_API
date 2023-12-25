FROM node:21-alpine3.18

WORKDIR /home/node/app

COPY src ./src
COPY package.json ./
COPY tsconfig.json ./tsconfig.json
RUN echo 'HOST="172.17.0.1"'> /home/node/app/.env
RUN yarn install 

EXPOSE 3000

CMD [ "sleep","10000000000"]