<template>
  <v-chip
    color="white"
    outlined
    class="mr-2 mb-2"
    :[getSizeClass(tag.count)]="true"
  >
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
        return "default";
      } else if (count >= 2) {
        return "small";
      } else {
        return "x-small";
      }
    }
  }
};
</script>
