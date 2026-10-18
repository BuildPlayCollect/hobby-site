// Every card in each Unmatched deck (src/data/unmatched-cards.json, built from the unmatched.cards fan database by
// research/unmatched/build-cards.py), plus a helper that finds which real cards a combo line names.
import data from '../data/unmatched-cards.json' with { type: 'json' };

export type UmCard = {
  slug: string; title: string; type: 'attack' | 'defense' | 'versatile' | 'scheme'; value: number | null; boost: number | null;
  qty: number; who: string; text: { basic?: string; immediate?: string; during?: string; after?: string }; img?: string;
};
export type UmDeck = { deck: string; cards: UmCard[] };

export const UM_CARDS_SOURCE = { name: 'unmatched.cards', url: data.source, fetched: data.fetched };
const decks = data.decks as Record<string, UmDeck>;
export const deckOf = (fighterId: string): UmDeck | undefined => decks[fighterId];

const norm = (s: string) => s.toLowerCase().replace(/[‘’]/g, "'").replace(/[^a-z0-9'+]+/g, ' ').trim();

// Finds the deck's cards named in a combo line like "Gaze of Stone + Second Shot", in the order written.
// Anything left over (a typo, a token, "Yennefer's boost") comes back in `unmatched` so it can be checked.
export function cardsInCombo(line: string, cards: UmCard[]): { found: UmCard[]; unmatched: string[] } {
  let rest = ` ${norm(line)} `;
  const hits: { at: number; card: UmCard }[] = [];
  for (const card of [...cards].sort((a, b) => b.title.length - a.title.length)) {
    const t = ` ${norm(card.title)} `;
    const at = rest.indexOf(t);
    if (at < 0) continue;
    hits.push({ at, card });
    rest = rest.slice(0, at) + ' ' + '+'.repeat(t.length - 2) + ' ' + rest.slice(at + t.length);
  }
  const unmatched = rest.split(/\++|\bthen\b/).map((s) => s.trim()).filter((s) => s.length > 1);
  return { found: hits.sort((a, b) => a.at - b.at).map((h) => h.card), unmatched };
}
