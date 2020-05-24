<template>
  <v-layout column justify-center align-center>
    <h2 class="display-1 font-weight-light mb-4">Profile</h2>
    <h3 class="mb-4">History</h3>
    <v-card class="mx-auto" tile>
      <template v-for="history in histories">
        <v-list-item two-line :key="history.content">
          <v-list-item-content>
            <v-list-item-subtitle>{{ history.date }}</v-list-item-subtitle>
            <v-container class="pa-0">
              <v-row>
                <v-col cols="auto">
                  <v-list-item-title>{{ history.content }}</v-list-item-title>
                </v-col>
                <v-col cols="auto">
                  <v-btn
                    v-if="history.url !== ''"
                    :href="history.url"
                    target="_blank"
                    icon
                    x-small
                  >
                    <v-icon>fas fa-external-link-alt</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-card>
    <h3 class="mt-4 mb-4">equipments</h3>
    <v-card class="mx-auto" tile>
      <v-container class="pa-0">
        <v-row>
          <v-col
            cols="auto"
            v-for="equipment in equipments"
            :key="equipment.type"
          >
            <v-list subheader>
              <v-subheader>{{ equipment.type }}</v-subheader>
              <v-list-item
                v-for="material in equipment.materials"
                :key="material.type"
                three-line
              >
                <v-list-item-content>
                  <v-list-item-subtitle>{{
                    material.type
                  }}</v-list-item-subtitle>
                  <v-list-item-title>{{ material.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  layout: "producer",
  data() {
    return {
      histories: [
        {
          date: "2013/7/7",
          content: "1st album 『ガラクタ概論』 Release",
          url: "https://youtu.be/bAigyv-eU_c"
        },
        {
          date: "2014/5/2",
          content:
            "「ラピスで、ご・め・ん・な・さい♪」コンテスト グランプリ『ちいさなはじまりのうた』",
          url: "http://9129suppon.com/175/"
        },
        {
          date: "2018/10/31",
          content: "配信限定 mini album 『はじまりの歌』 Release",
          url: "https://soundcloud.com/ashcolor/mini-album"
        },
        {
          date: "2019/2/9",
          content: "SNOW MIKU LIVE! 2019 会場BGM『thanksgiving song』",
          url:
            "https://twitter.com/KarenT_Crypton/status/1097435412300103681?s=20"
        }
      ],
      equipments: [
        {
          type: "hardware",
          materials: [
            {
              type: "speaker",
              name: "PM0.4"
            },
            {
              type: "headphone",
              name: "K702"
            },
            {
              type: "audio interface",
              name: "UA-25EX"
            },
            {
              type: "keyboard",
              name: "Q49"
            }
          ]
        },
        {
          type: "software",
          materials: [
            {
              type: "VOCALOID",
              name: "初音ミク(V2･append･V3)、巡音ルカ,IA ROCKS,ken"
            },
            {
              type: "guitar",
              name: "Real Guitar4、Ample Guitar LP III"
            },
            {
              type: "drums",
              name: "Addictive Drums(Retro･Indie･Black velvet)、BFD2、Battery 4"
            },
            {
              type: "etc",
              name: "Trillian、KOMPLETE7 ELEMENTS、Addictive Keys"
            }
          ]
        }
      ]
    };
  }
};
</script>
