<template>
  <v-app dark>
    <!-- <v-app-bar :clipped-left="clipped" fixed app> -->
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>ashcolor official website</v-toolbar-title>
      <v-spacer></v-spacer>アカウント
      <template v-slot:extension>
        <v-tabs centered slider-color="yellow">
          <v-tab v-for="menu in menus" :key="menu" :href="`/producer/${menu}`">{{ menu }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} ashcolor</span>
    </v-footer>
  </v-app>
</template>

<script>
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
      menus: ["home", "profile", "music", "diiscography"]
    };
  },
  computed: {}
};
</script>
