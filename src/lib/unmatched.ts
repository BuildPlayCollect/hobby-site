// Helpers for the Unmatched pages: set colours, initials and short names for the deck badges.
import { UM_SETS, UM_FIGHTERS, type UmFighter } from '../data/unmatched';

// One colour per product line, so a fighter's badge tells you which family of boxes it came from.
const LINE_COLORS: [RegExp, string][] = [
  [/Battle of Legends/, '#f3701e'],
  [/Marvel/, '#e2412f'],
  [/Jurassic/, '#3e9b4f'],
  [/Cobble/, '#6f5aa8'],
  [/Buffy/, '#d6457f'],
  [/Adventures/, '#2f7fd1'],
  [/Slings/, '#c8961c'],
  [/Witcher/, '#5d6b78'],
  [/Stars and Stripes/, '#27407a'],
  [/Standalone/, '#14958f'],
];
export const setOf = (f: UmFighter) => UM_SETS.find((s) => s.id === f.set)!;
export const lineColor = (line: string) => LINE_COLORS.find(([re]) => re.test(line))?.[1] ?? '#4b607f';
export const fighterColor = (f: UmFighter) => lineColor(setOf(f).line);

// "Bruce Lee (2025 version)" reads as "Bruce Lee (2025)"; other names stay as printed.
export const displayName = (f: UmFighter) => f.name.replace(' (2025 version)', ' (2025)').replace(' (InGen)', '');

// Two letters for the badge: "King Arthur" → KA, "Medusa" → Me (like the periodic table).
export function initials(f: UmFighter) {
  const words = displayName(f).replace(/\(.*?\)/g, '').replace(/^(The|Dr\.)\s+/, '').split(/[\s&]+/).filter((w) => /^[A-Za-z]/.test(w));
  if (words.length === 1) return words[0].slice(0, 2);
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export const fighterUrl = (f: UmFighter) => `/boardgames/unmatched/${f.id}`;
export const TIERS = ['S', 'A', 'B', 'C', 'D'] as const;
export const byTier = (t: string) => UM_FIGHTERS.filter((f) => f.tier?.tier === t).sort((a, b) => a.tier!.rank - b.tier!.rank);
// Fewer than 10 "proven" matchups (10+ games each) means the win rate is a rough guess.
export const fewGames = (f: UmFighter) => !!f.tier && f.tier.proven < 10;
