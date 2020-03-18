<template>
  <v-card class="d-inline-block ma-6">
    <v-img :src="song.thumbnail | thumbnailUrl" width="200px" height="200px"></v-img>

    <v-card-subtitle class="pb-0">{{song.published | dateFormat}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{song.name}}</div>
      <singer-btn :singer="song.singer"></singer-btn>
    </v-card-text>
    <v-footer>
      <a v-if="song.youtube" :href="song.youtube" class="mr-2">
        <img src="/img/icon/youtube.png" alt="YouTube" class="icon" />
      </a>
      <a v-if="song.niconico" :href="song.youtube">
        <img src="/img/icon/nicovideo.png" alt="niconico" class="icon" />
      </a>
    </v-footer>
  </v-card>
</template>

<script>
import SingerBtn from "~/components/SingerBtn";

export default {
  components: {
    SingerBtn
  },
  filters: {
    thumbnailUrl: function(value) {
      return `https://storage.googleapis.com/ashcolor-resource/thumbnail/${value}`;
    },
    dateFormat: function(value) {
      const date = new Date(value);
      return (
        date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
      );
    }
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
</style>

</style>
