FROM node:14-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
# copy source code to /app/src folder
COPY src /app/src

# check files e list
RUN ls -a

RUN npm install

EXPOSE 5050

CMD [ "node", "./src/index.js" ]