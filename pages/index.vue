<template>
  <v-layout column justify-center align-center>
    <h2 class="display-1 font-weight-light mb-4">New song</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/XpdqmE7bs2s?controls=0"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <nuxt-link to="/producer/music" class="font-weight-light"
      >and more</nuxt-link
    >
    <h2 class="display-1 font-weight-light mt-4 mb-4">New album</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/2O-Vrpsu8RA?controls=0"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
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
