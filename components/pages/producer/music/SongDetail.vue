<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components";

interface Props {
    title: string;
    // singers: Array<string>;
    // thumbnail: string;
    // youtube: string;
    // niconico: string;
    // published: string;
    fileUrl: string;
}
const props = withDefaults(defineProps<Props>(), {
    title: "",
    // singers: () => [],
    // thumbnail: "",
    // youtube: "",
    // niconico: "",
    // published: "",
    fileUrl: "",
});

const emit = defineEmits(["close"]);

const content = ref("");

const closeModal = () => {
    emit("close");
};

const getFileFromStorage = async () => {
    const response = await fetch(props.fileUrl);
    const text = await response.text();

    if (response.status !== 200) return;
    content.value = Util.nl2br(text);
};

onMounted(async () => {
    await getFileFromStorage();
});
</script>

<template>
    <div
        v-on-click-outside="closeModal"
        class="modal-box flex h-full flex-col gap-2 overflow-hidden"
    >
        <div class="flex justify-between bg-neutral p-4 text-neutral-content">
            <h3 class="text-lg font-bold">
                {{ title }}
            </h3>
            <button class="btn btn-square btn-neutral btn-sm" @click="closeModal()">
                <Icon name="carbon:close" size="32" />
            </button>
        </div>
        <div class="overflow-y-auto p-2">
            <p class="py-4" v-html="content"></p>
        </div>
    </div>
</template>
