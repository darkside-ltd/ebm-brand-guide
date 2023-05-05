import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), react(), vue(), mdx()],
  experimental: {
    assets: true
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: ['css'],
      wrap: true,
    },
  },
});