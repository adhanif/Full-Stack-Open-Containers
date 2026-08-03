FROM node:24

WORKDIR /usr/src/app

COPY . .

COPY --chown=node:node . .

ENV REDIS_URL=http://localhost:3000

ENV PORT=3000

RUN npm install

CMD [ "npm", "run", "dev" ]