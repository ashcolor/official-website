<script setup lang="ts">
import axios from "axios";
import { vOnClickOutside } from "@vueuse/components";

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
            <div class="modal-box relative" v-on-click-outside="closeModal">
                <label
                    for="modal"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                    @click="closeModal()"
                >
                    ✕
                </label>
                <h3 class="text-lg font-bold">
                    {{ title }}
                </h3>
                <p v-html="content" class="py-4"></p>
            </div>
        </div>
    </Teleport>
</template>
