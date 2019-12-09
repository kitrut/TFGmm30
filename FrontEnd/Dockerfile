# Stage 0
FROM node:latest as node

MAINTAINER "Manuel Morote <mmh30@alu.ua.es>"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app

RUN npm install && npm install -g ionic && ionic build --prod

# Stage 1
FROM nginx:alpine
COPY --from=node /app/www /usr/share/nginx/html