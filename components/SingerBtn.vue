<template>
  <div>
    <v-btn v-for="singer in singerArray" :key="singer" x-small :color="singer" dark>{{singer}}</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    singer: String
  },
  computed: {
    singerArray: function() {
      return this.singer.split(",");
    }
  }
};
</script>

<style scoped>
img.icon {
  width: 20px;
  height: 20px;
}
</style>>

</style>
