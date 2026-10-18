// Every real Regionals team we have: each event's top 8 (RESULTS) plus the rest of its standings (MORE_TEAMS),
// with the regulation it was played in, so pages can show only teams from the current rules.
import { toID } from '@smogon/calc';
import { RESULTS } from '../data/champions';
import { MORE_TEAMS } from '../data/champions-teams';

export type Team = { p: string; c: string; team: string[]; place: number; event: string; reg: string; url: string };

const short = (name: string) => name.replace(/ Regional$/, '');
const eventOf = new Map(RESULTS.map((ev) => [short(ev.name), ev]));

export const ALL_TEAMS: Team[] = [
  ...RESULTS.flatMap((ev) => ev.top.map((t, i) => ({ ...t, place: i + 1, event: short(ev.name), reg: ev.reg, url: ev.source.url }))),
  ...MORE_TEAMS.map((t) => ({ p: t.p, c: t.c, team: t.team, place: t.n, event: t.e, reg: eventOf.get(t.e)?.reg ?? '', url: eventOf.get(t.e)?.source.url ?? '' })),
];

// Teams that used this Pokémon (any of the given names), best finish first.
export const seenAt = (names: string[], teams = ALL_TEAMS) => {
  const ids = new Set(names.map(toID));
  return teams.filter((t) => t.team.some((n) => ids.has(toID(n)))).sort((a, b) => a.place - b.place);
};

export const ordinal = (n: number) => { const t = n % 100 >= 11 && n % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][n % 10] ?? 'th'; return `${n}${t}`; };
