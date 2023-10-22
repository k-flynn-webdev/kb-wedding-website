FROM node:16-alpine

RUN mkdir -p /usr/app/database/ && chown -R node:node /usr/app/database/

USER node

WORKDIR /usr/app/database

COPY  . .
