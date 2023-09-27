// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    nitro: {
        prerender: {
            routes: ["/sitemap.xml"],
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "ja",
                prefix: "og: http://ogp.me/ns#",
            },
        },
    },
    ssr: false,
    css: ["@/assets/css/tailwind.css"],
    build: {},
    modules: [
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        "@vueuse/nuxt",
        "@nuxtjs/eslint-module",
        "nuxt-simple-robots",
        "nuxt-simple-sitemap",
        "nuxt-gtag",
        "@nuxtjs/google-fonts",
    ],
    components: {
        dirs: ["~/components/pages", "~/components/parts"],
    },

    eslint: {
        // yarn dev開始にlintを実行するか
        lintOnStart: false,
    },

    googleFonts: {
        families: {
            "Noto+Sans+JP": true,
            Comfortaa: true,
        },
    },

    gtag: {
        id: "G-NX7FP5N7LL",
    },
});
