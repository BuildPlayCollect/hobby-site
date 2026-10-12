// astro.config.mjs: the settings file for the whole site.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeWikiLinks from './src/lib/rehype-wiki-links.mjs';

export default defineConfig({
  site: 'https://buildplaycollect.com',
  // The sitemap lists every page so Google can find them.
  integrations: [sitemap()],
  markdown: {
    // Links wiki terms inside articles automatically (see src/lib/rehype-wiki-links.mjs).
    rehypePlugins: [rehypeWikiLinks],
  },
});
