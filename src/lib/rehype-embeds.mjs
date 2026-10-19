// rehype-embeds.mjs: two safe ways to show pictures and videos we don't own (see image-rules.md).
//
// 1. A YouTube link on a line of its own becomes the video, played from YouTube's own
//    privacy-friendly player (youtube-nocookie.com), so nothing is copied onto our site:
//      [Official trailer](https://www.youtube.com/watch?v=abc123XYZ_0)
//    The link text becomes the caption, so readers still see whose video it is.
//
// 2. An image followed on the next line by a credit that starts with "Image:" or "Photo:"
//    becomes a picture with its credit underneath:
//      ![Mega Rayquaza ex card](/images/news/delta-reign.webp)
//      *Image: The Pokémon Company press site*
const CREDIT = /^\s*(Image|Photo|Art):/i;

// The video id from a youtube.com/watch, youtube.com/shorts or youtu.be link.
function youtubeId(href) {
  let url;
  try { url = new URL(href); } catch { return null; }
  const host = url.hostname.replace(/^(www|m)\./, '');
  let id = null;
  if (host === 'youtu.be') id = url.pathname.slice(1);
  else if (host === 'youtube.com') id = url.searchParams.get('v') ?? url.pathname.match(/^\/(?:shorts|embed|live)\/([^/]+)/)?.[1];
  return id && /^[\w-]{11}$/.test(id) ? id : null;
}

const textOf = (node) => node.type === 'text' ? node.value : (node.children ?? []).map(textOf).join('');
const blank = (node) => node.type === 'text' && !node.value.trim();
const el = (tagName, properties, children = []) => ({ type: 'element', tagName, properties, children });

function videoFigure(p) {
  const kids = p.children.filter((c) => !blank(c));
  if (kids.length !== 1 || kids[0].tagName !== 'a') return null;
  const a = kids[0];
  const id = youtubeId(String(a.properties?.href ?? ''));
  if (!id) return null;
  const label = textOf(a).trim();
  const title = label && !/^https?:\/\//.test(label) ? label : 'YouTube video';
  return el('figure', { className: ['embed'] }, [
    el('div', { className: ['embed-frame'] }, [
      el('iframe', {
        src: `https://www.youtube-nocookie.com/embed/${id}`,
        title,
        loading: 'lazy',
        allow: 'encrypted-media; picture-in-picture; fullscreen',
        allowFullScreen: true,
        referrerPolicy: 'strict-origin-when-cross-origin',
      }),
    ]),
    el('figcaption', {}, [{ type: 'text', value: 'Video: ' }, el('a', { href: a.properties.href }, [{ type: 'text', value: title }])]),
  ]);
}

function imageFigure(p) {
  const kids = p.children.filter((c) => !blank(c));
  if (kids.length < 2 || kids[0].tagName !== 'img') return null;
  const rest = kids.slice(1).filter((c) => c.tagName !== 'br');
  if (!rest.length || !CREDIT.test(textOf(rest[0]))) return null;
  // Credits are often written in italics; the caption is already styled, so unwrap them.
  const caption = rest.flatMap((c) => (c.tagName === 'em' ? c.children : [c]));
  return el('figure', { className: ['credited'] }, [kids[0], el('figcaption', {}, caption)]);
}

export default function rehypeEmbeds() {
  return (tree) => {
    const visit = (node) => {
      node.children = (node.children ?? []).map((child) =>
        child.type === 'element' && child.tagName === 'p' ? videoFigure(child) ?? imageFigure(child) ?? child : child,
      );
      for (const child of node.children) visit(child);
    };
    visit(tree);
  };
}
