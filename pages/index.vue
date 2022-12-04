<script setup lang="ts">
useHead({
    title: "Home",
});
</script>

<template>
    <NuxtLayout name="producer">
        <CommonH1>ashcolor official website</CommonH1>
        <CommonH2>New Song</CommonH2>
        <div class="flex flex-col gap-2 place-items-center">
            <YouTubeIframe :videoId="'dxICvB8WqKo'" class="w-full aspect-video max-w-4xl" />
            <NuxtLink to="/producer/music" class="link">and more</NuxtLink>
        </div>
        <CommonH2>New Album</CommonH2>
        <div class="flex flex-col gap-2 place-items-center">
            <YouTubeIframe :videoId="'2O-Vrpsu8RA'" class="w-full aspect-video max-w-4xl" />
            <NuxtLink to="/producer/discography" class="link">and more</NuxtLink>
        </div>
    </NuxtLayout>
</template>
