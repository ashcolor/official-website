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
      <a v-for="account in accounts" v-bind:key="account.id" :href="account.url" target="_blank">
        <v-btn v-if="account.icon !== ''" icon>
          <v-icon>{{account.icon}}</v-icon>
        </v-btn>
        <v-card-text v-else class="px-2" style="color: white">{{account.name}}</v-card-text>
      </a>
      <template v-slot:extension>
        <v-tabs centered slider-color="yellow">
          <v-tab v-for="menu in menus" :key="menu.title" :to="menu.to">{{ menu.title }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-content style="height: 100%;">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span class="font-weight-light">&copy; {{ new Date().getFullYear() }} ashcolor</span>
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
        { title: "home", to: "/" },
        { title: "profile", to: "/producer/profile" },
        { title: "music", to: "/producer/music" },
        { title: "diiscography", to: "/producer/discography" }
      ]
    };
  },
  computed: {
    accounts: function() {
      return ACCOUNTDATA.filter(account => account["type"] === "producer");
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