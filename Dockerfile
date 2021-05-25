FROM node:12

WORKDIR /usr/src/app

ENV PORT 3000
ENV HOST 0.0.0.0

COPY package*.json ./

RUN yarn install --only=production

# Nuxtプロジェクトのコードをコンテナにコピー
COPY . .

# prodビルト、サーバ起動
RUN yarn run build
CMD yarn start