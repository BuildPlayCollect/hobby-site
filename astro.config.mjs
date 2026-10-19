// astro.config.mjs: the settings file for the whole site.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeWikiLinks from './src/lib/rehype-wiki-links.mjs';
import rehypePhotoSlots from './src/lib/rehype-photo-slots.mjs';
import rehypeExternalLinks from './src/lib/rehype-external-links.mjs';
import rehypeFoldSources from './src/lib/rehype-fold-sources.mjs';
import rehypeEmbeds from './src/lib/rehype-embeds.mjs';

export default defineConfig({
  site: 'https://buildplaycollect.com',
  // The sitemap lists every page so Google can find them.
  integrations: [sitemap()],
  // Security: a Content Security Policy tells browsers to only run the scripts
  // we wrote (Astro fingerprints each one) and only load things from places we
  // trust, so injected or hijacked code can't run on our pages.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https:",
        "font-src 'self' data:",
        "connect-src 'self'",
        "form-action 'self' https://app.kit.com",
        "frame-src https://www.youtube-nocookie.com https://www.youtube.com",
        "base-uri 'self'",
        "object-src 'none'",
        'upgrade-insecure-requests',
      ],
      // Our pages use small style="..." attributes (hobby colors), so inline styles stay allowed.
      styleDirective: { resources: ["'self'", "'unsafe-inline'"] },
    },
  },
  markdown: {
    // Hides "📷 PHOTO:" reminder lines from readers (see src/lib/rehype-photo-slots.mjs),
    // then links wiki terms inside articles automatically (see src/lib/rehype-wiki-links.mjs).
    // Links to other websites open in a new tab (see src/lib/rehype-external-links.mjs).
    // The Sources list at the end folds into one tappable line (see src/lib/rehype-fold-sources.mjs).
    // YouTube links on their own line play as videos; images with an "Image:" line get a credit (see src/lib/rehype-embeds.mjs).
    rehypePlugins: [rehypeEmbeds, rehypePhotoSlots, rehypeWikiLinks, rehypeExternalLinks, rehypeFoldSources],
    // No code-highlighting needed; Shiki's inline styles would also clash with the CSP below.
    syntaxHighlight: false,
  },
});
