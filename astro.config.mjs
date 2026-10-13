// astro.config.mjs: the settings file for the whole site.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeWikiLinks from './src/lib/rehype-wiki-links.mjs';
import rehypePhotoSlots from './src/lib/rehype-photo-slots.mjs';

export default defineConfig({
  site: 'https://buildplaycollect.com',
  // The sitemap lists every page so Google can find them.
  integrations: [sitemap()],
  markdown: {
    // Hides "📷 PHOTO:" reminder lines from readers (see src/lib/rehype-photo-slots.mjs),
    // then links wiki terms inside articles automatically (see src/lib/rehype-wiki-links.mjs).
    rehypePlugins: [rehypePhotoSlots, rehypeWikiLinks],
  },
});
