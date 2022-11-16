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
    <div class="navbar bg-primary text-primary-content min-w-[320px]">
        <div class="navbar-start">
            <div class="dropdown">
                <MenuButton />
                <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-base-content rounded-box w-52"
                >
                    <li v-for="menu in menus" :class="{ bordered: menu.to === route.path }">
                        <NuxtLink :to="menu.to">
                            {{ menu.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl px-2 sm:px-4">
                <span>ashcolor</span>
                <span class="hidden sm:inline">&nbsp;official website</span>
            </a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
                <li v-for="menu in menus" :class="{ 'font-bold': menu.to === route.path }">
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
