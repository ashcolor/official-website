<template>
  <v-layout
    class="d-flex d-flex-row flex-sm-nowrap flex-wrap align-content-start"
  >
    <v-flex id="left-flex" class="flex-sm-grow-0 flex-grow-1 flex-shrink-0">
      <profile :tags="tags"></profile>
    </v-flex>

    <v-flex class=" pa-12 flex-grow-1 flex-shrink-1" flat>
      <v-card>
        <v-toolbar color="primary" dense dark>
          <span class="title">System</span>
        </v-toolbar>
        <v-card
          class="d-flex justify-center flex-wrap"
          style="border:none"
          outlined
        >
          <system-card
            class="d-inline-block ma-6"
            style="position: relative"
            v-for="system in systems"
            :key="system.id"
            :system="system"
          />
        </v-card>
      </v-card>

      <v-card>
        <v-toolbar color="github" dense dark>
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
            />
            <v-divider
              :key="repo.title"
              v-if="index !== githubRepos.length - 1"
            ></v-divider>
          </template>
        </v-list>
      </v-card>

      <v-card>
        <v-toolbar color="qiita" dense dark>
          <span class="title">Qiita</span>
        </v-toolbar>
        <v-list outlined>
          <template v-for="(item, index) in qiitaItems">
            <tech-list
              :key="item.id"
              :count="item.likes_count"
              :tags="item.tags"
              :name="item.title"
              :href="item.url"
            />
            <v-divider
              :key="item.title"
              v-if="index !== qiitaItems.length - 1"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import Profile from "~/components/engineer/Profile.vue";
import SystemCard from "../components/engineer/SystemCard.vue";
import TechList from "../components/engineer/TechList.vue";
import TechTag from "../components/engineer/TechTag.vue";
import SYSTEMDATA from "~/data/systems.json";

export default {
  layout: "engineer",
  components: {
    Profile,
    SystemCard,
    TechTag,
    TechList,
  },
  data() {
    return {
      githubRepos: [],
      qiitaItems: []
    };
  },
  computed: {
    systems: function () {
      return SYSTEMDATA;
    },
    tags: function () {
      let tags = [];
      this.githubRepos.forEach(repo => {
        tags = tags.concat(repo.topics);
      });
      this.qiitaItems.forEach(item => {
        tags = tags.concat(item.tags);
      });

      this.systems.forEach(system => {
        ["frontend", "backend", "infrastructure"].forEach(type => {
          tags = tags.concat(system[type]);
        });
      });

      let uniqTags = Array.from(new Set(tags));
      let tagCounts = [];
      uniqTags.forEach(value => {
        tagCounts.push({
          name: value,
          count: tags.filter(tag => {
            return tag === value;
          }).length
        });
      });

      tagCounts = tagCounts.sort((a, b) => b["count"] - a["count"]);

      return tagCounts;
    }
  },
  created: function () {
    this.getGithub();
    this.getQiita();
  },
  methods: {
    getGithub: async function () {
      const response = await axios.get(
        "https://asia-northeast1-official-website-271208.cloudfunctions.net/github-repos"
      );
      if (response.status !== 200) return;
      let repos = response.data.sort(
        (a, b) => b["stargazers_count"] - a["stargazers_count"]
      );
      repos = repos.filter(repo => repo.fork === false);
      this.githubRepos = repos;
    },
    getQiita: async function () {
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
@media only screen and (min-width: 600px) {
  #left-flex {
    max-width: 400px;
  }
}

.v-list {
  height: 300px;
  overflow-y: scroll;
}
</style>
