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
            link: [
                { rel: "icon", href: "/favicon.ico" },
                { rel: "apple-touch-icon", href: "/apple-touch-icon-180x180.png" },
            ],
        },
    },
    css: ["@/assets/css/tailwind.css"],
    build: {},
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/eslint-module",
        "@nuxtjs/google-fonts",
        "@nuxtjs/sitemap",
        "nuxt-schema-org",
        "nuxt-gtag",
        "nuxt-icon",
        "@pinia/nuxt",
        "@vueuse/nuxt",
    ],
    components: {
        dirs: ["~/components/pages", "~/components/parts"],
    },

    googleFonts: {
        families: {
            "Noto+Sans+JP": true,
            "Noto+Sans+Mono": true,
            Comfortaa: true,
        },
    },

    gtag: {
        id: "G-NX7FP5N7LL",
    },

    site: {
        url: "https://ashcolor.work",
        name: "ashcolor オフィシャルサイト",
    },

    schemaOrg: {
        identity: "Person",
    },

    eslint: {
        lintOnStart: false,
    },
});
