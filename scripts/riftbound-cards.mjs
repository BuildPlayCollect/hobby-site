// riftbound-cards.mjs: downloads every Riftbound card (name, text, stats and picture links) from RiftHunt's
// free card API (https://rifthunt.com/api/) for the Riftbound card pages. Run it with:  npm run riftbound:data
//
// What it writes:
//   src/data/riftbound/cards.json   every set and every printing, trimmed to what our pages show
//
// The pictures are NOT downloaded. Each card stores links to RiftHunt's picture server (images.rifthunt.com),
// and readers' browsers load them from there. 1,700+ pictures would make our site far too big to store.
//
// How we stay polite (RiftHunt's API guide asks for this):
//   - One "bulk" download for all the card data, instead of one request per card.
//   - A few search requests (one per page of each set) for the picture links, with a 1-second pause between them.
//   - A User-Agent that names our project. Run this at most once a day (new cards only arrive with a new set).
//
// Facts from RiftHunt's API guide that this file relies on:
//   - printing_id is unique per printing; oracle_id is shared by every printing of the same card.
//     (riftboundId is NOT unique, and "id"/"oracleId" in the bulk file are old names, so we never use them.)
//   - "power" is the rune cost, "might" is the only combat stat.
//   - The bulk file is camelCase ("Unit", ["Fury"]); search results are snake_case and lowercased.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'src/data/riftbound/cards.json');
const API = 'https://api.rifthunt.com';
const HEADERS = { 'User-Agent': 'BuildPlayCollect-fan-site (+https://buildplaycollect.com)', Accept: 'application/json' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(path) {
  const url = path.startsWith('http') ? path : API + path;
  const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(60000) });
  if (res.status === 404) return null; // RiftHunt answers "no cards matched" with a 404
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

// What kind of set each one is, as RiftHunt's own sets table shows it. Used only if the API leaves "kind" out.
const KIND_FALLBACK = {
  rad: 'Expansion', ven: 'Expansion', unl: 'Expansion', sfd: 'Expansion', ogn: 'Expansion',
  jdg: 'Judge promos', ogs: 'Starter box set', pr: 'Promos', opp: 'Organized Play promos', rwb: 'Set', sgn: 'Promo set',
};
// Short set names for the table ("Riftbound Judge Promotional Cards" reads better as "Judge Promos").
const SHORT_NAME = { jdg: 'Judge Promos', pr: 'Promos', opp: 'OP Promos' };
const words = (s) => (s ? String(s).replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : null);

// 1. The whole card catalogue in one request.
console.log('Downloading the bulk card file...');
const bulk = await get('/bulk/cards');
if (!bulk?.cards?.length) throw new Error('The bulk card file came back empty. Nothing was changed.');

// 2. The set list (for "kind" and printing counts). If it fails, the bulk file's own set list is used.
await sleep(1000);
let apiSets = [];
try {
  const s = await get('/sets');
  apiSets = s?.data ?? (Array.isArray(s) ? s : []);
} catch (e) {
  console.warn(`  Couldn't load /sets (${e.message}); using the sets from the bulk file.`);
}
const apiSet = (code) => apiSets.find((s) => String(s.code ?? s.id ?? '').toLowerCase() === code);

// 3. Picture links and page addresses, one set at a time, following "next_page" until the set is done.
const extra = new Map(); // printing_id -> search result card
const codes = [...new Set(bulk.cards.map((c) => c.set.toLowerCase()))];
for (const code of codes) {
  let next = `/cards/search?q=${encodeURIComponent(`s:${code}`)}&unique=prints&order=number&dir=asc`;
  let n = 0;
  while (next) {
    await sleep(1000);
    const page = await get(next);
    if (!page) break;
    for (const c of page.data ?? []) extra.set(c.printing_id ?? c.id, c);
    n += page.data?.length ?? 0;
    next = page.has_more ? page.next_page : null;
  }
  console.log(`  ${code.toUpperCase()}: ${n} picture links`);
}

// 4. Trim each printing down to what our pages use.
const slugOf = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/['’.]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const cards = bulk.cards.map((b) => {
  const x = extra.get(b.printing_id) ?? {};
  const set = b.set.toLowerCase();
  const number = x.collector_number ?? String(b.num).padStart(3, '0');
  // RiftHunt's own page address, e.g. /cards/ogn/017/annie-dark-child/. We reuse its last two parts in ours.
  const parts = (x.rifthunt_uri ?? '').split('/').filter(Boolean);
  const [num, slug] = parts.length >= 4 ? [parts[2], parts[3]] : [number, slugOf(b.name)];
  return {
    id: b.printing_id,
    oracle: b.oracle_id,
    name: b.name,
    base: b.cleanName ?? b.name,
    type: b.type,
    super: b.supertype ?? null,
    rarity: b.rarity ?? null,
    domains: b.domains ?? [],
    energy: b.energy ?? null,
    power: b.power ?? null,
    might: b.might ?? null,
    keywords: (x.keywords ?? []).map(words),
    tags: b.tags ?? [],
    text: b.text ?? null,
    flavour: b.flavour ?? null,
    artist: b.artist ?? null,
    set,
    number,
    num,
    slug,
    sort: b.num ?? 0,
    variant: b.sig ? 'Signature' : b.over ? 'Overnumbered' : b.alt ? 'Alternate art' : null,
    landscape: b.orientation === 'landscape',
    img: x.images ? { s: x.images.small, n: x.images.normal, l: x.images.large, back: x.images.back ?? null } : { s: b.imgUrl, n: b.imgUrl, l: b.imgUrl, back: b.imgBackUrl ?? null },
    rifthunt: x.rifthunt_uri ? new URL(x.rifthunt_uri, 'https://rifthunt.com').href : null,
  };
});

// Two printings must never share one page address. If they would, add a number to the second one.
const seen = new Set();
for (const c of cards) {
  let key = `${c.set}/${c.num}/${c.slug}`;
  for (let i = 2; seen.has(key); i++) key = `${c.set}/${c.num}/${c.slug}-${i}`;
  seen.add(key);
  c.slug = key.split('/')[2];
}

const sets = bulk.sets.map((s) => {
  const code = s.id.toLowerCase();
  const a = apiSet(code) ?? {};
  return {
    code,
    name: SHORT_NAME[code] ?? s.name,
    fullName: s.name,
    kind: words(a.kind ?? a.set_type ?? a.type) ?? KIND_FALLBACK[code] ?? 'Set',
    count: cards.filter((c) => c.set === code).length,
    released: s.released ?? a.released_at ?? a.released ?? null,
  };
}).sort((a, b) => String(b.released).localeCompare(String(a.released)));

const missing = cards.filter((c) => !c.rifthunt).length;
await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify({ fetched: bulk.fetched ?? new Date().toISOString(), checked: new Date().toISOString().slice(0, 10), sets, cards }) + '\n');
console.log(`Saved ${sets.length} sets and ${cards.length} printings to src/data/riftbound/cards.json.`);
if (missing) console.warn(`  ${missing} printings had no RiftHunt picture link and use the source picture instead.`);
