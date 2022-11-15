<script setup lang="ts">
import { util } from "~/utils/util";

interface Props {
    currentPage: number;
    pageCount: number;
}

const props = withDefaults(defineProps<Props>(), {
    currentPage: 1,
    pageCount: 1,
});

const emits = defineEmits(["pageClick"]);

const isActivePrevPage = computed(() => props.currentPage !== 1);
const isActiveNextPage = computed(() => props.currentPage !== props.pageCount);
</script>

<template>
    <div class="btn-group flex gap-2 justify-center">
        <div
            class="btn btn-sm btn-outline"
            :class="{ 'btn-disabled': !isActivePrevPage }"
            @click="if (isActivePrevPage) $emit('pageClick', currentPage - 1);"
        >
            «
        </div>

        <div
            v-for="page in util.range(1, pageCount)"
            class="btn btn-sm btn-outline"
            :class="{ 'btn-active': page === currentPage }"
            @click="$emit('pageClick', page)"
        >
            {{ page }}
        </div>

        <div
            class="btn btn-sm btn-outline"
            :class="{ 'btn-disabled': !isActiveNextPage }"
            @click="if (isActiveNextPage) $emit('pageClick', currentPage + 1);"
        >
            »
        </div>
    </div>
</template>
