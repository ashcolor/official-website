<script setup lang="ts">
import { Icon } from "@iconify/vue";

const downloads = [
    {
        name: "iTunes",
        icon: "fa-brands:itunes",
        url: "https://itunes.apple.com/jp/artist/ashcolor/807046372",
    },
    {
        name: "Spotify",
        icon: "fa-brands:spotify",
        url: "https://open.spotify.com/artist/530ZxZmJuJ7sAcI84QJwJA?si=54xDsAeoQFyC7f-BxCoqiQ",
    },
    {
        name: "LINE MUSIC",
        icon: "bi:line",
        url: "https://music.line.me/artist/mi000000000014298c",
    },
    {
        name: "Amazon Music",
        icon: "fa-brands:amazon",
        url: "https://www.amazon.co.jp/s?k=ashcolor&i=digital-music&search-type=ss&ref=ntt_srch_drd_B00I9GFM1O",
    },
];
</script>

<template>
    <div class="flex flex-wrap gap-6">
        <a
            v-for="download in downloads"
            :key="download.name"
            :href="download.url"
            target="_blank"
            class="flex gap-1"
        >
            <Icon :icon="download.icon" width="24" class="inline" />
            <span>{{ download.name }}</span>
        </a>
    </div>
</template>
