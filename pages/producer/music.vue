<script setup lang="ts">
import srcSongs from "~/data/songs.json";

useHead({
    title: "Music",
});

const activeSingers = ref([]);
const activeAlbums = ref([]);

const songs = computed(() => {
    let tmpSong = JSON.parse(JSON.stringify(srcSongs));

    activeSingers.value.forEach((singer) => {
        tmpSong = tmpSong.filter((song) => song.singers.includes(singer));
    });

    activeAlbums.value.forEach((album) => {
        tmpSong = tmpSong.filter((song) => song.albums.includes(album));
    });

    return tmpSong.sort((a, b) => b.id - a.id);
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
        <div class="my-8 flex flex-wrap gap-2">
            <!-- just in time 対策 -->
            <div
                class="hidden border-miku bg-miku text-miku hover:border-miku hover:bg-miku hover:text-miku"
            ></div>
            <div
                class="hidden border-luka bg-luka text-luka hover:border-luka hover:bg-luka hover:text-luka"
            ></div>
            <CustomButton
                class="btn-sm"
                base-color="miku"
                :is-active="activeSingers.includes('miku')"
                @click="onSingerToggleButtonClick('miku')"
            >
                初音ミク
            </CustomButton>
            <CustomButton
                class="btn-sm"
                base-color="luka"
                :is-active="activeSingers.includes('luka')"
                @click="onSingerToggleButtonClick('luka')"
            >
                巡音ルカ
            </CustomButton>
            <button
                class="btn btn-primary btn-sm"
                :class="{
                    'btn-outline': !activeAlbums.includes('an_introduction_to_odds_and_ends'),
                }"
                @click="onAlbumToggleButtonClick('an_introduction_to_odds_and_ends')"
            >
                ガラクタ概論
            </button>
            <button
                class="btn btn-primary btn-sm"
                :class="{
                    'btn-outline': !activeAlbums.includes('song_of_the_beginning'),
                }"
                @click="onAlbumToggleButtonClick('song_of_the_beginning')"
            >
                はじまりの歌
            </button>
        </div>
        <div class="mt-8 flex flex-wrap justify-around gap-12">
            <ProducerMusicSongCard
                v-for="song in songs"
                :key="song.id"
                :song="song"
            ></ProducerMusicSongCard>
        </div>
    </NuxtLayout>
</template>
