// valorant.ts: everything on the VALORANT hub (/esports/valorant). Edit by hand; every fact needs a source.
// Press images live in public/images/esports/valorant (official Riot press kit via Gamespress, editorial use only).
import type { GameHubData, Source } from '../lib/esports-hub';

const S = {
  site: { label: 'VALORANT: official site', url: 'https://playvalorant.com/en-us/' },
  basics: { label: 'Mobalytics: VALORANT absolute beginner\'s guide', url: 'https://mobalytics.gg/blog/valorant/valorant-absolute-beginners-guide/' },
  vct26: { label: 'Wikipedia: 2026 VALORANT Champions Tour', url: 'https://en.wikipedia.org/wiki/2026_Valorant_Champions_Tour' },
  santiago: { label: 'THESPIKE.GG: Nongshim RedForce win Masters Santiago with a 3-0 sweep of PRX', url: 'https://www.thespike.gg/valorant/news/nongshim-redforce-win-vct-masters-santiago-with-3-0-sweep-of-prx/7773' },
  london: { label: 'Gfinity: Leviatán become VALORANT Masters London 2026 champions', url: 'https://www.gfinityesports.com/article/leviatn-become-valorant-masters-london-2026-champions' },
  champsHub: { label: 'esports.gg: VALORANT Champions 2026 Shanghai hub', url: 'https://esports.gg/guides/valorant/champions-shanghai-2026-hub/' },
  champsFinal: { label: 'THESPIKE.GG: LOUD crowned VALORANT Champions 2026 winners', url: 'https://www.thespike.gg/valorant/news/loud-wins-valorant-champions-2026/9043' },
  vlr: { label: 'VLR.gg: match results', url: 'https://www.vlr.gg/matches/results' },
  loud: { label: 'Wikipedia: LOUD (esports)', url: 'https://en.wikipedia.org/wiki/Loud_(esports)' },
  champsOfficial: { label: 'VALORANT Esports: Champions Shanghai', url: 'https://valorantesports.com/en-US/tournament/115576361459045501/overview' },
  gc: { label: 'VALORANT Esports: Game Changers Championship 2026, everything you need to know', url: 'https://valorantesports.com/en-us/news/valorant-game-changers-championship-2026-everything-you-need-to-know' },
  tour27: { label: 'VALORANT Esports: VCT 2027, The Global Tour', url: 'https://valorantesports.com/en-us/news/vct-2027-the-global-tour/' },
  cities27: { label: 'esports.gg: VCT 2027 host city reveal', url: 'https://esports.gg/news/valorant/vct-2027-host-city-reveal/' },
  manila: { label: 'GosuGamers: VALORANT Pacific Cup 2027 heads to Manila', url: 'https://www.gosugamers.net/valorant/news/79359-valorant-pacific-cup-2027-heads-to-manila-as-riot-games-reveals-new-global-tour-locations' },
  inven27: { label: 'Inven Global: 2027 VCT overhaul, over 50 tournaments across 15 cities', url: 'https://www.invenglobal.com/articles/27280/2027-valorant-masters-to-be-held-in-seoul-on-february-20' },
  secret: { label: 'Philstar: Team Secret stuns KRX for first VCT Pacific Stage 2 win', url: 'https://www.philstar.com/other-sections/daily-bread/2026/07/20/2543423/team-secret-stuns-krx-first-vct-pacific-stage-2-win' },
  hushDexerto: { label: 'Dexerto: VALORANT reveals newest agent Hush, a telekinetic Duelist from China', url: 'https://www.dexerto.com/valorant/valorant-reveals-newest-agent-hush-a-telekinetic-duelist-from-china-3419784/' },
  hushBC: { label: 'Bleeding Cool: VALORANT shows off latest agent Hush, arriving October 27', url: 'https://bleedingcool.com/games/valorant-shows-off-latest-agent-hush-arriving-october-27/' },
  trailer: { label: 'VALORANT on YouTube: RISE AND FALL // Hush Agent Trailer', url: 'https://www.youtube.com/watch?v=AfcCyTsh4ag' },
  news: { label: 'VALORANT: news (Patch Notes 13.08, Act 6)', url: 'https://playvalorant.com/en-us/news/' },
  press: { label: 'Riot Games press kit (via Gamespress): VALORANT', url: 'https://www.gamespress.com/VALORANT' },
} satisfies Record<string, Source>;

export const VALORANT: GameHubData = {
  name: 'VALORANT',
  tagline: 'Five agents, one bomb, thirteen rounds. Here\'s the pro scene, the new stuff and the words you\'ll hear.',
  description: 'VALORANT for beginners: what the game is, how the VCT pro scene works, the 2026 season results, the new agent Hush and what\'s coming in 2027.',
  badge: 'shooter',
  about: [
    'VALORANT is a free 5v5 tactical shooter made by Riot Games. Before the match you pick an Agent: a character with their own special abilities. After that it\'s sharp aim plus smart teamwork. No two Agents play alike, so your Agent choice really matters.',
    'One team attacks and tries to plant a bomb called the Spike. The other team defends and tries to stop them, or defuse it before it goes off. Knock out the whole other team and you win the round too. The first team to win 13 rounds wins the match, and the teams swap sides after 12 rounds.',
    'At the start of every round you spend credits on guns, shields and abilities. Winning rounds and getting knockouts earns more. Low on cash? Then it\'s a "save round", which is a fancy way of saying "buy almost nothing and hope for the best".',
  ],
  facts: [
    { label: 'Made by', value: 'Riot Games' },
    { label: 'Kind of game', value: '5v5 character-based tactical shooter' },
    { label: 'Price', value: 'Free to play' },
    { label: 'To win a match', value: 'First team to 13 rounds' },
  ],
  scene: {
    intro: [
      'The pro scene is called the VALORANT Champions Tour, or VCT. In 2026 it had four international leagues with 12 partner teams each: Americas, EMEA (Europe, the Middle East and Africa), Pacific and China.',
      'The year is split into three chunks. Each chunk ends with a big international event where the best teams from every league meet.',
    ],
    parts: [
      { name: 'Kickoff', text: 'The season opener (January to March). The top teams go to the first Masters.' },
      { name: 'Stage 1 and Stage 2', text: 'League matches in groups, then playoffs. Stage 1 leads to the second Masters, Stage 2 leads to Champions.' },
      { name: 'Masters', text: 'Two international tournaments in the middle of the season.' },
      { name: 'Champions', text: 'The world championship at the end of the year. Win it and you\'re the best team on the planet.' },
    ],
  },
  events: [
    { name: 'Masters Santiago', from: '2026-03-15', to: '2026-03-15', place: 'Santiago, Chile', text: 'Grand final.', result: 'Nongshim RedForce beat Paper Rex 3–0.', source: S.santiago },
    { name: 'Masters London', from: '2026-06-21', to: '2026-06-21', place: 'London, UK', text: 'Grand final.', result: 'Leviatán beat Paper Rex 3–2. Two Masters finals in a row for Paper Rex, ouch.', source: S.london },
    { name: 'Champions Shanghai', from: '2026-09-24', to: '2026-10-18', place: 'Shanghai, China', text: '16 teams. Groups at Jing\'an Sports Center, finals weekend at Mercedes-Benz Arena.', result: 'LOUD beat Team Vitality 3–1 in the grand final.', source: S.champsHub },
    { name: 'Game Changers Championship', from: '2026-10-22', to: '2026-11-01', place: 'Riot Games Arena, São Paulo, Brazil', text: '10 teams in a double-elimination bracket. Riot calls it the final standalone Game Changers Championship.', source: S.gc },
  ],
  now: [
    { title: 'LOUD are world champions (again)', text: 'LOUD won VALORANT Champions 2026 in Shanghai, beating Team Vitality 3–1 in the final. They also won Champions in 2022, which makes them the first team ever to win two Champions trophies.', source: S.loud },
    { title: 'A new Agent is on the way', text: 'Riot revealed Hush, a telekinetic Duelist from Guangdong, China, just before the Champions grand final. She arrives on 27 October 2026. More on her below.', source: S.hushDexerto },
    { title: 'Act 6 has started', text: 'Patch 13.08 (13 October 2026) kicked off Act 6, the newest chunk of the game\'s season.', source: S.news },
    { title: 'VCT 2027 is a world tour', text: 'Next year the leagues become a tournament-first season with "more than 50 tournaments". The big ones: Masters Seoul (20 Feb – 3 Mar 2027), Masters València (5–20 Jun 2027) and Champions in Austin, Texas (16 Sep – 10 Oct 2027). Kickoff qualifiers start in November 2026.', source: S.cities27 },
  ],
  ph: [
    { title: 'Team Secret in VCT Pacific', text: 'Philstar calls Team Secret a Philippine-based organization. Its July 2026 lineup included Filipino players Kelly "kellyS" Sedillo and Jhian "Zeus" Vega, and it beat KRX 2–0 for its first Stage 2 win.', source: S.secret },
    { title: 'A VCT Cup is coming to Manila', text: 'Manila will host VCT Cup 1 for the Pacific region, planned for 29 April – 23 May 2027. Cups are LAN events with live finals in front of fans. The venue hasn\'t been announced yet.', source: S.manila },
  ],
  terms: [
    { term: 'Agent', text: 'The character you play. Each one has their own set of abilities.', wiki: 'agent' },
    { term: 'Spike', text: 'The bomb. Attackers plant it, defenders defuse it. Once planted it ticks for 45 seconds.', wiki: 'spike' },
    { term: 'Duelist, Initiator, Controller, Sentinel', text: 'The four Agent roles. Duelists win fights, Initiators open them up, Controllers shape how the fight flows, and Sentinels slow things down and guard an area.' },
    { term: 'Credits and save rounds', text: 'Credits buy guns, shields and abilities. A save round means spending little now to buy big next round.' },
    { term: 'Map', text: 'In pro play, a "map" is one game. A best-of-three is first to win two maps.' },
  ],
  sources: [S.site, S.basics, S.vct26, S.vlr, S.champsFinal, S.champsOfficial, S.tour27, S.inven27, S.hushBC, S.trailer, S.press],
  legal: 'riot',
};

// "New in VALORANT": only what the official press kit fact sheets and launch coverage say.
export const NEW_IN_VALORANT = {
  hush: {
    name: 'Hush',
    role: 'Duelist',
    from: 'Guangdong, China',
    arrives: '2026-10-27',
    intro: 'Hush is a telekinetic Duelist: she moves things (and people) with her mind. She is the first new Agent since Agent Mastery launched.',
    abilities: [
      { key: 'Passive', name: 'Telekinesis', text: 'Picks up weapons and the Spike, and uses switches, from further away.' },
      { key: 'C', name: 'Flow', text: 'Drops an anchor, then flings her towards it after a short delay. Used in mid-air, she hovers for a moment first.' },
      { key: 'Q', name: 'Flashbulb', text: 'A flash she can throw and then steer with her crosshair. It goes off on a surface or after a delay.' },
      { key: 'E', name: 'Displacement', text: 'Her signature. It explodes and pulls players to its centre. Anyone pulled into a wall or another player is concussed. Comes back every two kills.' },
      { key: 'X', name: 'Suspension', text: 'Her ultimate. She steers it forward, then sets it off to lift everyone caught in the blast into the air.' },
    ],
    sources: [S.hushDexerto, S.hushBC],
  },
  // From the official fact sheets in the press kit. All three launched on 22 September 2026.
  sheets: [
    {
      name: 'Warden',
      kind: 'New rifle',
      date: '2026-09-22',
      text: 'A new automatic rifle in the 2900-credit tier, next to the Vandal and the Phantom. It\'s built for long range, with a 2x scope and what Riot calls best-in-class first-shot accuracy.',
      stats: ['18 bullets per magazine', '50 damage per body shot at any range (200 to the head, 42 to the legs)', 'Medium wall penetration'],
      image: { src: '/images/esports/valorant/warden.webp', alt: 'The Warden rifle, a black automatic rifle with a small scope, shown from the side.', w: 800, h: 265 },
      source: { label: 'Riot Games press kit (via Gamespress): Fact sheet, Warden', url: S.press.url },
    },
    {
      name: 'Gauntlet: Glitched',
      kind: 'New game mode',
      date: '2026-09-22',
      text: 'A 2v2 mode for 16 players (eight duos) that takes about 8 to 15 minutes. Each round you draft Agent abilities, upgrade them up to Level 3 and duel another duo. Lose a round, lose health. Hit zero and you\'re out.',
      stats: ['Queue solo or with a friend', 'Four arenas remixed from VALORANT maps', 'Example: an upgraded Skye wolf becomes a giant that can knock someone out in one bite'],
      image: { src: '/images/esports/valorant/gauntlet-glitched.webp', alt: 'Gauntlet: Glitched gameplay: a giant yellow creature towers over robot agents and turrets in a stitched-together arena.', w: 800, h: 450 },
      source: { label: 'Riot Games press kit (via Gamespress): Fact sheet, Gauntlet: Glitched', url: S.press.url },
    },
    {
      name: 'Agent Mastery',
      kind: 'New progression system',
      date: '2026-09-22',
      text: 'Play an Agent, earn Mastery Points and level them up. Act Levels reset every Act and unlock Portrait Upgrades. Lifetime Levels stay forever and unlock Agent-specific rewards. Agent Gear moved into it, and you keep everything you already unlocked.',
      stats: ['Agent IDs to show off stances, backgrounds and stats', 'Mastery Points come from time in matches, plus bonuses'],
      source: { label: 'Riot Games press kit (via Gamespress): Fact sheet, Agent Mastery', url: S.press.url },
    },
  ],
  trailer: { id: 'AfcCyTsh4ag', title: 'RISE AND FALL // Hush Agent Trailer - VALORANT' },
};
