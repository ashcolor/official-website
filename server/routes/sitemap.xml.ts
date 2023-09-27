import { SitemapStream, streamToPromise } from "sitemap";
import { serverQueryContent } from "#content/server";
import { BLOG_CATEGORIES } from "@/utils/const";

export default defineEventHandler(async (event) => {
    const sitemap = new SitemapStream({
        hostname: import.meta.env.VITE_NUXT_PUBLIC_SITE_URL,
    });

    sitemap.end();

    return streamToPromise(sitemap);
});
