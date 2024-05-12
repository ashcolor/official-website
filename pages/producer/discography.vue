<script setup lang="ts">
import albums from "~/data/albums.json";

const title = "Discography";
const description = "ディスコグラフィー";

useSeoMeta({
    title,
    ogTitle: pageTitle(title),
    description,
    ogDescription: description,
});

const sortedAlbums = computed(() => {
    return JSON.parse(JSON.stringify(albums)).reverse();
});
</script>

<template>
    <NuxtLayout>
        <CommonH1>Discography</CommonH1>
        <div class="my-32 flex flex-col gap-64">
            <div v-for="album in sortedAlbums" :key="album.name" class="flex flex-col gap-6">
                <div class="flex flex-col gap-2 text-center">
                    <p class="text-sm text-primary">
                        {{ Util.dateStringFormat(album.published, "yyyy/MM/dd") }}&nbsp;RELEASE
                    </p>
                    <h2 class="m-auto inline-block w-fit border-b-2 border-neutral px-8">
                        <span class="inline-block">{{ album.description }}</span>
                        <span class="inline-block text-2xl">「{{ album.name }}」</span>
                    </h2>
                </div>
                <div class="flex flex-col items-center justify-center gap-16 lg:flex-row">
                    <figure class="aspect-square max-w-lg p-4">
                        <img
                            :src="`${THUMBNAIL_BASE_URL}${album.thumbnail}`"
                            class="border"
                            alt="Album"
                        />
                    </figure>
                    <div class="flex flex-col gap-8">
                        <div class="flex flex-col gap-4">
                            <p>Track List</p>
                            <div class="flex flex-col gap-2">
                                <ol v-for="(song, index) in album.songs" :key="song">
                                    <li>{{ index + 1 }}. {{ song }}</li>
                                </ol>
                            </div>
                        </div>
                        <div v-if="album.sampleYouTubeId" class="flex flex-col gap-4">
                            <div>
                                <YouTubeIframe :video-id="album.sampleYouTubeId" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center gap-8 text-center lg:flex-row">
                    <div class="flex flex-col gap-2">
                        <p>Subscription</p>
                        <div class="flex flex-wrap justify-center gap-4">
                            <NuxtLink
                                v-for="distribution in album.distribution.subscription"
                                :key="distribution.name"
                                :to="album.inst"
                                class="btn btn-primary"
                            >
                                {{ distribution.name }}
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p>Buy</p>
                        <div class="flex flex-wrap justify-center gap-4">
                            <NuxtLink
                                v-for="distribution in album.distribution.download"
                                :key="distribution.name"
                                :to="album.inst"
                                class="btn btn-primary"
                            >
                                {{ distribution.name }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
