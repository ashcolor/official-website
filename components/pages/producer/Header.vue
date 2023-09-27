<script setup lang="ts">
const menus = [
    { title: "Home", to: "/" },
    { title: "Biography", to: "/producer/biography" },
    { title: "Music", to: "/producer/music" },
    { title: "Discography", to: "/producer/discography" },
];

const route = useRoute();
</script>

<template>
    <div class="navbar min-w-[320px] bg-primary text-primary-content">
        <div class="navbar-start">
            <div class="dropdown">
                <MenuButton />
                <ul
                    tabindex="0"
                    class="menu-compact menu dropdown-content rounded-box mt-3 w-52 bg-base-100 p-2 text-base-content shadow"
                >
                    <li
                        v-for="menu in menus"
                        :key="menu.title"
                        :class="{ bordered: menu.to === route.path }"
                    >
                        <NuxtLink :to="menu.to">
                            {{ menu.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <a class="btn btn-ghost px-2 text-xl normal-case sm:px-4">
                <span>ashcolor</span>
                <span class="hidden sm:inline">official website</span>
            </a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
                <li
                    v-for="menu in menus"
                    :key="menu.title"
                    :class="{ 'font-bold': menu.to === route.path }"
                >
                    <NuxtLink :to="menu.to">
                        {{ menu.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <ProducerAccountList />
        </div>
    </div>
</template>
