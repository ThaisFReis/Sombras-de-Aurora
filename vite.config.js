import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {
                find: /^@\/(.*)/,
                replacement: "/src/$1",
            },
            {
                find: "./runtimeConfig",
                replacement: "./runtimeConfig.browser",
            },
        ],
    },
    plugins: [react()],
    define: {
        global: "window",
    },
    server: {
        headers: {
            "Cross-Origin-Opener-Policy": "unsafe-none",
            "Cross-Origin-Embedder-Policy": "unsafe-none",
        },
        cors: true,
    },
    optimizeDeps: {
        exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
    },
});
