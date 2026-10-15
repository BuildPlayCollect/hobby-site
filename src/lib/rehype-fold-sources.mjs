// rehype-fold-sources.mjs: tucks an article's "## Sources" section into a fold.
// Readers see one quiet line, "Sources (16)", and tap it to open the full list.
// The links inside the article stay where they are, so every fact is still one tap away.
export default function rehypeFoldSources() {
  return (tree) => {
    const kids = tree.children;
    const start = kids.findIndex((n) => n.type === 'element' && n.tagName === 'h2' && /^sources$/i.test(text(n).trim()));
    if (start === -1) return;
    let end = kids.findIndex((n, i) => i > start && n.type === 'element' && /^h[12]$/.test(n.tagName));
    if (end === -1) end = kids.length;
    const body = kids.slice(start + 1, end);
    const count = body.reduce((sum, n) => sum + (n.type === 'element' && n.tagName === 'ol' ? n.children.filter((c) => c.tagName === 'li').length : 0), 0);
    const label = count ? `Sources (${count})` : 'Sources';
    const fold = {
      type: 'element', tagName: 'details', properties: { className: ['sources'], id: 'sources' },
      children: [{ type: 'element', tagName: 'summary', properties: {}, children: [{ type: 'text', value: label }] }, ...body],
    };
    kids.splice(start, end - start, fold);
  };
}

const text = (n) => (n.type === 'text' ? n.value : (n.children ?? []).map(text).join(''));
