<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    song: Array<any>;
}
const props = withDefaults(defineProps<Props>(), {
    song: [],
});
</script>

<template>
    <div class="card w-fit shadow-md">
        <div class="inline-block relative border">
            <figure>
                <img :src="THUMBNAIL_BASE_URL + song.thumbnail" width="200" height="200" />
            </figure>
            <div class="absolute top-0.5 right-1 flex flex-col gap-y-1">
                <div class="singer-icons flex flex-row justify-end gap-1">
                    <span
                        v-for="singer in song.singers"
                        class="badge border-0 text-primary-content"
                        :class="{ ['bg-' + singer]: true }"
                        >{{ VOCALOID_SINGERS[singer] }}</span
                    >
                </div>
                <div class="album-icons flex flex-row justify-end gap-1">
                    <span class="badge badge-primary" v-for="album in song.albums">{{
                        ALBUM_TITLES[album]
                    }}</span>
                </div>
            </div>
        </div>
        <div class="card-body gap-0 p-2">
            <p class="text-xs text-primary">
                {{ Util.dateStringFormat(song.published, "yyyy/MM/dd") }}
            </p>
            <p class="">{{ song.name }}</p>
            <div class="card-actions text-primary mt-2">
                <a v-if="song.youtube" :href="song.youtube" target="_blank">
                    <Icon icon="mdi:youtube" width="28" />
                </a>
                <a v-if="song.niconico" :href="song.niconico" target="_blank">
                    <Icon icon="simple-icons:niconico" width="24" />
                </a>
                <ProducerMusicLyricButton
                    v-if="song.lyric"
                    :title="song.name"
                    :fileUrl="LYRIC_BASE_URL + song.lyric"
                >
                    <Icon icon="ep:notebook" width="24" class="cursor-pointer" />
                </ProducerMusicLyricButton>
            </div>
        </div>
    </div>
</template>
