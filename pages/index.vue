<script setup lang="ts"></script>

<template>
    <NuxtLayout name="producer">
        <CommonH1>ashcolor official website</CommonH1>
        <CommonH2>New Song</CommonH2>
        <div class="flex flex-col gap-2 place-items-center">
            <YouTubeIframe :width="560" :height="315" :videoId="'dxICvB8WqKo'" />
            <NuxtLink to="/producer/music" class="link">and more</NuxtLink>
        </div>
        <CommonH2>New Album</CommonH2>
        <div class="flex flex-col gap-2 place-items-center">
            <YouTubeIframe :width="560" :height="315" :videoId="'2O-Vrpsu8RA'" />
            <NuxtLink to="/producer/discography" class="link">and more</NuxtLink>
        </div>
    </NuxtLayout>
</template>
