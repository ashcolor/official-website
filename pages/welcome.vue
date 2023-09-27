<script setup lang="ts">
useHead({
    title: "",
});
</script>

<template>
    <div class="flex h-[100dvh] w-screen flex-col">
        <div class="grid h-full w-full">
            <div class="col-start-1 col-end-2 row-start-1 row-end-2">
                <div class="flex h-full flex-col place-items-center justify-center">
                    <h1 class="text-center text-4xl font-thin">ashcolor official website</h1>
                    <h2 class="text-center text-base font-thin text-primary">
                        <NuxtLink to="https://ashcolor.github.io" target="_blank">
                            Engineer
                        </NuxtLink>
                        /
                        <NuxtLink to="/" target="_blank">Producer</NuxtLink>
                    </h2>
                </div>
            </div>
            <div class="z-[-1] col-start-1 col-end-2 row-start-1 row-end-2">
                <div class="h-full">
                    <WelcomeWaveCanvas wave-color-string="#9e9e9e" />
                </div>
            </div>
        </div>
        <WelcomeFooter />
    </div>
</template>
