<template>
  <v-layout column justify-center align-center>
    <h2 class="display-1 font-weight-light mb-4">discography</h2>
    <h3>Streaming & Download</h3>
    <div class="mb-4 text-center">
      <v-btn
        v-for="download in downloads"
        :href="download.url"
        target="_blank"
        v-bind:key="download.name"
        class="mx-4 my-2"
        icon
      >
        <v-icon large>{{download.icon}}</v-icon>
      </v-btn>
      <v-text class="caption d-block">その他の配信サイトでもストリーミング・ダウンロード配信中</v-text>
    </div>
    <h3 class="mb-4">album</h3>
    <v-card v-for="album in albums" :key="album.id" class="mb-8" min-width="750px" outlined>
      <v-card-subtitle class="pb-0">{{album.description}}</v-card-subtitle>
      <v-card-title class="pt-0">{{album.name}}</v-card-title>
      <v-card-subtitle class="pb-0">{{album.published | dateFormat}}</v-card-subtitle>
      <v-container>
        <v-row justify="space-arround">
          <v-col cols="8" class="py-0 my-auto">
            <v-card width="300" class="mx-auto">
              <v-img height="300" width="300" :src="album.thumbnail"></v-img>
            </v-card>
          </v-col>
          <v-col cols="4" class="pl-0 my-auto">
            <v-list-item v-for="(song, index) in album.songs" :key="song" dense>
              <v-list-item-content>
                <v-list-item-title>{{index+1}}.{{song}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col cols="auto" class="mx-auto">
            <iframe scrolling="no" frameborder="no" :src="album.crossfade" class="mx-auto"></iframe>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col cols="auto" class="mx-auto">
            <h4>downloads</h4>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-if="album.lyric" :href="album.lyric" v-on="on" class="pr-2" icon large>
                  <v-icon>mdi-text-box</v-icon>
                </v-btn>
              </template>
              <span>歌詞</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-if="album.inst" :href="album.inst" v-on="on" class="pr-2" icon large>
                  <v-icon>mdi-microphone-variant</v-icon>
                </v-btn>
              </template>
              <span>カラオケ</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import ALBUMDATA from "~/data/albums.json";

export default {
  data() {
    return {
      downloads: [
        {
          name: "iTunes",
          icon: "fab fa-itunes",
          url: "https://itunes.apple.com/jp/artist/ashcolor/807046372"
        },
        {
          name: "LINE MUSIC",
          icon: "fab fa-line",
          url: "https://music.line.me/artist/mi000000000014298c"
        },

        {
          name: "amazon music",
          icon: "fab fa-amazon",
          url:
            "https://www.amazon.co.jp/s?k=ashcolor&i=digital-music&search-type=ss&ref=ntt_srch_drd_B00I9GFM1O"
        }
      ]
    };
  },
  computed: {
    albums: function() {
      return ALBUMDATA.sort((a, b) => b["id"] - a["id"]);
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