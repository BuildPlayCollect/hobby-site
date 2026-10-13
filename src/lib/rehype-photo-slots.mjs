// rehype-photo-slots.mjs: marks "photo slot" placeholders in articles.
// A paragraph that starts with "📷 PHOTO:" is a reminder of where a photo
// should go. It gets the class "photo-slot", which keeps it hidden from
// readers. Add ?photos to the end of an article's address to see the slots.
// When you add the real photo in Pages CMS, delete the 📷 PHOTO line.
const MARKER = '📷 PHOTO:';

export default function rehypePhotoSlots() {
  return (tree) => {
    const visit = (node) => {
      for (const child of node.children ?? []) {
        if (child.type === 'element' && child.tagName === 'p') {
          const first = child.children?.[0];
          if (first?.type === 'text' && first.value.trimStart().startsWith(MARKER)) {
            child.properties = { ...child.properties, className: ['photo-slot'] };
            continue;
          }
        }
        visit(child);
      }
    };
    visit(tree);
  };
}
