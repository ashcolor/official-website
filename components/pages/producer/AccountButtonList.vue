<script setup lang="ts">
import { Icon } from "@iconify/vue";

const accounts = [
    {
        name: "メール",
        icon: "fluent:mail-16-filled",
        iconWidth: 24,
        url: "mailto:ashcolor27@gmail.com",
    },
    {
        name: "Twitter",
        icon: "mdi:twitter",
        iconWidth: 24,
        url: "https://twitter.com/ashcolor",
    },
    {
        name: "YouTube",
        icon: "mdi:youtube",
        iconWidth: 24,
        url: "https://www.youtube.com/channel/UC-bRr8lE7AEuXQ_L6sQTaLg",
    },
    {
        name: "niconico",
        icon: "simple-icons:niconico",
        iconWidth: 18,
        url: "https://www.nicovideo.jp/mylist/15513536",
    },
    {
        name: "Piapro（inst音源）",
        icon: "",
        url: "https://piapro.jp/ss0627",
    },
    {
        name: "KARENT（配信サイト一覧）",
        icon: "",
        url: "https://karent.jp/artist/pp000655",
    },
];

const accountWithIcon = computed(() => accounts.filter((account) => account.icon));
const accountWithoutIcon = computed(() => accounts.filter((account) => !account.icon));
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row items-center gap-2 sm:gap-4">
            <NuxtLink
                v-for="account in accountWithIcon"
                :key="account.name"
                :to="account.url"
                class="btn btn-square btn-circle btn-neutral btn-sm"
                target="_blank"
            >
                <Icon :icon="account.icon" :width="account.iconWidth" />
            </NuxtLink>
        </div>
        <div class="flex flex-col items-start gap-2 sm:gap-4">
            <NuxtLink
                v-for="account in accountWithoutIcon"
                :key="account.name"
                :to="account.url"
                class="btn btn-neutral btn-sm normal-case"
                target="_blank"
            >
                {{ account.name }}
            </NuxtLink>
        </div>
    </div>
</template>
