FROM courb/ember-test

WORKDIR /app

COPY package.json ./

RUN yarn install --silent

COPY . ./
