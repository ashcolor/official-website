<template>
  <v-app dark>
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>ashcolor official website</v-toolbar-title>
      <v-spacer></v-spacer>
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
        <v-card-text v-else class="px-2" style="color: white">{{
          account.name
        }}</v-card-text>
      </a>
      <template v-slot:extension>
        <v-tabs slider-color="miku" centered>
          <v-tab v-for="menu in menus" :key="menu.title" :to="menu.to">{{
            menu.title
          }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-main style="height: 100%;">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :fixed="fixed" app>
      <span class="font-weight-light"
        >&copy; {{ new Date().getFullYear() }} ashcolor</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import ACCOUNTDATA from "~/data/accounts.json";

export default {
  data() {
    return {
      fixed: false,
      menus: [
        { title: "home", to: "/gamer" },
        { title: "大合奏！バンドブラザーズP", to: "/gamer/bbp" }
      ]
    };
  },
  computed: {
    accounts: function() {
      return ACCOUNTDATA.filter(account => account["type"] === "gamer");
    }
  }
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
</style>
