<template>
  <v-layout column justify-center align-center>
    <h2 class="display-1 font-weight-light mb-4">New song</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/pCqN81a7e-Y?controls=0"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <nuxt-link to="/producer/music" class="font-weight-light"
      >and more</nuxt-link
    >
    <h2 class="display-1 font-weight-light mt-4 mb-4">New album</h2>
    <iframe
      width="315"
      height="315"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/520644207&color=%23bcbcbc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ></iframe>
    <nuxt-link to="/producer/discography" class="font-weight-light"
      >and more</nuxt-link
    >
  </v-layout>
</template>

<script>
export default {
  layout: "producer"
};
</script>
