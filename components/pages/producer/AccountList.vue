<script setup lang="ts">
import { Icon } from "@iconify/vue";

const accounts = [
    {
        name: "メール",
        icon: "fluent:mail-16-filled",
        url: "mailto:ashcolor27@gmail.com",
    },
    {
        name: "Twitter",
        icon: "mdi:twitter",
        url: "https://twitter.com/ashcolor",
    },
    {
        name: "YouTube",
        icon: "mdi:youtube",
        url: "https://www.youtube.com/channel/UC-bRr8lE7AEuXQ_L6sQTaLg",
    },
    {
        name: "niconico",
        icon: "simple-icons:niconico",
        url: "https://www.nicovideo.jp/mylist/15513536",
    },
    {
        name: "Piapro",
        icon: "",
        url: "https://piapro.jp/ss0627",
    },
];
</script>

<template>
    <div class="flex flex-row gap-2 sm:gap-4">
        <NuxtLink v-for="account in accounts" :to="account.url" target="_blank">
            <template v-if="account.icon">
                <Icon :icon="account.icon" width="24" />
            </template>
            <template v-else>
                <p>
                    {{ account.name }}
                </p>
            </template>
        </NuxtLink>
    </div>
</template>
