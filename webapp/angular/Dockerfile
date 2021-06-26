FROM node:14 as builder14
WORKDIR /app
COPY package.json .
RUN yarn

FROM node:14
WORKDIR /app
COPY --from=builder14 /app/ /app/
COPY package.json ./
RUN yarn
