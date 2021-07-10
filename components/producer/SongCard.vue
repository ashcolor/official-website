<template>
  <v-card class="d-inline-block ma-6" style="position: relative">
    <div class="singer-icons">
      <v-btn v-for="singer in song.singers" :key="singer" x-small :color="singer" dark>{{singer}}</v-btn>
    </div>
    <div class="album-icons">
      <v-btn
        v-for="album in song.albums"
        :key="album"
        x-small
        color="primary"
        dark
      >{{albumTitle[album]}}</v-btn>
    </div>
    <v-card outlined>
      <v-img :src="thumbnailBaseurl + song.thumbnail" width="200px" height="200px"></v-img>
    </v-card>
    <v-card-subtitle class="pa-2 pb-0">{{song.published | dateFormat}}</v-card-subtitle>
    <v-card-text class="text--primary pa-2 pt-0">
      <div>{{song.name}}</div>
    </v-card-text>
    <v-footer class="px-2">
      <v-tooltip v-if="song.youtube" bottom>
        <template v-slot:activator="{ on }">
          <a :href="song.youtube" target="_blank" v-on="on" class="pr-2">
            <v-icon>mdi-youtube</v-icon>
          </a>
        </template>
        <span>YouTube</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-if="song.niconico" v-slot:activator="{ on }">
          <a :href="song.niconico" target="_blank" v-on="on" class="pr-2">
            <v-icon>mdi-television-classic</v-icon>
          </a>
        </template>
        <span>niconico</span>
      </v-tooltip>
      <v-tooltip v-if="song.lyric" bottom>
        <template v-slot:activator="{ on }">
            <lyric-button :title="song.name" :fileUrl="lyricBaseurl + song.lyric"></lyric-button>
        </template>
        <span>歌詞</span>
      </v-tooltip>
    </v-footer>
  </v-card>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";
import LyricButton from "./LyricButton";

export default {
  components: {
    LyricButton
  },
  filters: {
    dateFormat: function(value) {
      const date = new Date(value);
      return (
        date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
      );
    }
  },
  data() {
    return {
      thumbnailBaseurl:
        "https://storage.googleapis.com/ashcolor-resource/thumbnail/",
      lyricBaseurl: "https://storage.googleapis.com/ashcolor-resource/lyric/",
      albumTitle: {
        an_introduction_to_odds_and_ends: "ガラクタ概論",
        song_of_the_beginning: "はじまりの歌"
      }
    };
  },
  props: {
    song: Object
  }
};
</script>

<style scoped>
img.icon {
  width: 20px;
  height: 20px;
}
.singer-icons,
.album-icons {
  z-index: 2;
  position: absolute;
  right: 4px;
}
.singer-icons {
  top: 2px;
}
.album-icons {
  top: 28px;
}
</style>
