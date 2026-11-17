// builder.json.ts: builds /tcg/riftbound/builder.json, the card list the Deck builder page works from.
// One entry per card (its main printing), with only what the deck rules need: name, type, domains,
// champion tags, Signature/Unique/banned flags, costs, a small picture and the card's page address.
// "k" is the card's set and number (like "ogn-066"); share links use it, so they keep working after a data refresh.
import { RB_CARDS, oneEach, cardUrl, cardTextPlain } from '../../../lib/riftbound';

export const keyOf = (c: { set: string; number: string }) => `${c.set}-${c.number}`;

export function GET() {
  const rows = oneEach(RB_CARDS)
    .filter((c) => c.super !== 'Token')
    .map((c) => ({
      k: keyOf(c), n: c.name, t: c.type, s: c.super, d: c.domains, g: c.tags, e: c.energy, p: c.power, m: c.might,
      uq: c.keywords.includes('Unique') ? 1 : 0, b: c.banned ? 1 : 0, w: c.landscape ? 1 : 0,
      i: c.img.s, u: cardUrl(c), x: cardTextPlain(c.text),
    }));
  return new Response(JSON.stringify(rows), { headers: { 'Content-Type': 'application/json' } });
}
