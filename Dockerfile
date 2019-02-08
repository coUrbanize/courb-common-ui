FROM courb/ember-test

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent

COPY . ./
