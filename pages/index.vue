<script setup lang="ts">
import SONGS from "~/data/songs.json";
import ALBUMS from "~/data/albums.json";

const newestSongYoutubeId = computed(() => {
    const newestSong = SONGS[SONGS.length - 1];
    const newestSongYoutubeURL = new URL(newestSong?.youtube || "");
    return newestSongYoutubeURL.pathname;
});

const newestAlbumYoutubeId = computed(() => {
    const newestAlbum = ALBUMS[ALBUMS.length - 1];
    return newestAlbum?.crossFadeYouTubeId;
});

useHead({
    title: "Home",
});
</script>

<template>
    <NuxtLayout name="producer">
        <CommonH1>ashcolor official website</CommonH1>
        <CommonH2>New Song</CommonH2>
        <div class="flex flex-col place-items-center gap-2">
            <YouTubeIframe :video-id="newestSongYoutubeId" class="aspect-video w-full max-w-4xl" />
            <NuxtLink to="/producer/music" class="link">and more</NuxtLink>
        </div>
        <CommonH2>New Album</CommonH2>
        <div class="flex flex-col place-items-center gap-2">
            <YouTubeIframe :video-id="newestAlbumYoutubeId" class="aspect-video w-full max-w-4xl" />
            <NuxtLink to="/producer/discography" class="link">and more</NuxtLink>
        </div>
    </NuxtLayout>
</template>
