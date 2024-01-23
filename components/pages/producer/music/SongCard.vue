<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { NICONICO_URL_PREFIX, YOUTUBE_URL_PREFIX } from "~/utils/const";

interface Props {
    song: Object;
}
const props = withDefaults(defineProps<Props>(), {
    song: () => {},
});

const isShowDetail = ref(false);
</script>

<template>
    <div class="card w-fit shadow-md">
        <div class="relative inline-block border">
            <figure>
                <img :src="THUMBNAIL_BASE_URL + props.song.thumbnail" width="200" height="200" />
            </figure>
            <div class="absolute left-0 top-0 flex flex-col">
                <div class="flex flex-row">
                    <span
                        v-for="singer in props.song.singers"
                        :key="singer"
                        class="badge badge-sm gap-1 border-0 text-primary-content"
                        :class="{ ['bg-' + singer]: true }"
                        :style="`background-color: ${SINGERS[singer]['color']}`"
                    >
                        <Icon icon="mdi:music" width="12" class="cursor-pointer" />

                        {{ SINGERS[singer]["name"] }}
                    </span>
                </div>
            </div>
            <div class="absolute bottom-0 right-0 flex flex-col">
                <div class="flex flex-row">
                    <span
                        v-for="album in props.song.albums"
                        :key="album"
                        class="badge badge-primary badge-sm gap-1 border-0"
                    >
                        <Icon icon="fa6-solid:compact-disc" width="12" class="cursor-pointer" />
                        {{ ALBUM_TITLES[album] }}
                    </span>
                </div>
            </div>

            <div
                class="absolute left-0 top-0 h-full w-full opacity-0 transition hover:bg-black/30 hover:opacity-100"
            >
                <div class="grid h-full w-full">
                    <div class="flex flex-row place-items-center gap-2 place-self-center">
                        <div class="tooltip tooltip-primary" data-tip="YouTubeを開く">
                            <a
                                v-if="props.song.youtube"
                                class="btn btn-circle"
                                :href="`${YOUTUBE_URL_PREFIX}${props.song.youtube}`"
                                target="_blank"
                            >
                                <Icon icon="mdi:youtube" width="28" />
                            </a>
                        </div>
                        <div class="tooltip tooltip-primary" data-tip="niconicoを開く">
                            <a
                                v-if="props.song.niconico"
                                class="btn btn-circle"
                                :href="`${NICONICO_URL_PREFIX}${props.song.niconico}`"
                                target="_blank"
                            >
                                <Icon icon="simple-icons:niconico" width="24" />
                            </a>
                        </div>
                        <div class="tooltip tooltip-primary" data-tip="歌詞を開く">
                            <button class="btn btn-circle" @click="isShowDetail = true">
                                <Icon icon="ep:notebook" width="24" class="cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body gap-1 p-4">
            <p class="text-xs text-primary">
                {{ Util.dateStringFormat(props.song.published, "yyyy/MM/dd") }}
            </p>
            <p class="">{{ props.song.name }}</p>
        </div>
    </div>
    <Teleport to="body">
        <div class="modal" :class="{ 'modal-open': isShowDetail }">
            <ProducerMusicSongDetail
                :title="props.song.name"
                :singers="props.song.singers"
                :thumbnail="props.song.thumbnail"
                :youtube="props.song.youtube"
                :niconico="props.song.niconico"
                :published="props.song.published"
                :file-url="LYRIC_BASE_URL + props.song.lyric"
                @close="isShowDetail = false"
            >
            </ProducerMusicSongDetail>
        </div>
    </Teleport>
</template>
