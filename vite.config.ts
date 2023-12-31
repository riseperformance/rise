import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rise/",
  plugins: [
    react(),
    Pages({
      resolver: "react",
      exclude: ["rise/components"],
      onRoutesGenerated: (routes) => {
        generateSitemap({
          hostname: "https://wuerta.github.io//",
          routes,
          allowRobots: false,
        });
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["alter_logo.svg", "android-chrome-192x192.png", "android-chrome-512x512.png"],
      manifest: {
        name: "Rise Health",
        short_name: "Rise",
        description: "Transformando sua rotina em uma rotina mais saudável.",
        theme_color: "#051621",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
