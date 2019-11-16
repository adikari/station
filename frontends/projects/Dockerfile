FROM node:12.13.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json *.lock ./
RUN yarn install

# Bundle app source
COPY . .
