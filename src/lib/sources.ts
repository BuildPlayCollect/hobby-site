// Turns raw source links into a tidy list: grouped by site, with a readable site name
// and page title instead of the bare URL. Used by <SourceList>.
export type SourceInput = string | { url: string; label?: string };
export type SourceGroup = { site: string; pages: { url: string; title: string }[] };

const SITE_NAMES: Record<string, string> = {
  'bulbapedia.bulbagarden.net': 'Bulbapedia',
  'victoryroad.pro': 'Victory Road',
  'pokemon-zone.com': 'Pokémon Zone',
  'serebii.net': 'Serebii',
  'playnews.gg': 'Playnews',
  'vgcguide.com': 'VGC Guide',
  'metavgc.com': 'MetaVGC',
  'pocketgamer.com': 'Pocket Gamer',
  'champdex.com': 'ChampDex',
  'smogon.com': 'Smogon',
  'pokemon.com': 'Pokémon.com',
  'gematsu.com': 'Gematsu',
  'theverge.com': 'The Verge',
  'ign.com': 'IGN',
  'godisageek.com': 'God is a Geek',
  'the-unmatched.club': 'The Unmatched Club',
  'gridbeast.gg': 'Gridbeast',
  'restorationgames.com': 'Restoration Games',
  'unmatched.machaka.net': 'Unmatched stats (machaka)',
  'unmatched.cards': 'unmatched.cards (fan card database)',
  'opinionatedgamers.com': 'The Opinionated Gamers',
  'gamingtrend.com': 'GamingTrend',
  'spacebiff.com': 'Space-Biff!',
  'thefamilygamers.com': 'The Family Gamers',
  'whatsericplaying.com': "What's Eric Playing?",
  'tabletopbattles.com': 'Tabletop Battles',
  'meeplemountain.com': 'Meeple Mountain',
  'medium.com': 'Medium',
  'shelfside.co': 'Shelfside',
  'boardgamegumbo.wordpress.com': 'Board Game Gumbo',
  'beastiegeeks.com': 'Beastie Geeks',
  'zatu.com': 'Zatu Games',
};

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, '');
const siteName = (host: string) => SITE_NAMES[host] ?? host;

// Slugs that don't read well on their own get a hand-written title instead.
const TITLE_FIXES: Record<string, string> = {
  'statusconditions.shtml': 'Status conditions',
  'seasonm-7.shtml': 'Ranked Season M-7',
  'regulation-set-m-c-is-now-the-official-vgc-format-until-2-december': 'Regulation Set M-C is the official format',
  'pokemon-champions-all-the-rules-changed-compared-to-the-main-games-status-conditions-pp-abilities': 'Rules that changed from the main games',
  'pokemon-champions-champion-rank-and-master-ball-tiers-open-on-august-12-how-to-climb-them': 'Champion Rank and Master Ball tiers',
  'pokemon-champions-complete-guide-to-special-mechanics': 'Guide to special mechanics',
  'pokemon-champions-getting-started-guide': 'Getting started guide',
  'guide-to-speed-control-in-vgc-p1': 'Guide to speed control in VGC, part 1',
  'UM-M-BaB-Rulebook.pdf': 'Rulebook (PDF)',
  'UM-RobinHoodvBigfoot_Rules-two-page.pdf': 'Two-page rules (PDF)',
};
// Words that should keep their own spelling inside a title.
const WORD_FIXES: Record<string, string> = { pokemon: 'Pokémon', vgc: 'VGC', tmnt: 'TMNT', pp: 'PP', ii: 'II', iii: 'III', dr: 'Dr.', ingen: 'InGen', trex: 'T-Rex' };
const SMALL = new Set(['a', 'an', 'and', 'as', 'at', 'by', 'for', 'from', 'in', 'of', 'on', 'or', 'the', 'to', 'vs', 'with']);

// Wiki pages ("Trick_Room_(move)") keep their own capitals; blog slugs ("robin-hood-vs-bigfoot")
// become title case ("Robin Hood vs Bigfoot").
function titleFromUrl(url: string): string {
  const raw = new URL(url).pathname.split('/').filter(Boolean).at(-1);
  if (!raw) return 'Home page';
  const slug = decodeURIComponent(raw);
  if (TITLE_FIXES[slug]) return TITLE_FIXES[slug];
  const clean = slug.replace(/\.(s?html?|php|pdf)$/i, '').replace(/-[0-9a-f]{10,12}$/i, ''); // Medium adds an id to each post
  if (clean.includes('_')) return clean.replace(/_/g, ' ');
  return clean.split('-').filter(Boolean).map((w, i) => {
    const lower = w.toLowerCase();
    if (WORD_FIXES[lower]) return WORD_FIXES[lower];
    if (i > 0 && SMALL.has(lower)) return lower;
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }).join(' ');
}

export function groupSources(items: SourceInput[]): SourceGroup[] {
  const groups = new Map<string, SourceGroup>();
  const seen = new Set<string>();
  for (const item of items) {
    const { url, label } = typeof item === 'string' ? { url: item, label: undefined } : item;
    if (seen.has(url)) continue;
    seen.add(url);
    const site = siteName(hostOf(url));
    // Labels written as "Site: page title" drop the site part, since the group already says it.
    const title = label ? label.replace(new RegExp(`^${site.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*`), '') : titleFromUrl(url);
    if (!groups.has(site)) groups.set(site, { site, pages: [] });
    groups.get(site)!.pages.push({ url, title });
  }
  // Sites with the most pages first, so the main references lead.
  return [...groups.values()].sort((a, b) => b.pages.length - a.pages.length);
}
