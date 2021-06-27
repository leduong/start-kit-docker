FROM node:14 as nodebuilder
WORKDIR /app
COPY package.json .
RUN yarn

FROM node:14
WORKDIR /app
COPY --from=nodebuilder /app/ ./
COPY package.json ./
RUN yarn
