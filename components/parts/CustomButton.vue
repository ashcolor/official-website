<script setup lang="ts">
interface Props {
    baseColor: string;
    isActive: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    baseColor: "primary",
    isActive: false,
});

const classObject = computed(() => {
    return {
        // const
        [`border-${props.baseColor}`]: true,
        [`hover:bg-${props.baseColor}`]: true,
        [`hover:border-${props.baseColor}`]: true,

        // inactive
        "bg-base-100": !props.isActive,
        [`text-${props.baseColor}`]: !props.isActive,

        // hover:inactive
        "hover:text-base-100": !props.isActive,

        // active
        [`bg-${props.baseColor}`]: props.isActive,
        "text-base-100": props.isActive,

        // hover:active
    };
});
</script>

<template>
    <button class="btn relative" :class="classObject">
        <div class="absolute z-1 bg-black opacity-0 hover:opacity-10 w-full h-full z-0"></div>
        <p class="pointer-events-none z-10"><slot /></p>
    </button>
</template>
