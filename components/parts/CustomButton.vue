<script setup lang="ts">
interface Props {
    color: string;
    isActive: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    color: "primary",
    isActive: false,
});
</script>

<template>
    <button class="btn relative" :class="{ active: props.isActive }">
        <div class="absolute z-0 size-full bg-black opacity-0 hover:opacity-10"></div>
        <p class="pointer-events-none z-10"><slot /></p>
    </button>
</template>

<style scoped>
button {
    color: v-bind(props.color);
    border-color: v-bind(props.color);
    background-color: transparent;
}

button:hover {
    color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
    background-color: v-bind(props.color);
    border-color: v-bind(props.color);
}

button.active {
    color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
    background-color: v-bind(props.color);
    border-color: v-bind(props.color);
}

button.active:hover {
    color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
    background-color: color-mix(
        in oklab,
        oklch(var(v-bind(props.color), var(--b2)) / var(--tw-bg-opacity)) 90%,
        black
    );
    border-color: color-mix(
        in oklab,
        oklch(var(v-bind(props.color), var(--b2)) / var(--tw-border-opacity)) 90%,
        black
    );
}
</style>
