// esports-hub.ts: the shape of a game hub (VALORANT, League of Legends, TFT, Dota 2).
// Each game keeps its facts in src/data/<game>.ts and the page draws them with <GameHub>.
// Every fact needs a source link, so a reader (or Echo) can check it.

export type Source = { label: string; url: string };

// An event in the season. Dates are YYYY-MM-DD. `result` only once it's over.
export type HubEvent = {
  name: string;
  from: string;
  to: string;
  place: string;
  text?: string;
  result?: string;
  source: Source;
};

// One game patch: the highlights are in our own words, the link goes to the full official notes.
export type Patch = { name: string; date: string; highlights: string[]; source: Source };

// A roster change or bit of team news. `unconfirmed` when only one unofficial source reports it.
export type TeamUpdate = { date: string; team: string; text: string; source: Source; unconfirmed?: boolean };

// Official logos, unedited, only resized. Riot's come from its press page (riotgames.com/en/press, "Assets").
// Valve has no press kit, so the Dota 2 logo is the one on Valve's own dota2.com.
// The pictures are light on a see-through background, so they always sit on a dark tile.
export type GameLogo = { src: string; w: number; h: number; credit: string; source: Source };
const RIOT_PRESS: Source = { label: 'Riot Games press page: logos', url: 'https://www.riotgames.com/en/press' };
export const LOGOS = {
  valorant: { src: '/images/esports/logos/valorant.webp', w: 195, h: 160, credit: 'VALORANT logo: Riot Games press kit', source: RIOT_PRESS },
  lol: { src: '/images/esports/logos/league-of-legends.webp', w: 256, h: 109, credit: 'League of Legends logo: Riot Games press kit', source: RIOT_PRESS },
  tft: { src: '/images/esports/logos/tft.webp', w: 160, h: 160, credit: 'Teamfight Tactics logo: Riot Games press kit', source: RIOT_PRESS },
  dota: { src: '/images/esports/logos/dota-2.webp', w: 172, h: 160, credit: 'Dota 2 logo: Valve, from dota2.com', source: { label: 'Dota 2 official site', url: 'https://www.dota2.com/home' } },
} satisfies Record<string, GameLogo>;

export type GameHubData = {
  name: string;          // shown as the page title
  tagline: string;       // one line under the title
  description: string;   // for search engines and link previews
  badge: 'shooter' | 'lanes' | 'hexes' | 'aegis'; // the little illustration (ours, not a game logo)
  logo: GameLogo;        // the game's official logo, shown next to its name
  tools?: { href: string; label: string; text: string }[]; // our pages for this game (every agent, map planner)
  about: string[];       // "What is it?" in 2 or 3 short paragraphs
  facts: { label: string; value: string }[];
  scene: { intro: string[]; parts: { name: string; text: string }[] };
  events: HubEvent[];    // the season, oldest first
  now: { title: string; text: string; source: Source }[]; // "What's happening now"
  ph?: { title: string; text: string; source: Source }[]; // Filipino teams and players, only when sourced
  patches?: Patch[];     // newest first, from the official patch notes
  teams?: TeamUpdate[];  // roster changes and team news, newest first
  teamsTitle?: string;   // when 'Team updates' doesn't fit (TFT is mostly solo players)
  terms: { term: string; text: string; wiki?: string }[]; // "New to it? Start here"
  sources: Source[];     // everything else the page used
  legal: 'riot' | 'valve';
};

export const fmtDate = (d: string, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }) =>
  new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { ...opts, timeZone: 'UTC' });

export const fmtRange = (a: string, b: string) => {
  if (a === b) return fmtDate(a);
  const sameYear = a.slice(0, 4) === b.slice(0, 4);
  return `${fmtDate(a, sameYear ? { day: 'numeric', month: 'short' } : undefined)} – ${fmtDate(b)}`;
};

// done / live / next, compared with the day the site was built.
export const eventStatus = (e: HubEvent, today = new Date().toISOString().slice(0, 10)) =>
  e.to < today ? 'done' : e.from <= today ? 'live' : 'next';

// Riot's "Legal Jibber Jabber" notice (riotgames.com/en/legal), and Valve's trademark line.
export const LEGAL = {
  riot: 'Build Play Collect was created under Riot Games\' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.',
  valve: 'Dota 2 and Dota are trademarks of Valve Corporation. Build Play Collect is a fan site and isn\'t affiliated with or endorsed by Valve.',
};
export const RIOT_LEGAL_SOURCE: Source = { label: 'Riot Games: Legal Jibber Jabber', url: 'https://www.riotgames.com/en/legal' };
