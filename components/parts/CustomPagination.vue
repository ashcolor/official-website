<script setup lang="ts">
interface Props {
    currentPage: number;
    pageCount: number;
}

const props = withDefaults(defineProps<Props>(), {
    currentPage: 1,
    pageCount: 1,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emits = defineEmits(["pageClick"]);

const isActivePrevPage = computed(() => props.currentPage !== 1);
const isActiveNextPage = computed(() => props.currentPage !== props.pageCount);
</script>

<template>
    <div class="btn-group flex justify-center gap-2">
        <div
            class="btn btn-outline btn-sm"
            :class="{ 'btn-disabled': !isActivePrevPage }"
            @click="if (isActivePrevPage) $emit('pageClick', currentPage - 1);"
        >
            «
        </div>

        <div
            v-for="page in Util.range(1, pageCount)"
            :key="page"
            class="btn btn-outline btn-sm"
            :class="{ 'btn-active': page === currentPage }"
            @click="$emit('pageClick', page)"
        >
            {{ page }}
        </div>

        <div
            class="btn btn-outline btn-sm"
            :class="{ 'btn-disabled': !isActiveNextPage }"
            @click="if (isActiveNextPage) $emit('pageClick', currentPage + 1);"
        >
            »
        </div>
    </div>
</template>
