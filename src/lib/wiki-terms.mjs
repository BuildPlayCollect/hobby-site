// wiki-terms.mjs: reads the wiki entries in src/content/wiki and finds them in text.
// Used by the auto-linker (src/lib/rehype-wiki-links.mjs) and by wiki pages
// ("Mentioned in" lists). Matching is case-sensitive and uses the exact words
// in each entry's title and aliases, so "Bit" links but "a bit of" doesn't.
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

const WIKI_DIR = path.resolve('src/content/wiki');

export function loadTerms() {
  if (!fs.existsSync(WIKI_DIR)) return [];
  return fs
    .readdirSync(WIKI_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(WIKI_DIR, file), 'utf8');
      const fm = parse(raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '') ?? {};
      return {
        slug: file.replace(/\.md$/, ''),
        title: String(fm.title ?? ''),
        summary: String(fm.summary ?? ''),
        hobby: fm.hobby,
        phrases: [fm.title, ...(fm.aliases ?? [])].filter(Boolean).map(String),
      };
    });
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Returns a regex that matches any phrase as a whole word, plus a lookup
// from matched text back to its term. Longest phrases win ("linear switch" before "switch").
export function buildMatcher(terms) {
  const pairs = terms
    .flatMap((t) => t.phrases.map((p) => [p, t]))
    .sort((a, b) => b[0].length - a[0].length);
  if (pairs.length === 0) return null;
  const regex = new RegExp(`(?<![\\w-])(${pairs.map(([p]) => escape(p)).join('|')})(?![\\w-])`, 'g');
  return { regex, lookup: new Map(pairs) };
}

// Slugs of every term that appears in a piece of text.
export function termsIn(text, terms) {
  const m = buildMatcher(terms);
  if (!m) return [];
  const found = new Set();
  for (const match of text.matchAll(m.regex)) found.add(m.lookup.get(match[1]).slug);
  return [...found];
}
