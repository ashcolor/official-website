FROM node:10

WORKDIR /usr/src/app

ENV PORT 3000
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install --only=production

# Nuxtプロジェクトのコードをコンテナにコピー
COPY . .

# prodビルト、サーバ起動
RUN npm run build
CMD npm start