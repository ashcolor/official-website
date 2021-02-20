<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-star</v-icon>
      {{ count }}
    </v-list-item-icon>
    <v-list-item-content>
      <v-chip v-for="tag in tags" :key="tag" x-small>
        {{ tag }}
      </v-chip>
      <v-list-item-title v-text="name"></v-list-item-title>
      <v-list-item-subtitle v-text="description"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    count: Number,
    tags: Array,
    name: String,
    description: String
  },
  methods: {}
};
</script>
<style scoped>
.v-list::-webkit-scrollbar {
  display: none;
}
.v-list-item__icon {
  width: 60px;
}
.v-list-item__content {
  flex: initial;
  display: inline;
}
.v-list-item__icon {
  margin: auto 10px auto 0 !important;
}

.v-chip {
  flex: initial;
}
</style>
