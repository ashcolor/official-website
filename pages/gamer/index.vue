<script setup lang="ts">
import COPY_SONGS from "~~/data/bbp_copies.json";
import ORIGINAL_SONGS from "~~/data/bbp_originals.json";

const currentPage = ref(1);
const headers = ref([
    {
        text: "ジャンル",
        align: "start",
        value: "genre",
    },
    { text: "曲名", value: "name" },
    { text: "アーティスト", value: "artist" },
    { text: "更新日", value: "modified" },
    { text: "配信日時", value: "published" },
    { text: "", value: "url" },
]);

const limit = ref(10);
const paginatedSongs = computed(() => {
    const start = limit.value * (currentPage.value - 1);
    const end = start + limit.value;
    const sortedData = COPY_SONGS.sort((a, b) => b["modified"] - a["modified"]);
    console.log(sortedData.slice(start, limit.value));

    return sortedData.slice(start, end);
});

const pageCount = computed(() => Math.round(COPY_SONGS.length / 10));

const pageClick = (page: number) => {
    currentPage.value = page;
};
</script>

<template>
    <NuxtLayout name="gamer">
        <CommonH1>大合奏！バンドブラザーズP</CommonH1>
        <CommonH2>耳コピ</CommonH2>
        <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th v-for="header in headers">{{ header.text }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="song in paginatedSongs">
                        <td>
                            <div class="badge badge-primary">
                                {{ song.genre }}
                            </div>
                        </td>
                        <td>{{ song.name }}</td>
                        <td>{{ song.artist }}</td>
                        <td>{{ song.modified }}</td>
                        <td>{{ song.published }}</td>
                        <td>
                            <audio :src="song.url" class="h-8" controls>
                                <p>
                                    音声を再生するには、audioタグをサポートしたブラウザが必要です。
                                </p>
                            </audio>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="text-center mt-4">
            <CustomPagination
                :currentPage="currentPage"
                :pageCount="pageCount"
                @pageClick="pageClick"
            />
        </div>
        <CommonH2>オリジナル曲</CommonH2>
        <div class="flex flex-wrap justify-around items-start gap-4 mt-8">
            <div v-for="original in ORIGINAL_SONGS" class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p class="text-primary">
                        {{ original.published }}
                    </p>
                    <p class="card-title font-normal">
                        {{ original.title }}
                    </p>
                    <YouTubeIframe class="aspect-video" :videoId="original.url" />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
