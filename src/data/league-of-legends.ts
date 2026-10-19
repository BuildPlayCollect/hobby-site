// league-of-legends.ts: everything on the League of Legends hub (/esports/league-of-legends).
// Edit by hand; every fact needs a source. No press images yet: Echo can add Riot press-kit images later.
import type { GameHubData, Source } from '../lib/esports-hub';

const S = {
  howTo: { label: 'League of Legends: how to play', url: 'https://www.leagueoflegends.com/en-us/how-to-play/' },
  handbook: { label: 'LoL Esports: 2026 League Handbook', url: 'https://lolesports.com/en-US/season/115547545029543948/handbook' },
  dates: { label: 'LoL Esports: MSI and Worlds updates', url: 'https://lolesports.com/en-US/news/msi-and-worlds-updates' },
  hub: { label: 'esports.gg: LoL Worlds 2026 hub', url: 'https://esports.gg/guides/league-of-legends/worlds-2026-hub/' },
  playInDay1: { label: 'GosuGamers: Worlds 2026 Play-Ins day 1', url: 'https://www.gosugamers.net/lol/news/79360-worlds-2026-play-ins-day-1-karmine-corp-survive-cloud9-kia-furia-take-down-mvk-esports' },
  upper: { label: 'Inven Global: Karmine Corp sweeps MVK, first to secure spot in Play-In final', url: 'https://www.invenglobal.com/articles/27309/karmine-corp-sweeps-mvk-first-to-secure-spot-in-play-in-final' },
  final: { label: 'Dot Esports: Karmine Corp defeat MVK to qualify for Worlds 2026 Swiss Stage', url: 'https://dotesports.com/league-of-legends/news/karmine-corp-beat-mvk-worlds-2026-play-ins' },
  final2: { label: 'GosuGamers: Karmine Corp sweep MVK to secure final Swiss Stage spot', url: 'https://www.gosugamers.net/lol/news/79368-karmine-corp-sweep-mvk-esports-to-secure-final-lol-worlds-2026-swiss-stage-spot' },
} satisfies Record<string, Source>;

export const LEAGUE: GameHubData = {
  name: 'League of Legends',
  tagline: 'Two teams, three lanes, one Nexus to smash. Worlds 2026 is on right now.',
  description: 'League of Legends for beginners: what the game is, how the LoL Esports season works, and everything about Worlds 2026, from the Play-Ins in Los Angeles to the final in Brooklyn.',
  badge: 'lanes',
  about: [
    'League of Legends (LoL for short) is a free team game from Riot Games. Two teams of five champions face off, and the goal is simple to say and hard to do: destroy the other team\'s Nexus, which sits at the heart of their base.',
    'The map has three lanes: Top, Mid and Bot. Each lane is guarded by turrets and an inhibitor, and little helpers called minions march down every lane from your Nexus. Between the lanes is the jungle, full of neutral monsters, including the big boss Baron Nashor.',
    'Each player usually takes one of five positions: Top, Jungle, Mid, Bot and Support. With more than 170 champions to choose from, picking the right five is a whole game by itself.',
  ],
  facts: [
    { label: 'Made by', value: 'Riot Games' },
    { label: 'Price', value: 'Free to play' },
    { label: 'Teams', value: '5 vs 5' },
    { label: 'To win', value: 'Destroy the enemy Nexus' },
  ],
  scene: {
    intro: [
      'Pro LoL is run by Riot\'s LoL Esports. There are six regional leagues: LCK (Korea), LPL (China), LEC (Europe, the Middle East and Africa), LCS (North America), CBLOL (Brazil) and LCP (Asia-Pacific).',
      'The 2026 season swaps back and forth between league play and big international events.',
    ],
    parts: [
      { name: 'Splits', text: 'Three rounds of league play: January to March, March to June, and July to October.' },
      { name: 'First Stand', text: 'The first international event, in March. The top team from each region\'s Split 1 goes.' },
      { name: 'MSI', text: 'The Mid-Season Invitational, in June and July. The winner gets a ticket straight to Worlds.' },
      { name: 'Worlds', text: 'The World Championship in October and November. The biggest event of the year.' },
    ],
  },
  events: [
    { name: 'MSI 2026', from: '2026-06-28', to: '2026-07-12', place: 'Daejeon Convention Center II, Daejeon, South Korea', text: 'Play-Ins, then the bracket stage, with the grand final on 12 July.', source: S.dates },
    { name: 'Worlds Play-In', from: '2026-10-15', to: '2026-10-18', place: 'Riot Games Arena, Los Angeles, USA', text: 'Four teams, best-of-five, double elimination. Only one gets through.', result: 'Karmine Corp beat MVK Esports 3–0 in the Play-In final.', source: S.dates },
    { name: 'Worlds Swiss Stage', from: '2026-10-23', to: '2026-10-31', place: 'Credit Union of Texas Event Center, Allen, Texas, USA', text: '16 teams. Win three series to go through, lose three and you\'re out. Played 23–26 and 28–31 October.', source: S.dates },
    { name: 'Worlds Quarterfinals and Semifinals', from: '2026-11-03', to: '2026-11-08', place: 'Credit Union of Texas Event Center, Allen, Texas, USA', text: 'The top 8 in a single-elimination, best-of-five bracket.', source: S.dates },
    { name: 'Worlds Grand Final', from: '2026-11-14', to: '2026-11-14', place: 'Barclays Center, Brooklyn, New York, USA', text: 'The last two teams standing play for the trophy.', source: S.dates },
  ],
  now: [
    { title: 'Karmine Corp made it out of the Play-Ins', text: 'The European team survived a 3–2 thriller against Cloud9 KIA, swept MVK Esports 3–0 in the upper bracket, then beat MVK 3–0 again in the Play-In final on 18 October to grab the last Swiss Stage spot. MVK must be sick of seeing them.', source: S.final },
    { title: 'The Swiss Stage starts 23 October', text: 'The tournament moves to Allen, Texas. Karmine Corp\'s first opponent is Anyone\'s Legend from China.', source: S.final2 },
    { title: 'Who\'s there', text: 'Korea sent Gen.G, Hanwha Life Esports, T1 and Dplus KIA. China sent Anyone\'s Legend, Bilibili Gaming, Top Esports and Invictus Gaming. Europe has G2 Esports, Movistar KOI and Karmine Corp, North America has Team Liquid and LYON, Asia-Pacific has Team Secret Whales and CTBC Flying Oyster, and Brazil has LOS.', source: S.hub },
  ],
  terms: [
    { term: 'Champion', text: 'The character you control in a match.' },
    { term: 'Nexus', text: 'The heart of each base. Destroy the enemy\'s and you win.' },
    { term: 'Minions', text: 'Small computer-controlled soldiers that march down each lane from your Nexus.' },
    { term: 'Baron Nashor', text: 'The big jungle boss. Beat it and your team gets a power boost and stronger minions for a while.' },
    { term: 'Play-In and Swiss Stage', text: 'The Play-In is the qualifying round. In the Swiss Stage, 16 teams play up to five rounds: three wins and you\'re through, three losses and you\'re out.', wiki: 'swiss-stage' },
  ],
  sources: [S.howTo, S.handbook, S.hub, S.playInDay1, S.upper, S.final2],
  legal: 'riot',
};
