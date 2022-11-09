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
    <div class="navbar bg-primary text-primary-content">
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
            <a class="btn btn-ghost normal-case text-xl"> ashcolor official website </a>
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
        <div class="navbar-end gap-4">
            <ProducerAccountList />
        </div>
    </div>
</template>
