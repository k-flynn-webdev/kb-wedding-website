FROM node:18-alpine3.17

RUN apk update && apk upgrade

RUN mkdir -p /app/database/

WORKDIR /app/database

COPY . .
