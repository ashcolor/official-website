<script setup lang="ts">
import axios from "axios";
import { vOnClickOutside } from "@vueuse/components";
import { Icon } from "@iconify/vue";

interface Props {
    title: string;
    fileUrl: string;
}
const props = withDefaults(defineProps<Props>(), {
    title: "",
    fileUrl: "",
});

const isShow = ref(false);
const content = ref("");

watch(isShow, (val) => {
    if (!val) return;
    getFileFromStorage();
});

onMounted(async () => {
    await getFileFromStorage();
});

const closeModal = () => {
    isShow.value = false;
};

const getFileFromStorage = async () => {
    const response = await axios.get(props.fileUrl);
    if (response.status !== 200) return;
    content.value = Util.nl2br(response.data);
    return;
};
</script>

<template>
    <div @click="isShow = true">
        <slot> </slot>
    </div>
    <Teleport to="body">
        <div class="modal" :class="{ 'modal-open': isShow }">
            <div
                class="modal-box h-full overflow-hidden flex flex-col gap-2"
                v-on-click-outside="closeModal"
            >
                <div class="bg-primary text-primary-content p-4 flex justify-between">
                    <h3 class="text-lg font-bold">
                        {{ title }}
                    </h3>
                    <button class="btn btn-primary btn-sm btn-square" @click="closeModal()">
                        <Icon icon="carbon:close" width="32" />
                    </button>
                </div>
                <div class="p-2 overflow-y-auto">
                    <p v-html="content" class="py-4"></p>
                </div>
            </div>
        </div>
    </Teleport>
</template>
