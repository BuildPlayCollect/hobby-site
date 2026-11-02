// Turns a FAQ answer into safe HTML. Only two kinds of markup are understood:
//   [words](https://...)  becomes a link (outside links open normally, with rel="noopener")
//   **words**             becomes bold
// Everything else is shown as plain text, so a stray < or & can't break the page.
const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function faqHtml(text: string): string {
  return escape(text.trim())
    .replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/|mailto:)[^)\s]+)\)/g, (_, words, url) => {
      const outside = /^https?:\/\//.test(url) && !/^https?:\/\/(www\.)?buildplaycollect\.com/.test(url);
      return `<a href="${url}"${outside ? ' rel="noopener"' : ''}>${words}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

// The same answer as plain words (for Google's FAQ data): links keep their words, bold marks go.
export function faqPlain(text: string): string {
  return text.trim().replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
}
