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
    
};
</script>

<template>
    <div @click="isShow = true">
        <slot> </slot>
    </div>
    <Teleport to="body">
        <div class="modal" :class="{ 'modal-open': isShow }">
            <div
                v-on-click-outside="closeModal"
                class="modal-box flex h-full flex-col gap-2 overflow-hidden"
            >
                <div class="flex justify-between bg-primary p-4 text-primary-content">
                    <h3 class="text-lg font-bold">
                        {{ title }}
                    </h3>
                    <button class="btn btn-square btn-primary btn-sm" @click="closeModal()">
                        <Icon icon="carbon:close" width="32" />
                    </button>
                </div>
                <div class="overflow-y-auto p-2">
                    <p class="py-4" v-html="content"></p>
                </div>
            </div>
        </div>
    </Teleport>
</template>
