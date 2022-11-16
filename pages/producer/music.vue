<script setup lang="ts">
import srcSongs from "~/data/songs.json";

const activeSingers = ref([]);
const activeAlbums = ref([]);

const songs = computed(() => {
    let tmpSong = srcSongs;

    activeSingers.value.forEach((singer) => {
        tmpSong = tmpSong.filter((song) => song["singers"].indexOf(singer) >= 0);
    });

    activeAlbums.value.forEach((album) => {
        tmpSong = tmpSong.filter((song) => song["albums"].indexOf(album) >= 0);
    });

    return tmpSong.sort((a, b) => b["id"] - a["id"]);
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
        <div class="flex flex-wrap gap-2 my-8">
            <!-- just in time 対策 -->
            <div
                class="hidden bg-miku text-miku border-miku hover:bg-miku hover:text-miku hover:border-miku"
            ></div>
            <div
                class="hidden bg-luka text-luka border-luka hover:bg-luka hover:text-luka hover:border-luka"
            ></div>
            <CustomButton
                class="btn-sm"
                baseColor="miku"
                :isActive="activeSingers.includes('miku')"
                @click="onSingerToggleButtonClick('miku')"
            >
                初音ミク
            </CustomButton>
            <CustomButton
                class="btn-sm"
                baseColor="luka"
                :isActive="activeSingers.includes('luka')"
                @click="onSingerToggleButtonClick('luka')"
            >
                巡音ルカ
            </CustomButton>
            <button
                class="btn btn-sm btn-primary"
                :class="{
                    'btn-outline': !activeAlbums.includes('an_introduction_to_odds_and_ends'),
                }"
                @click="onAlbumToggleButtonClick('an_introduction_to_odds_and_ends')"
            >
                ガラクタ概論
            </button>
            <button
                class="btn btn-sm btn-primary"
                :class="{
                    'btn-outline': !activeAlbums.includes('song_of_the_beginning'),
                }"
                @click="onAlbumToggleButtonClick('song_of_the_beginning')"
            >
                はじまりの歌
            </button>
        </div>
        <div class="flex flex-wrap justify-around gap-12 mt-8">
            <ProducerMusicSongCard v-for="song in songs" :song="song"></ProducerMusicSongCard>
        </div>
    </NuxtLayout>
</template>
