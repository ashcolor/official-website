<template>
  <v-layout column justify-center align-center>
    <h2 class="display-1 font-weight-light mb-4">大合奏！バンドブラザーズP</h2>

    <h3 class="mt-4">耳コピ</h3>
    <v-data-table
      :headers="headers"
      :items="bbps"
      :page.sync="page"
      :search="search"
      items-per-page="10"
      class="mx-auto"
      max-width="400"
      style="verticle-align: middle;"
      hide-default-footer
      @page-count="pageCount = $event"
    >
      <template v-slot:top>
        <v-text-field v-model="search" label="検索" class="mx-4"></v-text-field>
      </template>
      <template v-slot:[`item.url`]="{ item }">
        <audio :src="item.url" controls>
          <p>音声を再生するには、audioタグをサポートしたブラウザが必要です。</p>
        </audio>
      </template>
      <template v-slot:[`item.genre`]="{ item }">
        <v-chip color="ashcolor" dark>{{ item.genre }}</v-chip>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>

    <h3 class="mt-4">オリジナル曲</h3>
    <v-card
      class="d-flex justify-center flex-wrap"
      style="border:none"
      outlined
    >
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
      search: "",
      page: 1,
      pageCount: 0,
      headers: [
        {
          text: "ジャンル",
          align: "start",
          value: "genre"
        },
        { text: "曲名", value: "name" },
        { text: "アーティスト", value: "artist" },
        { text: "更新日", value: "modified" },
        { text: "配信日時", value: "published" },
        { text: "", value: "url" }
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
