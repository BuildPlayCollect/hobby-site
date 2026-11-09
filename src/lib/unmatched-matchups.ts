// unmatched-matchups.ts: each fighter's best and worst matchups, from real games logged on Tabletop League.
// Data: src/data/unmatched-matchups.json, read by hand from every fighter's Tabletop League stats page.
// Rules used to pick them (keep these if you refresh the data):
//  - only the 10 most-played opponents each page shows; only pairs with 20+ real games
//    (Tabletop League's predicted numbers for pairs under 10 games are never used)
//  - good = won 55% or more, tough = won 45% or less, top 3 of each by win rate
import data from '../data/unmatched-matchups.json';
import { UM_FIGHTERS, type UmFighter } from '../data/unmatched';

export type UmMatchup = { fighter: UmFighter; w: number; l: number; g: number; p: number };

export const UM_MATCHUP_SOURCE = {
  name: 'Tabletop League',
  url: 'https://www.tabletopleague.com/games/unmatched/stats/characters',
  checked: '8 November 2026',
  minGames: 20,
};

type Row = { id: string; w: number; l: number; g: number; p: number };
const table = data as Record<string, { plays: number; good: Row[]; tough: Row[] }>;
const toMatchup = (r: Row): UmMatchup | null => {
  const fighter = UM_FIGHTERS.find((f) => f.id === r.id);
  return fighter ? { fighter, w: r.w, l: r.l, g: r.g, p: r.p } : null;
};

/** null = this fighter isn't in the Tabletop League data at all (2025 Bruce Lee). */
export function matchupsOf(id: string) {
  const row = table[id];
  if (!row) return null;
  return {
    plays: row.plays,
    good: row.good.map(toMatchup).filter((m): m is UmMatchup => !!m),
    tough: row.tough.map(toMatchup).filter((m): m is UmMatchup => !!m),
  };
}
