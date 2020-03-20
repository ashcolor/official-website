<template>
  <v-app dark>
    <!-- <v-app-bar :clipped-left="clipped" fixed app> -->
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>ashcolor official website</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <a href="mailto:ashcolor27@gmail.com">
            <v-btn icon v-on="on">
              <v-icon>fas fa-envelope</v-icon>
            </v-btn>
          </a>
        </template>
        <span>Mial</span>
      </v-tooltip>
      <v-tooltip v-for="account in accounts" v-bind:key="account.id" bottom>
        <template v-slot:activator="{ on }">
          <a :href="account.url" target="_blank">
            <v-btn icon v-on="on">
              <v-icon>{{account.icon}}</v-icon>
            </v-btn>
          </a>
        </template>
        <span>{{account.name}}</span>
      </v-tooltip>

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
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      menus: [
        { title: "home", to: "/" },
        { title: "profile", to: "/producer/profile" },
        { title: "music", to: "/producer/music" },
        { title: "diiscography", to: "/producer/diiscography" }
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
