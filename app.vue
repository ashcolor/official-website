<script setup lang="ts">
const siteTitle = "ashcolor official website";
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
