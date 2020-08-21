<template>
  <v-card class="d-flex align-content-start flex-wrap" height="100%">
    <v-row>
      <v-card class="flex-grow-1 flex-shrink-1">
        <profile></profile>
        <v-fab-transition>
          <v-btn class="v-btn__back ma-8" color="white" to="/welcome" fab bottom left>
            <v-icon color="primary">fa-arrow-left</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-card>
      <v-card class="mx-auto pa-12 flex-grow-1 flex-shrink-1" flat>
        <v-card>
          <v-toolbar color="#211F1F" dense dark>
            <span class="title">Github</span>
          </v-toolbar>
          <v-list>
            <template v-for="(repo, index) in githubRepos">
              <v-list-item :key="repo.id" :href="repo.html_url" target="_blank">
                <v-list-item-icon>
                  <v-icon>mdi-star</v-icon>
                  {{ repo.stargazers_count }}
                </v-list-item-icon>
                <v-list-item-content>
                  <v-chip v-for="topic in repo.topics" :key="topic" x-small>
                    {{
                    topic
                    }}
                  </v-chip>
                  <v-list-item-title v-text="repo.name"></v-list-item-title>
                  <v-list-item-subtitle v-text="repo.description"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="repo.title" v-if="index !== githubRepos.length - 1"></v-divider>
            </template>
          </v-list>
          <v-toolbar color="#55C500" dense dark>
            <span class="title">Qiita</span>
          </v-toolbar>
          <v-list>
            <template v-for="(item, index) in qiitaItems">
              <v-list-item :key="item.id">
                <v-list-item-icon width="200">
                  <v-icon>mdi-star</v-icon>
                  {{ item.likes_count }}
                </v-list-item-icon>
                <v-list-item-content>
                  <v-chip v-for="tag in item.tags" :key="tag.name" x-small>
                    {{
                    tag.name
                    }}
                  </v-chip>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="item.title" v-if="index !== qiitaItems.length - 1"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-card>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import Profile from "~/components/engineer/Profile.vue";

export default {
  layout: "engineer",
  components: {
    Profile
  },
  data() {
    return {
      githubRepos: [],
      qiitaItems: []
    };
  },
  created: function() {
    this.getGithub(), this.getQiita();
  },
  methods: {
    getGithub: async function() {
      const response = await axios.get(
        "https://asia-northeast1-official-website-271208.cloudfunctions.net/github-repos"
      );
      if (response.status !== 200) return;
      this.githubRepos = response.data.sort(
        (a, b) => b["stargazers_count"] - a["stargazers_count"]
      );
      this.githubRepos = this.githubRepos.filter(repo => repo.fork === false);
    },
    getQiita: async function() {
      const response = await axios.get(
        "https://asia-northeast1-official-website-271208.cloudfunctions.net/qiita-items"
      );
      if (response.status !== 200) return;
      this.qiitaItems = response.data.sort(
        (a, b) => b["likes_count"] - a["likes_count"]
      );
    }
  }
};
</script>

<style scoped>
.layout {
  height: 100%;
}
.v-toolbar .v-image {
  width: 100%;
  height: 40px;
}
.v-list {
  height: 240px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
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
.v-list-item__content > * {
  flex: initial;
}
.v-list-item__icon {
  margin: auto 10px auto 0 !important;
}
.row,
.col {
  height: 100%;
  width: 100%;
}
.v-btn__back {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}
</style>
