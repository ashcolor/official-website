<!-- @https://codepen.io/goodkatz/pen/LYPGxQz -->
<script setup lang="ts">
import Color from "color";

interface Props {
    waveColorString: string;
}
const props = withDefaults(defineProps<Props>(), {
    waveColorString: "",
});

const waveColor = computed(() => Color(props.waveColorString));
</script>

<template>
    <div class="flex h-full flex-col justify-end">
        <svg
            class="h-[40%] w-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            shape-rendering="auto"
        >
            <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v200h-352z"
                />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="5" :fill="waveColor.alpha(0.7).hexa()" />
                <use xlink:href="#gentle-wave" x="48" y="0" :fill="waveColor.alpha(0.5).hexa()" />
                <use xlink:href="#gentle-wave" x="48" y="2" :fill="waveColor.alpha(0.3).hexa()" />
                <use xlink:href="#gentle-wave" x="48" y="4" :fill="waveColor.alpha(1).hexa()" />
            </g>
        </svg>
    </div>
</template>

<style scoped lang="scss">
$duration: 9s;
.parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
@for $i from 1 through 4 {
    .foo-#{$i} {
        width: 10px * $i;
    }
    .parallax > use:nth-child(#{$i}) {
        animation-delay: calc((-#{$i}s - 1s));
        animation-duration: calc(#{$i} * #{$duration});
    }
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }
    100% {
        transform: translate3d(85px, 0, 0);
    }
}
</style>
