<template>
  <v-card class="container pa-12" color="primary" dark>
    <p class="my-0 overline">Web Engineer</p>
    <h1 class="mb-8">ashcolor</h1>
    <h2 class="mt-4 overline">Accounts</h2>
    <a href="mailto:ashcolor27@gmail.com">
      <v-btn icon>
        <v-icon>fas fa-envelope</v-icon>
      </v-btn>
    </a>
    <a
      v-for="account in accounts"
      v-bind:key="account.id"
      :href="account.url"
      target="_blank"
    >
      <v-btn v-if="account.icon !== ''" icon>
        <v-icon>{{ account.icon }}</v-icon>
      </v-btn>
      <span v-else class="ml-2" style="color: white">{{ account.name }}</span>
    </a>

    <h2 class="mt-12 overline">Frontend</h2>
    <p>JavaScript/Vue/Nuxt</p>

    <h2 class="mt-8 overline">Backend</h2>
    <p>PHP/CakePHP</p>

    <h2 class="mt-8 overline">INFRASTRUCTURE</h2>
    <p>
      GCP/AWS/MySQL/Cent OS
    </p>

    <h2 class="mt-12 overline">Certification</h2>
    <p class="my-0">FE(2011/9)</p>
    <p class="my-0">AP(2012/11)</p>
    <p class="my-0">Linuc Level1(2019/2)</p>

    <div class="pa-0 mt-12">
      <tech-tag :tag="tag" v-for="tag in tags" :key="tag.name" />
    </div>
  </v-card>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import TechTag from "./TechTag.vue";
import ACCOUNTDATA from "~/data/accounts.json";

export default {
  components: {
    TechTag
  },
  props: {
    tags: Array
  },
  computed: {
    accounts: function() {
      return ACCOUNTDATA.filter(account => account["type"] === "engineer");
    }
  }
};
</script>
