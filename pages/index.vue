<script setup lang="ts">
import SONGS from "~/data/songs.json";
import ALBUMS from "~/data/albums.json";

const newestSongYoutubeId = computed(() => {
    const newestSong = SONGS[SONGS.length - 1];
    const newestSongYoutubeURL = new URL(newestSong?.youtube || "");

    console.log(newestSongYoutubeURL.pathname);
    return newestSongYoutubeURL.pathname;
});

const newestAlbumYoutubeId = computed(() => {
    const newestAlbum = ALBUMS[ALBUMS.length - 1];
    const newestAlbumYoutubeURL = new URL(newestAlbum?.crossfade || "");

    console.log(newestAlbumYoutubeURL.pathname);
    return newestAlbumYoutubeURL.pathname;
});

useHead({
    title: "Home",
});
</script>

<template>
    <NuxtLayout name="producer">
        <CommonH1>ashcolor official website</CommonH1>
        <CommonH2>New Song</CommonH2>
        <div class="flex flex-col gap-2 place-items-center">
            <YouTubeIframe :videoId="newestSongYoutubeId" class="w-full aspect-video max-w-4xl" />
            <NuxtLink to="/producer/music" class="link">and more</NuxtLink>
        </div>
        <CommonH2>New Album</CommonH2>
        <div class="flex flex-col gap-2 place-items-center">
            <YouTubeIframe :videoId="'2O-Vrpsu8RA'" class="w-full aspect-video max-w-4xl" />
            <NuxtLink to="/producer/discography" class="link">and more</NuxtLink>
        </div>
    </NuxtLayout>
</template>
