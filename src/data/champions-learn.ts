// champions-learn.ts: the "Learn to play" guide for Pokémon Champions VGC (/esports/pokemon-champions/learn).
// Every item lists the pages it came from. "general: true" means it works the same as the main Pokémon games
// (not something new in Champions). Checked 2026-10-18.

export type LearnItem = { title: string; text: string; sources: string[]; general?: boolean; by?: string };

export const LEARN_TURN: LearnItem[] = [
  {
    "title": "Doubles: two on two",
    "text": "In a Double Battle each side has two Pokémon on the field at once. In Pokémon Champions' official VGC format, battles are Doubles and each player picks four of their six Pokémon to use.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Double_Battle",
      "https://victoryroad.pro/champions-regulations/",
      "https://pokemon-zone.com/champions/regulations/"
    ]
  },
  {
    "title": "Both players choose at the same time",
    "text": "At the start of each turn, both players secretly pick what each of their Pokémon will do (a move or a switch). Once both sides have chosen, the turn plays out.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_battle"
    ],
    "general": true
  },
  {
    "title": "Switching goes first",
    "text": "Switching Pokémon happens before any moves are used (the move Pursuit was the main old exception).",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Priority"
    ],
    "general": true
  },
  {
    "title": "Mega Evolution happens early in the turn",
    "text": "Mega Evolution happens before most actions except switching. It is a free extra: the Pokémon still uses its move that turn. Since Generation 7, the Pokémon's new (Mega) Speed is used to decide who moves first that turn. Champions does have Mega Evolution, done with an item called the Omni Ring.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Mega_Evolution",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Champions"
    ],
    "general": true
  },
  {
    "title": "Priority brackets come before Speed",
    "text": "Every move has a hidden priority number from +5 to -7. Most moves are 0. A move with higher priority always goes before one with lower priority, no matter how fast the Pokémon are. Examples: Protect is +4, Fake Out is +3, Extreme Speed and Follow Me are +2, Quick Attack and Aqua Jet are +1, Trick Room is -7.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Priority"
    ],
    "general": true
  },
  {
    "title": "Then the faster Pokémon moves first",
    "text": "If two moves have the same priority, the Pokémon with the higher Speed stat goes first.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Priority",
      "https://bulbapedia.bulbagarden.net/wiki/Stat"
    ],
    "general": true
  },
  {
    "title": "Speed ties are random",
    "text": "If two Pokémon have exactly the same Speed, the game randomly picks which one goes first.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Stat"
    ],
    "general": true
  },
  {
    "title": "Trick Room flips Speed order",
    "text": "While Trick Room is active, slower Pokémon move before faster ones inside the same priority bracket. Priority still matters first.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Trick_Room_(move)",
      "https://bulbapedia.bulbagarden.net/wiki/Priority"
    ],
    "general": true
  },
  {
    "title": "Single-target moves",
    "text": "Most attacks hit just one Pokémon that you choose. In Doubles you can even target your own partner with some moves.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Double_Battle",
      "https://vgcguide.com/coming-from-single-battles"
    ],
    "general": true
  },
  {
    "title": "Spread moves and the 25% cut",
    "text": "Some moves hit more than one Pokémon at once (for example both opponents, or everyone else on the field like Earthquake and Surf, which can hit your partner too). When a spread move hits more than one target, its damage is cut by 25% (it does 0.75x). If only one target is left, there is no cut.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Double_Battle",
      "https://victoryroad.pro/2019/08/28/differences-singles-doubles/",
      "https://vgcguide.com/coming-from-single-battles"
    ],
    "general": true
  },
  {
    "title": "When a Pokémon faints",
    "text": "A Pokémon faints when its HP hits zero. Since Generation 4, it is not replaced straight away: you send in a new Pokémon at the end of the turn. A move aimed at a Pokémon that already fainted may fail.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Double_Battle",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_battle"
    ],
    "general": true
  },
  {
    "title": "How you win",
    "text": "You win when all of your opponent's Pokémon have been knocked out. In VGC that means all four Pokémon they brought.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_battle",
      "https://pokemon-zone.com/champions/regulations/"
    ],
    "general": true
  },
  {
    "title": "Mega Evolution: one per battle",
    "text": "Only one of your Pokémon can Mega Evolve per battle, and it needs to hold its own Mega Stone. Once it Mega Evolves it stays Mega even if it switches out.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Regulation_Set_M-A",
      "https://www.playnews.gg/en/guides/pokemon-champions-complete-guide-to-special-mechanics",
      "https://bulbapedia.bulbagarden.net/wiki/Mega_Evolution"
    ]
  },
  {
    "title": "Timers",
    "text": "In the official format you get 90 seconds at Team Preview, 45 seconds to choose each turn, 7 minutes of your own total time (run out and you lose), and the whole game lasts at most 20 minutes.",
    "sources": [
      "https://victoryroad.pro/champions-regulations/",
      "https://bulbapedia.bulbagarden.net/wiki/Regulation_Set_M-A",
      "https://pokemon-zone.com/champions/regulations/"
    ]
  },
  {
    "title": "Champions changed some status conditions",
    "text": "Champions changed three status conditions from the main games. Sleep: you wake up for sure by the third turn (33.3% chance on turn 2). Paralysis: only a 12.5% chance to be unable to move (was 25%), Speed still halved. Freeze: 25% chance to thaw each turn and always thaw on the third turn. Champions also uses fixed PP values; Protect has 8 PP.",
    "sources": [
      "https://serebii.net/pokemonchampions/statusconditions.shtml",
      "https://www.playnews.gg/en/guides/pokemon-champions-all-the-rules-changed-compared-to-the-main-games-status-conditions-pp-abilities"
    ]
  }
];

export const LEARN_TEAM: LearnItem[] = [
  {
    "title": "Bring 6, pick 4",
    "text": "You build a team of six. At Team Preview both players see each other's six, then each picks four to use. The first two you pick are your leads (the two that start on the field).",
    "sources": [
      "https://pokemon-zone.com/champions/regulations/",
      "https://victoryroad.pro/champions-regulations/",
      "https://metavgc.com/guides/getting-started-with-vgc"
    ]
  },
  {
    "title": "Level 50",
    "text": "Every Pokémon is set to level 50 in battle, whatever its real level.",
    "sources": [
      "https://victoryroad.pro/champions-regulations/",
      "https://pokemon-zone.com/champions/regulations/",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Champions"
    ]
  },
  {
    "title": "Stat points replace EVs",
    "text": "Champions has no EVs (effort values). Instead you give each Pokémon stat points: 66 in total, with at most 32 in any one stat. Each stat point adds 1 to that stat at level 50. You can change stat points in Training using Victory Points (VP) or Training Tickets.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Stat_point",
      "https://www.pocketgamer.com/pokemon-champions/beginners-guide/",
      "https://www.serebii.net/pokemonchampions/training.shtml"
    ]
  },
  {
    "title": "IVs are always maxed",
    "text": "You cannot change IVs in Champions. Stats are worked out as if every IV were 31 (the best value).",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Champions",
      "https://champdex.com/guides/format-rules"
    ]
  },
  {
    "title": "Natures are called stat alignment",
    "text": "A nature (called stat alignment in Champions) makes one stat 10% higher and another 10% lower. You can change it in Training for VP.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Stat_point",
      "https://www.playnews.gg/en/guides/pokemon-champions-getting-started-guide",
      "https://www.serebii.net/pokemonchampions/training.shtml"
    ]
  },
  {
    "title": "Abilities",
    "text": "Each Pokémon has one Ability at a time, which gives a passive effect in battle. In Champions you can change a Pokémon's Ability in Training for VP.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Ability",
      "https://www.serebii.net/pokemonchampions/training.shtml"
    ],
    "general": true
  },
  {
    "title": "Held items",
    "text": "Each Pokémon can hold one item. Items are bought with VP in the Frontier Shop. A Pokémon that will Mega Evolve must hold its Mega Stone.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Held_item",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Champions",
      "https://www.pocketgamer.com/pokemon-champions/beginners-guide/"
    ]
  },
  {
    "title": "Four moves",
    "text": "A Pokémon can know up to four moves at a time (general Pokémon rule). In Champions you can change moves in Training for VP.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Move",
      "https://www.serebii.net/pokemonchampions/training.shtml"
    ]
  },
  {
    "title": "Item Clause",
    "text": "No two Pokémon on your team can hold the same item.",
    "sources": [
      "https://victoryroad.pro/champions-regulations/",
      "https://bulbapedia.bulbagarden.net/wiki/Regulation_Set_M-A",
      "https://pokemon-zone.com/champions/regulations/"
    ]
  },
  {
    "title": "Species Clause",
    "text": "You cannot have two Pokémon of the same species (same Pokédex number), so for example two different Rotom forms are not allowed together.",
    "sources": [
      "https://victoryroad.pro/champions-regulations/",
      "https://pokemon-zone.com/champions/regulations/"
    ]
  },
  {
    "title": "Allowed Pokémon change by Regulation",
    "text": "Each Regulation Set has a list of allowed Pokémon and Megas. Regulation M-A ran 8 April to 17 June 2026, M-B ran 17 June to 9 September 2026, and M-C runs from 9 September to 2 December 2026.",
    "sources": [
      "https://victoryroad.pro/champions-regulations/",
      "https://victoryroad.pro/2026/09/09/regulation-set-m-c-is-now-the-official-vgc-format-until-2-december/",
      "https://pokemon-zone.com/champions/regulations/"
    ]
  },
  {
    "title": "Mega yes; Tera, Dynamax, Z-Moves no (for now)",
    "text": "Champions has Mega Evolution. Terastallization, Dynamax and Z-Moves are not in the game as of the sources checked; Bulbapedia notes official art hints they may come later.",
    "sources": [
      "https://www.playnews.gg/en/guides/pokemon-champions-complete-guide-to-special-mechanics",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Champions"
    ]
  }
];

export const LEARN_TYPES: LearnItem[] = [
  {
    "title": "Super effective: 2x",
    "text": "When a move's type is strong against the target's type, it does double damage.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Type",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Champions"
    ],
    "general": true
  },
  {
    "title": "Not very effective: 0.5x",
    "text": "When the target resists the move's type, it does half damage.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Type"
    ],
    "general": true
  },
  {
    "title": "No effect: 0x",
    "text": "Some types are completely immune to others and take no damage.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Type"
    ],
    "general": true
  },
  {
    "title": "Two types multiply",
    "text": "For a Pokémon with two types, multiply both: 2x and 2x makes 4x, 0.5x and 0.5x makes 0.25x, 2x and 0.5x cancels to 1x, and any 0x makes it 0x.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Type"
    ],
    "general": true
  },
  {
    "title": "STAB: 1.5x",
    "text": "If a Pokémon uses a damaging move that matches one of its own types, the move does 1.5x damage. This is called STAB (same-type attack bonus). With the Ability Adaptability it is 2x.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Same-type_attack_bonus"
    ],
    "general": true
  },
  {
    "title": "Immunities to remember",
    "text": "Normal and Fighting can't hit Ghost. Ghost can't hit Normal. Electric can't hit Ground. Ground can't hit Flying. Poison can't hit Steel. Psychic can't hit Dark. Dragon can't hit Fairy.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Type",
      "https://bulbapedia.bulbagarden.net/wiki/Dark_(type)",
      "https://bulbapedia.bulbagarden.net/wiki/Fairy_(type)",
      "https://bulbapedia.bulbagarden.net/wiki/Dragon_(type)"
    ],
    "general": true
  },
  {
    "title": "Key matchups: Fire, Water, Grass",
    "text": "Fire beats Grass, Ice, Bug and Steel. Water beats Fire, Ground and Rock. Grass beats Water, Ground and Rock.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Type"
    ],
    "general": true
  },
  {
    "title": "Key matchups: Electric and Ground",
    "text": "Electric beats Water and Flying. Ground beats Fire, Electric, Poison, Rock and Steel.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Type"
    ],
    "general": true
  },
  {
    "title": "Key matchups: Dragon, Fairy, Steel",
    "text": "Dragon beats Dragon. Fairy beats Dragon, Dark and Fighting. Steel beats Fairy, Ice and Rock. Dragon is weak to Ice too.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Dragon_(type)",
      "https://bulbapedia.bulbagarden.net/wiki/Fairy_(type)",
      "https://bulbapedia.bulbagarden.net/wiki/Type"
    ],
    "general": true
  },
  {
    "title": "Key matchups: Fighting, Dark, Ghost",
    "text": "Fighting beats Normal, Rock, Steel, Ice and Dark. Dark beats Ghost and Psychic. Ghost beats Ghost and Psychic.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Type",
      "https://bulbapedia.bulbagarden.net/wiki/Dark_(type)"
    ],
    "general": true
  }
];

export const LEARN_WORDS: LearnItem[] = [
  {
    "title": "Lead",
    "text": "The two Pokémon you pick first at Team Preview, which start the battle on the field.",
    "sources": [
      "https://victoryroad.pro/glossary/",
      "https://pokemon-zone.com/champions/regulations/"
    ]
  },
  {
    "title": "Back",
    "text": "The two Pokémon you bring to the battle that are not your leads; they wait to be switched in.",
    "sources": [
      "https://victoryroad.pro/glossary/"
    ]
  },
  {
    "title": "Team Preview",
    "text": "The screen before battle where both players see each other's six Pokémon and choose which four to bring (90 seconds).",
    "sources": [
      "https://victoryroad.pro/2019/08/28/differences-singles-doubles/",
      "https://pokemon-zone.com/champions/regulations/",
      "https://metavgc.com/guides/getting-started-with-vgc"
    ]
  },
  {
    "title": "Spread move",
    "text": "A damaging move that hits all opponents, or all other Pokémon, at once. Its damage is cut by 25% when it hits more than one target.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Appendix:Metagame_terminology",
      "https://bulbapedia.bulbagarden.net/wiki/Double_Battle"
    ]
  },
  {
    "title": "Redirection",
    "text": "Using moves like Follow Me or Rage Powder (or some Abilities) to pull the opponent's single-target attacks onto one Pokémon so its partner is safe. It does not pull spread moves.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Appendix:Metagame_terminology",
      "https://victoryroad.pro/2019/08/28/differences-singles-doubles/"
    ]
  },
  {
    "title": "Speed control",
    "text": "Anything that changes who moves first: making your side faster, the opponent slower, or flipping the order (Tailwind, Trick Room, Icy Wind, Electroweb, priority moves).",
    "sources": [
      "https://victoryroad.pro/glossary/",
      "https://www.smogon.com/articles/guide-to-speed-control-in-vgc-p1",
      "https://metavgc.com/guides/getting-started-with-vgc"
    ]
  },
  {
    "title": "Tailwind",
    "text": "A Flying move that doubles the Speed of your side for four turns (counting the turn it's used).",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Tailwind_(move)",
      "https://www.smogon.com/articles/guide-to-speed-control-in-vgc-p1"
    ]
  },
  {
    "title": "Trick Room",
    "text": "A Psychic move that makes slower Pokémon go first for five turns (counting the turn it's used). It has -7 priority, so it always goes last. Using it again while it's up ends it.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Trick_Room_(move)"
    ]
  },
  {
    "title": "Fake Out",
    "text": "A +3 priority Normal move that makes the target flinch (lose its turn). It only works on the user's first turn after coming onto the field.",
    "sources": [
      "https://victoryroad.pro/glossary/",
      "https://victoryroad.pro/2019/08/28/differences-singles-doubles/",
      "https://bulbapedia.bulbagarden.net/wiki/Priority"
    ]
  },
  {
    "title": "Protect",
    "text": "A +4 priority move that blocks attacks for that turn. It is the most used move in Doubles; it keeps one Pokémon safe while its partner acts. In Champions Protect has 8 PP.",
    "sources": [
      "https://victoryroad.pro/2019/08/28/differences-singles-doubles/",
      "https://vgcguide.com/coming-from-single-battles",
      "https://bulbapedia.bulbagarden.net/wiki/Priority",
      "https://www.playnews.gg/en/guides/pokemon-champions-all-the-rules-changed-compared-to-the-main-games-status-conditions-pp-abilities"
    ]
  },
  {
    "title": "Intimidate",
    "text": "An Ability that lowers the Attack of the opponents next to it by one stage when it comes onto the field.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Intimidate_(Ability)"
    ]
  },
  {
    "title": "Priority",
    "text": "A hidden number on each move (+5 to -7) that decides order before Speed. Higher priority always moves first.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Priority"
    ]
  },
  {
    "title": "STAB",
    "text": "Same-type attack bonus: a move that matches the user's type does 1.5x damage.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Same-type_attack_bonus",
      "https://victoryroad.pro/glossary/"
    ]
  },
  {
    "title": "OHKO / 2HKO",
    "text": "How many hits it takes to knock out a Pokémon: OHKO means one hit, 2HKO means two hits.",
    "sources": [
      "https://victoryroad.pro/glossary/",
      "https://bulbapedia.bulbagarden.net/wiki/Appendix:Metagame_terminology"
    ]
  },
  {
    "title": "Pivot",
    "text": "A Pokémon used a lot for switching in and out to reposition your team during a game.",
    "sources": [
      "https://victoryroad.pro/glossary/"
    ]
  },
  {
    "title": "Sweeper",
    "text": "A Pokémon with strong attacking power whose job is to knock out opponents.",
    "sources": [
      "https://victoryroad.pro/glossary/"
    ]
  },
  {
    "title": "Coverage",
    "text": "How well a Pokémon's attacking moves can hit many different types.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Appendix:Metagame_terminology"
    ]
  },
  {
    "title": "Mega Evolution",
    "text": "A one-per-battle power-up: a Pokémon holding its Mega Stone transforms into a stronger form for the rest of the battle. In Champions it uses the Omni Ring.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Mega_Evolution",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Champions",
      "https://bulbapedia.bulbagarden.net/wiki/Regulation_Set_M-A"
    ]
  },
  {
    "title": "Regulation",
    "text": "The current set of rules and allowed Pokémon, which changes every few months.",
    "sources": [
      "https://metavgc.com/guides/getting-started-with-vgc",
      "https://victoryroad.pro/champions-regulations/"
    ]
  }
];

export const LEARN_TIPS: LearnItem[] = [
  {
    "title": "Learn Protect early",
    "text": "Protect is one of the most valuable moves in Doubles. Use it to keep a Pokémon safe while its partner attacks, or to wait out the opponent's Tailwind or Trick Room.",
    "sources": [
      "https://victoryroad.pro/2019/08/28/differences-singles-doubles/",
      "https://metavgc.com/guides/getting-started-with-vgc"
    ],
    "by": "Victory Road; MetaVGC"
  },
  {
    "title": "Give your lead a job",
    "text": "Decide what your two leads are for, like setting speed control or attacking hard, instead of just sending your strongest Pokémon first.",
    "sources": [
      "https://www.vgcguide.com/team-preview"
    ],
    "by": "Aaron Zheng, VGC Guide"
  },
  {
    "title": "Pick by elimination",
    "text": "At Team Preview, first cut the two Pokémon that help least against this opponent, then choose leads.",
    "sources": [
      "https://www.vgcguide.com/team-preview"
    ],
    "by": "Aaron Zheng, VGC Guide"
  },
  {
    "title": "Guess their lead",
    "text": "Before picking your lead, think about the strongest pairs your opponent could lead with, and check you can handle them on turn 1.",
    "sources": [
      "https://www.vgcguide.com/team-preview"
    ],
    "by": "Aaron Zheng, VGC Guide"
  },
  {
    "title": "Write your plan down",
    "text": "In practice games, jot down your plan at Team Preview and compare it with what happened after.",
    "sources": [
      "https://www.vgcguide.com/team-preview"
    ],
    "by": "Aaron Zheng, VGC Guide"
  },
  {
    "title": "Team needs speed control and Protect",
    "text": "When building, check your team has speed control, Protect, and attacks that hit lots of types.",
    "sources": [
      "https://metavgc.com/guides/getting-started-with-vgc",
      "https://www.vgcguide.com/teambuilding"
    ],
    "by": "MetaVGC; VGC Guide"
  },
  {
    "title": "Avoid Pokémon that do nothing",
    "text": "Make sure every team member has a useful role and doesn't get stuck doing nothing.",
    "sources": [
      "https://www.vgcguide.com/teambuilding"
    ],
    "by": "VGC Guide"
  },
  {
    "title": "Skip slow strategies",
    "text": "Doubles games are short (around 10-12 turns), so slow plans like Toxic or entry hazards are rarely worth it.",
    "sources": [
      "https://victoryroad.pro/2019/08/28/differences-singles-doubles/",
      "https://vgcguide.com/coming-from-single-battles"
    ],
    "by": "Victory Road; VGC Guide"
  },
  {
    "title": "Do the Champions tutorials and use Casual",
    "text": "Play the in-game Battle Tutorials in Train (their rewards are one-time only), and test new teams in Casual battles so your rank isn't at risk.",
    "sources": [
      "https://www.playnews.gg/en/guides/pokemon-champions-getting-started-guide",
      "https://www.pocketgamer.com/pokemon-champions/beginners-guide/"
    ],
    "by": "Fabian Lainé, Playnews; Stephen Gregson-Wood, Pocket Gamer"
  },
  {
    "title": "Try before you spend",
    "text": "Use the free Trial Recruit to test Pokémon before spending VP, and try teams built around popular Pokémon.",
    "sources": [
      "https://www.playnews.gg/en/guides/pokemon-champions-getting-started-guide",
      "https://metavgc.com/guides/getting-started-with-vgc"
    ],
    "by": "Playnews; MetaVGC"
  }
];

export const LEARN_RANKED: LearnItem[] = [
  {
    "title": "Battle modes",
    "text": "Champions has Ranked Battle, Casual Battle and Private Battle (with friends). It is online-only, so even Private Battle needs internet. Tournaments use a Competition Mode.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Champions"
    ]
  },
  {
    "title": "Practise safely in Casual",
    "text": "Casual battles let you test teams without your rank changing.",
    "sources": [
      "https://www.playnews.gg/en/guides/pokemon-champions-getting-started-guide",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Champions"
    ]
  },
  {
    "title": "Separate Singles and Doubles ladders",
    "text": "Ranked has a Single Battle ladder and a Double Battle ladder, each with its own rewards.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Ranked_Battles_Seasons_in_Pok%C3%A9mon_Champions",
      "https://www.serebii.net/pokemonchampions/rankedbattle/seasonm-7.shtml"
    ]
  },
  {
    "title": "Tiers",
    "text": "Ranked tiers are Poké Ball, Great Ball, Ultra Ball and Master Ball (each with ranks 4 down to 1), then Champion at the top. You start a tier at rank 4 and climb to rank 1 to reach the next tier.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Ranked_Battles_Seasons_in_Pok%C3%A9mon_Champions",
      "https://www.serebii.net/pokemonchampions/rankedbattle/seasonm-7.shtml",
      "https://www.playnews.gg/en/guides/pokemon-champions-champion-rank-and-master-ball-tiers-open-on-august-12-how-to-climb-them"
    ]
  },
  {
    "title": "How you climb",
    "text": "Winning raises your rank and losing can lower it. There is no special promotion match to move up a tier.",
    "sources": [
      "https://www.playnews.gg/en/guides/pokemon-champions-champion-rank-and-master-ball-tiers-open-on-august-12-how-to-climb-them"
    ]
  },
  {
    "title": "Seasons",
    "text": "A ranked season usually lasts about 3 to 5 weeks (past seasons were 21 to 35 days). Season M-7 runs 7 October to 5 November 2026 using Regulation M-C.",
    "sources": [
      "https://bulbapedia.bulbagarden.net/wiki/Ranked_Battles_Seasons_in_Pok%C3%A9mon_Champions",
      "https://www.serebii.net/pokemonchampions/rankedbattle/seasonm-7.shtml"
    ]
  },
  {
    "title": "Season rewards",
    "text": "At the end of each season you get Victory Points (VP) based on your tier, from 500 VP (Poké Ball) up to 20,000 VP (Champion). You only need to play one ranked battle that season to qualify.",
    "sources": [
      "https://www.serebii.net/pokemonchampions/rankedbattle/seasonm-7.shtml",
      "https://bulbapedia.bulbagarden.net/wiki/Ranked_Battles_Seasons_in_Pok%C3%A9mon_Champions",
      "https://www.playnews.gg/en/guides/pokemon-champions-champion-rank-and-master-ball-tiers-open-on-august-12-how-to-climb-them"
    ]
  }
];

