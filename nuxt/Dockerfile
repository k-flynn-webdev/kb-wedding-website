FROM node:16-alpine

RUN mkdir -p /usr/app/nuxt/ && chown -R node:node /usr/app/nuxt/

WORKDIR /usr/app/nuxt/

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

USER node

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

EXPOSE 3000
EXPOSE 24678

CMD [ "yarn", "run", "dev" ]

# ENTRYPOINT ["node", ".output/server/index.mjs"]