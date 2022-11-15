<script setup lang="ts">
interface Props {
    videoId: string;
    width?: number;
    height?: number;
}
const props = withDefaults(defineProps<Props>(), {
    videoId: "",
    width: 560,
    height: 315,
});
</script>

<template>
    <iframe
        :width="width"
        :height="height"
        :src="`https://www.youtube.com/embed/${videoId}?controls=0`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
</template>
