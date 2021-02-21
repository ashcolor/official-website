<template>
  <v-card class="mx-auto my-12" max-width="400">
    <v-img height="250" position="top" :src="system.image"></v-img>

    <v-card-subtitle class="pb-0">
      {{ system.created }}
    </v-card-subtitle>
    <v-card-title class="pt-0">{{ system.name }}</v-card-title>

    <v-card-text>
      <div>
        {{ system.note }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>使用技術</v-card-title>

    <template v-for="type in ['frontend', 'backend', 'infrastructure']">
      <div :key="type">
        <v-card-subtitle
          class="text-uppercase pb-0"
          v-if="system[type].length >= 1"
        >
          {{ type }}
        </v-card-subtitle>

        <v-card-text v-if="system[type].length >= 1">
          <v-chip v-for="tag in system[type]" :key="tag" outlined small>{{
            tag
          }}</v-chip>
        </v-card-text>
      </div>
    </template>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="my-2">
      <v-btn
        :href="system.url"
        color="secondary"
        v-if="system.url !== ''"
        target="_blank"
      >
        Link
      </v-btn>
      <v-btn
        :href="system.repository"
        color="github"
        v-if="system.repository !== ''"
        target="_blank"
        dark
      >
        Github
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";

export default {
  props: {
    system: Object
  }
};
</script>

<style scoped>
img.icon {
  width: 20px;
  height: 20px;
}
.singer-icons,
.album-icons {
  z-index: 2;
  position: absolute;
  right: 4px;
}
.singer-icons {
  top: 2px;
}
.album-icons {
  top: 28px;
}
</style>
