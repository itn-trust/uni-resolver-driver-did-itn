FROM node:18.16.0-bullseye-slim

WORKDIR /var/www/driver
COPY package.json tsconfig.json index.ts ./
RUN npm install
RUN ./node_modules/.bin/tsc

CMD ["node", "_/index.js"]
