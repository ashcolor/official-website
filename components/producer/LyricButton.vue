<template>
  <v-dialog
    v-model="dialog"
    width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <a
        v-on="on"
        class="pr-2"
      >
        <v-icon>mdi-text-box</v-icon>
      </a>
    </template>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2 pl-8">
        {{ title }}
      </v-card-title>

      <v-card-text v-html="content" class="pa-8">
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pr-8">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          閉じる
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      dialog: false,
      content: ""
    };
  },
  props: {
    title: "",
    fileUrl: ""
  },
  watch: {
    dialog: function (val) {
      if (!val) return
      this.getFileFromStorage();

    },
  },
  methods: {
    getFileFromStorage: async function () {
      const response = await axios.get(
        this.fileUrl
      );
      if (response.status !== 200) return;
      this.content = this.nl2br(response.data)
    },
    nl2br(str) {
      str = str.replace(/\r\n/g, "<br />");
      str = str.replace(/(\n|\r)/g, "<br />");
      return str;
    }
  }
};
</script>
