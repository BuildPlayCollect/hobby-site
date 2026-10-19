// tft.ts: everything on the Teamfight Tactics hub (/esports/tft).
// Edit by hand; every fact needs a source. No press images yet: Echo can add Riot press-kit images later.
import type { GameHubData, Source } from '../lib/esports-hub';

const S = {
  site: { label: 'Teamfight Tactics: official site', url: 'https://teamfighttactics.leagueoflegends.com/en-us/' },
  wiki: { label: 'Wikipedia: Teamfight Tactics', url: 'https://en.wikipedia.org/wiki/Teamfight_Tactics' },
  patch181: { label: 'Teamfight Tactics: patch 18.1 notes', url: 'https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/teamfight-tactics-patch-18-1' },
  news: { label: 'Teamfight Tactics: esports news', url: 'https://teamfighttactics.leagueoflegends.com/en-us/news/esports/' },
  circuit: { label: 'Teamfight Tactics: TFT Pro Circuit, Enchanted Wilds, everything you need to know', url: 'https://teamfighttactics.leagueoflegends.com/en-us/news/esports/tft-pro-circuit-enchanted-wilds-everything-you-need-to-know' },
  compete: { label: 'Teamfight Tactics: Compete in Enchanted Wilds', url: 'https://teamfighttactics.leagueoflegends.com/en-us/news/esports/compete-in-enchanted-wilds' },
  lnl: { label: 'Teamfight Tactics: Darth Nub wins the Lore & Legends Tactician\'s Crown', url: 'https://teamfighttactics.leagueoflegends.com/en-us/news/esports/darth-nub-wins-the-lore--legends-tacticians-crown/' },
  sgPrimer: { label: 'Teamfight Tactics: Space Gods Tactician\'s Crown primer', url: 'https://teamfighttactics.leagueoflegends.com/en-us/news/esports/space-gods-tacticians-crown-primer' },
  sgWinner: { label: 'Teamfight Tactics: 5 questions with AUR Huanmie, the Space Gods champion', url: 'https://teamfighttactics.leagueoflegends.com/en-us/news/esports/5-questions-with-aur-huanmie-the-space-gods-champion' },
} satisfies Record<string, Source>;

export const TFT: GameHubData = {
  name: 'Teamfight Tactics',
  tagline: 'Eight players, one board each, and only one survives. The strategy game where your team fights for you.',
  description: 'Teamfight Tactics (TFT) for beginners: what the game is, how the TFT Pro Circuit and Tactician\'s Crown work, the 2026 champions and what\'s happening in the Enchanted Wilds set.',
  badge: 'hexes',
  about: [
    'Teamfight Tactics, or TFT, is a free strategy auto-battler from Riot Games. You draft champions from a shop, place them on a board made of hexagons, and then they fight by themselves. Your job is the planning, not the button mashing.',
    'Every game has eight players. You fight a different opponent each round, and losing costs you health. Run out and you\'re out. The last player still standing wins, so even finishing second feels like a tiny tragedy.',
    'TFT changes a lot. Every few months a new "set" arrives with a fresh group of champions. The set right now is Set 18, Enchanted Wilds, which launched with patch 18.1 on 25 August 2026. It was the first set on the Unreal engine and brought a new mechanic called Wisps.',
  ],
  facts: [
    { label: 'Made by', value: 'Riot Games' },
    { label: 'Price', value: 'Free to play' },
    { label: 'Platforms', value: 'PC, Mac and mobile, with cross-play' },
    { label: 'Players per game', value: '8, last one standing wins' },
  ],
  scene: {
    intro: [
      'Competitive TFT is split into three regions: AMER (the Americas), EMEA (Europe, the Middle East and Africa) and APAC (Asia-Pacific). Players earn their way up through the ranked ladder and online events.',
      'Each set has its own season, and every season ends with a world championship called the Tactician\'s Crown.',
    ],
    parts: [
      { name: 'Ladder snapshots and Tactician\'s Trials', text: 'The top players on the ranked ladder earn points and spots in qualifying events.' },
      { name: 'TFT Pro Circuit', text: 'Three cups for the top 32 players in each region, each with a $30K prize pool.' },
      { name: 'Regional Finals', text: 'Six days over two weekends, with 64 top players per region.' },
      { name: 'Tactician\'s Crown', text: 'The world championship at the end of each set. In 2026 it had 40 players and a $150K grand prize.' },
    ],
  },
  events: [
    { name: 'Lore & Legends Tactician\'s Crown', from: '2026-03-27', to: '2026-03-29', place: 'World championship', text: 'The best 40 players in the world.', result: 'Darth Nub (Americas) won the crown and $150K.', source: S.lnl },
    { name: 'Space Gods Tactician\'s Crown', from: '2026-07-10', to: '2026-07-12', place: 'World championship', text: '40 players on day 1, 32 on day 2, 8 in the final.', result: 'AUR Huanmie (China) won.', source: S.sgWinner },
    { name: 'Pro Circuit: Riftbeast Cup', from: '2026-09-04', to: '2026-09-06', place: 'All three regions', result: 'Played.', source: S.circuit },
    { name: 'Pro Circuit: Elderwood Cup', from: '2026-09-18', to: '2026-09-20', place: 'All three regions', result: 'Played.', source: S.circuit },
    { name: 'Pro Circuit: Blossom Cup', from: '2026-10-02', to: '2026-10-04', place: 'All three regions', text: 'The last cup of the set. Pro Points standings were locked after it.', source: S.circuit },
    { name: 'Tactician\'s Trials 2', from: '2026-10-10', to: '2026-10-18', place: 'Online, by region', text: 'Played 10–11 and 16–18 October.', source: S.compete },
  ],
  now: [
    { title: 'Enchanted Wilds is the current set', text: 'Set 18 is live, and patch 18.4 landed in early October. On 13 October Riot posted a dev update called "Follow the Fix" about problems from the move to the new engine and what they\'re fixing first.', source: S.site },
    { title: 'Pro Circuit cups are done', text: 'All three Enchanted Wilds cups have been played. Each cup winner qualifies straight for the Tactician\'s Crown, and so does the top Pro Points earner in each region.', source: S.circuit },
    { title: 'Next up: Regional Finals and the Crown', text: 'When we checked on 19 October 2026, Riot hadn\'t announced the date or place of the Enchanted Wilds Tactician\'s Crown yet. We\'ll add it here once it\'s official.', source: S.compete },
  ],
  terms: [
    { term: 'Auto-battler', text: 'A game where you build the team and the fights play out by themselves.' },
    { term: 'Set', text: 'A season of TFT with its own group of champions. A new one arrives every few months.' },
    { term: 'Augment', text: 'A special bonus you pick on certain rounds. It powers up your team in different ways.', wiki: 'augment' },
    { term: 'Carousel', text: 'A shared round where everyone picks a free champion holding a random item.' },
    { term: 'Interest', text: 'Save your gold and you earn a bit extra each round, like a piggy bank that pays you back.' },
    { term: 'Checkmate', text: 'The pro final format. Reach 20 points and you\'re "in check". Then win a game to take the title.' },
  ],
  sources: [S.wiki, S.patch181, S.news, S.sgPrimer],
  legal: 'riot',
};
