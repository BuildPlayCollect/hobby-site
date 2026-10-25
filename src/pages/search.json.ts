// search.json.ts: builds /search.json, the list the search box looks through.
// It covers every page a reader might look for: articles, wiki, rules, Beyblade X parts, the tools and hubs,
// every Unmatched fighter, every Pokédex entry, and every esports Agent, champion and hero.
import { getCollection } from 'astro:content';
import { HOBBIES, TYPES, type HobbyKey, type TypeKey } from '../data/site';
import { UM_FIGHTERS } from '../data/unmatched';
import { setOf, displayName as umName } from '../lib/unmatched';
import { getPokedex, dexUrl } from '../lib/champions-pokedex';
import { displayName as monName } from '../lib/pokemon';
import AGENTS from '../data/esports/valorant-agents.json';
import LOL from '../data/esports/lol-champions.json';
import TFT from '../data/esports/tft-champions.json';
import DOTA from '../data/esports/dota-heroes.json';

type Entry = { title: string; summary: string; url: string; kind: string; hobby: string };

// Hand-written list of hubs and tools. Add a line here when a new page or tool goes live.
const PAGES: Entry[] = [
  { title: 'Which hobby fits you? (quiz)', summary: 'Five quick questions, one hobby match.', url: '/quiz/', kind: 'Tool', hobby: 'General' },
  { title: 'Typing test', summary: 'How fast can you type? Everyday or hobby words, with a switch-themed rank.', url: '/keyboards/typing-test/', kind: 'Tool', hobby: 'Keyboards' },
  { title: 'Beyblade X parts list', summary: 'Every Blade, Ratchet and Bit in one searchable list.', url: '/beyblade/parts/', kind: 'Tool', hobby: 'Beyblade' },
  { title: 'Unmatched: learn to play, tier list and every fighter', summary: 'How to play, the core rules, a tier list and all the fighters.', url: '/boardgames/unmatched/', kind: 'Hub', hobby: 'Board games' },
  { title: 'Pokémon Champions VGC', summary: 'Rules, usage leaderboards, top teams, events and tools.', url: '/esports/pokemon-champions/', kind: 'Hub', hobby: 'Esports' },
  { title: 'Learn to play Pokémon Champions VGC', summary: 'A beginner guide to Doubles, team building and Ranked.', url: '/esports/pokemon-champions/learn/', kind: 'Guide', hobby: 'Esports' },
  { title: 'Pokémon Champions Pokédex', summary: 'Every Pokémon allowed in the current regulation.', url: '/esports/pokemon-champions/pokedex/', kind: 'Tool', hobby: 'Esports' },
  { title: 'Pokémon Champions damage calculator', summary: 'Work out how much damage one Pokémon does to another.', url: '/esports/pokemon-champions/calc/', kind: 'Tool', hobby: 'Esports' },
  { title: 'Pokémon Champions team builder', summary: 'Build a team of six with real usage numbers.', url: '/esports/pokemon-champions/team-builder/', kind: 'Tool', hobby: 'Esports' },
  { title: 'VALORANT', summary: 'Patch notes, team updates and news.', url: '/esports/valorant/', kind: 'Hub', hobby: 'Esports' },
  { title: 'Every VALORANT Agent', summary: 'All Agents with their role and abilities.', url: '/esports/valorant/agents/', kind: 'Tool', hobby: 'Esports' },
  { title: 'VALORANT map planner', summary: 'Pick a map, place Agents and draw your plan.', url: '/esports/valorant/map-planner/', kind: 'Tool', hobby: 'Esports' },
  { title: 'League of Legends', summary: 'Patch notes, team updates and news.', url: '/esports/league-of-legends/', kind: 'Hub', hobby: 'Esports' },
  { title: 'Every League of Legends champion', summary: 'All champions with class and difficulty.', url: '/esports/league-of-legends/champions/', kind: 'Tool', hobby: 'Esports' },
  { title: 'Teamfight Tactics (TFT)', summary: 'Patch notes, pro scene updates and news.', url: '/esports/tft/', kind: 'Hub', hobby: 'Esports' },
  { title: 'Every TFT champion in the current set', summary: 'All shop champions by cost.', url: '/esports/tft/champions/', kind: 'Tool', hobby: 'Esports' },
  { title: 'Dota 2', summary: 'Patch notes, team updates and news.', url: '/esports/dota-2/', kind: 'Hub', hobby: 'Esports' },
  { title: 'Every Dota 2 hero', summary: 'All heroes with attribute, roles and complexity.', url: '/esports/dota-2/heroes/', kind: 'Tool', hobby: 'Esports' },
  { title: 'Wiki', summary: 'Plain-English explanations of hobby words and parts.', url: '/wiki/', kind: 'Page', hobby: 'General' },
  { title: 'Tournament rules', summary: 'Official and local rules for every hobby.', url: '/rules/', kind: 'Page', hobby: 'General' },
  { title: 'Newsletter', summary: 'New releases, guides and giveaways across every hobby.', url: '/newsletter/', kind: 'Page', hobby: 'General' },
  { title: 'About', summary: 'Who runs Build Play Collect and why.', url: '/about/', kind: 'Page', hobby: 'General' },
  { title: 'Editorial standards', summary: 'How we check facts, stay fair and write headlines.', url: '/standards/', kind: 'Page', hobby: 'General' },
  { title: 'Contact', summary: 'Questions, corrections or hobby ideas.', url: '/contact/', kind: 'Page', hobby: 'General' },
  { title: 'Advertise with us', summary: 'Reach collectors, builders and players.', url: '/advertise/', kind: 'Page', hobby: 'General' },
];

// A roster entry opens its list page with the name already typed in the page's own search box.
const roster = (name: string, summary: string, page: string): Entry => ({
  title: name, summary, url: `${page}?q=${encodeURIComponent(name)}`, kind: 'Character', hobby: 'Esports',
});

export async function GET() {
  const hobbyPages = Object.entries(HOBBIES).map(([key, h]) => ({ title: h.name, summary: h.blurb, url: `/${key}/`, kind: 'Hobby', hobby: h.name }));
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).map((a) => ({
    title: a.data.title,
    summary: a.data.description,
    url: `/articles/${a.id}/`,
    kind: TYPES[a.data.type as TypeKey].name,
    hobby: HOBBIES[a.data.hobby as HobbyKey].name,
  }));
  const wiki = (await getCollection('wiki')).map((w) => ({
    title: w.data.title,
    summary: w.data.summary,
    url: `/wiki/${w.id}/`,
    kind: 'Wiki',
    hobby: HOBBIES[w.data.hobby as HobbyKey].name,
  }));
  const rules = (await getCollection('rules')).map((r) => ({
    title: r.data.title,
    summary: r.data.summary,
    url: `/rules/${r.id}/`,
    kind: 'Rules',
    hobby: HOBBIES[r.data.hobby as HobbyKey].name,
  }));
  const parts = (await getCollection('bxParts')).map((p) => {
    const title = p.data.abbr ? `${p.data.abbr} (${p.data.name})` : (p.data.name ?? p.data.hasbroName ?? p.id);
    const other = p.data.name && p.data.hasbroName && !p.data.abbr ? `Hasbro name: ${p.data.hasbroName}` : '';
    const kind = { blade: 'Blade', ratchet: 'Ratchet', bit: 'Bit', 'lock-chip': 'Lock Chip', 'metal-blade': 'Metal Blade', 'over-blade': 'Over Blade', 'main-blade': 'Main Blade', 'assist-blade': 'Assist Blade' }[p.data.kind];
    return {
      title,
      summary: [`Beyblade X ${kind}`, other].filter(Boolean).join('. '),
      url: `/beyblade/parts/?q=${encodeURIComponent(p.data.abbr ?? p.data.name ?? p.data.hasbroName ?? '')}`,
      kind: 'Part',
      hobby: 'Beyblade',
    };
  });
  const fighters = UM_FIGHTERS.map((f) => ({
    title: umName(f),
    summary: `Unmatched fighter from ${setOf(f).name}${f.attack ? `, ${f.attack}` : ''}`,
    url: `/boardgames/unmatched/${f.id}/`,
    kind: 'Fighter',
    hobby: 'Board games',
  }));
  const { dex } = await getPokedex();
  const pokemon = dex.entries.map((e) => ({
    title: monName(e.name),
    summary: `Pokémon Champions Pokédex: ${e.types.join(' / ')}${e.megas.length ? ', has a Mega Evolution' : ''}`,
    url: `${dexUrl(e)}/`,
    kind: 'Pokémon',
    hobby: 'Esports',
  }));
  const characters = [
    ...AGENTS.agents.map((a) => roster(a.name, `VALORANT Agent, ${a.role}`, '/esports/valorant/agents/')),
    ...LOL.champions.map((c) => roster(c.name, `League of Legends champion, ${c.title}`, '/esports/league-of-legends/champions/')),
    ...TFT.units.map((u) => roster(u.name, `TFT Set ${TFT.set} champion, ${u.cost} cost`, '/esports/tft/champions/')),
    ...DOTA.heroes.map((h) => roster(h.name, `Dota 2 hero, ${h.attr}`, '/esports/dota-2/heroes/')),
  ];
  const all: Entry[] = [...hobbyPages, ...PAGES, ...wiki, ...rules, ...articles, ...fighters, ...pokemon, ...parts, ...characters];
  return new Response(JSON.stringify(all), { headers: { 'Content-Type': 'application/json' } });
}
