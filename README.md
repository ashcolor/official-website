# official-website

> ashcolor official website

- [Welcome](https://ashcolor.work/welcome)
- [Engineer](https://ashcolor.work/engineer)
- [Producer](https://ashcolor.work)
- Gamer

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Docker Setup

```bash
#参考
https://qiita.com/jakushin/items/dd92075f28fba6b083ca

#イメージの作成
docker build ./ -t asia.gcr.io/official-website-271208/v0.0.1

#コンテナの起動
docker run -p 3000:3000 asia.gcr.io/official-website-271208/v0.0.1

#確認
http://localhost:3000/

#Container Registryへの登録
docker push asia.gcr.io/official-website-271208/v0.0.1
#if permissions error occur
gcloud components update

#Cloud Runへデプロイ
gcloud beta run deploy --image asia.gcr.io/official-website-271208/v0.0.1
```

Service name : ashcolor-official-website
Please specify a region: 2
