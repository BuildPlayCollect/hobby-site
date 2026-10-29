// /esports/pokemon-champions/learnsets.json: the attacking moves each Pokémon can learn in Champions,
// strongest first, for the damage calculator. Made when the site builds (see src/lib/champions-learnsets.ts).
import { Generations, toID } from '@smogon/calc';
import { Dex } from '@pkmn/dex';
import { getLearnsets } from '../../../lib/champions-learnsets';
import { championsMoves } from '../../../data/champions-moves';

export async function GET() {
  const gen = Generations.get(0);
  const sv = Dex.forGen(9);
  const learnsets = await getLearnsets();
  const moves = championsMoves();
  const byId = new Map(Object.keys(moves).map((n) => [toID(n), n]));
  const out: Record<string, string[]> = {};
  for (const s of gen.species) {
    // Forms without their own list (Megas, Aegislash-Blade ...) use their base Pokémon's,
    // and moves its earlier evolutions learn count too, as in Showdown.
    const own = learnsets[toID(s.name)] ?? learnsets[toID(s.baseSpecies ?? '')] ?? learnsets[toID(s.name.split('-')[0])];
    if (!own) continue;
    const ids = new Set(own);
    for (let pre = sv.species.get(s.name).prevo; pre; pre = sv.species.get(pre).prevo) {
      for (const id of learnsets[toID(pre)] ?? []) ids.add(id);
    }
    const physical = s.baseStats.atk >= s.baseStats.spa;
    const scored = [...ids].flatMap((id) => {
      const name = byId.get(id);
      const m = name ? moves[name] : undefined;
      if (!name || !m || m.cat === 'Status') return [];
      // A rough "how hard does it usually hit" score to put the best picks first. Moves with a big catch
      // (recharge, charging a turn, fainting, one-hit KOs, moving last like Focus Punch) go last, since nobody picks them first.
      const d = sv.moves.get(id);
      const hits = Array.isArray(d.multihit) ? 3 : d.multihit ?? 1;
      const awkward = d.flags?.recharge || d.flags?.charge || d.selfdestruct || d.ohko || d.priority < 0;
      let score = m.power * hits * ((m.acc ?? 100) / 100);
      if (s.types.includes(m.type as never)) score *= 1.5;
      if ((m.cat === 'Physical') !== physical) score *= 0.6;
      if (awkward) score *= 0.1;
      return [{ name, score }];
    });
    out[s.name] = scored.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name)).map((x) => x.name);
  }
  return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json' } });
}
