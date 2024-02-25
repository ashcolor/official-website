<script setup lang="ts">
import LINKS from "~/data/links.json";
</script>

<template>
    <div class="flex flex-col gap-4">
        <div
            v-for="type in ['information', 'sns', 'movie']"
            :key="type"
            class="flex w-full flex-col gap-2"
        >
            <h2 class="uppercase">{{ type }}</h2>
            <div class="flex flex-row gap-2">
                <template
                    v-for="link in LINKS.filter((link) => link.type === type)"
                    :key="link.name"
                >
                    <NuxtLink
                        v-if="link.name !== 'official website'"
                        :to="link.url"
                        class="btn btn-primary btn-sm normal-case"
                        target="_blank"
                    >
                        <Icon v-if="link.icon" :name="link.icon" :size="link.iconWidth" />
                        {{ link.name }}
                    </NuxtLink>
                </template>
            </div>
        </div>
    </div>
</template>
