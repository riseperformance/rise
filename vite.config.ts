import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";

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
    ,
  ],
});
