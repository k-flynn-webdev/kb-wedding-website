FROM node:18-alpine3.17

RUN apk update && apk upgrade

RUN mkdir -p /app/log_folder/

WORKDIR /app/log_folder

COPY . .
