<script setup lang="ts">
const route = useRoute();

const url = `${import.meta.env.VITE_NUXT_PUBLIC_SITE_URL}${route.path}`;

const siteTitle = "ashcolor official website";

useSeoMeta({
    ogImage: "/img/artist.png",
    ogUrl: url,
    ogType: "article",
    ogSiteName: SITE_TITLE,
    twitterCard: "summary_large_image",
});

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${siteTitle}` : `${siteTitle}`;
    },
    htmlAttrs: { "data-theme": "mytheme" },
});
</script>

<template>
    <NuxtPage />
</template>
