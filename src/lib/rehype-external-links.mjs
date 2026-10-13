// rehype-external-links.mjs: links in articles that go to other websites
// (sources, shops, rulebooks) open in a new tab, so readers keep their place.
// Links to our own pages (wiki, parts list, other articles) stay in the same tab.
// rel="noopener noreferrer" stops the other site from controlling our tab.
const OWN_HOSTS = new Set(['buildplaycollect.com', 'www.buildplaycollect.com']);

export default function rehypeExternalLinks() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const href = String(node.properties?.href ?? '');
        if (/^https?:\/\//i.test(href)) {
          let host = '';
          try { host = new URL(href).hostname; } catch {}
          if (!OWN_HOSTS.has(host)) {
            node.properties.target = '_blank';
            node.properties.rel = ['noopener', 'noreferrer'];
          }
        }
      }
      for (const child of node.children ?? []) visit(child);
    };
    visit(tree);
  };
}
