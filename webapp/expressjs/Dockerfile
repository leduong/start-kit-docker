FROM node:12 as nextbuilder
WORKDIR /app
COPY package.json .
RUN yarn

FROM node:12
WORKDIR /app
COPY --from=nextbuilder /app/ ./
COPY package.json ./
RUN yarn
EXPOSE 3000