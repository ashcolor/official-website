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
            <div class="absolute right-1 top-0.5 flex flex-col gap-y-1">
                <div class="flex flex-row justify-end gap-1">
                    <span
                        v-for="singer in props.song.singers"
                        :key="singer"
                        class="badge border-0 text-primary-content"
                        :class="{ ['bg-' + singer]: true }"
                        >{{ VOCALOID_SINGERS[singer] }}</span
                    >
                </div>
                <div class="flex flex-row justify-end gap-1">
                    <span
                        v-for="album in props.song.albums"
                        :key="album"
                        class="badge badge-primary"
                        >{{ ALBUM_TITLES[album] }}</span
                    >
                </div>
            </div>
        </div>
        <div class="card-body gap-0 p-2">
            <p class="text-xs text-primary">
                {{ Util.dateStringFormat(props.song.published, "yyyy/MM/dd") }}
            </p>
            <p class="">{{ props.song.name }}</p>
            <div class="card-actions mt-2 text-primary">
                <a
                    v-if="props.song.youtube"
                    :href="`${YOUTUBE_URL_PREFIX}${props.song.youtube}`"
                    target="_blank"
                >
                    <Icon icon="mdi:youtube" width="28" />
                </a>
                <a
                    v-if="props.song.niconico"
                    :href="`${NICONICO_URL_PREFIX}${props.song.niconico}`"
                    target="_blank"
                >
                    <Icon icon="simple-icons:niconico" width="24" />
                </a>
                <div @click="isShowDetail = true">
                    <Icon icon="ep:notebook" width="24" class="cursor-pointer" />
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
            </div>
        </div>
    </div>
</template>
