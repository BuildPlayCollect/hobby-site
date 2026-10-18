// champions-dex.ts: every Pokémon allowed in the current Pokémon Champions VGC regulation.
// The list comes from Pokémon Showdown (github.com/smogon/pokemon-showdown, MIT licence), whose rules track each
// official regulation: config/formats.ts names the current VGC format, data/mods/<mod>/formats-data.ts says which
// Pokémon are allowed in it, and data/pokedex.ts has their types, base stats and abilities.
// It's fetched every time the site builds, so when a new regulation starts the Pokédex updates by itself.
// If GitHub can't be reached, the saved copy in src/data/champions-dex.json is used instead.
import SNAPSHOT from '../data/champions-dex.json';

const RAW = 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/';
export const DEX_SOURCE = 'https://github.com/smogon/pokemon-showdown';

export type Stats = { hp: number; atk: number; def: number; spa: number; spd: number; spe: number };
export type DexForm = { id: string; name: string; types: string[]; stats: Stats; abilities: string[]; hidden?: string; item?: string; isNew?: boolean };
export type DexEntry = DexForm & {
  slug: string; // the page address, e.g. "rotom-wash"
  num: number;
  megas: DexForm[];
  isNew: boolean; // allowed now but not in the regulation before
};
export type Dex = { regulation: string; previous: string | null; updated: string; entries: DexEntry[] };

async function get(path: string): Promise<string | null> {
  try {
    const res = await fetch(RAW + path, { signal: AbortSignal.timeout(20000) });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

// Showdown's data files are TypeScript objects, one Pokémon per block: "\tsalamence: {\n ... \n\t},"
function blocks(ts: string) {
  return new Map([...ts.matchAll(/^\t(\w+): \{\n([\s\S]*?)^\t\},?$/gm)].map((m) => [m[1], m[2]]));
}
const field = (b: string, k: string) => b.match(new RegExp(`^\\t\\t${k}: "([^"]+)"`, 'm'))?.[1];
// Unicode escapes like "Farfetch’d" -> "Farfetch’d".
const unescape = (s: string) => s.replace(/\\u([0-9a-f]{4})/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));
export const slugOf = (name: string) => name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’'.:]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// The VGC formats in Showdown's list, newest first: [{ reg: "Regulation M-C", mod: "champions" }, ...]
function vgcFormats(formatsTs: string) {
  const out: { reg: string; mod: string }[] = [];
  for (const m of formatsTs.matchAll(/name: "\[Gen 9 Champions\] VGC \d{4} Reg ([A-Z0-9-]+)",\s*\n\s*mod: '(\w+)'/g)) {
    if (!out.some((f) => f.mod === m[2])) out.push({ reg: `Regulation ${m[1]}`, mod: m[2] });
  }
  return out;
}

const allowed = (formatsData: string) => [...blocks(formatsData)].filter(([, b]) => !b.includes('isNonstandard')).map(([id]) => id);

function form(id: string, b: string): DexForm {
  const stats = b.match(/baseStats: \{ hp: (\d+), atk: (\d+), def: (\d+), spa: (\d+), spd: (\d+), spe: (\d+) \}/)!.slice(1).map(Number);
  const abil = Object.fromEntries([...(b.match(/abilities: \{([^}]*)\}/)?.[1] ?? '').matchAll(/(\w+): "([^"]+)"/g)].map((m) => [m[1], m[2]]));
  return {
    id,
    name: unescape(field(b, 'name')!),
    types: [...(b.match(/types: \[([^\]]*)\]/)?.[1] ?? '').matchAll(/"([^"]+)"/g)].map((m) => m[1]),
    stats: { hp: stats[0], atk: stats[1], def: stats[2], spa: stats[3], spd: stats[4], spe: stats[5] },
    abilities: ['0', '1'].map((k) => abil[k]).filter(Boolean),
    ...(abil.H ? { hidden: abil.H } : {}),
    ...(field(b, 'requiredItem') ? { item: field(b, 'requiredItem') } : {}),
  };
}

async function fetchDex(): Promise<Dex | null> {
  const formatsTs = await get('config/formats.ts');
  const formats = formatsTs ? vgcFormats(formatsTs) : [];
  if (!formats.length) return null;
  const [cur, prev] = formats;
  const [curData, prevData, pokedex] = await Promise.all([
    get(`data/mods/${cur.mod}/formats-data.ts`),
    prev ? get(`data/mods/${prev.mod}/formats-data.ts`) : Promise.resolve(null),
    get('data/pokedex.ts'),
  ]);
  if (!curData || !pokedex) return null;
  const dex = blocks(pokedex);
  const legal = allowed(curData).filter((id) => dex.has(id));
  const before = new Set(prevData ? allowed(prevData) : legal);
  const entries = new Map<string, DexEntry>();
  const megas: [string, DexForm][] = [];
  for (const id of legal) {
    const b = dex.get(id)!;
    const f = form(id, b);
    const forme = field(b, 'forme') ?? '';
    const battleOnly = field(b, 'battleOnly');
    if (forme.includes('Mega')) megas.push([unescape(battleOnly ?? field(b, 'baseSpecies')!), f]);
    else if (!battleOnly) entries.set(f.name, { ...f, slug: slugOf(f.name), num: Number(b.match(/num: (\d+)/)![1]), megas: [], isNew: !before.has(id) });
    // Other battle-only forms (Castform in the rain, Aegislash's Blade Forme) appear mid-battle, so they have no page of their own.
  }
  for (const [base, f] of megas) entries.get(base)?.megas.push({ ...f, isNew: !before.has(f.id) });
  return {
    regulation: cur.reg,
    previous: prev?.reg ?? null,
    updated: new Date().toISOString().slice(0, 10),
    entries: [...entries.values()],
  };
}

let cached: Promise<Dex> | null = null;
// Every page that needs the Pokédex shares one download per build.
export function getDex(): Promise<Dex> {
  cached ??= (process.env.CHAMPIONS_DEX_OFFLINE ? Promise.resolve(null) : fetchDex()).then((d) => d ?? (SNAPSHOT as Dex));
  return cached;
}

// Saves a fresh copy for src/data/champions-dex.json: `npx tsx src/lib/champions-dex.ts > src/data/champions-dex.json`
if (import.meta.url === `file://${process.argv[1]}`) {
  fetchDex().then((d) => { if (!d) throw new Error('Could not reach Pokémon Showdown on GitHub'); console.log(JSON.stringify(d)); });
}
