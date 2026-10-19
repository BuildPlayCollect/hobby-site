// esports-rosters.mjs: downloads every agent, champion and hero (with icons) and the VALORANT map images
// for the esports hubs, from each game's own data feed. Run it with:  npm run esports:data
//
// What it writes:
//   src/data/esports/<file>.json     names, roles and short official text (the pages read these)
//   public/images/esports/<game>/... icons as small WebP files (served from our own site, not hotlinked)
//
// Where the data comes from:
//   League of Legends + TFT: Riot's Data Dragon (ddragon.leagueoflegends.com), Riot's official feed for developers
//   VALORANT: valorant-api.com, a fan-run mirror of the game files (Riot has no official image feed for VALORANT)
//   Dota 2: Valve's own dota2.com hero feed and its Steam image server
//
// Icons that are already saved are skipped, so a rerun only downloads what's new (a new champion, a new map).
// If a feed can't be reached, that game's saved files are left as they are and the site still builds.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src/data/esports');
const IMG = join(ROOT, 'public/images/esports');
const today = new Date().toISOString().slice(0, 10);

export const slugOf = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’'.:&/]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function json(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}
const exists = (p) => access(p).then(() => true, () => false);

// Saves one image as WebP at the given size (fit "cover" crops, "inside" keeps the whole picture).
async function icon(url, file, { w, h = w, fit = 'cover', position = 'centre', quality = 80 }) {
  const out = join(IMG, file);
  if (await exists(out)) return `/images/esports/${file}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  await mkdir(dirname(out), { recursive: true });
  await sharp(Buffer.from(await res.arrayBuffer())).resize(w, h, { fit, position, background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality }).toFile(out);
  return `/images/esports/${file}`;
}

// Runs a few downloads at a time, so we're polite to each server.
async function each(items, fn, n = 6) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } }));
  return out;
}

async function save(name, data) {
  await mkdir(DATA, { recursive: true });
  await writeFile(join(DATA, name), JSON.stringify(data, null, 1) + '\n');
  console.log(`saved src/data/esports/${name}`);
}

// ---------- VALORANT ----------
const KEYS = { Grenade: 'C', Ability1: 'Q', Ability2: 'E', Ultimate: 'X', Passive: 'Passive' };
const clean = (s) => (s ?? '').replace(/\r?\n+/g, ' ').replace(/\s+/g, ' ').trim();

async function valorant() {
  const { data } = await json('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
  const agents = await each(data.sort((a, b) => a.displayName.localeCompare(b.displayName)), async (a) => {
    const slug = slugOf(a.displayName);
    const abilities = a.abilities
      .filter((x) => KEYS[x.slot] && x.displayName)
      .sort((x, y) => Object.keys(KEYS).indexOf(x.slot) - Object.keys(KEYS).indexOf(y.slot))
      .map(async (x) => ({
        key: KEYS[x.slot],
        name: clean(x.displayName),
        text: clean(x.description),
        icon: x.displayIcon ? await icon(x.displayIcon, `valorant/abilities/${slug}-${KEYS[x.slot].toLowerCase()}.webp`, { w: 64, fit: 'inside' }) : null,
      }));
    return {
      slug,
      name: a.displayName,
      role: a.role?.displayName ?? 'Agent',
      text: clean(a.description),
      icon: await icon(a.displayIcon, `valorant/agents/${slug}.webp`, { w: 128 }),
      token: await icon(a.displayIconSmall ?? a.displayIcon, `valorant/agents/${slug}-small.webp`, { w: 48 }),
      abilities: await Promise.all(abilities),
    };
  });
  await save('valorant-agents.json', { updated: today, source: 'https://valorant-api.com', agents });

  // Bomb maps only (the ones with A/B or A/B/C sites). Skirmish, Deathmatch and practice maps are left out.
  const maps = (await json('https://valorant-api.com/v1/maps')).data
    .filter((m) => m.tacticalDescription && m.displayIcon)
    .sort((a, b) => a.displayName.localeCompare(b.displayName));
  const out = await each(maps, async (m) => {
    const slug = slugOf(m.displayName);
    return {
      slug,
      name: m.displayName,
      sites: m.tacticalDescription,
      // Callout names ("A Main", "Mid Courtyard") placed on the map picture, 0 to 1 across and down.
      // valorant-api.com's formula: across = gameY * xMultiplier + xScalarToAdd, down = gameX * yMultiplier + yScalarToAdd.
      callouts: (m.callouts ?? []).map((c) => ({
        name: `${c.superRegionName.replace(/ Side$/, '')} ${c.regionName}`,
        x: +(c.location.y * m.xMultiplier + m.xScalarToAdd).toFixed(4),
        y: +(c.location.x * m.yMultiplier + m.yScalarToAdd).toFixed(4),
      })).filter((c) => c.x > 0 && c.x < 1 && c.y > 0 && c.y < 1),
      map: await icon(m.displayIcon, `valorant/maps/${slug}.webp`, { w: 1024, fit: 'inside', quality: 82 }),
      thumb: m.listViewIcon ? await icon(m.listViewIcon, `valorant/maps/${slug}-card.webp`, { w: 400, h: 100, quality: 72 }) : null,
    };
  });
  await save('valorant-maps.json', { updated: today, source: 'https://valorant-api.com', maps: out });
}

// ---------- League of Legends + TFT (Data Dragon) ----------
async function riot() {
  const [v] = await json('https://ddragon.leagueoflegends.com/api/versions.json');
  const DD = `https://ddragon.leagueoflegends.com/cdn/${v}`;

  const champs = Object.values((await json(`${DD}/data/en_US/champion.json`)).data).sort((a, b) => a.name.localeCompare(b.name));
  const lol = await each(champs, async (c) => ({
    slug: slugOf(c.name),
    name: c.name,
    title: c.title,
    roles: c.tags,
    difficulty: c.info.difficulty,
    icon: await icon(`${DD}/img/champion/${c.image.full}`, `league-of-legends/champions/${slugOf(c.name)}.webp`, { w: 96 }),
  }));
  await save('lol-champions.json', { updated: today, version: v, source: 'https://developer.riotgames.com/docs/lol#data-dragon', champions: lol });

  // TFT keeps old sets in the same file. The current set is the highest "TFTSet<N>" in the paths, and only
  // units sold in the shop count. Units with a form in brackets (like "Lux (Fae)") are folded into one.
  const all = Object.entries((await json(`${DD}/data/en_US/tft-champion.json`)).data);
  const setOf = (k) => Number(k.match(/TFTSet(\d+)\/Shop\//)?.[1] ?? 0);
  const set = Math.max(...all.map(([k]) => setOf(k)));
  const seen = new Set();
  const units = all
    .filter(([k, u]) => setOf(k) === set && u.cost >= 1 && u.cost <= 5 && !/\(/.test(u.name) && !/TraitClone|FakeUnit|Enemy_/.test(u.id))
    .map(([, u]) => u)
    .filter((u) => !seen.has(u.name) && seen.add(u.name))
    .sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
  const tft = await each(units, async (u) => ({
    slug: slugOf(u.name),
    name: u.name,
    cost: u.cost,
    // The pictures are wide splash art (1024x512); the centre crop keeps the face.
    icon: await icon(`${DD}/img/tft-champion/${u.image.full}`, `tft/set-${set}/${slugOf(u.name)}.webp`, { w: 192, h: 128, position: 'centre', quality: 76 }),
  }));
  await save('tft-champions.json', { updated: today, version: v, set, source: 'https://developer.riotgames.com/docs/tft#static-data', units: tft });
}

// ---------- Dota 2 (dota2.com) ----------
const ATTR = ['Strength', 'Agility', 'Intelligence', 'Universal'];
const ROLES = ['Carry', 'Support', 'Nuker', 'Disabler', 'Jungler', 'Durable', 'Escape', 'Pusher', 'Initiator'];
const ATTACK = { 1: 'Melee', 2: 'Ranged' };

async function dota() {
  const list = (await json('https://www.dota2.com/datafeed/herolist?language=english')).result.data.heroes;
  const heroes = await each(list.sort((a, b) => a.name_loc.localeCompare(b.name_loc)), async (h) => {
    const d = (await json(`https://www.dota2.com/datafeed/herodata?language=english&hero_id=${h.id}`)).result.data.heroes[0];
    const short = h.name.replace('npc_dota_hero_', '');
    const levels = d.role_levels ?? [];
    return {
      slug: slugOf(h.name_loc),
      name: h.name_loc,
      attr: ATTR[h.primary_attr] ?? 'Universal',
      attack: ATTACK[d.attack_capability] ?? '',
      complexity: h.complexity,
      // Valve rates each role 1 to 3; the strongest roles come first.
      roles: ROLES.map((r, i) => [r, levels[i] ?? 0]).filter(([, n]) => n > 0).sort((a, b) => b[1] - a[1]).map(([r]) => r),
      text: clean(d.npe_desc_loc),
      icon: await icon(`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${short}.png`, `dota-2/heroes/${slugOf(h.name_loc)}.webp`, { w: 160, h: 90 }),
    };
  }, 4);
  await save('dota-heroes.json', { updated: today, source: 'https://www.dota2.com/heroes', heroes });
}

for (const [name, run] of [['VALORANT', valorant], ['League of Legends + TFT', riot], ['Dota 2', dota]]) {
  try {
    await run();
  } catch (e) {
    console.warn(`${name}: couldn't update (${e.message}). The saved copy stays.`);
    process.exitCode = 1;
  }
}
