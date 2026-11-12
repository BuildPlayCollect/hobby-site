// riftbound.ts: helpers for the Riftbound card pages (/tcg/riftbound/cards, /legends, /battlefields, /search).
// The card list itself is src/data/riftbound/cards.json, made by `npm run riftbound:data` from RiftHunt's API.
import DATA from '../data/riftbound/cards.json';

export type RbSet = { code: string; name: string; fullName: string; kind: string; count: number; released: string | null };
export type RbCard = {
  id: string; oracle: string; name: string; base: string; type: string; super: string | null; rarity: string | null;
  domains: string[]; energy: number | null; power: number | null; might: number | null; keywords: string[]; tags: string[];
  text: string | null; flavour: string | null; artist: string | null; set: string; number: string; num: string; slug: string;
  sort: number; variant: string | null; landscape: boolean;
  img: { s: string; n: string; l: string; back: string | null }; rifthunt: string | null;
};

export const RB_SETS = DATA.sets as RbSet[];
export const RB_CARDS = DATA.cards as RbCard[];
export const RB_FETCHED = DATA.fetched as string;
export const RB_CHECKED = DATA.checked as string;

export const RB_HUB = '/tcg/riftbound/';
export const RB_CARDS_URL = '/tcg/riftbound/cards/';
export const setUrl = (code: string) => `${RB_CARDS_URL}${code}/`;
export const cardUrl = (c: RbCard) => `${RB_CARDS_URL}${c.set}/${c.num}/${c.slug}/`;
export const setOf = (c: RbCard) => RB_SETS.find((s) => s.code === c.set)!;

export const RIFTHUNT = { url: 'https://rifthunt.com/', api: 'https://rifthunt.com/api/', label: 'RiftHunt card API' };

export const fmtDate = (d: string | null) =>
  d ? new Date(d.slice(0, 10) + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }) : 'Unknown';

// Order cards the way they're printed: by set number, then plain printings before their variants.
export const bySetOrder = (a: RbCard, b: RbCard) =>
  a.sort - b.sort || a.number.localeCompare(b.number, 'en', { numeric: true }) || Number(!!a.variant) - Number(!!b.variant) || a.name.localeCompare(b.name);

// One printing per card, so each card shows once: the plain one (no variant, no "(Metal)", no letter after
// the number like the Worlds Bundle's "276a", not a promo reprint), from the oldest set.
// Main sets are the big expansions and starter boxes; promos and bundles reprint their cards.
const isMainSet = (c: RbCard) => ['Expansion', 'Starter box set'].includes(setOf(c)?.kind ?? '');

export function oneEach(cards: RbCard[]): RbCard[] {
  const best = new Map<string, RbCard>();
  const releasedOf = (c: RbCard) => setOf(c)?.released ?? '9999';
  const score = (c: RbCard) => (c.variant ? 4 : 0) + (c.name !== c.base ? 2 : 0) + (/[a-z]$/i.test(c.number) ? 1 : 0) + (isMainSet(c) ? 0 : 1);
  for (const c of cards) {
    const cur = best.get(c.oracle);
    if (!cur || score(c) < score(cur) || (score(c) === score(cur) && releasedOf(c) < releasedOf(cur))) best.set(c.oracle, c);
  }
  return [...best.values()].sort((a, b) => a.base.localeCompare(b.base));
}

export const LEGENDS = oneEach(RB_CARDS.filter((c) => c.type === 'Legend'));
export const BATTLEFIELDS = oneEach(RB_CARDS.filter((c) => c.type === 'Battlefield'));

// The six colours (domains) and a matching tint for little labels.
export const DOMAIN_COLOURS: Record<string, string> = {
  Fury: '#d8473b', Calm: '#3f9c6b', Mind: '#3c74c4', Body: '#e08a2b', Chaos: '#8a4fbf', Order: '#c9a227', Colorless: '#8b8b8b',
};
export const TYPE_ORDER = ['Legend', 'Unit', 'Spell', 'Gear', 'Battlefield', 'Rune'];
export const typePlural = (t: string) => ({ Unit: 'Units', Spell: 'Spells', Gear: 'Gear', Legend: 'Legends', Battlefield: 'Battlefields', Rune: 'Runes' }[t] ?? t);

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const title = (s: string) => s.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

// Card text uses little codes for symbols, like :rb_energy_2: or :rb_rune_fury:, and [Keyword] for keywords.
// This turns them into readable labels. Everything is escaped first, so card text can never inject HTML.
export function cardTextHtml(text: string | null): string {
  if (!text) return '';
  return esc(text)
    .replace(/:rb_([a-z0-9_]+):/g, (_m, code: string) => {
      const n = code.match(/^energy_(\d+)$/);
      if (n) return `<span class="rb-sym rb-sym-energy" title="${n[1]} energy">${n[1]}</span>`;
      const rune = code.match(/^rune_([a-z]+)$/);
      if (rune) {
        const name = rune[1] === 'rainbow' ? 'Any' : title(rune[1]);
        return `<span class="rb-sym rb-sym-rune" title="1 power of ${rune[1] === 'rainbow' ? 'any colour' : name}">${name}</span>`;
      }
      if (code === 'might') return '<span class="rb-sym" title="Might">Might</span>';
      if (code === 'exhaust') return '<span class="rb-sym" title="Exhaust (turn this sideways)">↷</span>';
      return `<span class="rb-sym">${title(code)}</span>`;
    })
    .replace(/\[&gt;\]/g, ' →')
    .replace(/\[([A-Za-z][A-Za-z0-9 '\-]*)\]/g, '<strong class="rb-kw">$1</strong>')
    .replace(/\n/g, '<br />');
}

// Plain-text version for page descriptions (search engines, link previews).
export const cardTextPlain = (text: string | null) =>
  (text ?? '').replace(/\[>\]/g, ' →').replace(/:rb_rune_rainbow:/g, 'any power').replace(/:rb_energy_(\d+):/g, '$1 energy').replace(/:rb_rune_([a-z]+):/g, (_m, r) => `${title(r)} power`).replace(/:rb_([a-z0-9_]+):/g, (_m, c) => title(c)).replace(/[[\]]/g, '').replace(/\s+/g, ' ').trim();
