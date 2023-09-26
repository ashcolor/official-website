<script setup lang="ts">
import { Icon } from "@iconify/vue";
import albums from "~/data/albums.json";

useHead({
    title: "Discography",
});
</script>

<template>
    <NuxtLayout name="producer">
        <CommonH1>Discography</CommonH1>
        <CommonH2>Streaming & Download</CommonH2>
        <ProducerDiscographyDownloadList />
        <p class="text-sm pt-4">その他の配信サイトでも配信中</p>
        <CommonH2>Album</CommonH2>
        <div class="flex flex-col gap-8">
            <div v-for="album in albums">
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <div class="flex justify-center p-8">
                        <figure>
                            <img
                                :src="`${THUMBNAIL_BASE_URL}/${album.thumbnail}`"
                                class="border"
                                alt="Album"
                            />
                        </figure>
                    </div>
                    <div class="card-body">
                        <p class="text-sm text-primary">
                            {{ Util.dateStringFormat(album.published, "yyyy/MM/dd") }}
                        </p>
                        <p>{{ album.description }}</p>
                        <p class="card-title text-2xl">{{ album.name }}</p>
                        <CommonH3>Track List</CommonH3>
                        <div class="flex flex-col gap-2">
                            <ol v-for="(song, index) in album.songs">
                                <li>{{ index + 1 }}. {{ song }}</li>
                            </ol>
                        </div>
                        <CommonH3>Cross Fade</CommonH3>
                        <div>
                            <YouTubeIframe :video-id="album.crossfade" />
                        </div>
                        <CommonH3>Downloads</CommonH3>
                        <div class="flex flex-wrap justify-center gap-4">
                            <a v-if="album.inst" :href="album.inst" class="inline">
                                <button class="btn gap-2">
                                    Inst Download
                                    <Icon icon="fa-solid:download" />
                                </button>
                            </a>
                            <a v-if="album.lyric" :href="album.lyric" class="inline">
                                <button class="btn gap-2">
                                    Lyric Download
                                    <Icon icon="fa-solid:download" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
