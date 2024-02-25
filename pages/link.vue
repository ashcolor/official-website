<script setup lang="ts">
import LINKS from "~/data/links.json";

const title = "Link";
const description = "リンク";

useSeoMeta({
    title,
    ogTitle: pageTitle(title),
    description,
    ogDescription: description,
});
</script>

<template>
    <NuxtLayout name="link">
        <div class="flex flex-col place-items-center gap-16 px-4 py-32">
            <img
                src="/img/artist.png"
                alt="artist"
                width="150"
                class="max-w-sm rounded-full shadow-xl"
            />
            <div class="flex flex-col place-items-center gap-4">
                <h1 class="text-2xl">ashcolor</h1>
                <p>音楽を作っています。</p>
            </div>
            <div
                v-for="type in ['information', 'sns', 'movie', 'subscription', 'download']"
                :key="type"
                class="flex w-full flex-col place-items-center gap-4"
            >
                <h2 class="uppercase">{{ type }}</h2>
                <div class="flex w-full max-w-lg flex-col gap-4">
                    <div
                        v-for="link in LINKS.filter((link) => link.type === type)"
                        :key="link.name"
                        class="flex flex-col items-center gap-1"
                    >
                        <NuxtLink
                            :to="link.url"
                            class="btn btn-primary btn-block normal-case"
                            target="_blank"
                        >
                            <template v-if="link.icon">
                                <Icon :name="link.icon" :size="link.iconWidth"
                            /></template>
                            {{ link.name }}
                        </NuxtLink>
                        <p v-if="link.description" class="text-sm">
                            {{ link.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
