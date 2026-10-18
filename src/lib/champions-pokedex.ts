// champions-pokedex.ts: puts together what the Pokédex pages show for each Pokémon:
// who's allowed (champions-dex.ts), how strong players use them (Smogon stats, champions-usage.ts)
// and the real Regionals teams they were on (champions-teams.ts), all for the current regulation.
import { Generations, toID } from '@smogon/calc';
import { USAGE_FORMATS } from '../data/champions';
import { getDex, type DexEntry, type DexForm } from './champions-dex';
import { getBuilderData, type BuilderMon } from './champions-usage';
import { ALL_TEAMS } from './champions-teams';

export const POKEDEX_URL = '/esports/pokemon-champions/pokedex';
export const dexUrl = (e: { slug: string }) => `${POKEDEX_URL}/${e.slug}`;
export const STAT_NAMES = [['hp', 'HP'], ['atk', 'Attack'], ['def', 'Defense'], ['spa', 'Sp. Atk'], ['spd', 'Sp. Def'], ['spe', 'Speed']] as const;
export const total = (f: DexForm) => Object.values(f.stats).reduce((a, b) => a + b, 0);

// Smogon writes item, move and ability ids ("miracleseed"); this turns them back into names ("Miracle Seed").
function idNames() {
  const g = Generations.get(0);
  const names = new Map<string, string>();
  for (const list of [g.items, g.moves, g.abilities]) for (const x of list) names.set(x.id, x.name);
  return names;
}

let cached: ReturnType<typeof build> | null = null;
export function getPokedex() {
  cached ??= build();
  return cached;
}

async function build() {
  const [dex, usage] = await Promise.all([getDex(), getBuilderData(USAGE_FORMATS.doubles.id, USAGE_FORMATS.rating, 0, idNames())]);
  const code = dex.regulation.replace(/^Regulation /, '');
  // Only teams from tournaments played under the current rules.
  const teams = ALL_TEAMS.filter((t) => t.reg === code);

  // Every name a team sheet or the stats might use, pointing at the Pokédex page it belongs on.
  const byId = new Map<string, DexEntry>();
  for (const e of dex.entries) {
    byId.set(e.id, e);
    for (const m of e.megas) byId.set(m.id, e);
  }
  // "Vivillon-High Plains" isn't its own page, so drop name parts from the end until one matches ("Vivillon").
  const pageFor = (name: string): DexEntry | undefined => {
    const parts = name.split('-');
    for (let i = parts.length; i > 0; i--) {
      const hit = byId.get(toID(parts.slice(0, i).join('-')));
      if (hit) return hit;
    }
  };

  // Usage numbers per form, ranked by how many teams use them.
  const usageByName = new Map<string, BuilderMon & { name: string; rank: number }>();
  Object.entries(usage?.mons ?? {})
    .sort((a, b) => b[1].usage - a[1].usage)
    .forEach(([name, m], i) => usageByName.set(toID(name), { ...m, name, rank: i + 1 }));
  const formsOf = (e: DexEntry) => [e, ...e.megas];
  // The forms of this Pokémon that players actually used, most used first.
  const usageOf = (e: DexEntry) => formsOf(e)
    .map((f) => ({ form: f, u: usageByName.get(f.id) }))
    .filter((x): x is { form: DexForm; u: NonNullable<typeof x.u> } => !!x.u)
    .sort((a, b) => b.u.usage - a.u.usage);
  const teamsOf = (e: DexEntry) => teams.filter((t) => t.team.some((n) => pageFor(n) === e)).sort((a, b) => a.place - b.place);

  return { dex, code, usage, teams, pageFor, usageOf, teamsOf };
}
