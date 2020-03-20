<template>
  <v-layout column justify-center align-center>
    <h2 class="display-1 font-weight-light mb-4">music</h2>
    <v-card class="pa-2" style="border:none" outlined>
      <v-btn-toggle v-model="singerToggle" dense multiple>
        <v-btn color="miku" value="miku" outlined>MIKU</v-btn>
        <v-btn color="luka" value="luka" outlined>LUKA</v-btn>
      </v-btn-toggle>
      <v-btn-toggle v-model="albumToggle" dense multiple>
        <v-btn color="primary" value="1" outlined>ガラクタ概論</v-btn>
        <v-btn color="primary" value="2" outlined>はじまりの歌</v-btn>
      </v-btn-toggle>
      <v-btn v-on:click="isUpToggle" color="info" fab :outlined="!isUp" small depressed>
        <v-icon>fas fa-sort-numeric-down</v-icon>
      </v-btn>
    </v-card>
    <v-card class="d-flex justify-center flex-wrap" style="border:none" outlined>
      <song-card :song="song" v-for="song in songs" :key="song.key"></song-card>
    </v-card>
  </v-layout>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import SongCard from "~/components/SongCard.vue";
import SONGDATA from "~/data/songs.json";

export default {
  components: {
    SongCard
  },
  data() {
    return {
      singerToggle: [],
      albumToggle: [],
      isUp: false
    };
  },
  computed: {
    songs: function() {
      let tmpSong = SONGDATA;

      this.singerToggle.forEach(singer => {
        tmpSong = tmpSong.filter(
          song => song["singer"].split(",").indexOf(singer) >= 0
        );
      });

      this.albumToggle.forEach(album => {
        tmpSong = tmpSong.filter(song => song["album"] == album);
      });

      console.log("SONGDATA", tmpSong);

      tmpSong.sort((a, b) => a["id"] - b["id"]);
      return this.isUp ? tmpSong : tmpSong.reverse();
    }
  },
  created: function() {},
  methods: {
    isUpToggle: function() {
      this.isUp = !this.isUp;
    }
  }
};
</script>



<style scoped>
</style>

<style>
.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn {
  border-color: initial !important;
  margin: 0 4px;
}
.v-btn-toggle > .v-btn.v-btn:not(:first-child) {
  border-left-width: thin !important;
}
/* .v-btn-toggle > .v-btn.v-btn {
  border-width: thin;
} */
.v-btn-toggle > .v-btn.v-btn {
  border-radius: inherit !important;
}
.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn {
  border-color: initial;
}
.v-btn-toggle > .v-btn.v-btn {
  opacity: 1;
}
.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before {
  opacity: 1;
}
.v-btn-toggle > .v-btn.v-btn--active > span {
  color: white;
}
</style>