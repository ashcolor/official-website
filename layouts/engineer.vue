<template>
  <v-app dark>
    <v-main class="ma-0">
      <nuxt />
    </v-main>
    <my-footer />
  </v-app>
</template>

<script>
import MyFooter from "~/components/common/MyFooter";
export default {
  components: { MyFooter }
};
</script>

<style>
h1,
h2,
h3,
h4,
div,
span,
a {
  font-weight: 300 !important;
}

a {
  text-decoration: none;
}
.container {
  width: 100% !important;
  height: 100%;
  max-width: unset !important;
}
</style>
