// champions-learnsets.ts: the moves each Pokémon can learn in Pokémon Champions.
// The list comes from Pokémon Showdown (github.com/smogon/pokemon-showdown, MIT licence),
// data/mods/champions/learnsets.ts, fetched every time the site builds so new moves show up by themselves.
// If GitHub can't be reached, the saved copy in src/data/champions-learnsets.json is used instead.
import SNAPSHOT from '../data/champions-learnsets.json';

const URL = 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/mods/champions/learnsets.ts';

// Showdown's file has one block per Pokémon: "\tabomasnow: {\n\t\tlearnset: {\n\t\t\tblizzard: [...],".
function parse(ts: string): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const m of ts.matchAll(/^\t(\w+): \{\n([\s\S]*?)^\t\},?$/gm)) {
    const ls = m[2].match(/learnset: \{([\s\S]*?)^\t\t\}/m);
    if (ls) out[m[1]] = [...ls[1].matchAll(/^\t\t\t(\w+):/gm)].map((x) => x[1]);
  }
  return out;
}

let cached: Promise<Record<string, string[]>> | undefined;

// Pokémon id ("abomasnow") -> move ids it can learn ("blizzard", "woodhammer", ...).
export function getLearnsets(): Promise<Record<string, string[]>> {
  return (cached ??= (async () => {
    try {
      const res = await fetch(URL, { signal: AbortSignal.timeout(20000) });
      if (res.ok) {
        const data = parse(await res.text());
        if (Object.keys(data).length > 100) return data;
      }
    } catch {}
    return SNAPSHOT as Record<string, string[]>;
  })());
}
