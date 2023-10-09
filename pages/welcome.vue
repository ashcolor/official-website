<script setup lang="ts">
const route = useRoute();

const description = "Welcome";

const pageTitle = computed(() => `${SITE_TITLE}`);

const url = `${import.meta.env.VITE_NUXT_PUBLIC_SITE_URL}${route.path}`;

useSeoMeta({
    title: pageTitle.value,
    ogTitle: pageTitle.value,
    description,
    ogDescription: description,
    ogImage: "/img/artist.png",
    ogUrl: url,
    ogType: "article",
    ogSiteName: SITE_TITLE,
    twitterCard: "summary_large_image",
});

useSeoMeta({});
</script>

<template>
    <div class="flex h-[100dvh] w-screen flex-col">
        <div class="grid h-full w-full">
            <div class="col-start-1 col-end-2 row-start-1 row-end-2">
                <div class="flex h-full flex-col place-items-center justify-center">
                    <h1 class="text-center text-4xl font-thin">ashcolor official website</h1>
                    <h2 class="text-center text-base font-thin text-primary">
                        <NuxtLink to="https://ashcolor.github.io" target="_blank">
                            Engineer
                        </NuxtLink>
                        /
                        <NuxtLink to="/" target="_blank">Producer</NuxtLink>
                    </h2>
                </div>
            </div>
            <div class="z-[-1] col-start-1 col-end-2 row-start-1 row-end-2">
                <div class="h-full">
                    <WelcomeWaveCanvas wave-color-string="#acacac" />
                </div>
            </div>
        </div>
        <WelcomeFooter />
    </div>
</template>
