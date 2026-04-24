FROM node:18-bullseye-slim

RUN apt-get update && apt-get install -y python3 build-essential \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/lhci
COPY package.json .
COPY lighthouserc.js .
RUN npm install

EXPOSE 9001
CMD ["npm", "start"]
