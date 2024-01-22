<script setup lang="ts">
import srcSongs from "~/data/songs.json";

const title = "Music";
const description = "楽曲一覧";

useHead({
    title,
});

const pageTitle = computed(() => `${title} | ${SITE_TITLE}`);

useSeoMeta({
    title: pageTitle.value,
    ogTitle: pageTitle.value,
    description,
    ogDescription: description,
});

const activeSingers = ref([]);
const activeAlbums = ref([]);

const songs = computed(() => {
    let tmpSong = JSON.parse(JSON.stringify(srcSongs)).reverse();

    activeSingers.value.forEach((singer) => {
        tmpSong = tmpSong.filter((song) => song.singers.includes(singer));
    });

    activeAlbums.value.forEach((album) => {
        tmpSong = tmpSong.filter((song) => song.albums.includes(album));
    });

    return tmpSong;
});

const onSingerToggleButtonClick = (value: string) => {
    activeSingers.value = toggle(activeSingers.value, value);
};

const onAlbumToggleButtonClick = (value: string) => {
    activeAlbums.value = toggle(activeAlbums.value, value);
};

const removeAtIndex = (arr, index) => {
    const copy = [...arr];
    copy.splice(index, 1);
    return copy;
};

const toggle = (arr, item, getValue = (item) => item) => {
    const index = arr.findIndex((i) => getValue(i) === getValue(item));
    if (index === -1) return [...arr, item];
    return removeAtIndex(arr, index);
};
</script>

<template>
    <NuxtLayout name="producer">
        <CommonH1>Music</CommonH1>
        <CommonH2>Songs</CommonH2>
        <div class="my-16 flex flex-col justify-center gap-8 md:flex-row">
            <div class="flex flex-row place-items-center gap-2">
                <div>Singer</div>
                <div class="flex flex-wrap gap-1">
                    <CustomButton
                        v-for="(singer, key) in SINGERS"
                        :key="key"
                        class="btn-sm"
                        :color="singer.color"
                        :is-active="activeSingers.includes(key)"
                        @click="onSingerToggleButtonClick(key)"
                    >
                        {{ singer.name }}
                    </CustomButton>
                </div>
            </div>
            <div class="flex flex-row place-items-center gap-2">
                <div>Album</div>
                <div class="flex flex-wrap gap-1">
                    <button
                        v-for="(albumTitle, key) in ALBUM_TITLES"
                        :key="key"
                        class="btn btn-primary btn-sm"
                        :class="{
                            'btn-outline': !activeAlbums.includes(key),
                        }"
                        @click="onAlbumToggleButtonClick(key)"
                    >
                        {{ albumTitle }}
                    </button>
                </div>
            </div>
        </div>
        <div class="my-16 flex flex-wrap justify-center gap-32">
            <ProducerMusicSongCard
                v-for="song in songs"
                :key="song.name"
                :song="song"
            ></ProducerMusicSongCard>
        </div>
    </NuxtLayout>
</template>
