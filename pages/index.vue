<template>
  <v-layout column justify-center align-center>
    <h2 class="display-1 font-weight-light mb-4">music</h2>
    <v-card class="pa-2" style="border:none" outlined>
      <v-btn v-on:click="filter('singer','miku')" color="miku" :outlined="!actives.isMiku" dark>MIKU</v-btn>
      <v-btn color="luka" :outlined="!actives.isMiku" dark>LUKA</v-btn>
      <v-btn color="accent" :outlined="!actives.first" dark>ガラクタ概論</v-btn>
      <v-btn color="accent" :outlined="!actives.second" dark>はじまりの歌</v-btn>
    </v-card>
    <v-card class="d-flex justify-center flex-wrap" style="border:none" outlined>
      <song-card :song="song" v-for="song in songs" :key="song.id"></song-card>
    </v-card>
  </v-layout>
</template>

<script>
import SongCard from "./components/SongCard.vue";
import SONGDATA from "./data/songs.json";

export default {
  components: {
    SongCard
  },
  data() {
    return {
      actives: {
        miku: false,
        luka: false,
        first: false,
        second: false
      },
      songs: []
    };
  },
  created: function() {
    this.songs = SONGDATA;
  },
  methods: {
    filter: function(key, value) {}
  }
};
</script>
