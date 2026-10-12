// astro.config.mjs: the settings file for the whole site.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buildplaycollect.com',
  // The sitemap lists every page so Google can find them.
  integrations: [sitemap()],
});
