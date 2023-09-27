<script setup lang="ts">
import { Icon } from "@iconify/vue";
import histories from "~/data/histories.json";
import hardwares from "~/data/hardwares.json";
import softwares from "~/data/softwares.json";

useHead({
    title: "Biography",
});
</script>

<template>
    <NuxtLayout name="producer">
        <CommonH1>Biography</CommonH1>
        <CommonH2>Profile</CommonH2>
        <div class="hero bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src="/img/artist.jpg" width="150" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-2xl font-bold">ashcolor</h1>
                    <p class="py-6">音楽を作っています。</p>
                </div>
            </div>
        </div>
        <CommonH2>History</CommonH2>
        <ul class="w-full divide-y border bg-base-100">
            <ul class="steps steps-vertical">
                <li
                    v-for="history in histories"
                    :key="history.content"
                    class="step p-2"
                    ta-content=""
                >
                    <div class="flex flex-row items-center gap-4">
                        <div class="align-middle text-sm text-slate-500">
                            {{ history.date }}
                        </div>
                        <span class="text-left">
                            <span class="text-left" v-html="history.content"></span>
                        </span>
                    </div>
                </li>
            </ul>
        </ul>
        <CommonH2>Equipments</CommonH2>
        <CommonH3>Hardware</CommonH3>
        <div class="flex flex-col gap-4 px-2">
            <div v-for="hardware in hardwares" :key="hardware.type">
                <div>
                    <p class="py-1 text-sm">
                        <Icon :icon="hardware.icon" width="16" class="inline" />
                        {{ hardware.type }}
                    </p>
                    <div class="flex flex-col gap-1">
                        <p v-for="item in hardware.items" :key="item" class="text-sm">{{ item }}</p>
                    </div>
                </div>
            </div>
        </div>
        <CommonH3>Software</CommonH3>
        <div class="flex flex-col gap-4 px-2">
            <div v-for="software in softwares" :key="software.type">
                <p class="py-1 text-sm">
                    <Icon :icon="software.icon" width="16" class="inline" />
                    {{ software.type }}
                </p>
                <div class="flex flex-col gap-1">
                    <p v-for="item in software.items" :key="item" class="text-sm">
                        {{ item }}
                    </p>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped>
.steps .step:after {
    content: "";
}
</style>
