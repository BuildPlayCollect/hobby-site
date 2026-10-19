// dota-2.ts: everything on the Dota 2 hub (/esports/dota-2).
// Edit by hand; every fact needs a source. No press images yet: Echo can add official images later.
import type { GameHubData, Source } from '../lib/esports-hub';

const S = {
  home: { label: 'Dota 2: official site', url: 'https://www.dota2.com/home' },
  steam: { label: 'Steam: Dota 2', url: 'https://store.steampowered.com/app/570/Dota_2/' },
  wiki: { label: 'Wikipedia: Dota 2', url: 'https://en.wikipedia.org/wiki/Dota_2' },
  ti: { label: 'Dot Esports: Team Spirit win their third Aegis at The International 2026', url: 'https://dotesports.com/dota-2/news/team-spirit-champions-ti-2026' },
  tiSh: { label: 'Shanghai government: Team Spirit crowned three-time champions at TI 2026', url: 'https://english.shanghai.gov.cn/en-Latest-WhatsNew/20260826/1a68526789964b6a8017067622f81aae.html' },
  ogOut: { label: 'GosuGamers: OG bomb out of The International 2026 with loss to GamerLegion', url: 'https://www.gosugamers.net/dota2/news/78975-og-bomb-out-of-the-international-2026-with-loss-to-gamerlegion' },
  ogPh: { label: 'Philstar: All-Filipino OG books The International return', url: 'https://www.philstar.com/metro/2026/06/24/2537489/all-filipino-og-books-international-return' },
  ogRoster: { label: 'GosuGamers: OG return to an all-Filipino lineup with the signing of Raven', url: 'https://www.gosugamers.net/dota2/news/78549-og-return-to-all-filipino-lineup-with-signing-of-raven' },
  ogSplit: { label: 'GosuGamers: OG part ways with Yopaj, Raven and TIMS', url: 'https://www.gosugamers.net/dota2/news/79138-og-esports-part-ways-with-yopaj-raven-and-tims-ahead-of-the-2026-2027-competitive-season' },
  esl: { label: 'ESL Pro Tour: ecosystem update', url: 'https://pro.eslgaming.com/tour/?p=85142' },
  eslDota: { label: 'RDY.gg: ESL reveals 2026/27 Dota 2 Pro Tour schedule', url: 'https://rdy.gg/en/dota2/news/esl-pro-tour-dota2-2026-2027' },
} satisfies Record<string, Source>;

export const DOTA2: GameHubData = {
  name: 'Dota 2',
  tagline: 'Two teams, two Ancients, over a hundred heroes and one very grumpy boss called Roshan.',
  description: 'Dota 2 for beginners: what the game is, how the pro scene and The International work, the 2026 results, the Filipino OG lineup and what\'s coming next.',
  badge: 'aegis',
  about: [
    'Dota 2 is a free team game made by Valve. It came out on Steam on 9 July 2013. Two teams of five players battle on one big map: the Radiant on one side and the Dire on the other.',
    'Each team has a huge building called the Ancient in the middle of its base. Destroy the other team\'s Ancient and you win. Easy, right? Well, the other team is trying to do exactly the same thing to you.',
    'You play as one hero out of more than a hundred, and the whole roster is free. Somewhere on the map lives Roshan, the strongest neutral monster in the game. Either team can take him on, and he drops special items, including one that brings you back to life once.',
  ],
  facts: [
    { label: 'Made by', value: 'Valve' },
    { label: 'Price', value: 'Free to play, all heroes included' },
    { label: 'Released', value: '9 July 2013 (Windows)' },
    { label: 'To win', value: 'Destroy the enemy Ancient' },
  ],
  scene: {
    intro: [
      'Dota 2 doesn\'t have one big league like League of Legends or VALORANT. Valve ran a points system called the Dota Pro Circuit, but it stopped after the 2023 season. Now different organisers run their own tournaments through the year.',
      'Everything builds up to The International (TI), the world championship that Valve hosts every year. Some teams get invited, and the rest fight through regional qualifiers.',
    ],
    parts: [
      { name: 'Regional qualifiers', text: 'Each region sends its best team (or teams) to The International.' },
      { name: 'Big tournaments', text: 'Events such as ESL\'s DreamLeague run between TIs, so there\'s always something on.' },
      { name: 'The International', text: 'Valve\'s own world championship. Part of the prize pool comes from fans buying the in-game Compendium.' },
      { name: 'Aegis of Champions', text: 'The TI trophy, made by Wētā Workshop. The one every team wants to lift.' },
    ],
  },
  events: [
    { name: 'The International 2026: Road to TI', from: '2026-08-13', to: '2026-08-16', place: 'Shanghai, China', text: '16 teams in a Swiss-style group stage, cut down to 8.', source: S.ogOut },
    { name: 'The International 2026: main event', from: '2026-08-20', to: '2026-08-23', place: 'Oriental Sports Center, Shanghai, China', text: 'The final eight teams.', result: 'Team Spirit beat Team Vision 3–2 in the grand final.', source: S.tiSh },
    { name: 'DreamLeague Season 30', from: '2026-12-02', to: '2026-12-13', place: 'Venue not announced yet', text: 'The first big ESL Pro Tour event of the 2026/27 season.', source: S.eslDota },
    { name: 'DreamLeague Season 32', from: '2027-04-26', to: '2027-05-09', place: 'Venue not announced yet', source: S.eslDota },
  ],
  now: [
    { title: 'Team Spirit make history', text: 'Team Spirit won The International 2026 in Shanghai, beating Team Vision 3–2 on 23 August. It\'s their third TI title after 2021 and 2023, and they are the first organisation to win three.', source: S.ti },
    { title: 'Roster shuffle season', text: 'After TI, lots of teams change players before the new season. OG, for example, parted ways with three of its players (more below).', source: S.ogSplit },
    { title: 'The next big event', text: 'DreamLeague Season 30 runs 2–13 December 2026, the first top-tier event on ESL\'s 2026/27 Dota calendar.', source: S.esl },
  ],
  ph: [
    { title: 'An all-Filipino OG at TI 2026', text: 'OG went to The International with five Filipino players: Natsumi-, Yopaj, Raven, TIMS and Skem. They won the Southeast Asia qualifier, beating Grind Back 3–1 in the final.', source: S.ogPh },
    { title: 'How it went', text: 'OG were knocked out in the group stage on 15 August after a 0–2 loss to GamerLegion, finishing 14th–15th.', source: S.ogOut },
    { title: 'What\'s next for OG', text: 'After TI, OG parted ways with Yopaj, Raven and TIMS. Captain Skem and carry Natsumi- stay, and on 23 September OG brought back two-time TI champion Topson, plus SSS and OneJey.', source: { label: 'esports.gg: OG reveals Topson\'s return and new roster', url: 'https://esports.gg/news/dota-2/og-dota-2-topson-returns-with-new-lineup/' } },
  ],
  patches: [
    { name: 'Patch 7.41f', date: '2026-09-15', source: { label: 'esports.gg: Dota 2 patch 7.41f notes', url: 'https://esports.gg/news/dota-2/dota-2-patch-7-41f-patch-notes/' }, highlights: [
      'Big late-game items like Octarine Core, Daedalus and Heart of Tarrasque cost more, so heroes power up a bit later.',
      'Satanic and Mask of Madness heal you less when you hit enemies.',
      'Bounty Hunter\'s Track gives less bonus gold, and Shadow Fiend gets less damage from his souls.',
    ] },
    { name: 'Patch 7.41e', date: '2026-07-30', source: { label: 'Steam: Dota 2 patch 7.41e', url: 'https://store.steampowered.com/news/app/570/view/678505520073540065' }, highlights: [
      'Get rooted while using a Twin Gate and your trip through the gate is cancelled.',
      'Two Divine Rapiers no longer stack their extra spell power.',
      'Butterfly gives a little less agility but more raw damage, and Satanic\'s lifesteal button takes longer to come back.',
    ] },
    { name: 'Patch 7.41d', date: '2026-06-04', source: { label: 'Dota 2 Pro Tips: patch 7.41d', url: 'https://www.dota2protips.com/patches/7-41d' }, highlights: [
      'The Dire fountain heals in a slightly bigger area, and teleporting home lands you closer to your Ancient.',
      'Morphling starts with much more agility and much less strength.',
      'Invoker\'s Ghost Walk now takes 40 seconds to come back instead of 32.',
    ] },
  ],
  teams: [
    { date: '2026-10-15', team: 'Team Liquid', text: 'Liquid signed TI 2025 champion Malr1ne as their new mid. The new lineup plays its first event at PARI Universe on 22 October.', source: { label: 'Dot Esports: Malr1ne joins Team Liquid as new midlaner', url: 'https://dotesports.com/dota-2/news/malr1ne-team-liquid-midlaner' } },
    { date: '2026-10-12', team: 'Team Tidebound', text: 'The Chinese team is back after almost a year away, with coach xiao8 and veterans NothingToSay, Shiro, plAnet, y` and Yang.', source: { label: 'GosuGamers: Team Tidebound returns with new veteran roster under xiao8', url: 'https://www.gosugamers.net/dota2/news/79333-team-tidebound-returns-to-dota-2-with-new-veteran-roster-under-xiao8' } },
    { date: '2026-10-12', team: 'PlayTime', text: 'The Filipino organisation, now playing in South America, finished its roster with support KJ, coach Astini and young carry bottega on loan. Filipino player Abed plays mid.', source: { label: 'GosuGamers: PlayTime complete Dota 2 roster with KJ and Astini', url: 'https://www.gosugamers.net/dota2/news/79346-playtime-complete-dota-2-roster-with-kj-and-astini-for-new-competitive-season' } },
    { date: '2026-09-28', team: 'Team Liquid', text: 'Mid player Nisha left after four years, including the TI 2024 win, to take a break from pro play.', source: { label: 'GosuGamers: Team Liquid part ways with Nisha after four years', url: 'https://www.gosugamers.net/dota2/news/79265-team-liquid-part-ways-with-nisha-after-four-years' } },
    { date: '2026-09-23', team: 'OG', text: 'Two-time TI champion Topson is back at OG. Filipino players Natsumi- and Skem stay, and SSS and OneJey join.', source: { label: 'esports.gg: OG reveals Topson\'s return and new roster', url: 'https://esports.gg/news/dota-2/og-dota-2-topson-returns-with-new-lineup/' } },
    { date: '2026-09-09', team: 'OG', text: 'After finishing 14th–15th at TI 2026, OG let go of Filipino players Yopaj and Raven, plus TIMS, ending the all-Filipino lineup.', source: { label: 'GosuGamers: OG part ways with Yopaj, Raven and TIMS', url: 'https://www.gosugamers.net/dota2/news/79138-og-esports-part-ways-with-yopaj-raven-and-tims-ahead-of-the-2026-2027-competitive-season' } },
  ],
  terms: [
    { term: 'Hero', text: 'The character you control. There are more than a hundred to choose from.' },
    { term: 'Ancient', text: 'The giant building in each base. Destroy the enemy\'s Ancient to win.' },
    { term: 'Radiant and Dire', text: 'The names of the two sides of the map.' },
    { term: 'Roshan', text: 'The strongest neutral monster. He drops special items, comes back about ten minutes after he falls, and gets tougher as the game goes on.', wiki: 'roshan' },
    { term: 'TI', text: 'Short for The International, Dota\'s yearly world championship.' },
  ],
  sources: [S.home, S.steam, S.wiki, S.ogRoster],
  legal: 'valve',
};
