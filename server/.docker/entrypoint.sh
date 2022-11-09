#!/bin/bash

dockerize -wait tcp://postgres:5432 -timeout 60s

npm i
npx prisma generate
npx prisma db push
npx prisma studio &
npm run dev
