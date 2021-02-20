<template>
  <v-chip class="ma-1" :[getSizeClass(tag.count)]="true">
    {{ tag.name }}
  </v-chip>
</template>

<script>
export default {
  props: {
    tag: Object
  },
  methods: {
    getSizeClass(count) {
      if (count >= 3) {
        return "large";
      } else if (count >= 2) {
        return "default";
      } else {
        return "small";
      }
    }
  }
};
</script>
