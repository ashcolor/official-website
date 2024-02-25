<script setup lang="ts">
import histories from "~/data/histories.json";
import hardwares from "~/data/hardwares.json";
import softwares from "~/data/softwares.json";

const title = "Biography";
const description = "経歴";

useSeoMeta({
    title: title,
    ogTitle: pageTitle(title),
    description,
    ogDescription: description,
});
</script>

<template>
    <NuxtLayout>
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
        <ul class="timeline timeline-vertical">
            <li
                v-for="(history, index) in histories"
                :key="history.content"
                class="grid-cols-[7rem_auto_minmax(0,_1fr)]"
            >
                <hr v-if="index !== 0" />
                <div class="timeline-start mx-4 font-mono">{{ history.date }}</div>
                <div class="timeline-middle text-neutral">
                    <Icon name="mdi:circle"></Icon>
                </div>
                <div class="timeline-end mx-4 flex flex-row items-center gap-2 py-8">
                    <span v-html="history.content"></span>
                    <a :href="history.url" target="_blank">
                        <Icon name="mdi:open-in-new" />
                    </a>
                </div>
                <hr v-if="index !== histories.length - 1" />
            </li>
        </ul>
        <CommonH2>Equipments</CommonH2>
        <CommonH3>Hardware</CommonH3>
        <div class="flex flex-row flex-wrap gap-4">
            <div
                v-for="hardware in hardwares"
                :key="hardware.type"
                class="card shadow sm:min-w-[16rem]"
            >
                <div class="card-body">
                    <CommonH4 class="flex flex-row items-center gap-1">
                        <Icon :name="hardware.icon" class="inline" />
                        {{ hardware.type }}
                    </CommonH4>
                    <div class="flex flex-col gap-1">
                        <div v-for="item in hardware.items" :key="item">
                            <p class="text-xs">{{ item.company }}</p>
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CommonH3>Software</CommonH3>
        <div class="flex flex-row flex-wrap gap-4">
            <div
                v-for="software in softwares"
                :key="software.type"
                class="card shadow sm:min-w-[16rem]"
            >
                <div class="card-body">
                    <CommonH4 class="flex flex-row items-center gap-1">
                        <Icon :name="software.icon" class="inline" />
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
