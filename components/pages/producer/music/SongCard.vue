<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    song: Object;
}
const props = withDefaults(defineProps<Props>(), {
    song: () => {},
});
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
                <a v-if="props.song.youtube" :href="props.song.youtube" target="_blank">
                    <Icon icon="mdi:youtube" width="28" />
                </a>
                <a v-if="props.song.niconico" :href="props.song.niconico" target="_blank">
                    <Icon icon="simple-icons:niconico" width="24" />
                </a>
                <ProducerMusicLyricButton
                    v-if="props.song.lyric"
                    :title="props.song.name"
                    :file-url="LYRIC_BASE_URL + props.song.lyric"
                >
                    <Icon icon="ep:notebook" width="24" class="cursor-pointer" />
                </ProducerMusicLyricButton>
            </div>
        </div>
    </div>
</template>
