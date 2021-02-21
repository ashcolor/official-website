<template>
  <v-card
    class="d-flex d-flex-row flex-sm-nowrap flex-wrap align-content-start"
    height="100%"
  >
    <v-card
      id="left-container"
      class="flex-sm-grow-0 flex-grow-1 flex-shrink-0"
    >
      <profile></profile>
    </v-card>

    <v-card class="mx-auto pa-12 flex-grow-1 flex-shrink-1" flat>
      <v-card height="90%">
        <v-toolbar color="#211F1F" dense dark>
          <span class="title">Github</span>
        </v-toolbar>

        <v-list>
          <template v-for="(repo, index) in githubRepos">
            <tech-list
              :key="repo.id"
              :count="repo.stargazers_count"
              :tags="repo.topics"
              :name="repo.name"
              :description="repo.description"
              :href="repo.html_url"
              target="_blank"
            />
            <v-divider
              :key="repo.title"
              v-if="index !== githubRepos.length - 1"
            ></v-divider>
          </template>
        </v-list>
        <v-toolbar color="#55C500" dense dark>
          <span class="title">Qiita</span>
        </v-toolbar>
        <v-list>
          <template v-for="(item, index) in qiitaItems">
            <tech-list
              :key="item.id"
              :count="item.likes_count"
              :tags="item.tags"
              :name="item.title"
              :href="item.html_url"
              target="_blank"
            />
            <v-divider
              :key="item.title"
              v-if="index !== qiitaItems.length - 1"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
      <v-footer color="grey lighten-4">
        <tech-tag :tag="tag" v-for="tag in tags" :key="tag.name" />
      </v-footer>
    </v-card>
  </v-card>
</template>

<script>
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import Profile from "~/components/engineer/Profile.vue";
import TechList from "../components/engineer/TechList.vue";
import TechTag from "../components/engineer/TechTag.vue";

export default {
  layout: "engineer",
  components: {
    Profile,
    TechTag,
    TechList
  },
  data() {
    return {
      githubRepos: [],
      qiitaItems: []
    };
  },
  computed: {
    tags: function() {
      let tags = [];
      this.githubRepos.forEach(repo => {
        tags = tags.concat(repo.topics);
      });
      this.qiitaItems.forEach(item => {
        tags = tags.concat(item.tags);
      });

      let uniqTags = Array.from(new Set(tags));
      let tagCounts = [];
      uniqTags.forEach(value => {
        tagCounts.push({
          name: value,
          count: tags.filter(tag => {
            return tag == value;
          }).length
        });
      });

      tagCounts = tagCounts.sort((a, b) => b["count"] - a["count"]);

      return tagCounts;
    }
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
      let repos = response.data.sort(
        (a, b) => b["stargazers_count"] - a["stargazers_count"]
      );
      repos = repos.filter(repo => repo.fork === false);
      console.log(repos);
      this.githubRepos = repos;
    },
    getQiita: async function() {
      const response = await axios.get(
        "https://asia-northeast1-official-website-271208.cloudfunctions.net/qiita-items"
      );
      if (response.status !== 200) return;
      let items = response.data.sort(
        (a, b) => b["likes_count"] - a["likes_count"]
      );
      items = items.map(item => {
        item.tags = item.tags.map(tag => tag.name);
        return item;
      });
      this.qiitaItems = items;
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
.v-btn__back {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}
</style>
