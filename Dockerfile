FROM node:10

# Install Chrome headless
RUN apt-get update
RUN apt-get install -y wget xvfb unzip
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list
RUN apt-get update
RUN apt-get install -y google-chrome-stable

WORKDIR /app

COPY package.json ./

RUN npm install -g ember-cli@3.5.1
RUN npm install --quiet

COPY . ./
