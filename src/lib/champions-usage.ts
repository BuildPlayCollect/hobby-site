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
