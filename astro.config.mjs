import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import legacy from '@vitejs/plugin-legacy';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), react(), vue(), mdx()],
  experimental: {
    assets: true
  },
  vite: {
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
  },
});