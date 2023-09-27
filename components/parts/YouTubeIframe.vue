<script setup lang="ts">
interface Props {
    videoId: string;
}
const props = withDefaults(defineProps<Props>(), {
    videoId: "",
});
</script>

<template>
    <iframe
        :src="`https://www.youtube.com/embed/${props.videoId}?controls=0`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
</template>
