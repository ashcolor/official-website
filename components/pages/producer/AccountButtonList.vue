<script setup lang="ts">
const accounts = [
    {
        name: "Twitter",
        icon: "simple-icons:x",
        iconWidth: 18,
        url: "https://twitter.com/ashcolor",
    },
    {
        name: "YouTube",
        icon: "mdi:youtube",
        iconWidth: 24,
        url: "https://www.youtube.com/@ashcolor",
    },
    {
        name: "niconico",
        icon: "simple-icons:niconico",
        iconWidth: 18,
        url: "https://www.nicovideo.jp/series/130347",
    },
    {
        name: "メール",
        icon: "fluent:mail-16-filled",
        iconWidth: 24,
        url: "mailto:ashcolor27@gmail.com",
    },
    {
        name: "Piapro",
        icon: "",
        url: "https://piapro.jp/ss0627",
    },
    {
        name: "FANBOX",
        icon: "",
        url: "https://ashcolor.fanbox.cc/",
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
                <Icon :name="account.icon" :size="account.iconWidth" />
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
