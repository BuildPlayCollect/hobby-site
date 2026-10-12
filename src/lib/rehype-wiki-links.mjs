// rehype-wiki-links.mjs: turns wiki words in articles into links, Wikipedia-style.
// It runs while Astro converts Markdown to HTML. The first time a term from
// src/content/wiki appears in an article of the same hobby, it becomes a link
// to that term's wiki page, carrying a short summary for the hover preview.
import path from 'node:path';
import { loadTerms, buildMatcher } from './wiki-terms.mjs';

// Never add links inside these tags.
const SKIP = new Set(['a', 'code', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'script', 'style']);

export default function rehypeWikiLinks() {
  return (tree, file) => {
    const hobby = file.data?.astro?.frontmatter?.hobby;
    const filePath = file.path ?? file.history?.[0] ?? '';
    const selfSlug = filePath.includes(`${path.sep}wiki${path.sep}`) ? path.basename(filePath, '.md') : null;

    const terms = loadTerms().filter((t) => t.slug !== selfSlug && (!hobby || t.hobby === hobby));
    const matcher = buildMatcher(terms);
    if (!matcher) return;
    const linked = new Set();

    const linkText = (value) => {
      const out = [];
      let last = 0;
      for (const match of value.matchAll(matcher.regex)) {
        const term = matcher.lookup.get(match[1]);
        if (linked.has(term.slug)) continue;
        linked.add(term.slug);
        if (match.index > last) out.push({ type: 'text', value: value.slice(last, match.index) });
        out.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: `/wiki/${term.slug}`,
            className: ['wiki-link'],
            dataWikiTitle: term.title,
            dataWikiSummary: term.summary,
          },
          children: [{ type: 'text', value: match[1] }],
        });
        last = match.index + match[1].length;
      }
      if (out.length === 0) return null;
      if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
      return out;
    };

    const visit = (node) => {
      if (!node.children) return;
      const next = [];
      for (const child of node.children) {
        if (child.type === 'text') {
          next.push(...(linkText(child.value) ?? [child]));
        } else {
          if (!(child.type === 'element' && SKIP.has(child.tagName))) visit(child);
          next.push(child);
        }
      }
      node.children = next;
    };
    visit(tree);
  };
}
