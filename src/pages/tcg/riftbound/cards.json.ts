// cards.json.ts: builds /tcg/riftbound/cards.json, a small list of every card that the Search page looks through
// in the reader's browser. Short keys keep the file small (it's downloaded once, when someone opens Search).
import { RB_CARDS, cardUrl, cardTextPlain, oneEach } from '../../../lib/riftbound';

export function GET() {
  // The one printing per card that Search shows by default (the same pick as the Legends page).
  const main = new Set(oneEach(RB_CARDS).map((c) => c.id));
  const rows = RB_CARDS.map((c) => ({
    n: c.name, b: main.has(c.id) ? 1 : 0, t: c.type, d: c.domains, s: c.set, no: c.number, u: cardUrl(c), i: c.img.s,
    x: [cardTextPlain(c.text), c.keywords.join(' '), c.tags.join(' '), c.artist ?? ''].join(' '),
    e: c.energy, p: c.power, m: c.might, r: c.rarity, v: c.variant, w: c.landscape ? 1 : 0
  }));
  return new Response(JSON.stringify(rows), { headers: { 'Content-Type': 'application/json' } });
}
