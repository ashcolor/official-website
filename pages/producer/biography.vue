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
        <div class="hero">
            <div class="hero-content flex-col gap-16 lg:flex-row">
                <img src="/img/artist.png" width="150" class="max-w-sm rounded-full shadow-xl" />
                <div>
                    <h1 class="text-2xl">ashcolor</h1>
                    <p class="py-6">音楽を作っています。</p>
                    <div>
                        <ProducerAccountButtonList></ProducerAccountButtonList>
                    </div>
                </div>
            </div>
        </div>
        <CommonH2>History</CommonH2>
        <ul class="w-full divide-y bg-base-100">
            <ul class="steps steps-vertical">
                <li
                    v-for="history in histories"
                    :key="history.content"
                    class="step p-2 before:!h-[150%] before:!w-1 after:!h-4 after:!w-4"
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
        <div class="flex flex-row flex-wrap gap-4">
            <div v-for="hardware in hardwares" :key="hardware.type" class="card shadow">
                <div class="card-body">
                    <CommonH4 class="flex flex-row items-center gap-1">
                        <Icon :icon="hardware.icon" height="20" class="inline text-mute" />
                        {{ hardware.type }}
                    </CommonH4>
                    <div class="flex flex-col gap-1">
                        <div v-for="item in hardware.items" :key="item">
                            <p class="text-xs text-mute">{{ item.company }}</p>
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CommonH3>Software</CommonH3>
        <div class="flex flex-row flex-wrap gap-4">
            <div v-for="software in softwares" :key="software.type" class="card shadow">
                <div class="card-body">
                    <CommonH4 class="flex flex-row items-center gap-1">
                        <Icon :icon="software.icon" height="20" class="inline text-mute" />
                        {{ software.type }}
                    </CommonH4>
                    <div class="flex flex-col gap-2">
                        <div v-for="item in software.items" :key="item">
                            <p class="text-xs">{{ item.company }}</p>
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
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
