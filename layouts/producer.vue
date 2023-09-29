<script setup lang="ts">
const route = useRoute();

const url = `${import.meta.env.VITE_NUXT_PUBLIC_SITE_URL}${route.path}`;

useSeoMeta({
    ogImage: "/img/artist.png",
    ogUrl: url,
    ogType: "article",
    ogSiteName: SITE_TITLE,
    twitterCard: "summary_large_image",
});
</script>

<template>
    <div>
        <ProducerHeader />
        <div class="container mx-auto px-4 py-6 sm:px-6 md:px-8">
            <slot />
        </div>
        <CommonFooter />
    </div>
</template>
