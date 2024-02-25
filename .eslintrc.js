module.exports = {
    root: true,
    extends: ["@nuxtjs/eslint-config-typescript", "plugin:tailwindcss/recommended", "prettier"],
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                "vue/no-v-html": 0,
            },
        },
        {
            files: ["*.vue"],
            rules: {
                "vue/no-multiple-template-root": 0,
            },
        },
        {
            files: ["*.vue"],
            rules: {
                "tailwindcss/no-custom-classname": 0,
            },
        },
    ],
    plugins: ["tailwindcss"],
    rules: {},
};
