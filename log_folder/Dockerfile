FROM node:16-alpine

RUN mkdir -p /usr/app/log_folder/ && chown -R node:node /usr/app/log_folder/

USER node

WORKDIR /usr/app/log_folder

COPY  . .
