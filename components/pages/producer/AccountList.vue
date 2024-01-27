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
        iconWidth: 20,
        url: "https://www.nicovideo.jp/series/130347",
    },
    {
        name: "メール",
        icon: "fluent:mail-16-filled",
        iconWidth: 24,
        url: "mailto:ashcolor27@gmail.com",
    },
];
</script>

<template>
    <div class="px-2">
        <div class="flex flex-row items-center gap-2 sm:gap-4 sm:px-4">
            <NuxtLink
                v-for="account in accounts"
                :key="account.name"
                :to="account.url"
                target="_blank"
            >
                <template v-if="account.icon">
                    <Icon :name="account.icon" :size="account.iconWidth" />
                </template>
                <template v-else>
                    <p>
                        {{ account.name }}
                    </p>
                </template>
            </NuxtLink>
        </div>
    </div>
</template>
