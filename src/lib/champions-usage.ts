// champions-usage.ts: fetches Pokémon Champions usage stats from Smogon when the site builds.
// Smogon publishes monthly usage numbers from Pokémon Showdown battles at https://www.smogon.com/stats/.
// Every build (every merge to main) looks for the newest month, so the leaderboards stay fresh by themselves.
// If Smogon can't be reached, the page says so instead of showing old or made-up numbers.

const BASE = 'https://www.smogon.com/stats/';

export type Share = { name: string; pct: number };
export type UsageRow = {
  rank: number;
  name: string;
  usage: number;
  moves: Share[];
  items: Share[];
  abilities: Share[];
  teammates: Share[];
};
export type Usage = { month: string; battles: number; url: string; rows: UsageRow[] };

async function text(url: string): Promise<string | null> {
  // For testing without internet: CHAMPIONS_STATS_DIR=/some/folder npm run build reads a saved copy instead.
  const dir = process.env.CHAMPIONS_STATS_DIR;
  if (dir) {
    const { readFile } = await import('node:fs/promises');
    if (url === BASE) return readFile(`${dir}/index.html`, 'utf8').catch(() => null);
    return readFile(`${dir}/${url.slice(BASE.length)}`, 'utf8').catch(() => null);
  }
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

// Month folders look like "2026-09/". Newest first.
async function months(): Promise<string[]> {
  const index = await text(BASE);
  if (!index) return [];
  return [...new Set([...index.matchAll(/href="(\d{4}-\d{2})\/"/g)].map((m) => m[1]))].sort().reverse();
}

// The usage table: "| 1    | Rillaboom          | 46.59939% | ..."
export function parseUsage(t: string) {
  const battles = Number(t.match(/Total battles:\s*(\d+)/)?.[1] ?? 0);
  const rows = [...t.matchAll(/^\s*\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([\d.]+)%/gm)].map((m) => ({ rank: Number(m[1]), name: m[2], usage: Number(m[3]) }));
  return { battles, rows };
}

// The moveset file: one box per Pokémon, split by "+----+" lines into blocks:
// the name, then "Raw count ...", then Abilities, Items, Spreads, Moves, Teammates ...
export function parseMovesets(t: string) {
  const out = new Map<string, Record<string, Share[]>>();
  const blocks: string[][] = [[]];
  for (const raw of t.split('\n')) {
    const line = raw.trim();
    if (/^\+-+\+$/.test(line)) { if (blocks[blocks.length - 1].length) blocks.push([]); continue; }
    const cell = line.replace(/^\|\s?/, '').replace(/\s*\|$/, '').trim();
    if (cell) blocks[blocks.length - 1].push(cell);
  }
  let current: Record<string, Share[]> | null = null;
  blocks.forEach((block, i) => {
    if (block[0]?.startsWith('Raw count') && blocks[i - 1]?.length === 1) {
      current = {};
      out.set(blocks[i - 1][0], current);
    } else if (current && ['Abilities', 'Items', 'Moves', 'Teammates'].includes(block[0])) {
      current[block[0]] = block.slice(1)
        .map((l) => l.match(/^(.+?)\s+([+-]?[\d.]+)%$/))
        .filter((m): m is RegExpMatchArray => !!m && m[1] !== 'Other' && m[1] !== 'Nothing')
        .map((m) => ({ name: m[1], pct: Number(m[2]) }));
    }
  });
  return out;
}

export async function getUsage(format: string, rating: number, top = 30): Promise<Usage | null> {
  for (const month of (await months()).slice(0, 3)) {
    const url = `${BASE}${month}/${format}-${rating}.txt`;
    const usageText = await text(url);
    if (!usageText) continue;
    const { battles, rows } = parseUsage(usageText);
    if (!rows.length) continue;
    const sets = parseMovesets((await text(`${BASE}${month}/moveset/${format}-${rating}.txt`)) ?? '');
    return {
      month,
      battles,
      url,
      rows: rows.slice(0, top).map((r) => {
        const s = sets.get(r.name) ?? {};
        return {
          ...r,
          moves: (s.Moves ?? []).slice(0, 6),
          items: (s.Items ?? []).slice(0, 4),
          abilities: (s.Abilities ?? []).slice(0, 3),
          teammates: (s.Teammates ?? []).slice(0, 6),
        };
      }),
    };
  }
  return null;
}

// ---- Team builder data ----
// The "chaos" file has every Pokémon's full numbers (every item, move, nature and stat-point spread, weighted by player rating),
// so the team builder can show the most AND least used choices. Percentages = share of that Pokémon's sets.
export type BuilderMon = {
  usage: number;
  abilities: Share[];
  items: Share[];
  moves: Share[];
  natures: Share[];
  spreads: { nature: string; sp: number[]; pct: number }[];
  teammates: Share[];
};
export type BuilderData = { month: string; battles: number; url: string; mons: Record<string, BuilderMon> };

const round = (n: number) => Math.round(n * 10) / 10;
function shares(obj: Record<string, number> | undefined, total: number, names: Map<string, string>, min = 0.1) {
  return Object.entries(obj ?? {})
    .filter(([k]) => k !== '' && k !== 'nothing')
    .map(([k, v]) => ({ name: names.get(k) ?? k, pct: round((v / total) * 100) }))
    .filter((s) => s.pct >= min)
    .sort((a, b) => b.pct - a.pct);
}

export async function getBuilderData(format: string, rating: number, minUsage = 0.5, names = new Map<string, string>()): Promise<BuilderData | null> {
  for (const month of (await months()).slice(0, 3)) {
    const url = `${BASE}${month}/chaos/${format}-${rating}.json`;
    const raw = await text(url);
    if (!raw) continue;
    let json: { info: Record<string, number>; data: Record<string, Record<string, any>> };
    try { json = JSON.parse(raw); } catch { continue; }
    const usageText = await text(`${BASE}${month}/${format}-${rating}.txt`);
    const usage = new Map(usageText ? parseUsage(usageText).rows.map((r) => [r.name, r.usage]) : []);
    const mons: Record<string, BuilderMon> = {};
    for (const [name, d] of Object.entries(json.data)) {
      const u = usage.get(name) ?? 0;
      if (u < minUsage) continue;
      const total = Object.values(d.Abilities ?? {}).reduce((a: number, b) => a + (b as number), 0) as number;
      if (!total) continue;
      const natureTotals: Record<string, number> = {};
      const spreads = Object.entries((d.Spreads ?? {}) as Record<string, number>).map(([k, v]) => {
        const [nature, sp] = k.split(':');
        natureTotals[nature] = (natureTotals[nature] ?? 0) + v;
        return { nature, sp: sp.split('/').map(Number), pct: round((v / total) * 100) };
      }).sort((a, b) => b.pct - a.pct);
      mons[name] = {
        usage: u,
        abilities: shares(d.Abilities, total, names),
        items: shares(d.Items, total, names),
        moves: shares(d.Moves, total, names),
        natures: shares(natureTotals, total, names, 0.05),
        spreads: spreads.slice(0, 8),
        teammates: shares(d.Teammates, total, names, 1).slice(0, 10),
      };
    }
    return { month, battles: json.info['number of battles'] ?? 0, url, mons };
  }
  return null;
}
