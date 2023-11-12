import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Aatrick.github.io',
  base: '/Portfolio',
  integrations: [tailwind()]
});