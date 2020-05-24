<template>
  <v-layout column justify-center align-center>
    <h2 class="display-1 font-weight-light mb-4">大合奏！バンドブラザーズP</h2>
    <h3>配信曲</h3>
    <a
      v-for="contributer in contributors"
      v-bind:key="contributer.name"
      :href="contributer.url"
      target="_blank"
      class="mx-2"
      >{{ contributer.name }}</a
    >
    <h3 class="mt-4">自作曲</h3>
    <v-data-table
      :headers="headers"
      :items="bbps"
      hide-default-footer
      class="mx-auto"
      max-width="400"
      style="verticle-align: middle;"
    >
      <template v-slot:item.url="{ item }">
        <audio :src="item.url" controls>
          <p>音声を再生するには、audioタグをサポートしたブラウザが必要です。</p>
        </audio>
      </template>
      <template v-slot:item.genre="{ item }">
        <v-chip color="ashcolor" dark>{{ item.genre }}</v-chip>
      </template>
    </v-data-table>
    <h3 class="mt-4">オリジナル曲</h3>
    <v-card
      v-for="original in originals"
      v-bind:key="original.url"
      class="d-inline-block ma-8"
      height="270"
      tile
    >
      <iframe
        width="480"
        height="270"
        :src="original.url"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-card>
  </v-layout>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import BBPDATA from "~/data/bbp.json";

export default {
  layout: "gamer",
  data() {
    return {
      headers: [
        {
          text: "ジャンル",
          align: "start",
          value: "genre"
        },
        { text: "曲名", value: "name" },
        { text: "アーティスト", value: "artist" },
        { text: "更新日", value: "modified" },
        { text: "", value: "url" }
      ],
      contributors: [
        {
          name: "あっしゅからー",
          url:
            "http://9129suppon.com/contributor/%E3%81%82%E3%81%A3%E3%81%97%E3%82%85%E3%81%8B%E3%82%89%E3%83%BC"
        },
        {
          name: "あっしゅん",
          url:
            "http://9129suppon.com/contributor/%E3%81%82%E3%81%A3%E3%81%97%E3%82%85%E3%82%93/"
        },
        {
          name: "ハーモニカ",
          url:
            "http://9129suppon.com/contributor/%E3%83%8F%E3%83%BC%E3%83%A2%E3%83%8B%E3%82%AB"
        }
      ],
      originals: [
        { url: "https://www.youtube.com/embed/4qk9XSRv56E" },
        { url: "https://www.youtube.com/embed/zt3lN82we30" },
        { url: "https://www.youtube.com/embed/NVZDdvWx1iI" },
        { url: "https://www.youtube.com/embed/rJbfzV-oeAo" }
      ]
    };
  },
  computed: {
    bbps: function() {
      return BBPDATA.sort((a, b) => b["modified"] - a["modified"]);
    }
  },
  filters: {
    dateFormat: function(value) {
      const date = new Date(value);
      return (
        date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
      );
    }
  }
};
</script>
<style>
audio {
  display: block;
  height: 38px;
}
</style>
