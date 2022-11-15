<script setup lang="ts">
import { Icon } from "@iconify/vue";

const accounts = [
    {
        name: "メール",
        icon: "fluent:mail-16-filled",
        url: "mailto:ashcolor27@gmail.com",
    },
    {
        id: 8,
        type: "gamer",
        name: "Twitter",
        icon: "mdi:twitter",
        url: "https://twitter.com/ashcolor27",
    },
];
</script>

<template>
    <NuxtLink v-for="account in accounts" :to="account.url" target="_blank">
        <template v-if="account.icon">
            <Icon :icon="account.icon" width="24" />
        </template>
        <template v-else>
            {{ account.name }}
        </template>
    </NuxtLink>
</template>
