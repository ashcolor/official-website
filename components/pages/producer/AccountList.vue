<script setup lang="ts">
import LINKS from "~/data/links.json";
</script>

<template>
    <div class="px-2">
        <div class="flex flex-row items-center gap-2 sm:gap-4 sm:px-4">
            <template v-for="link in LINKS" :key="link.name">
                <NuxtLink
                    v-if="['メール', 'X', 'YouTube', 'niconico'].includes(link.name)"
                    :to="link.url"
                    target="_blank"
                >
                    <Icon :name="link.icon" :size="link.iconWidth" />
                </NuxtLink>
            </template>
        </div>
    </div>
</template>
