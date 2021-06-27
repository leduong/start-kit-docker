FROM node:14 as nuxtbuilder
WORKDIR /app
COPY package.json .
RUN yarn

FROM node:14
WORKDIR /app
COPY --from=nuxtbuilder /app/ ./
COPY package.json ./
RUN yarn
