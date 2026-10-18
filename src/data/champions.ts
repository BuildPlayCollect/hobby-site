// champions.ts: everything on the Pokémon Champions VGC pages that isn't fetched automatically.
// Edit by hand (or let the news routine edit it in a PR). Every fact needs a source link.
// Usage stats are NOT here: they're fetched from Smogon when the site builds (src/lib/champions-usage.ts).

export type Source = { label: string; url: string };

export const GAME = {
  summary:
    'Pokémon Champions is a battle-only Pokémon game. There is no adventure: you recruit Pokémon, build teams and battle other players in ranked, casual and tournament matches.',
  facts: [
    { label: 'Made by', value: 'The Pokémon Works (The Pokémon Company and ILCA)' },
    { label: 'Platforms', value: 'Nintendo Switch, Android and iOS, with cross-play' },
    { label: 'Released', value: 'Switch 8 April 2026; Android and iOS 17 June 2026' },
    { label: 'Pokémon HOME', value: 'Connects, so you can bring Pokémon from other Switch games' },
    { label: 'Official VGC game', value: 'Replaced Scarlet and Violet at Play! Pokémon events, including Worlds' },
  ],
  sources: [
    { label: 'Pokémon.com: Champions comes to Android and iOS on June 17', url: 'https://www.pokemon.com/us/pokemon-news/pokemon-champions-comes-to-android-and-ios-on-june-17' },
    { label: 'Gematsu: Pokémon Champions for Switch launches April 8', url: 'https://www.gematsu.com/2026/03/pokemon-champions-for-switch-launches-april-8' },
    { label: 'The Verge: Pokémon Champions announcement', url: 'https://www.theverge.com/news/620196/pokemon-champions-online-pokemon-battles-nintendo-switch-mobile' },
    { label: 'IGN: Champions will replace Scarlet and Violet at Worlds', url: 'https://www.ign.com/articles/pokemon-champions-will-replace-scarlet-and-violet-at-the-pokemon-world-championships-next-year' },
  ] as Source[],
};

// Regulation sets, newest first. `current: true` marks the one in use today.
export const REGULATIONS = [
  { name: 'Regulation M-C', from: '2026-09-09', to: '2026-12-02', current: true, notes: 'Adds 29 Pokémon and 6 new Mega Evolutions to M-B.' },
  { name: 'Regulation M-B', from: '2026-06-17', to: '2026-09-09', current: false, notes: 'Adds 22 Pokémon and 16 new Mega Evolutions to M-A. Used at the 2026 World Championships.' },
  { name: 'Regulation M-A', from: '2026-04-08', to: '2026-06-17', current: false, notes: 'The launch rules. Mega Evolution allowed for a set list of Pokémon.' },
];

// Rules shared by every VGC regulation set so far.
export const VGC_RULES = [
  'Doubles: bring 6 Pokémon, pick 4 for each battle.',
  'Every Pokémon is set to level 50.',
  'Item Clause: no two Pokémon can hold the same item.',
  'Species Clause: no two Pokémon with the same Pokédex number.',
  'Timers: 90 s team preview, 45 s per move, 7 min per player, 20 min per game.',
];
export const REGULATION_SOURCES: Source[] = [
  { label: 'Victory Road: Pokémon Champions regulation sets', url: 'https://victoryroad.pro/champions-regulations/' },
];

// Upcoming big events (Regionals, Internationals, Worlds). Remove rows once they're over.
export const EVENTS = [
  { name: 'Nice Regional', place: 'Nice, France', from: '2026-10-17', to: '2026-10-18', reg: 'M-C' },
  { name: 'Thailand Premier Ball League', place: 'Bangkok, Thailand', from: '2026-10-24', to: '2026-10-24', reg: 'M-C' },
  { name: 'Puebla Regional', place: 'Puebla, Mexico', from: '2026-10-24', to: '2026-10-25', reg: 'M-C' },
  { name: 'Gdańsk Regional', place: 'Gdańsk, Poland', from: '2026-10-31', to: '2026-11-01', reg: 'M-C' },
  { name: 'Taiwan Premier Ball League', place: 'Taipei, Taiwan', from: '2026-11-07', to: '2026-11-08', reg: 'M-C' },
  { name: 'Buenos Aires Special Championship', place: 'Buenos Aires, Argentina', from: '2026-11-14', to: '2026-11-15', reg: 'M-C' },
  { name: 'Latin America International (LAIC)', place: 'São Paulo, Brazil', from: '2026-11-20', to: '2026-11-22', reg: 'M-C' },
  { name: 'Malaysia Premier Ball League', place: 'Kuala Lumpur, Malaysia', from: '2026-11-21', to: '2026-11-21', reg: 'M-C' },
  { name: 'Stuttgart Regional', place: 'Stuttgart, Germany', from: '2026-11-28', to: '2026-11-29', reg: 'M-C' },
  { name: 'Las Vegas Regional', place: 'Las Vegas, USA', from: '2026-12-05', to: '2026-12-06', reg: 'TBA' },
  { name: 'Hong Kong Premier Ball League', place: 'Wan Chai, Hong Kong', from: '2026-12-05', to: '2026-12-05', reg: 'TBA' },
  { name: 'Singapore Premier Ball League', place: 'Singapore', from: '2026-12-12', to: '2026-12-12', reg: 'TBA' },
  { name: 'Philippines Premier Ball League', place: 'Pasay, Philippines', from: '2027-01-16', to: '2027-01-16', reg: 'TBA' },
  { name: 'Europe International (EUIC)', place: 'London, UK', from: '2027-02-19', to: '2027-02-21', reg: 'TBA' },
  { name: 'North America International (NAIC)', place: 'Chicago, USA', from: '2027-06-18', to: '2027-06-20', reg: 'TBA' },
  { name: 'World Championships', place: 'Singapore', from: '2027-08-13', to: '2027-08-15', reg: 'TBA' },
];
export const EVENT_SOURCES: Source[] = [
  { label: 'Victory Road: 2027 season calendar', url: 'https://victoryroad.pro/2027-season-calendar/' },
];

// Recent big results with the top 8 teams (Pokémon as Smogon/Showdown names, so icons and type colours work).
export const RESULTS = [
  {
    name: 'Louisville Regional', place: 'Louisville, USA', date: '2026-10-11', reg: 'M-C', players: '1,013 Masters',
    source: { label: 'Victory Road: 2027 Louisville Regional', url: 'https://victoryroad.pro/2027-louisville/' },
    top: [
      { p: 'Joseph Ugarte', c: 'USA', team: ['Charizard-Mega-Y', 'Garchomp', 'Incineroar', 'Farigiraf', 'Sylveon', 'Venusaur'] },
      { p: 'Andrew Figueras', c: 'USA', team: ['Charizard-Mega-Y', 'Garchomp', 'Grimmsnarl', 'Archaludon', 'Pelipper', 'Venusaur'] },
      { p: 'Dorian Kang', c: 'CAN', team: ['Charizard-Mega-Y', 'Raichu-Mega-X', 'Grimmsnarl', 'Archaludon', 'Politoed', 'Venusaur'] },
      { p: 'JJ Miller', c: 'USA', team: ['Staraptor-Mega', 'Swampert-Mega', 'Gholdengo', 'Archaludon', 'Pelipper', 'Sinistcha'] },
      { p: 'Ryan Loseto', c: 'CAN', team: ['Salamence-Mega', 'Floette-Mega', 'Basculegion', 'Kingambit', 'Sneasler', 'Rillaboom'] },
      { p: 'Toler Webb', c: 'USA', team: ['Garchomp-Mega-Z', 'Golisopod-Mega', 'Pelipper', 'Archaludon', 'Sneasler', 'Farigiraf'] },
      { p: 'Keanu Inosanto', c: 'USA', team: ['Salamence-Mega', 'Floette-Mega', 'Basculegion', 'Kingambit', 'Sneasler', 'Rillaboom'] },
      { p: 'Brian Hough', c: 'USA', team: ['Dragonite-Mega', 'Garchomp', 'Incineroar', 'Gholdengo', 'Sneasler', 'Rillaboom'] },
    ],
  },
  {
    name: 'Frankfurt Regional', place: 'Frankfurt, Germany', date: '2026-09-27', reg: 'M-C', players: '1,129 Masters',
    source: { label: 'Victory Road: 2027 Frankfurt Regional', url: 'https://victoryroad.pro/2027-frankfurt/' },
    top: [
      { p: 'Eric Rios', c: 'ESP', team: ['Garchomp-Mega-Z', 'Raichu-Mega-Y', 'Incineroar', 'Gholdengo', 'Volcarona', 'Rillaboom'] },
      { p: 'Sebastian Liu Li', c: 'NLD', team: ['Garchomp-Mega-Z', 'Sylveon', 'Incineroar', 'Farigiraf', 'Sneasler', 'Torkoal'] },
      { p: 'Yvar Vlieger', c: 'NLD', team: ['Charizard-Mega-Y', 'Meowstic-F-Mega', 'Kommo-o', 'Kingambit', 'Sneasler', 'Indeedee'] },
      { p: 'Eden Batchelor', c: 'GBR', team: ['Dragonite-Mega', 'Floette-Mega', 'Incineroar', 'Gholdengo', 'Sneasler', 'Rillaboom'] },
      { p: 'Anthony Liuzzo', c: 'FRA', team: ['Gengar-Mega', 'Vivillon-Pokeball', 'Incineroar', 'Kommo-o', 'Politoed', 'Rillaboom'] },
      { p: 'Juan Manuel Odriozola', c: 'ESP', team: ['Charizard-Mega-Y', 'Venusaur', 'Incineroar', 'Toxapex', 'Sylveon', 'Garchomp'] },
      { p: 'Valentijn Visser', c: 'NLD', team: ['Glimmora-Mega', 'Froslass-Mega', 'Incineroar', 'Basculegion', 'Volcarona', 'Rillaboom'] },
      { p: 'Giuseppe Musicco', c: 'ITA', team: ['Dragonite-Mega', 'Floette-Mega', 'Incineroar', 'Gholdengo', 'Sneasler', 'Rillaboom'] },
    ],
  },
  {
    name: 'Baltimore Regional', place: 'Baltimore, USA', date: '2026-09-20', reg: 'M-C', players: '1,081 Masters',
    source: { label: 'Victory Road: 2027 Baltimore Regional', url: 'https://victoryroad.pro/2027-baltimore/' },
    top: [
      { p: 'Joseph Ugarte', c: 'USA', team: ['Salamence-Mega', 'Tyranitar-Mega', 'Excadrill', 'Corviknight', 'Sneasler', 'Indeedee'] },
      { p: 'Aditya Subramanian', c: 'IND', team: ['Charizard-Mega-Y', 'Golisopod-Mega', 'Farigiraf', 'Archaludon', 'Politoed', 'Grimmsnarl'] },
      { p: 'Brady Smith', c: 'USA', team: ['Gengar-Mega', 'Vivillon-High Plains', 'Incineroar', 'Archaludon', 'Politoed', 'Rillaboom'] },
      { p: 'Blaik Thompson', c: 'USA', team: ['Salamence-Mega', 'Metagross-Mega', 'Arcanine-Hisui', 'Milotic', 'Sneasler', 'Indeedee'] },
      { p: 'Lorenzo Arce', c: 'USA', team: ['Raichu-Mega-Y', 'Staraptor-Mega', 'Ceruledge', 'Gholdengo', 'Milotic', 'Rillaboom'] },
      { p: 'Esa Ishaque', c: 'CAN', team: ['Raichu-Mega-Y', 'Froslass-Mega', 'Arcanine-Hisui', 'Kingambit', 'Sneasler', 'Rillaboom'] },
      { p: 'Conner Pietrusinski', c: 'USA', team: ['Raichu-Mega-Y', 'Staraptor-Mega', 'Arcanine-Hisui', 'Gholdengo', 'Sylveon', 'Rillaboom'] },
      { p: 'Cole Basham', c: 'USA', team: ['Delphox-Mega', 'Floette-Mega', 'Incineroar', 'Kingambit', 'Sneasler', 'Rillaboom'] },
    ],
  },
];

// Smogon usage-stats formats to fetch. Change these when a new regulation starts.
export const USAGE_FORMATS = {
  doubles: { id: 'gen9championsvgc2026regmc', label: 'Doubles (VGC, Regulation M-C)' },
  singles: { id: 'gen9championsbssregmc', label: 'Singles (Battle Stadium, Regulation M-C)' },
  rating: 1760, // only battles from players rated 1760+ on Pokémon Showdown, the strongest players
};

// "New to VGC? Start here" on the hub. Game facts are sourced below; the battle tips explain how moves work in the game.
export const LEARN = {
  starters: ['Charizard', 'Tyranitar', 'Armarouge', 'Palafin', 'Pikachu', 'Lucario', 'Gardevoir', 'Absol', 'Altaria', 'Snorlax'],
  modes: [
    { name: 'Casual Battles', text: "Battle real players without changing your rank. Perfect for testing a new team." },
    { name: 'Ranked Battles', text: 'Battle players worldwide. Wins raise your rank, you get matched with people at your level, and you earn VP.' },
    { name: 'Private Battles', text: 'Make a room, share its code with a friend and pick the rules.' },
  ],
  // Five ideas you'll see in almost every Doubles game. Each move or ability is in Pokémon Champions.
  ideas: [
    { name: 'Fake Out', text: 'Hits first and makes the target flinch, but only on the turn its user comes in. Great for a free first turn.' },
    { name: 'Protect', text: 'Blocks almost every attack for one turn. Use it to dodge a big hit or to wait out the other side.' },
    { name: 'Speed control', text: 'Tailwind doubles your side\'s Speed for a few turns, Trick Room makes slower Pokémon move first, and Icy Wind slows both foes.' },
    { name: 'Redirection', text: 'Follow Me and Rage Powder pull attacks onto the user, so its partner can set up safely.' },
    { name: 'Intimidate', text: 'An ability that lowers both foes\' Attack when its user comes in. Swapping it in and out softens physical attackers.' },
  ],
  sources: [
    { label: 'God is a Geek: Pokémon Champions starters guide', url: 'https://godisageek.com/2026/04/pokemon-champions-starters-guide-all-teams/' },
    { label: 'Serebii: Pokémon Champions battle modes', url: 'https://www.serebii.net/pokemonchampions/modes.shtml' },
  ] as Source[],
};
