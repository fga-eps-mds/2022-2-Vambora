FROM node:alpine

WORKDIR /usr/app

COPY package.json / 

COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]