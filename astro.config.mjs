// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kripanker-tech.github.io',
  base: '/growth-landing',
  vite: {
    plugins: [tailwindcss()]
  }
});
