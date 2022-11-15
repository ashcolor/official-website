<template>
    <div class="w-screen h-screen flex flex-col">
        <div class="grid w-full h-full">
            <div class="col-start-1 col-end-2 row-start-1 row-end-2">
                <div class="h-full flex flex-col justify-center place-items-center">
                    <h1 class="text-4xl font-thin text-center">ashcolor official website</h1>
                    <h2 class="text-md text-primary text-center font-thin">
                        <NuxtLink to="https://ashcolor.github.io" target="_blank">
                            Engineer
                        </NuxtLink>
                        /
                        <NuxtLink to="/" target="_blank">Producer</NuxtLink>
                        /
                        <NuxtLink to="/gamer" target="_blank">Gamer</NuxtLink>
                    </h2>
                </div>
            </div>
            <div class="col-start-1 col-end-2 row-start-1 row-end-2 z-[-1]">
                <div class="h-full">
                    <WelcomeWaveCanvas waveColorString="#9e9e9e" />
                </div>
            </div>
        </div>
        <WelcomeFooter />
    </div>
</template>
