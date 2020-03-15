# ashcolor

> My rad Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

#参考
https://qiita.com/jakushin/items/dd92075f28fba6b083ca

#イメージの作成
docker build ./ -t asia.gcr.io/official-website-271208/v0.0.1

#コンテナの起動
docker run -p 3000:3000 [image_id]

#Container Registryへの登録
docker push asia.gcr.io/official-website-271208/v0.0.1
#エラーになる
#gcloud builds submit --tag asia.gcr.io/official-website-271208/v0.0.1

#Cloud Runへデプロイ
gcloud beta run deploy --image asia.gcr.io/official-website-271208/v0.0.1