// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: ["@/assets/css/tailwind.css"],
    build: {},
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vueuse/nuxt"],
    components: {
        dirs: ["~/components/pages", "~/components/parts"],
    },
});
