// unmatched.ts: every Unmatched set and fighter, the tier list, the rules and beginner tips.
// Made from sourced research (see each fighter's url). Stats come from The Unmatched Club (fan site),
// tiers from the Unmatched Fighter Chooser (unmatched.machaka.net), rules from Restoration Games' rulebooks.
// When a new set comes out, add it here (or ask Claude to). Keep every fact sourced.

export type UmSet = { id: string; name: string; short: string; line: string; released: string; url: string };
export type UmTier = { tier: 'S' | 'A' | 'B' | 'C' | 'D'; rank: number; win: number; proven: number };
export type UmCombo = { cards: string; why: string; source?: string };
export type UmGuide = { playstyle: string; tips: string[]; combos: UmCombo[]; sources: string[] };
export type UmFighter = {
  id: string; name: string; set: string; health: number | null; move: number | null; attack: 'melee' | 'ranged' | null;
  sidekick: { name: string; count: number | null; health: number | null; attack: string | null } | null;
  ability: string; notes: string | null; url: string; tier?: UmTier | null; guide?: UmGuide | null;
};

export const UM_SETS: UmSet[] = [
  {
    "id": "battle-of-legends-volume-one",
    "name": "Unmatched: Battle of Legends, Volume One",
    "short": "Battle of Legends, Volume One",
    "line": "Battle of Legends",
    "released": "2019-09",
    "url": "https://www.the-unmatched.club/sets/battle-of-legends-volume-one"
  },
  {
    "id": "bruce-lee",
    "name": "Unmatched: Bruce Lee",
    "short": "Bruce Lee",
    "line": "Standalone (one-hero set)",
    "released": "2019-10",
    "url": "https://www.the-unmatched.club/sets/bruce-lee"
  },
  {
    "id": "robin-hood-vs-bigfoot",
    "name": "Unmatched: Robin Hood vs. Bigfoot",
    "short": "Robin Hood vs. Bigfoot",
    "line": "Standalone two-hero duel",
    "released": "2019-10",
    "url": "https://www.the-unmatched.club/sets/robin-hood-vs-bigfoot"
  },
  {
    "id": "jurassic-park-ingen-vs-raptors",
    "name": "Unmatched: Jurassic Park – InGen vs. Raptors",
    "short": "Jurassic Park – InGen vs. Raptors",
    "line": "Jurassic Park",
    "released": "2020-04",
    "url": "https://www.the-unmatched.club/sets/jurassic-park-ingen-vs-raptors"
  },
  {
    "id": "cobble-fog",
    "name": "Unmatched: Cobble & Fog",
    "short": "Cobble & Fog",
    "line": "Cobble & Fog (four-hero set)",
    "released": "2020-07",
    "url": "https://www.the-unmatched.club/sets/cobble-fog"
  },
  {
    "id": "buffy-the-vampire-slayer",
    "name": "Unmatched: Buffy the Vampire Slayer",
    "short": "Buffy the Vampire Slayer",
    "line": "Buffy the Vampire Slayer",
    "released": "2020-10",
    "url": "https://www.the-unmatched.club/sets/buffy-the-vampire-slayer"
  },
  {
    "id": "little-red-riding-hood-vs-beowulf",
    "name": "Unmatched: Little Red Riding Hood vs. Beowulf",
    "short": "Little Red Riding Hood vs. Beowulf",
    "line": "Standalone two-hero duel",
    "released": "2020-12",
    "url": "https://www.the-unmatched.club/sets/little-red-riding-hood-vs-beowulf"
  },
  {
    "id": "deadpool",
    "name": "Unmatched: Deadpool",
    "short": "Deadpool",
    "line": "Marvel (one-hero set)",
    "released": "2021-07",
    "url": "https://www.the-unmatched.club/sets/deadpool"
  },
  {
    "id": "battle-of-legends-volume-two",
    "name": "Unmatched: Battle of Legends, Volume Two",
    "short": "Battle of Legends, Volume Two",
    "line": "Battle of Legends",
    "released": "2022-01",
    "url": "https://www.the-unmatched.club/sets/battle-of-legends-volume-two"
  },
  {
    "id": "redemption-row",
    "name": "Unmatched: Redemption Row",
    "short": "Redemption Row",
    "line": "Marvel",
    "released": "2022-04",
    "url": "https://www.the-unmatched.club/sets/redemption-row"
  },
  {
    "id": "hells-kitchen",
    "name": "Unmatched: Hell's Kitchen",
    "short": "Hell's Kitchen",
    "line": "Marvel",
    "released": "2022-04",
    "url": "https://www.the-unmatched.club/sets/hells-kitchen"
  },
  {
    "id": "jurassic-park-sattler-vs-trex",
    "name": "Unmatched: Jurassic Park – Dr. Sattler vs. T. Rex",
    "short": "Jurassic Park – Dr. Sattler vs. T. Rex",
    "line": "Jurassic Park",
    "released": "2022-05",
    "url": "https://www.the-unmatched.club/sets/jurassic-park-sattler-vs-trex"
  },
  {
    "id": "houdini-vs-the-genie",
    "name": "Unmatched: Houdini vs. The Genie",
    "short": "Houdini vs. The Genie",
    "line": "Standalone two-hero duel",
    "released": "2022-12",
    "url": "https://www.the-unmatched.club/sets/houdini-vs-the-genie"
  },
  {
    "id": "teen-spirit",
    "name": "Unmatched: Teen Spirit",
    "short": "Teen Spirit",
    "line": "Marvel",
    "released": "2023-03",
    "url": "https://www.the-unmatched.club/sets/teen-spirit"
  },
  {
    "id": "for-king-and-country",
    "name": "Unmatched: For King and Country",
    "short": "For King and Country",
    "line": "Marvel",
    "released": "2023-04",
    "url": "https://www.the-unmatched.club/sets/for-king-and-country"
  },
  {
    "id": "brains-and-brawn",
    "name": "Unmatched: Brains and Brawn",
    "short": "Brains and Brawn",
    "line": "Marvel",
    "released": "2023-06",
    "url": "https://www.the-unmatched.club/sets/brains-and-brawn"
  },
  {
    "id": "adventures-tales-to-amaze",
    "name": "Unmatched Adventures: Tales to Amaze",
    "short": "Tales to Amaze",
    "line": "Unmatched Adventures (cooperative)",
    "released": "2023-08",
    "url": "https://www.the-unmatched.club/sets/adventures-tales-to-amaze"
  },
  {
    "id": "suns-origin",
    "name": "Unmatched: Sun's Origin",
    "short": "Sun's Origin",
    "line": "Standalone two-hero duel",
    "released": "2024-01",
    "url": "https://www.the-unmatched.club/sets/suns-origin"
  },
  {
    "id": "slings-and-arrows",
    "name": "Unmatched: Slings and Arrows",
    "short": "Slings and Arrows",
    "line": "Slings and Arrows (four-hero set)",
    "released": "2024-03",
    "url": "https://www.the-unmatched.club/sets/slings-and-arrows"
  },
  {
    "id": "the-witcher-steel-silver",
    "name": "Unmatched: The Witcher – Steel & Silver",
    "short": "The Witcher – Steel & Silver",
    "line": "The Witcher",
    "released": "2024-12",
    "url": "https://www.the-unmatched.club/sets/the-witcher-steel-silver"
  },
  {
    "id": "the-witcher-realms-fall",
    "name": "Unmatched: The Witcher – Realms Fall",
    "short": "The Witcher – Realms Fall",
    "line": "The Witcher",
    "released": "2024-12",
    "url": "https://www.the-unmatched.club/sets/the-witcher-realms-fall"
  },
  {
    "id": "battle-of-legends-volume-three",
    "name": "Unmatched: Battle of Legends, Volume Three",
    "short": "Battle of Legends, Volume Three",
    "line": "Battle of Legends",
    "released": "2025-07",
    "url": "https://www.the-unmatched.club/sets/battle-of-legends-volume-three"
  },
  {
    "id": "adventures-teenage-mutant-ninja-turtles",
    "name": "Unmatched Adventures: Teenage Mutant Ninja Turtles",
    "short": "Teenage Mutant Ninja Turtles",
    "line": "Unmatched Adventures (cooperative)",
    "released": "2025-09",
    "url": "https://www.the-unmatched.club/sets/adventures-teenage-mutant-ninja-turtles"
  },
  {
    "id": "tmnt-shredder-vs-krang",
    "name": "Unmatched: TMNT – Shredder vs. Krang",
    "short": "TMNT – Shredder vs. Krang",
    "line": "Unmatched Adventures tie-in duel (competitive)",
    "released": "2025-09",
    "url": "https://www.the-unmatched.club/sets/tmnt-shredder-vs-krang"
  },
  {
    "id": "muhammad-ali-vs-bruce-lee",
    "name": "Unmatched: Muhammad Ali vs. Bruce Lee",
    "short": "Muhammad Ali vs. Bruce Lee",
    "line": "Standalone two-hero duel",
    "released": "2025-10",
    "url": "https://www.the-unmatched.club/sets/muhammad-ali-vs-bruce-lee"
  },
  {
    "id": "stars-and-stripes",
    "name": "Unmatched: Stars and Stripes",
    "short": "Stars and Stripes",
    "line": "Stars and Stripes (four-hero set)",
    "released": "2026-03",
    "url": "https://www.the-unmatched.club/sets/stars-and-stripes"
  }
];

export const UM_FIGHTERS: UmFighter[] = [
  {
    "id": "medusa",
    "name": "Medusa",
    "set": "battle-of-legends-volume-one",
    "health": 16,
    "move": 3,
    "attack": "ranged",
    "sidekick": {
      "name": "Harpies",
      "count": 3,
      "health": 1,
      "attack": "melee"
    },
    "ability": "At the start of her turn she may deal 1 damage to an opposing fighter in her zone.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/medusa",
    "tier": {
      "tier": "S",
      "rank": 3,
      "win": 64.5,
      "proven": 50
    },
    "guide": {
      "playstyle": "Ranged, defensive zoner: keep enemies at a distance, use her start-of-turn zone damage and let her Harpies screen her.",
      "tips": [
        "Stand on spaces that touch several zones to widen her reach and the area her ability can ping.",
        "Park Harpies on chokepoints so opponents must spend attacks on them before reaching Medusa.",
        "Treat the 1-health Harpies as extra hit points: keep them close and rarely send them off alone.",
        "Her defensive options are thin, so positioning is the main defense."
      ],
      "combos": [
        {
          "cards": "Gaze of Stone + Second Shot",
          "why": "The guide suggests not building around Gaze of Stone's low printed value and instead using it as a boost on Second Shot for a reliable high-value attack."
        },
        {
          "cards": "Winged Frenzy",
          "why": "Revives a defeated Harpy and moves your fighters; the guide notes it can be used repeatedly to keep the Harpy screen up."
        },
        {
          "cards": "The Hounds of Mighty Zeus",
          "why": "Moves each Harpy up to 3 spaces, recommended mainly as a defensive reposition."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-medusa/"
      ]
    }
  },
  {
    "id": "sinbad",
    "name": "Sinbad",
    "set": "battle-of-legends-volume-one",
    "health": 15,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "The Porter",
      "count": null,
      "health": 6,
      "attack": "melee"
    },
    "ability": "When maneuvering, his fighters may move 1 extra space per Voyage card in his discard pile.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/sinbad",
    "tier": {
      "tier": "S",
      "rank": 19,
      "win": 56.2,
      "proven": 59
    },
    "guide": {
      "playstyle": "Scaling hero: weak early but gains movement and Voyage attack power as Voyage cards hit the discard; survive then overwhelm late.",
      "tips": [
        "Keep Voyage cards in a separate discard pile to track bonuses.",
        "Save Voyage Home for late game.",
        "Use The Porter to block paths and draw attention.",
        "Bait Feints with strong attacks."
      ],
      "combos": [
        {
          "cards": "Voyage Home",
          "why": "Returns all other discarded Voyage cards to hand late game."
        },
        {
          "cards": "Riches Beyond Compare",
          "why": "Draws 3 to cycle toward Voyage cards faster."
        },
        {
          "cards": "Momentous Shift",
          "why": "Sinbad's growing movement reliably turns on its moved-fighter bonus."
        },
        {
          "cards": "By Fortune and Fate",
          "why": "The Porter's attack draws 2; opponents often save Feint for Sinbad, so it usually resolves."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-sinbad/"
      ]
    }
  },
  {
    "id": "alice",
    "name": "Alice",
    "set": "battle-of-legends-volume-one",
    "health": 13,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "The Jabberwock",
      "count": null,
      "health": 8,
      "attack": "melee"
    },
    "ability": "Starts the game Big (+2 to her attack cards) or Small (+1 to her defense cards).",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/alice",
    "tier": {
      "tier": "C",
      "rank": 44,
      "win": 48.3,
      "proven": 58
    },
    "guide": {
      "playstyle": "Flexible, adaptive melee hero who toggles between BIG (offense) and SMALL (defense); wants to stay on the offensive and time size changes well.",
      "tips": [
        "Treat BIG as her default and keep pressure on the opponent.",
        "Keep the Jabberwock alive and mix in versatile attacks so its strikes are not predictable.",
        "Use her size-change cards to set up a SMALL defensive posture after a BIG attack.",
        "Never waste Claws that Catch on a sidekick; it only spikes against heroes."
      ],
      "combos": [
        {
          "cards": "The Other Side of the Mushroom",
          "why": "Hit while BIG, then move away and flip to SMALL for defense in one card."
        },
        {
          "cards": "I'm Late, I'm Late",
          "why": "Used on defense, its long move plus size change sets up a strong attack next turn and helps close on ranged foes."
        },
        {
          "cards": "Jaws that Bite",
          "why": "Jabberwock's after-combat 2 damage to an adjacent fighter is ideal for finishing sidekicks."
        },
        {
          "cards": "Snicker-Snack",
          "why": "On a win you see their hand and pick a discard; strongest when Alice is BIG."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-alice/"
      ]
    }
  },
  {
    "id": "king-arthur",
    "name": "King Arthur",
    "set": "battle-of-legends-volume-one",
    "health": 18,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Merlin",
      "count": null,
      "health": 7,
      "attack": "ranged"
    },
    "ability": "When he attacks he may add a face-down boost card to the attack; it is wasted if the attack's effects are canceled.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/king-arthur",
    "tier": {
      "tier": "D",
      "rank": 71,
      "win": 36.0,
      "proven": 34
    },
    "guide": {
      "playstyle": "High-health melee tank whose threat is boosted attacks; bait out Feints, keep a healthy hand, and use Merlin as support and shield.",
      "tips": [
        "Prefer boosting attacks over maneuvers.",
        "Bait Feints with low-value boosts like Regroup or Skirmish and count remaining Feints.",
        "Keep around 5 cards in hand to keep boost threats alive.",
        "Use Merlin early to draw out Feints."
      ],
      "combos": [
        {
          "cards": "Excalibur",
          "why": "Always boost it: its big base value still lands even if a Feint cancels the boost."
        },
        {
          "cards": "The Lady of the Lake + Excalibur",
          "why": "Retrieve Excalibur from deck or discard for repeat use, ideally after it has been played once."
        },
        {
          "cards": "Prophecy",
          "why": "Merlin digs 4 cards and keeps 2, refilling after boosts."
        },
        {
          "cards": "Restless Spirits",
          "why": "Splash damage across two spaces, strong versus multiple 1-health sidekicks."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-king-arthur/"
      ]
    }
  },
  {
    "id": "bruce-lee",
    "name": "Bruce Lee",
    "set": "bruce-lee",
    "health": 14,
    "move": 3,
    "attack": "melee",
    "sidekick": null,
    "ability": "At the end of his turn he may move 1 space.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/bruce-lee",
    "tier": {
      "tier": "A",
      "rank": 26,
      "win": 53.0,
      "proven": 66
    },
    "guide": {
      "playstyle": "Aggressive high-risk combo hero who chains extra actions and low-value Jeet Kune Do attacks for volume, while his ability helps keep distance from melee fighters.",
      "tips": [
        "No healing or sidekick, so lean on defensive cards like Taste of Blood, Be Like Water and Little Dragon.",
        "Build a hand for a big combo and unleash it when the opponent's hand is small.",
        "Still use Jeet Kune Do cards regularly to bait cancels.",
        "Feint on a Jeet Kune Do card can break a combo."
      ],
      "combos": [
        {
          "cards": "Bring It On + Nunchaku + Hoo! Whaaaaaa! + Jeet Kune Do",
          "why": "Full burst chain that can kill an opponent with few cards or no defense."
        },
        {
          "cards": "Nunchaku + Jeet Kune Do",
          "why": "Raises each Jeet Kune Do hit by 1, and Feint cannot remove that bonus."
        },
        {
          "cards": "Bring It On + Jeet Kune Do: High Straight Lead",
          "why": "High Straight Lead grows when a fighter started in a different space, which Bring It On enables."
        },
        {
          "cards": "Jeet Kune Do: Short Lead Hook + Momentous Shift",
          "why": "Swapping spaces sets up Momentous Shift's moved-fighter bonus."
        },
        {
          "cards": "Little Dragon",
          "why": "Rises to 6 with an empty hand, a safety net after a long combo."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-bruce-lee/"
      ]
    }
  },
  {
    "id": "robin-hood",
    "name": "Robin Hood",
    "set": "robin-hood-vs-bigfoot",
    "health": 13,
    "move": 2,
    "attack": "ranged",
    "sidekick": {
      "name": "Outlaws",
      "count": 4,
      "health": 1,
      "attack": "melee"
    },
    "ability": "After attacking, the attacking fighter may move up to 2 spaces.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/robin-hood",
    "tier": {
      "tier": "D",
      "rank": 61,
      "win": 42.2,
      "proven": 57
    },
    "guide": {
      "playstyle": "Ranged ambusher who attacks from safety and relocates after attacking, using his Outlaws as both a screen and main damage source.",
      "tips": [
        "Keep attacking from range so the opponent is always defending; win before fatigue.",
        "Let Outlaws soak hits for low-health Robin.",
        "Attack with Outlaws whenever possible."
      ],
      "combos": [
        {
          "cards": "Highway Robbery",
          "why": "Outlaw attack that ignores defense and cancels effects for steady damage (four copies); only Feint stops it."
        },
        {
          "cards": "Ambush",
          "why": "Random discard adds its boost value, punishing effect-reliant decks."
        },
        {
          "cards": "Defenders of Sherwood",
          "why": "Defend with it when an Outlaw is defeated to bring one back and draw."
        },
        {
          "cards": "Disarming Shot",
          "why": "Draws per damage including overkill, so hitting an undefended 1-health sidekick nets big draw."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-robin-hood/"
      ]
    }
  },
  {
    "id": "bigfoot",
    "name": "Bigfoot",
    "set": "robin-hood-vs-bigfoot",
    "health": 16,
    "move": 3,
    "attack": "melee",
    "sidekick": {
      "name": "The Jackalope",
      "count": null,
      "health": 6,
      "attack": "melee"
    },
    "ability": "At turn end, if no opposing fighter is in his zone, he may draw a card.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/bigfoot",
    "tier": {
      "tier": "S",
      "rank": 6,
      "win": 61.9,
      "proven": 57
    },
    "guide": {
      "playstyle": "Aggressive, mobile melee hero with big attack values: hit hard, then retreat; uses the Jackalope as a harassing extension.",
      "tips": [
        "Attack aggressively; Larger Than Life cannot be answered by Feint.",
        "Attack, then use movement to retreat or reposition.",
        "End your turn in a zone with no opposing fighters to trigger his card-draw ability.",
        "Use the Jackalope for surprise attacks."
      ],
      "combos": [
        {
          "cards": "Savagery",
          "why": "After a win it damages adjacent fighters, great when 1-health enemy sidekicks are near."
        },
        {
          "cards": "Disengage",
          "why": "The guide recommends it on the Jackalope to keep it alive and engaged."
        },
        {
          "cards": "Jackalope Horns + Momentous Shift",
          "why": "The guide calls this strong synergy (no reason given); Horns moves the Jackalope through enemies for chip damage."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-bigfoot/"
      ]
    }
  },
  {
    "id": "robert-muldoon",
    "name": "Robert Muldoon (InGen)",
    "set": "jurassic-park-ingen-vs-raptors",
    "health": 14,
    "move": 3,
    "attack": "ranged",
    "sidekick": {
      "name": "InGen Workers",
      "count": 3,
      "health": 1,
      "attack": "ranged"
    },
    "ability": "Starts with 8 traps; may place one at the start of each turn, and draws a card whenever one of his traps leaves play.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/robert-muldoon",
    "tier": {
      "tier": "B",
      "rank": 38,
      "win": 50.2,
      "proven": 50
    },
    "guide": {
      "playstyle": "Zoning hunter who lays traps and uses ranged InGen Workers to control lanes and lure opponents into bad positions over a long game.",
      "tips": [
        "Aim for 3-4 traps on high-traffic spaces; do not trap every turn.",
        "Use range and traps to dictate where the opponent goes.",
        "Call for Backup when you have workers to revive or want several traps.",
        "Keep Leap Away for defense."
      ],
      "combos": [
        {
          "cards": "Call for Backup + They Should All Be Destroyed",
          "why": "Placing several traps at once raises They Should All Be Destroyed's bonus for adjacent traps."
        },
        {
          "cards": "Rending Shot",
          "why": "Pushes the opponent up to 3 spaces, strong zoning against slow melee heroes."
        },
        {
          "cards": "I've Hunted Most Things That Can Hunt You",
          "why": "Big post-combat reposition for every fighter."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-robert-muldoon/"
      ]
    }
  },
  {
    "id": "raptors",
    "name": "Raptors",
    "set": "jurassic-park-ingen-vs-raptors",
    "health": 7,
    "move": 3,
    "attack": "melee",
    "sidekick": null,
    "ability": "Each raptor's attack gets +1 for every other friendly raptor adjacent to the defender.",
    "notes": "Health 7 is as listed on the source; the source does not state how many raptor figures there are, so read the 7 as per-figure health only after checking another source.",
    "url": "https://www.the-unmatched.club/heroes/raptors",
    "tier": {
      "tier": "A",
      "rank": 23,
      "win": 55.4,
      "proven": 62
    },
    "guide": {
      "playstyle": "Fast swarm: three low-health Raptors surround and pin a target, gaining attack for each adjacent packmate, aiming for a quick kill.",
      "tips": [
        "Hunt as a pack and pin opponents so they cannot escape.",
        "Attack often; Eviscerate (no effect) is a good Feint bait.",
        "Use Disengage to pull an injured Raptor out; keep versatile cards for defense.",
        "Plan Working Things Out a turn or two ahead for surprise pins."
      ],
      "combos": [
        {
          "cards": "Pack Hunters",
          "why": "Deals 1 extra damage per adjacent Raptor after combat, so it pays off most against a fully pinned target."
        },
        {
          "cards": "They Remember",
          "why": "Forces a block and grants another action, thinning defenses before the next attack."
        },
        {
          "cards": "Clever Girl",
          "why": "Extra action when a Raptor is adjacent to the target; best on a pinned foe."
        },
        {
          "cards": "Coordinated Attack Pattern",
          "why": "Teleports the other Raptors to one Raptor's zone for a surprise gang-up."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-raptors/"
      ]
    }
  },
  {
    "id": "sherlock-holmes",
    "name": "Sherlock Holmes",
    "set": "cobble-fog",
    "health": 16,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Dr. Watson",
      "count": null,
      "health": 8,
      "attack": "ranged"
    },
    "ability": "Opponents cannot cancel the effects on Holmes's and Dr. Watson's own cards.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/sherlock-holmes",
    "tier": {
      "tier": "S",
      "rank": 2,
      "win": 65.5,
      "proven": 39
    },
    "guide": {
      "playstyle": "Information-control schemer: keeps distance, uses Watson as a shield, learns the opponent's hand, then exploits it.",
      "tips": [
        "Double maneuver to keep distance and dig for hand-revealing cards.",
        "Attack mainly when the opponent ends adjacent.",
        "Use Watson as a shield."
      ],
      "combos": [
        {
          "cards": "Eliminate the Impossible + Confirm Suspicion",
          "why": "After seeing their hand, name a value to force a matching discard that deals its boost value as damage."
        },
        {
          "cards": "Administer Aid + Master of Disguise",
          "why": "The guide says these synergize: regroup with Watson, heal, and swap with an enemy to break pins."
        },
        {
          "cards": "Elementary",
          "why": "Knowing their hand lets you predict their attack value to cancel its effects."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-sherlock-holmes/"
      ]
    }
  },
  {
    "id": "jekyll-hyde",
    "name": "Jekyll & Hyde",
    "set": "cobble-fog",
    "health": 16,
    "move": 2,
    "attack": "melee",
    "sidekick": null,
    "ability": "Starts as Jekyll and may switch form at the start of each turn; as Hyde, takes 1 damage after maneuvering.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/jekyll-hyde",
    "tier": {
      "tier": "D",
      "rank": 68,
      "win": 39.4,
      "proven": 29
    },
    "guide": {
      "playstyle": "Complex dual-form hero: stay as the defensive, scheming Dr. Jekyll most of the game and flip to Mr. Hyde for decisive attacks, then revert.",
      "tips": [
        "Treat Jekyll as the default and use his cards to set up Hyde's attacks.",
        "Do not discard too many Jekyll cards early; they keep you alive.",
        "As Hyde, hit hard then revert before the opponent can punish you.",
        "Keep a Skirmish or Madness Relents for emergency defense."
      ],
      "combos": [
        {
          "cards": "Forever Hyde + Succumb to Compulsion + Distracted Triage",
          "why": "The guide suggests holding these less reliable cards as discard fuel for Forever Hyde."
        },
        {
          "cards": "Scientific Method + Forever Hyde",
          "why": "Draws cards equal to damage taken, refilling discard fodder for Forever Hyde."
        },
        {
          "cards": "With Haste!",
          "why": "Jekyll repositions after combat so Hyde can attack next turn."
        },
        {
          "cards": "Pure Evil + Recoiling Blow",
          "why": "Pure Evil moves Hyde and pings adjacent foes; Recoiling Blow lets Hyde shuffle within his zone and revert to Jekyll."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-jekyll-hyde/"
      ]
    }
  },
  {
    "id": "invisible-man",
    "name": "The Invisible Man",
    "set": "cobble-fog",
    "health": 15,
    "move": 2,
    "attack": "melee",
    "sidekick": null,
    "ability": "Seeds 3 fog tokens in his zone; gets +1 defense on fog and can move between fog spaces as if adjacent.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/invisible-man",
    "tier": {
      "tier": "D",
      "rank": 70,
      "win": 36.6,
      "proven": 34
    },
    "guide": {
      "playstyle": "Evasive attrition deck: stays on fog tokens, uses boosted defense and repositioning, and wears opponents down until they run out of cards.",
      "tips": [
        "Spread fog tokens out and stand on them; many effects need it.",
        "Defense cards are better on fog and several help him escape.",
        "Ranged heroes are his main threat; move fog toward them.",
        "Vanish resets the board and heals."
      ],
      "combos": [
        {
          "cards": "Rolling Fog + Step Lightly",
          "why": "Move a fog token to reach a ranged hero, then Step Lightly hits harder while on fog."
        },
        {
          "cards": "Vanish + Surprise Attack",
          "why": "Vanish off board, reappear next to the opponent to Surprise Attack, then Vanish again; denies them targets."
        },
        {
          "cards": "Impossible to See",
          "why": "Zeroes the opposing card's value and blocks modifiers, blanking cards like Beastform or Forever Hyde."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-invisible-man/"
      ]
    }
  },
  {
    "id": "dracula",
    "name": "Dracula",
    "set": "cobble-fog",
    "health": 13,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "The Sisters",
      "count": 3,
      "health": 1,
      "attack": "melee"
    },
    "ability": "At the start of his turn he may deal 1 damage to an adjacent fighter and, if he does, draw a card.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/dracula",
    "tier": {
      "tier": "B",
      "rank": 27,
      "win": 52.4,
      "proven": 61
    },
    "guide": {
      "playstyle": "Patient stalker who chips with his ability and sneak attacks, keeps a full hand to threaten Beastform, and heals while mobile.",
      "tips": [
        "Avoid early aggression; whittle the opponent first.",
        "Keep the Sisters grouped to deter attacks and fuel Sister-scaling cards.",
        "Hold a big hand to threaten Beastform.",
        "Losing a Sister is fine since they can be revived."
      ],
      "combos": [
        {
          "cards": "Mistform + Prey Upon",
          "why": "Teleport next to enemies then hit and heal off every adjacent fighter; strong against sidekicks."
        },
        {
          "cards": "Do My Bidding + Beastform",
          "why": "Hand information from Do My Bidding helps time the Beastform finisher."
        },
        {
          "cards": "Feeding Frenzy",
          "why": "Gains value for each Sister in the target's zone."
        },
        {
          "cards": "Beastform",
          "why": "Discarding cards adds damage, so a 7-card hand can produce a huge hit; two copies hedge against Feint."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-dracula/"
      ]
    }
  },
  {
    "id": "buffy",
    "name": "Buffy",
    "set": "buffy-the-vampire-slayer",
    "health": 14,
    "move": 3,
    "attack": "melee",
    "sidekick": {
      "name": "Giles and Xander",
      "count": 2,
      "health": 6,
      "attack": "melee"
    },
    "ability": "She can move through spaces occupied by opposing fighters, including when moved by effects.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/buffy",
    "tier": {
      "tier": "D",
      "rank": 59,
      "win": 42.9,
      "proven": 30
    },
    "guide": {
      "playstyle": "Fundamentals-based melee hero with excellent mobility (can move through fighters), strong on most maps and against trapping heroes.",
      "tips": [
        "End turns within about 3 spaces and bait attacks to answer with Cartwheel Kick.",
        "Lead with Mr. Pointy to soak a Feint, then follow with Slayer's Strength.",
        "Keep Giles alive early for his draw/discard schemes.",
        "Keep Xander adjacent to Buffy to power up Right-Hand Man."
      ],
      "combos": [
        {
          "cards": "Mr. Pointy + Slayer's Strength",
          "why": "No-effect Mr. Pointy draws out a Feint so Slayer's Strength's effect resolves."
        },
        {
          "cards": "Cartwheel Kick",
          "why": "Defensive card that moves Buffy and damages adjacent enemies after combat."
        },
        {
          "cards": "Right-Hand Man",
          "why": "Becomes her highest attack when Xander is adjacent to Buffy."
        },
        {
          "cards": "Insight + Training",
          "why": "Giles's schemes provide hand disruption and card draw that Buffy otherwise lacks."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-buffy/"
      ]
    }
  },
  {
    "id": "willow",
    "name": "Willow",
    "set": "buffy-the-vampire-slayer",
    "health": 14,
    "move": 2,
    "attack": "ranged",
    "sidekick": {
      "name": "Tara",
      "count": null,
      "health": 6,
      "attack": "ranged"
    },
    "ability": "Turns into Dark Willow when she or Tara takes damage; reverts at turn end if adjacent to Tara.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/willow",
    "tier": {
      "tier": "D",
      "rank": 74,
      "win": 22.8,
      "proven": 2
    },
    "guide": {
      "playstyle": "Low-movement ranged caster with strong cards and a powerful but penalising Dark Willow form; Tara fronts the fight and stabilises her.",
      "tips": [
        "Spend as little time as Dark Willow as possible.",
        "Keep Tara in Willow's zone so Dark Willow reverts at end of turn.",
        "Fight from range and use movement cards to make up for low movement."
      ],
      "combos": [
        {
          "cards": "Meditation",
          "why": "Strong defense that reverts Dark Willow to Willow when Tara can't."
        },
        {
          "cards": "Resurrect",
          "why": "Revives Tara at 3 health, effectively extending her life."
        },
        {
          "cards": "Knowledge of the Craft",
          "why": "Tara recovers a key card from discard."
        },
        {
          "cards": "Rending Shot",
          "why": "Pushes the enemy 3 spaces to deny double attacks."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-willow/"
      ]
    }
  },
  {
    "id": "angel",
    "name": "Angel",
    "set": "buffy-the-vampire-slayer",
    "health": 16,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Faith",
      "count": null,
      "health": 8,
      "attack": "melee"
    },
    "ability": "After Angel or Faith attacks and loses the combat, draw a card.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/angel",
    "tier": {
      "tier": "D",
      "rank": 69,
      "win": 36.8,
      "proven": 9
    },
    "guide": {
      "playstyle": "Fundamentals-driven melee deck with strong attacks and few effects; many of his effects pay off when he loses combat, so he baits out the opponent's good defenses.",
      "tips": [
        "End turns where the opponent must spend an action or boost to reach you.",
        "Keep versatile cards for defense because he has few pure defense cards.",
        "Use attacks that reward losing (e.g. Regroup, Wisdom of the Ages) to drain strong defenses.",
        "Struggles against ranged heroes and decks with high-value attacks."
      ],
      "combos": [
        {
          "cards": "Killer of the Dead + Five by Five",
          "why": "The guide suggests this sequence when an opponent finishes a turn next to Faith."
        },
        {
          "cards": "Angelus, Scourge of Europe + Feint",
          "why": "A big no-effect attack that an opposing Feint cannot blunt, punishing Feint usage."
        },
        {
          "cards": "Brooding",
          "why": "Bait card: if the defender over-commits a high card they waste it, take damage, and Angel draws."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-angel/"
      ]
    }
  },
  {
    "id": "spike",
    "name": "Spike",
    "set": "buffy-the-vampire-slayer",
    "health": 15,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Drusilla",
      "count": null,
      "health": 7,
      "attack": "melee"
    },
    "ability": "At the start of his turn he may place a Shadow token next to Spike or Drusilla.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/spike",
    "tier": {
      "tier": "D",
      "rank": 73,
      "win": 34.6,
      "proven": 4
    },
    "guide": {
      "playstyle": "Map-control hero who spreads shadow tokens and forces fights inside them; slow start, stronger as tokens accumulate.",
      "tips": [
        "Spread shadow tokens early with Seek the Shadows and his ability.",
        "Make opponents come to you and fight on shadows.",
        "Lead with Regroup to bait Feint when they first enter shadows.",
        "Use Leap Away or Skirmish to push enemies onto shadows."
      ],
      "combos": [
        {
          "cards": "Seek the Shadows + The Rush",
          "why": "Seek the Shadows lays tokens around Spike; The Rush gets stronger when either fighter is on a token."
        },
        {
          "cards": "Bloody Hell!",
          "why": "Extra damage for each shadow space adjacent to the target."
        },
        {
          "cards": "Empathy",
          "why": "Drusilla draws 3 instead of 1 if the target is on a shadow."
        },
        {
          "cards": "The Sight",
          "why": "Discard 2 instead of 1 if an enemy stands on a shadow."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-spike/"
      ]
    }
  },
  {
    "id": "little-red",
    "name": "Little Red Riding Hood",
    "set": "little-red-riding-hood-vs-beowulf",
    "health": 14,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "The Huntsman",
      "count": 1,
      "health": 9,
      "attack": "ranged"
    },
    "ability": "Some card effects only trigger when their symbol matches the card currently sitting in her Basket.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/little-red",
    "tier": {
      "tier": "B",
      "rank": 30,
      "win": 51.8,
      "proven": 68
    },
    "guide": {
      "playstyle": "Versatile chip-damage hero who deals damage on attack and defense; her basket mechanic (wolf, knives, wolfsbane) rewards sequencing.",
      "tips": [
        "Most cards are versatile, so save them for the right moment.",
        "Keep the Huntsman near Little Red but away from the enemy, and use his damage early.",
        "Never Leave the Path is her key card; plan the basket state before playing it.",
        "Avoid the wolfsbane mode on Never Leave the Path unless you need cards."
      ],
      "combos": [
        {
          "cards": "Once Upon a Time + What Big Eyes You Have",
          "why": "Once Upon a Time's wolfsbane symbol sets up What Big Eyes You Have on the opponent's turn."
        },
        {
          "cards": "What a Terrible Big Mouth You Have + A Grimm Tale",
          "why": "Big Mouth mirrors the attacker's printed value but you take a hit; A Grimm Tale heals it back."
        },
        {
          "cards": "What's That in My Basket",
          "why": "Wild card that matches any basket symbol in your discard."
        },
        {
          "cards": "Long Have I Sought You",
          "why": "Stronger when the Huntsman is adjacent to the target."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-little-red-riding-hood/"
      ]
    }
  },
  {
    "id": "beowulf",
    "name": "Beowulf",
    "set": "little-red-riding-hood-vs-beowulf",
    "health": 17,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Wiglaf",
      "count": null,
      "health": 9,
      "attack": "melee"
    },
    "ability": "Starts with 1 Rage and gains 1 more whenever he takes damage, to a maximum of 3.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/beowulf",
    "tier": {
      "tier": "D",
      "rank": 52,
      "win": 44.9,
      "proven": 39
    },
    "guide": {
      "playstyle": "High-health melee bruiser who gains Rage when damaged and spends it to power up attacks; low mobility and few defense cards.",
      "tips": [
        "Plan Rage spending and try to keep around 2 Rage banked.",
        "The Equal of Grendel is his main defense and deters low-value attacks.",
        "Separating Beowulf and Wiglaf at times can bait the opponent and open Wiglaf plays.",
        "Save Skirmish for defense."
      ],
      "combos": [
        {
          "cards": "The Ancient Heirloom + Vigor and Courage",
          "why": "Rage spent on Heirloom can be regained since Vigor and Courage forces a random discard and grants Rage equal to its boost value."
        },
        {
          "cards": "Remnant of Valor",
          "why": "Wiglaf's adjacent 1-damage pulse also hits Beowulf, but that feeds him Rage, so play it next to him."
        },
        {
          "cards": "Hot for the Battle",
          "why": "Swaps Wiglaf and Beowulf after combat, rescuing Wiglaf and positioning Beowulf to attack."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-beowulf/"
      ]
    }
  },
  {
    "id": "deadpool",
    "name": "Deadpool",
    "set": "deadpool",
    "health": 10,
    "move": 2,
    "attack": "melee",
    "sidekick": null,
    "ability": "Heals 1 after each of his attacks; gets a joke +5 attack bonus if the opponent's real name is Logan.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/deadpool",
    "tier": {
      "tier": "C",
      "rank": 43,
      "win": 48.6,
      "proven": 8
    },
    "guide": {
      "playstyle": "Chaotic, unpredictable hero whose cards are parodies of other heroes' cards; heals after attacking but has weak defense.",
      "tips": [
        "He heals after attacks, so stay aggressive.",
        "Save high-value versatile cards for defense.",
        "Read conditional card text carefully.",
        "Shines as a wild card in 3-4 player games."
      ],
      "combos": [
        {
          "cards": "Chimichanga Break",
          "why": "Joke condition: value rises when food is on the table."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-deadpool/"
      ]
    }
  },
  {
    "id": "yennenga",
    "name": "Yennenga",
    "set": "battle-of-legends-volume-two",
    "health": 15,
    "move": 2,
    "attack": "ranged",
    "sidekick": {
      "name": "Archers",
      "count": 2,
      "health": "2 (front of token) / 1 (back)",
      "attack": "ranged"
    },
    "ability": "Can redirect damage she would take onto Archers in her zone.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/yennenga",
    "tier": {
      "tier": "S",
      "rank": 12,
      "win": 59.5,
      "proven": 60
    },
    "guide": {
      "playstyle": "Versatile ranged hero who wins through positioning, shunting damage onto her Archers so she can take risks.",
      "tips": [
        "Keep Archers in her zone and safely placed; they make a good wall even at 1 health.",
        "Position so opponents must move to reach her.",
        "Her movement is only 2, so rely on card effects to reposition.",
        "Do not throw Archers away."
      ],
      "combos": [
        {
          "cards": "One With the Land",
          "why": "Heals every fighter, so with Archers it is effectively 3 healing."
        },
        {
          "cards": "Master of the Hunt",
          "why": "Two extra actions for up to three attacks in a turn."
        },
        {
          "cards": "Rain of Arrows",
          "why": "Bonus attack after combat forces two defense cards."
        },
        {
          "cards": "Stallion Charge",
          "why": "Long post-combat move that damages fighters passed; clears 1-health sidekicks."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-yennenga/"
      ]
    }
  },
  {
    "id": "achilles",
    "name": "Achilles",
    "set": "battle-of-legends-volume-two",
    "health": 18,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Patroclus",
      "count": null,
      "health": 6,
      "attack": "melee"
    },
    "ability": "When Patroclus is defeated, discard 2 random cards.",
    "notes": "Ability text on the source may be partial.",
    "url": "https://www.the-unmatched.club/heroes/achilles",
    "tier": {
      "tier": "S",
      "rank": 13,
      "win": 59.3,
      "proven": 62
    },
    "guide": {
      "playstyle": "Durable melee bruiser with high health who becomes much stronger once Patroclus falls; prefers tight maps and central positioning.",
      "tips": [
        "Do not throw Patroclus away early; his death costs you 2 random cards, so time it.",
        "Chip Patroclus with your own self-damage cards so his death happens on your terms.",
        "After Patroclus dies, attack aggressively but keep defense in hand (Achilles' Heel punishes lost combats).",
        "Use Battle Hardened to recover Feint or a big attack such as Test for Weakness."
      ],
      "combos": [
        {
          "cards": "Battle Frenzy + The Day of Your Doom",
          "why": "Both can put damage onto Patroclus, letting you control when he dies and Achilles' attack bonus switches on."
        },
        {
          "cards": "Under Achilles' Helm",
          "why": "Swaps Achilles with Patroclus while he lives, protecting Achilles or forcing his ability to trigger."
        },
        {
          "cards": "Battle Hardened + Feint",
          "why": "Returns a discarded card such as Feint or Test for Weakness to hand for reuse."
        },
        {
          "cards": "Brothers in Arms",
          "why": "Gives an extra action after combat while Patroclus is alive, so the pair attacks as a team."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-achilles/"
      ]
    }
  },
  {
    "id": "bloody-mary",
    "name": "Bloody Mary",
    "set": "battle-of-legends-volume-two",
    "health": 16,
    "move": 3,
    "attack": "melee",
    "sidekick": null,
    "ability": "Gains an extra action at the start of her turn if she holds exactly 3 cards.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/bloody-mary",
    "tier": {
      "tier": "D",
      "rank": 62,
      "win": 42.2,
      "proven": 46
    },
    "guide": {
      "playstyle": "Aggressive, mobile melee hero who tries to sit on exactly three cards to gain a third action each turn.",
      "tips": [
        "Open with a maneuver even when adjacent to draw a card.",
        "End turns with about three cards (a fourth as spare defense).",
        "Save Speak Three Times for the third action when it is least likely to be cancelled.",
        "Count the opponent's remaining cancel effects like Feint."
      ],
      "combos": [
        {
          "cards": "Speak Three Times + Jump Scare",
          "why": "Speak Three Times becomes 7 on a third action; the guide pairs it with Jump Scare and recommends baiting Feint first."
        },
        {
          "cards": "Bloody Requiem + Bloody Reprise",
          "why": "Requiem forces a defense and Reprise's value scales with the defense card it faces."
        },
        {
          "cards": "Stolen Memories",
          "why": "Reveal their hand to choose the right third-action attack."
        },
        {
          "cards": "Closer Than She Appears",
          "why": "Grants an extra action independent of her ability; best when the opponent's hand is small."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-bloody-mary/"
      ]
    }
  },
  {
    "id": "sun-wukong",
    "name": "Sun Wukong",
    "set": "battle-of-legends-volume-two",
    "health": 17,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Clones",
      "count": 3,
      "health": 1,
      "attack": "melee"
    },
    "ability": "At the start of his turn he may take 1 damage to summon a Clone next to him; starts with no Clones out.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/sun-wukong",
    "tier": {
      "tier": "S",
      "rank": 4,
      "win": 64.1,
      "proven": 51
    },
    "guide": {
      "playstyle": "Clone-summoner who pays health to create clones that can all play his cards, enabling low-risk aggression; deck is somewhat predictable.",
      "tips": [
        "Summon clones only when they will matter.",
        "Bait defenses with low-value plays such as Regroup.",
        "Keep the real Wukong safe and use clones as decoys.",
        "Play Phoenix Form when several clones are out."
      ],
      "combos": [
        {
          "cards": "Ruyi Jingo Bang + Ox Form",
          "why": "Ox Form's threat makes opponents expect a Ruyi Jingo Bang, drawing out defenses."
        },
        {
          "cards": "Sly Monkey",
          "why": "Leaves a clone behind and moves the real Wukong to safety."
        },
        {
          "cards": "Infinite Strikes",
          "why": "Gains per adjacent friendly fighter, so clones (or team allies like Squirrel Girl) pump it."
        },
        {
          "cards": "72 Transformations + Phoenix Form",
          "why": "Returns a Form card from discard to hand for reuse."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-sun-wukong/"
      ]
    }
  },
  {
    "id": "luke-cage",
    "name": "Luke Cage",
    "set": "redemption-row",
    "health": 13,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Misty Knight",
      "count": null,
      "health": 6,
      "attack": "ranged"
    },
    "ability": "Takes 2 less combat damage from attacks.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/luke-cage",
    "tier": {
      "tier": "S",
      "rank": 11,
      "win": 59.9,
      "proven": 54
    },
    "guide": {
      "playstyle": "Straightforward tank who soaks hits and hits back harder; relies on Misty Knight to open the opponent up.",
      "tips": [
        "Keep Misty Knight alive for mix-ups.",
        "Bait big attacks into Luke and punish with Skin Like Titanium.",
        "Use Trash Talk to cancel effects and end the opponent's turn.",
        "Sweet Christmas (no effects) punishes Feint."
      ],
      "combos": [
        {
          "cards": "Skin Like Titanium",
          "why": "Deals damage equal to what Luke took, so lure big attacks first."
        },
        {
          "cards": "Still Standing + Trash Talk",
          "why": "Still Standing shuffles discards back so you can loop Trash Talk or another Still Standing."
        },
        {
          "cards": "Pushback + Hero for Hire",
          "why": "Pushback (and Regroup) are the preferred boosts for Hero for Hire."
        },
        {
          "cards": "Got My Back?",
          "why": "Misty swaps with Luke so he defends, setting up a strong next turn."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-luke-cage/"
      ]
    }
  },
  {
    "id": "moon-knight",
    "name": "Moon Knight",
    "set": "redemption-row",
    "health": 16,
    "move": 3,
    "attack": "melee",
    "sidekick": null,
    "ability": "Rotates identities each turn (Moon Knight, Khonshu, Mr. Knight), each giving a different bonus.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/moon-knight",
    "tier": {
      "tier": "A",
      "rank": 24,
      "win": 54.8,
      "proven": 63
    },
    "guide": {
      "playstyle": "Identity-juggling hero rotating Moon Knight (movement), Khonshu (attack) and Mr. Knight (defense); success comes from planning identity changes.",
      "tips": [
        "Use Moon Knight form to close distance at turn start.",
        "Khonshu ignores non-combat damage, so he handles Medusa and Dracula well.",
        "Plan around forced identity changes.",
        "Defense is low except as Mr. Knight."
      ],
      "combos": [
        {
          "cards": "I'm Not Real",
          "why": "As a first action it flips you to Khonshu for a stronger second attack, ending as Mr. Knight."
        },
        {
          "cards": "Travelers of the Night + I'm Not Real + Good Enough For Us + Fist of Khonshu",
          "why": "The guide's 'Perfect Knight' turn cycles all three identities in one turn."
        },
        {
          "cards": "A Totally Sane Thing to Do",
          "why": "As Khonshu it hits harder and the self-damage does not apply."
        },
        {
          "cards": "Past And Present Intermingle",
          "why": "As Mr. Knight, adds the top discard's boost value for a strong defense."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-moon-knight/"
      ]
    }
  },
  {
    "id": "ghost-rider",
    "name": "Ghost Rider",
    "set": "redemption-row",
    "health": 17,
    "move": 2,
    "attack": "melee",
    "sidekick": null,
    "ability": "Spends Hellfire (starts with 5) to raise his move to 4 and damage opposing fighters he passes through.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/ghost-rider",
    "tier": {
      "tier": "D",
      "rank": 66,
      "win": 40.2,
      "proven": 41
    },
    "guide": {
      "playstyle": "Resource-management hero built on five Hellfire tokens: hits hard and defends well while stocked, weak when empty.",
      "tips": [
        "Keep Control the Demon for defense since it scales with held Hellfire.",
        "Sometimes take 1-2 damage to save Hellfire.",
        "Blaze of Glory and Penance Stare are finishers but cost Hellfire.",
        "Plan refills with Chains of Hellfire and Stoke the Flames."
      ],
      "combos": [
        {
          "cards": "Hell Rides with Me + I Brought the Devil with Me",
          "why": "Chained for a multi-action turn without losing Hellfire."
        },
        {
          "cards": "Chains of Hellfire + Blaze of Glory",
          "why": "Refill Hellfire to 5, then spend it on a max-damage finisher (also Penance Stare)."
        },
        {
          "cards": "Stoke the Flames",
          "why": "Regains Hellfire equal to damage taken, best when absorbing a big hit."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-ghost-rider/"
      ]
    }
  },
  {
    "id": "daredevil",
    "name": "Daredevil",
    "set": "hells-kitchen",
    "health": 17,
    "move": 3,
    "attack": "melee",
    "sidekick": null,
    "ability": "With 2 or fewer cards in hand he may blind-boost his attack or defense during combat.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/daredevil",
    "tier": {
      "tier": "D",
      "rank": 47,
      "win": 46.8,
      "proven": 61
    },
    "guide": {
      "playstyle": "Resilient melee hero with a small deck who blind-boosts when his hand is low and recycles key cards from discard.",
      "tips": [
        "Blind boost when your hand is 2 or fewer, but not carelessly.",
        "Use Breather to recover key cards such as Devil of Hell's Kitchen.",
        "Take a Knee is a good defense that heals.",
        "Time Devil of Hell's Kitchen for when the deck runs out or as a mid-game surprise."
      ],
      "combos": [
        {
          "cards": "Devil of Hell's Kitchen + Breather",
          "why": "Breather can recover Devil of Hell's Kitchen if it gets discarded; the guide calls this key to his success."
        },
        {
          "cards": "Man Without Fear",
          "why": "Low-value attack meant to be blind boosted, possibly twice with a small hand."
        },
        {
          "cards": "Through Adversity",
          "why": "Moves through enemies dealing 1 damage each, helping against ranged and sidekick-heavy heroes."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-daredevil/"
      ]
    }
  },
  {
    "id": "elektra",
    "name": "Elektra",
    "set": "hells-kitchen",
    "health": 7,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "The Hand",
      "count": 4,
      "health": 1,
      "attack": "melee"
    },
    "ability": "The first time she would be defeated she leaves the board with the Hand and returns resurrected next turn with a fresh deck.",
    "notes": "Health 7 is the pre-resurrection side; resurrection flips the health dial (source).",
    "url": "https://www.the-unmatched.club/heroes/elektra",
    "tier": {
      "tier": "S",
      "rank": 1,
      "win": 68.8,
      "proven": 26
    },
    "guide": {
      "playstyle": "Two-phase hero: survive her fragile first life behind the Hand, then resurrect with a reshuffled discard and empowered cards for the finish.",
      "tips": [
        "Shield Elektra behind Hand sidekicks early and do not waste them.",
        "Choose when she dies, since your hand carries over.",
        "After resurrection, use Mesmerize to strip the opponent's best defense.",
        "Finish by surrounding the foe with Hand and repeating The Fist."
      ],
      "combos": [
        {
          "cards": "Mesmerize + Mystic Assassin + Sai + Intercept",
          "why": "The guide names this as a devastating hand to carry into resurrection."
        },
        {
          "cards": "Intercept + Sai",
          "why": "After resurrection Intercept can reveal Sai for a stronger defense while keeping Sai."
        },
        {
          "cards": "Snakeroot Clan",
          "why": "Swap with a Hand so the sidekick takes the hit."
        },
        {
          "cards": "Mystic Assassin",
          "why": "Big attack whose self-damage stops mattering after resurrection."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-elektra/"
      ]
    }
  },
  {
    "id": "bullseye",
    "name": "Bullseye",
    "set": "hells-kitchen",
    "health": 14,
    "move": 2,
    "attack": "ranged",
    "sidekick": null,
    "ability": "Can attack fighters up to 5 spaces away regardless of zones.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/bullseye",
    "tier": {
      "tier": "D",
      "rank": 63,
      "win": 42.0,
      "proven": 50
    },
    "guide": {
      "playstyle": "Long-range sniper who attacks from far away ignoring zones and slips out of reach; fragile if caught.",
      "tips": [
        "Attack from ranges the opponent cannot answer and use Tactical Retreat or Master Strategist to reposition.",
        "Arrogant But Effective is the main way to guarantee combat wins for his win-based cards.",
        "Build early pressure with I Planned to Be Here and For My Next Trick.",
        "Bait double attacks, answering with Arrogant But Effective then Right Between the Eyes."
      ],
      "combos": [
        {
          "cards": "Arrogant But Effective + World's Greatest Assassin",
          "why": "A guaranteed combat win switches on cards that care about having won combat this turn."
        },
        {
          "cards": "Arrogant But Effective + I'm Better and I'll Prove It",
          "why": "Second card becomes 6 once you've already won combat that turn."
        },
        {
          "cards": "I Never Miss + Right Between the Eyes",
          "why": "Right Between the Eyes can serve as the boost for I Never Miss."
        },
        {
          "cards": "Ricochet",
          "why": "Splash damage that can finish 1-health sidekicks."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-bullseye/"
      ]
    }
  },
  {
    "id": "dr-sattler",
    "name": "Dr. Ellie Sattler",
    "set": "jurassic-park-sattler-vs-trex",
    "health": 13,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Dr. Ian Malcolm",
      "count": null,
      "health": 7,
      "attack": "melee"
    },
    "ability": "Leaves insight tokens (5 in supply) where her fighters move; her cards interact with them.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/dr-sattler",
    "tier": {
      "tier": "B",
      "rank": 36,
      "win": 50.7,
      "proven": 38
    },
    "guide": {
      "playstyle": "Setup-heavy, low-health hero who places insight tokens in advance and then plays cards whose effects key off those tokens.",
      "tips": [
        "Plan several turns ahead and pre-place insight where fights will happen.",
        "Insight can stack on spaces with other tokens (e.g. traps, fog).",
        "Keep Dr. Malcolm alive; his cards support her plan.",
        "Use Woman Inherits the Earth mostly on defense so Feint cannot cancel it."
      ],
      "combos": [
        {
          "cards": "Chaotician + Violently, If Necessary",
          "why": "Place insight where you want, then Violently, If Necessary damages enemies on or next to insight."
        },
        {
          "cards": "Must Go Faster + Violently, If Necessary",
          "why": "Must Go Faster repositions both fighters anywhere to set up the insight trap."
        },
        {
          "cards": "I Think We're Back in Business",
          "why": "Value equals your hand size, so build a big hand first."
        },
        {
          "cards": "You Never Had Control, that's the Illusion",
          "why": "Scales with insight on the board (cap 7) but spends it."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-dr-sattler/"
      ]
    }
  },
  {
    "id": "t-rex",
    "name": "T. Rex",
    "set": "jurassic-park-sattler-vs-trex",
    "health": 27,
    "move": 1,
    "attack": "melee",
    "sidekick": null,
    "ability": "A large fighter that can attack up to 2 spaces away and draws a card at the end of each turn.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/t-rex",
    "tier": {
      "tier": "S",
      "rank": 5,
      "win": 63.0,
      "proven": 48
    },
    "guide": {
      "playstyle": "Huge-health, slow apex hunter with strong reach-2 attacks and few defenses; herds prey into range and devours.",
      "tips": [
        "Use movement cards to keep targets inside her attack reach.",
        "Attack aggressively but watch self-damaging attacks.",
        "Defend in ways that keep the opponent in range for your next strike."
      ],
      "combos": [
        {
          "cards": "Closer than She Appears + Ripples in the Water",
          "why": "Both help a slow T. Rex close distance (draw/action, and placement with a forced discard)."
        },
        {
          "cards": "Terrifying Roar",
          "why": "On defense it pins the opponent for a double attack next turn."
        },
        {
          "cards": "Reckless Lunge",
          "why": "High boost value makes it better as a booster than an attack."
        },
        {
          "cards": "You're Just Making Her Angry",
          "why": "Boost it to match the attack and return it to hand."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-t-rex/"
      ]
    }
  },
  {
    "id": "houdini",
    "name": "Harry Houdini",
    "set": "houdini-vs-the-genie",
    "health": 14,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Bess",
      "count": null,
      "health": 5,
      "attack": "melee"
    },
    "ability": "When he boosts a maneuver he may teleport to any space instead of moving.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/harry-houdini",
    "tier": {
      "tier": "S",
      "rank": 16,
      "win": 58.9,
      "proven": 50
    },
    "guide": {
      "playstyle": "Trickster built on boost effects that trigger immediately, escapes, and placing himself anywhere when he boosts a maneuver.",
      "tips": [
        "Bess's boost effects still work after she is defeated.",
        "Use Smoke and Mirrors to swap with Bess defensively.",
        "Save A Magician Never Reveals His Secrets for opponents who can't see your hand.",
        "Use The Big Reveal to return boosted cards for reuse."
      ],
      "combos": [
        {
          "cards": "The Big Reveal + A Magician Never Reveals His Secrets + Misdirection",
          "why": "Large attack plus Misdirection damage, then return Misdirection to hand."
        },
        {
          "cards": "The Big Reveal + And the Beautiful Bess! + All Part of the Show",
          "why": "Attack that also heals and grants an extra action, returning All Part of the Show."
        },
        {
          "cards": "Set the Stage",
          "why": "Look at the opponent's hand and discard their best defense before attacking."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-houdini/"
      ]
    }
  },
  {
    "id": "the-genie",
    "name": "The Genie",
    "set": "houdini-vs-the-genie",
    "health": 16,
    "move": 3,
    "attack": "ranged",
    "sidekick": null,
    "ability": "At the start of the turn may discard a card to gain an action.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/the-genie",
    "tier": {
      "tier": "D",
      "rank": 48,
      "win": 46.7,
      "proven": 63
    },
    "guide": {
      "playstyle": "Fast-cycling, versatile hero who treats cards as resources; built around Three Wishes and stacking extra actions.",
      "tips": [
        "Collect Three Wishes copies and play them back to back.",
        "Keep a near-full hand for costs and his ability, but don't end above 7.",
        "Keep a defense ready; his defense is weak.",
        "Discard This Is No Parlor Trick unless Three Wishes is set up."
      ],
      "combos": [
        {
          "cards": "Three Wishes + I Grant You... Death",
          "why": "Setting values to 4 turns this into a big damage play."
        },
        {
          "cards": "Three Wishes + Your Wish Is My Command",
          "why": "Stacks extra actions with his ability for a game-ending turn."
        },
        {
          "cards": "Three Wishes + Feint",
          "why": "Raises Feint to a usable attack value."
        },
        {
          "cards": "Imprisoned Wrath",
          "why": "Best at end of turn when over 7 cards: dump excess cards for damage."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-the-genie/"
      ]
    }
  },
  {
    "id": "squirrel-girl",
    "name": "Squirrel Girl",
    "set": "teen-spirit",
    "health": 13,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Squirrels",
      "count": 8,
      "health": 1,
      "attack": "melee"
    },
    "ability": "Summons a squirrel next to her each turn; starts with none on the board.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/squirrel-girl",
    "tier": {
      "tier": "D",
      "rank": 58,
      "win": 43.1,
      "proven": 9
    },
    "guide": {
      "playstyle": "Swarm hero who starts weak and snowballs by flooding the board with squirrels that power her attacks and mobility.",
      "tips": [
        "Get squirrels out quickly.",
        "Keep about four squirrels in the opponent's zone, but avoid stacking them in one spot.",
        "Squirrels pass through enemies to disrupt and bypass sidekicks.",
        "Use movement cards to reposition Squirrel Girl."
      ],
      "combos": [
        {
          "cards": "Kick Butts",
          "why": "Gains +1 for each squirrel adjacent to the target, so it scales with board presence."
        },
        {
          "cards": "Unbeatable Squirrel Girl",
          "why": "With four or more squirrels adjacent to the target it cancels effects and ignores value."
        },
        {
          "cards": "Fuzzball Special",
          "why": "Moves every squirrel after combat to reset the swarm."
        },
        {
          "cards": "Eat Nuts",
          "why": "Heals and adds a squirrel even into occupied spaces."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-squirrel-girl/"
      ]
    }
  },
  {
    "id": "ms-marvel",
    "name": "Ms. Marvel",
    "set": "teen-spirit",
    "health": 14,
    "move": 2,
    "attack": "melee",
    "sidekick": null,
    "ability": "May move 1 at turn start and can attack from up to 2 spaces away.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/ms-marvel",
    "tier": {
      "tier": "D",
      "rank": 53,
      "win": 44.4,
      "proven": 36
    },
    "guide": {
      "playstyle": "Aggressive reach-2 attacker who moves every turn to make foes chase her; weak defense, wants a large hand and good zone positioning.",
      "tips": [
        "Map and zones matter for many of her cards.",
        "Use her start-of-turn move to set up attacks.",
        "Keep 4+ cards since many cards scale with hand size.",
        "Play very aggressively."
      ],
      "combos": [
        {
          "cards": "Friends and Family + Big Wind Up",
          "why": "Friends and Family's boost value pushes Big Wind Up to 8."
        },
        {
          "cards": "Momentous Shift",
          "why": "Her start-of-turn move reliably turns on Momentous Shift's bonus."
        },
        {
          "cards": "Fangirl",
          "why": "Value equals hand size, up to 7."
        },
        {
          "cards": "Shrink! Shrink! Shrink!",
          "why": "When sharing no zones, forces a discard and repositions for next turn."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-ms-marvel/"
      ]
    }
  },
  {
    "id": "cloak-dagger",
    "name": "Cloak & Dagger",
    "set": "teen-spirit",
    "health": 8,
    "move": 2,
    "attack": "melee",
    "sidekick": null,
    "ability": "Cloak hitting for 2+ makes the opponent discard; Dagger hitting for 2+ grants an extra action.",
    "notes": "Source lists a single health value (8) and attack type for the pair; per-figure stats not verified.",
    "url": "https://www.the-unmatched.club/heroes/cloak-dagger",
    "tier": {
      "tier": "C",
      "rank": 42,
      "win": 48.8,
      "proven": 30
    },
    "guide": {
      "playstyle": "High-risk two-hero team: Dagger deals the damage while Cloak forces discards and repositions enemies; losing either loses the game.",
      "tips": [
        "Dagger is the damage dealer; save Lightforce Barrage as a finisher and never fire it at a sidekick.",
        "Use Cloak to strip cards and drag enemies into Dagger's reach.",
        "Keep both alive and plan around a few key cards."
      ],
      "combos": [
        {
          "cards": "Lightforce Barrage",
          "why": "If Dagger survives the self-damage, her REFRACTION ability grants another action to finish."
        },
        {
          "cards": "Channel the Dark + Perfect Balance",
          "why": "Pull the enemy next to Dagger and gain an action, enabling surprise attacks when their hand is low."
        },
        {
          "cards": "Chosen Fate + Lightforce Barrage",
          "why": "Shift health to Dagger before a late Barrage."
        },
        {
          "cards": "Darkforce Dimension",
          "why": "Repositions and forces a discard, stacking with Cloak's UMBRA discard effect."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-cloak-dagger/"
      ]
    }
  },
  {
    "id": "black-widow",
    "name": "Black Widow",
    "set": "for-king-and-country",
    "health": 13,
    "move": 2,
    "attack": "ranged",
    "sidekick": {
      "name": "Maria Hill",
      "count": null,
      "health": 6,
      "attack": "ranged"
    },
    "ability": "Starts with an extra card (The Moscow Protocol) in her opening hand.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/black-widow",
    "tier": {
      "tier": "D",
      "rank": 56,
      "win": 43.6,
      "proven": 53
    },
    "guide": {
      "playstyle": "Tricky, planning-heavy deck built around completing mission schemes while using deception to disrupt the opponent; for experienced players.",
      "tips": [
        "Prioritize completing missions.",
        "Play Fake Out as your second action to punish saved defenses.",
        "Acting Director of S.H.I.E.L.D. is her best defense; use it to protect Maria Hill.",
        "Hold Life Model Decoy until Maria Hill is in lethal range."
      ],
      "combos": [
        {
          "cards": "Acting Director of S.H.I.E.L.D.",
          "why": "Shuffles a scheme from discard back into the deck, letting you reuse missions."
        },
        {
          "cards": "Double Identity",
          "why": "Swap with Maria Hill to protect her."
        },
        {
          "cards": "Widow's Kiss",
          "why": "Pins opponents in place, stopping escapes and setting up double attacks."
        },
        {
          "cards": "Caught in a Web",
          "why": "Cancels the opponent's after-combat effects."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-black-widow/"
      ]
    }
  },
  {
    "id": "black-panther",
    "name": "Black Panther",
    "set": "for-king-and-country",
    "health": 14,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Shuri",
      "count": null,
      "health": 6,
      "attack": "ranged"
    },
    "ability": "Draws a card whenever he boosts; cards stored in his suit can only be used to boost.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/black-panther",
    "tier": {
      "tier": "B",
      "rank": 35,
      "win": 50.8,
      "proven": 56
    },
    "guide": {
      "playstyle": "Aggressive boost-centric hero who steals opponent cards into his suit and boosts with them for movement and draw; risks running out of cards.",
      "tips": [
        "Boost maneuvers and attacks whenever possible since each boost draws.",
        "Avoid over-defensive play to prevent exhaustion.",
        "Stored cards are removed from the opponent's deck, so some are worth leaving in the suit.",
        "Shuri is fragile; use Tactical Remote Scanning early."
      ],
      "combos": [
        {
          "cards": "Analyze and Adjust + Ancestral Insight",
          "why": "Both stash the opponent's top card into the suit, fueling future boosts and thinning their deck."
        },
        {
          "cards": "Wakanda Forever!",
          "why": "Can be boosted twice, and each boost triggers a draw."
        },
        {
          "cards": "Anti-Metal Claws",
          "why": "Adds the opposing card's boost value, useful for baiting high-value defenses."
        },
        {
          "cards": "Nanotriage Processor",
          "why": "Heals Shuri, and Black Panther too if in the same zone."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-black-panther/"
      ]
    }
  },
  {
    "id": "winter-soldier",
    "name": "Winter Soldier",
    "set": "for-king-and-country",
    "health": 15,
    "move": 2,
    "attack": "ranged",
    "sidekick": null,
    "ability": "Effects on his cards cannot be canceled.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/winter-soldier",
    "tier": {
      "tier": "D",
      "rank": 65,
      "win": 40.3,
      "proven": 41
    },
    "guide": {
      "playstyle": "Strong ranged fighter with high values and uncancellable effects, including drawback STAR effects that need careful timing; can recycle his deck to avoid exhaustion.",
      "tips": [
        "Time his STAR cards since their effects (good and bad) cannot be cancelled.",
        "Use A Boy Named Bucky to ignore STAR drawbacks for a turn.",
        "Build around Reprogram to recycle key cards.",
        "Prioritise Complete the Mission as a defense that reflects damage."
      ],
      "combos": [
        {
          "cards": "A Boy Named Bucky + Reflex Memories",
          "why": "The guide advises playing Reflex Memories only with Bucky to avoid its random self-discard."
        },
        {
          "cards": "A Boy Named Bucky + Bionic Arm",
          "why": "Use Bionic Arm adjacent as a second action with its drawback switched off."
        },
        {
          "cards": "Reprogram + Complete the Mission",
          "why": "Shuffle back his best defense for reliable reuse."
        },
        {
          "cards": "Reprogram + Marksman",
          "why": "Worth recycling on maps where its distance bonus regularly applies."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-winter-soldier/"
      ]
    }
  },
  {
    "id": "spider-man",
    "name": "Spider-Man",
    "set": "brains-and-brawn",
    "health": 15,
    "move": 3,
    "attack": "melee",
    "sidekick": null,
    "ability": "Attackers must reveal their attack card's printed value before he picks a defense.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/spiderman",
    "tier": {
      "tier": "D",
      "rank": 64,
      "win": 40.3,
      "proven": 33
    },
    "guide": {
      "playstyle": "Mobile, hard-hitting melee hero whose Spider-Sense reveals the printed value of incoming attacks; rewards players who know the opponent's deck.",
      "tips": [
        "Learn the opponent's deck to anticipate value-changing cards.",
        "Use movement cards to switch on Momentous Shift.",
        "Save Web Shooters for the opponent's decisive attacks.",
        "Play Snark when adjacent for a block plus a draw."
      ],
      "combos": [
        {
          "cards": "Momentous Shift + Swinging Kick",
          "why": "Movement from Swinging Kick (or Thwip!, Wall Crawler) makes Momentous Shift a 5."
        },
        {
          "cards": "Disarming Shot + With Great Power",
          "why": "With Great Power raises damage, which Disarming Shot converts into card draw."
        },
        {
          "cards": "Web Shooters",
          "why": "Caps combat damage at 2 against huge hits like Beastform, Forever Hyde or late Voyages."
        },
        {
          "cards": "Counter-Attack",
          "why": "With Spider-Sense knowledge, punishes attacks of 4 or more (as does Spider-Sense Tingling!)."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-spider-man/"
      ]
    }
  },
  {
    "id": "doctor-strange",
    "name": "Doctor Strange",
    "set": "brains-and-brawn",
    "health": 14,
    "move": 2,
    "attack": "ranged",
    "sidekick": {
      "name": "Wong",
      "count": null,
      "health": 6,
      "attack": "ranged"
    },
    "ability": "After combat he may take 1 damage to recycle his played card to the deck bottom and draw.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/doctor-strange",
    "tier": {
      "tier": "S",
      "rank": 14,
      "win": 59.3,
      "proven": 39
    },
    "guide": {
      "playstyle": "Versatile ranged caster who manipulates decks, heals, and uses Dark Pact to recycle played cards at a health cost.",
      "tips": [
        "Use Dark Pact after blind boosts to return the card best suited to the matchup.",
        "Usually boost Seven Suns of Cinnibus only once; a second boost risks a dud, especially on defense.",
        "Keep Doctor Strange and Wong adjacent to power their adjacency cards.",
        "Prioritise returning The Rings of Raggadorr when you need healing."
      ],
      "combos": [
        {
          "cards": "The Winds of Watoomb + Dark Pact",
          "why": "After Dark Pact tucks cards to the bottom, this attack shuffles decks so they come back sooner."
        },
        {
          "cards": "Eye of Agamotto + Dark Pact",
          "why": "Shuffle your hand into the deck and draw 5, refreshing a small or overfull hand."
        },
        {
          "cards": "Master of Kamar-Taj + Steadfast Disciple",
          "why": "Both get stronger when Wong is adjacent to the right fighter."
        },
        {
          "cards": "No, Really, I'm a Doctor + Eye of Agamotto",
          "why": "Putting a boost-3 card on top of the deck turns No, Really into a 3-point heal (also works with Bolts of Balthakk)."
        },
        {
          "cards": "The Rings of Raggadorr + Dark Pact",
          "why": "Healing on a win offsets Dark Pact's health cost."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-doctor-strange/"
      ]
    }
  },
  {
    "id": "she-hulk",
    "name": "She-Hulk",
    "set": "brains-and-brawn",
    "health": 20,
    "move": 2,
    "attack": "melee",
    "sidekick": null,
    "ability": "At turn start she may discard a card to deal its boost value as damage to a fighter in her zone.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/she-hulk",
    "tier": {
      "tier": "S",
      "rank": 10,
      "win": 60.3,
      "proven": 39
    },
    "guide": {
      "playstyle": "Offense-first bruiser with high attack and health whose Just Throw Something ability deals damage at range to pressure retreating opponents.",
      "tips": [
        "Use the ability selectively, mainly to finish or chip evasive foes.",
        "Get adjacent to make The Savage She-Hulk hit its top value.",
        "End turns adjacent to ranged fighters to stop them from kiting.",
        "Use Sensational to recover your best attacks."
      ],
      "combos": [
        {
          "cards": "Leap Toward + The Savage She-Hulk",
          "why": "Leap Toward closes distance so The Savage She-Hulk's adjacency mode is live."
        },
        {
          "cards": "Omega-Level Threat + Leap Toward",
          "why": "Shrinking their hand first makes the follow-up harder to answer."
        },
        {
          "cards": "Double Jeopardy",
          "why": "Draws and heals, giving more cards to discard to the special ability."
        },
        {
          "cards": "Nerve Cluster Strike",
          "why": "Prevents an adjacent opponent from leaving, trapping them."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-she-hulk/"
      ]
    }
  },
  {
    "id": "nikola-tesla",
    "name": "Nikola Tesla",
    "set": "adventures-tales-to-amaze",
    "health": 14,
    "move": 2,
    "attack": "ranged",
    "sidekick": null,
    "ability": "Charges coils each turn; with both charged he shocks and pushes adjacent foes.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/nikola-tesla",
    "tier": {
      "tier": "A",
      "rank": 20,
      "win": 56.0,
      "proven": 58
    },
    "guide": {
      "playstyle": "Ranged zone controller who builds coil charges and spends them to punish anyone entering his zone.",
      "tips": [
        "Coils charge each turn; manage them with cards too.",
        "Use range to funnel opponents.",
        "X-Ray Radiation can swing games."
      ],
      "combos": [
        {
          "cards": "Fully Charged + Death Ray",
          "why": "Fully Charged fills both coils; Death Ray scales from 4 to 7 when discharging both (decided after seeing defense)."
        },
        {
          "cards": "Lightning Storm",
          "why": "Discharge to damage every opponent in Tesla's zone, deterring rushes."
        },
        {
          "cards": "Kinetic Induction",
          "why": "Charges coils after combat so you start next turn full."
        },
        {
          "cards": "Repulsion Blast",
          "why": "Pushes the foe and lets Tesla reposition, plus a discard at 2 charges."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-nikola-tesla/"
      ]
    }
  },
  {
    "id": "golden-bat",
    "name": "The Golden Bat",
    "set": "adventures-tales-to-amaze",
    "health": 18,
    "move": 3,
    "attack": "melee",
    "sidekick": null,
    "ability": "+2 to his attacks on any turn he has not maneuvered.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/golden-bat",
    "tier": {
      "tier": "S",
      "rank": 7,
      "win": 61.7,
      "proven": 57
    },
    "guide": {
      "playstyle": "Simple, mobile hero who gets +2 on attacks when he has not maneuvered, so he sets up position and then strikes; weak defense.",
      "tips": [
        "Arrange turns so you can attack without maneuvering to get the +2.",
        "Make it unsafe for opponents to end turns near you.",
        "Vary attacks and defenses to stay unpredictable."
      ],
      "combos": [
        {
          "cards": "Alpine Fortress + Super Strength",
          "why": "Alpine Fortress moves and draws without a maneuver, then Super Strength hits for a reliable 7 that effects cannot cancel."
        },
        {
          "cards": "Terrifying Roar + Alpine Fortress",
          "why": "Roar locks melee foes in place; versus ranged, Alpine Fortress closes the gap next turn."
        },
        {
          "cards": "Skirmish",
          "why": "On defense it can pull the opponent into range for your next no-maneuver attack."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-golden-bat/"
      ]
    }
  },
  {
    "id": "annie-christmas",
    "name": "Annie Christmas",
    "set": "adventures-tales-to-amaze",
    "health": 14,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Charlie",
      "count": null,
      "health": 8,
      "attack": "ranged"
    },
    "ability": "+2 to her attacks when she has less health than the defender.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/annie-christmas",
    "tier": {
      "tier": "B",
      "rank": 34,
      "win": 51.1,
      "proven": 59
    },
    "guide": {
      "playstyle": "Melee hero whose attack bonus depends on having less health than her opponent, so she manipulates her own health total; high risk, high reward with solid defense.",
      "tips": [
        "Keep her health just below, not far below, the opponent's.",
        "Her base movement is low, so plan positioning (especially vs. ranged) and mind Charlie's relative position.",
        "Defense matters more than offense; hold her last-line defensive card for the critical turn."
      ],
      "combos": [
        {
          "cards": "Lagniappe",
          "why": "Self-damage to draw cards can drop Annie just under the opponent's health right before combat to switch on her attack bonus."
        },
        {
          "cards": "Slick Talker",
          "why": "Swaps Annie and Charlie so the other one defends, or lets Annie step in against an opponent dodging her."
        },
        {
          "cards": "Mississippi Queen",
          "why": "Prevents damage from dropping her below 1 for the turn; hold multiple copies for multi-turn fights."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-annie-christmas/"
      ]
    }
  },
  {
    "id": "dr-jill-trent",
    "name": "Dr. Jill Trent",
    "set": "adventures-tales-to-amaze",
    "health": 13,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Daisy",
      "count": null,
      "health": 6,
      "attack": "melee"
    },
    "ability": "Activates one gadget each turn, whose effect applies to her attacks.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/dr-jill-trent",
    "tier": {
      "tier": "S",
      "rank": 18,
      "win": 57.6,
      "proven": 53
    },
    "guide": {
      "playstyle": "Versatile all-rounder whose start-of-turn gadget choice and flexible cards let her adapt and mislead; rewards strategic play.",
      "tips": [
        "Pick gadgets to misdirect the opponent about your plan.",
        "Lean on her adaptable cards rather than one plan.",
        "Play Insightful Deduction early and defensively; hold the second until they draw the stacked cards."
      ],
      "combos": [
        {
          "cards": "Hypnoray Blaster",
          "why": "Pair with a high-value attack: the gadget can push the opponent into a weaker defense."
        },
        {
          "cards": "Ultrabiotic Tonic",
          "why": "Pair with a low-value attack to bait a big defense out of the opponent's hand."
        },
        {
          "cards": "Helpful Assistant",
          "why": "Shuffles up to 3 of her cards back into the deck to win the exhaustion race."
        },
        {
          "cards": "Stasis Diffuser",
          "why": "Locks the opponent's card to its printed value; good against Jekyll & Hyde and Dracula."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-jill-trent/"
      ]
    }
  },
  {
    "id": "oda-nobunaga",
    "name": "Oda Nobunaga",
    "set": "suns-origin",
    "health": 13,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Honor Guard",
      "count": null,
      "health": 6,
      "attack": "melee"
    },
    "ability": "Other friendly fighters in his zone get +1 to their combat cards.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/oda-nobunaga",
    "tier": {
      "tier": "D",
      "rank": 46,
      "win": 46.9,
      "proven": 17
    },
    "guide": {
      "playstyle": "Positional flanker: set up Oda and his Honor Guard on both sides of an enemy, then cash in flank-conditional attacks while the guard benefits from Oda's zone aura.",
      "tips": [
        "Get Oda and the Honor Guard both adjacent to an opposing fighter.",
        "Be patient, use terrain to trap ranged fighters, and do not burn strong attacks at once.",
        "Keep the Honor Guard in Oda's zone for its bonuses."
      ],
      "combos": [
        {
          "cards": "Battle Maneuvers + Fire and Flames",
          "why": "Battle Maneuvers on defense can set up a flank, which pushes Fire and Flames from 3 to 5."
        },
        {
          "cards": "Spring the Trap",
          "why": "Swap so a friendly fighter defends, saving Oda and setting up a flank."
        },
        {
          "cards": "Demon King of the Sixth Heaven",
          "why": "Scheme that damages each flanked opponent."
        },
        {
          "cards": "Student of War",
          "why": "Strong attack that draws cards equal to damage dealt."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-oda-nobunaga/"
      ]
    }
  },
  {
    "id": "tomoe-gozen",
    "name": "Tomoe Gozen",
    "set": "suns-origin",
    "health": 14,
    "move": 2,
    "attack": "ranged",
    "sidekick": null,
    "ability": "Deals 1 damage to an opposing hero that leaves her zone.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/tomoe-gozen",
    "tier": {
      "tier": "B",
      "rank": 29,
      "win": 52.0,
      "proven": 60
    },
    "guide": {
      "playstyle": "Ranged hero who wants to stay close; Attack of Opportunity punishes enemies who leave her zone, letting her control movement and hold ground.",
      "tips": [
        "Use her ability to dictate enemy movement and shoot until they enter range.",
        "Hold position with defenses so enemies must come into her zone.",
        "Drag ranged heroes out from behind sidekicks, then close in."
      ],
      "combos": [
        {
          "cards": "A Warrior's Way",
          "why": "Moves the target hero and places Tomoe next to it, setting up her ability's damage; the guide cites Medusa and Robin Hood as targets."
        },
        {
          "cards": "Refuse to Retreat",
          "why": "Locks Tomoe in place and forces a discard if the attacker ends adjacent."
        },
        {
          "cards": "Lord Kiso's Final Stand",
          "why": "Moves through sidekicks to escape pins (e.g. Oda's flanks)."
        },
        {
          "cards": "Five Against Thousands",
          "why": "Discard a card to return it to hand for back-to-back attacks."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-tomoe-gozen/"
      ]
    }
  },
  {
    "id": "shakespeare",
    "name": "William Shakespeare",
    "set": "slings-and-arrows",
    "health": 13,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Actors",
      "count": 3,
      "health": 1,
      "attack": "melee"
    },
    "ability": "Builds a 'line' of combat cards; exactly 10 syllables triggers a bonus completion effect.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/shakespeare",
    "tier": {
      "tier": "D",
      "rank": 54,
      "win": 44.3,
      "proven": 36
    },
    "guide": {
      "playstyle": "High-planning hero who builds a 'line' of played cards to exactly 10 syllables to fire uncancellable completion effects, protected by his Actors.",
      "tips": [
        "Plan lines from cards already in hand.",
        "Going over 10 syllables discards the line with no payoff.",
        "Use Actors to shield low-health Shakespeare.",
        "Opponent cards also add syllables; watch them."
      ],
      "combos": [
        {
          "cards": "All Are Punished + My Kingdom For A Horse",
          "why": "4 + 6 syllables complete a line; My Kingdom For A Horse then grants 2 actions."
        },
        {
          "cards": "Horror + The Ides of March",
          "why": "Horror builds a line and The Ides of March finishes it, baiting a big defense and dealing unblockable damage."
        },
        {
          "cards": "Once More Unto The Breach",
          "why": "Pairs with 4-syllable cards; completing on defense returns defeated Actors."
        },
        {
          "cards": "Again",
          "why": "Returns the first card of the line to hand to reshape the line."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-shakespeare/"
      ]
    }
  },
  {
    "id": "hamlet",
    "name": "Hamlet",
    "set": "slings-and-arrows",
    "health": 15,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Rosencrantz & Guildenstern",
      "count": null,
      "health": 6,
      "attack": "melee"
    },
    "ability": "Each turn chooses To Be (extra draw) or Not To Be (self-damage for +2 attack).",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/hamlet",
    "tier": {
      "tier": "D",
      "rank": 72,
      "win": 34.9,
      "proven": 27
    },
    "guide": {
      "playstyle": "Approachable melee hero who each turn picks 'To Be' (extra card draw when maneuvering) or 'Not To Be' (self-damage for stronger attacks), trading tempo against health.",
      "tips": [
        "Choose a side of The Question every turn based on whether you need cards or damage.",
        "Maneuvering repeatedly under To Be can still drain your hand, so watch hand size.",
        "Use Not To Be for big hits since his best printed attack is only 3.",
        "Play aggressively but protect his health, since Not To Be costs life."
      ],
      "combos": [{"cards": "Not To Be + The Play's the Thing", "why": "Take Not To Be's 2 damage on Hamlet himself, then attack with The Play's the Thing. One player says it hits for 5, makes your opponent discard a random card and can heal Hamlet back up, so the health you paid comes right back. Put the damage on Rosencrantz & Guildenstern instead and the heal usually does nothing.", "source": "https://boardgamegeek.com/thread/3510389/article/46647528"}, {"cards": "The Rest Is Silence", "why": "A defense card that ends the turn after combat. Hamlet defends first, so the attacker loses any actions they had left and their own after-combat tricks never happen.", "source": "https://boardgamegeek.com/thread/3351575/article/44723060"}],
      "sources": [
        "https://www.thefamilygamers.com/unmatched-slings-arrows/",
        "https://opinionatedgamers.com/2024/05/31/unmatched-the-valiant-never-taste-of-death-but-once/",
        "https://gridbeast.gg/unmatched-slings-and-arrows/",
        "https://boardgamegeek.com/thread/3510389",
        "https://boardgamegeek.com/thread/3351575"
      ]
    }
  },
  {
    "id": "titania",
    "name": "Titania",
    "set": "slings-and-arrows",
    "health": 12,
    "move": 2,
    "attack": "ranged",
    "sidekick": {
      "name": "Oberon",
      "count": null,
      "health": 6,
      "attack": "melee"
    },
    "ability": "Keeps a face-up Glamour card from a separate deck whose ongoing effect helps her.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/titania",
    "tier": {
      "tier": "C",
      "rank": 45,
      "win": 47.6,
      "proven": 51
    },
    "guide": {
      "playstyle": "Straightforward hero powered by six glamour cards that grant flexible ongoing effects; discarded glamours pump some cards.",
      "tips": [
        "Balance discarding glamours (powers some cards) against keeping a useful one active.",
        "Glamour of Jealousy lets Titania and Oberon swap defenders.",
        "Glamour of Rhyme makes schemes grant extra actions.",
        "The Moon Looks Down recycles a discarded glamour."
      ],
      "combos": [
        {
          "cards": "What Fools These Mortals Be + Queen of the Fairies",
          "why": "Shuffle away their Feint, then Queen of the Fairies (scaling with discarded glamours) hits big."
        },
        {
          "cards": "Met By Moonlight + A Momentary Glance",
          "why": "Oberon lands next to Titania, drawing enemies into her zone for A Momentary Glance damage."
        },
        {
          "cards": "Glamour of Rhyme + Gift of the Fair Folk",
          "why": "Free schemes set up a big attack turn."
        },
        {
          "cards": "Fairy Song + Queen of the Fairies",
          "why": "Fairy Song grows with discarded glamour and boosts Queen of the Fairies if played first."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-titania/"
      ]
    }
  },
  {
    "id": "the-wayward-sisters",
    "name": "The Wayward Sisters",
    "set": "slings-and-arrows",
    "health": 6,
    "move": 2,
    "attack": "melee",
    "sidekick": null,
    "ability": "Played cards go into a cauldron and can be spent as ingredients to cast spells after attacking.",
    "notes": "Health 6 as listed; source does not say whether this is per sister or how many sister figures there are.",
    "url": "https://www.the-unmatched.club/heroes/the-wayward-sisters",
    "tier": {
      "tier": "D",
      "rank": 49,
      "win": 46.2,
      "proven": 38
    },
    "guide": {
      "playstyle": "Three fragile witches who brew cauldron spells from card ingredients for healing, repositioning, unblockable damage and extra actions.",
      "tips": [
        "Casting empties the cauldron, so excess ingredients are waste.",
        "Plan spells around ingredient pairs.",
        "Use Ward on defense to reposition the attacker.",
        "Play The Stars Align early before a Sister falls."
      ],
      "combos": [
        {
          "cards": "Something Wicked This Way Comes",
          "why": "Casts two different spells without using cauldron ingredients."
        },
        {
          "cards": "All-Seeing Familiar",
          "why": "Returns a discard to the cauldron so you can cast even from an empty cauldron."
        },
        {
          "cards": "Unnatural Remedy",
          "why": "Turns cauldron cards into repeated healing on one Sister."
        },
        {
          "cards": "Pricking of My Thumbs",
          "why": "Reflects the combat damage you took back at the attacker."
        }
      ],
      "sources": [
        "https://gridbeast.gg/unmatched-the-wayward-sisters/"
      ]
    }
  },
  {
    "id": "geralt-of-rivia",
    "name": "Geralt of Rivia",
    "set": "the-witcher-steel-silver",
    "health": 16,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Dandelion",
      "count": null,
      "health": 5,
      "attack": "ranged"
    },
    "ability": "Chooses potion, armor and sword gear at setup and shuffles copies into his deck.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/geralt-of-rivia",
    "tier": {
      "tier": "B",
      "rank": 37,
      "win": 50.5,
      "proven": 53
    },
    "guide": {
      "playstyle": "Balanced, methodical melee hero who customises his deck before play with chosen gear (weapon, armour, potion) to suit the matchup; Dandelion is a weak ranged sidekick.",
      "tips": [
        "Pick gear for the specific opponent; the loadout defines his early game.",
        "Dandelion is fragile and has few cards; reviewers often saw him removed early."
      ],
      "combos": [{"cards": "GEAR: Tawny Owl", "why": "While this potion is ongoing, Geralt may ignore effects that would make him discard from his hand. That shrugs off discard attacks like Triss's Merigold's Hailstorm, but not Yennefer's Incinerate, which needs real discards.", "source": "https://boardgamegeek.com/thread/3422551/article/45335631"}, {"cards": "Witcher Senses", "why": "Lets Geralt dig through his deck for a GEAR card, then shuffles itself back in, so he can fetch the gear he needs right now.", "source": "https://boardgamegeek.com/thread/3427585/article/45421344"}, {"cards": "GEAR: Armor of the Forgotten Wolf", "why": "Its after-combat text ends the turn. Geralt defends first, so the attacker's after-combat effects and leftover actions simply vanish.", "source": "https://boardgamegeek.com/thread/3687825/article/47508567"}],
      "sources": [
        "https://opinionatedgamers.com/2024/12/17/unmatched-which-witcher/",
        "https://www.meeplemountain.com/reviews/unmatched-the-witcher-steel-and-silver/",
        "https://spacebiff.com/2025/01/22/unmatched-witcher/",
        "https://boardgamegumbo.wordpress.com/2025/02/01/the-next-wish-unmatched-the-witcher-steel-silver-review/",
        "https://boardgamegeek.com/thread/3422551",
        "https://boardgamegeek.com/thread/3427585",
        "https://boardgamegeek.com/thread/3687825"
      ]
    }
  },
  {
    "id": "ciri",
    "name": "Ciri",
    "set": "the-witcher-steel-silver",
    "health": 15,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Ihuarraquax",
      "count": null,
      "health": 7,
      "attack": "melee"
    },
    "ability": "Effects on her cards cannot be canceled.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/ciri",
    "tier": {
      "tier": "A",
      "rank": 21,
      "win": 55.8,
      "proven": 44
    },
    "guide": {
      "playstyle": "Slow-building melee hero: Source icons in her discard power up her cards, and at 7+ Source cards her effects become uncancellable; Ihuarraquax adds speed.",
      "tips": [
        "Be patient early and feed Source icons into the discard.",
        "Weigh playing a Source card now versus saving it for a stronger later play.",
        "Use Ihuarraquax's mobility to strike and retreat in one turn.",
        "Aim to finish before your deck runs out."
      ],
      "combos": [
        {
          "cards": "Lion Cub of Cintra",
          "why": "The guide describes it as a heavy strike that can decide the final turn."
        },
        {
          "cards": "The Lady of Space and Time",
          "why": "Returns cards to your deck, extending her late game."
        },
        {
          "cards": "Zireael",
          "why": "Damages and forces a discard."
        }
      ],
      "sources": [
        "https://boardgamegumbo.wordpress.com/2025/02/01/the-next-wish-unmatched-the-witcher-steel-silver-review/",
        "https://opinionatedgamers.com/2024/12/17/unmatched-which-witcher/",
        "https://www.meeplemountain.com/reviews/unmatched-the-witcher-steel-and-silver/"
      ]
    }
  },
  {
    "id": "ancient-leshen",
    "name": "Ancient Leshen",
    "set": "the-witcher-steel-silver",
    "health": 13,
    "move": 1,
    "attack": "ranged",
    "sidekick": {
      "name": "Wolves",
      "count": 2,
      "health": 1,
      "attack": "melee"
    },
    "ability": "+3 to its attacks after it has already attacked that turn; its Wolves have move 3.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/ancient-leshen",
    "tier": {
      "tier": "D",
      "rank": 50,
      "win": 46.1,
      "proven": 45
    },
    "guide": {
      "playstyle": "Attack-focused ranged monster backed by fast melee Wolf sidekicks; can leave the board as a murder of crows and reappear anywhere.",
      "tips": [
        "Be wary attacking it up close: Heart of the Forest allows a double attack with a bonus on the second.",
        "Use Wolves to harass, though they are hard to keep alive.",
        "Its vanish ability is especially strong in free-for-alls to escape gang-ups."
      ],
      "combos": [
        {
          "cards": "Vanish Into Murder",
          "why": "Damages enemies then removes the Leshen from the board for a turn."
        },
        {
          "cards": "Strength of the Pack",
          "why": "Ongoing scheme that adds a Wolf and helps the Leshen recover health."
        }
      ],
      "sources": [
        "https://boardgamegumbo.wordpress.com/2025/02/01/the-next-wish-unmatched-the-witcher-steel-silver-review/",
        "https://opinionatedgamers.com/2024/12/17/unmatched-which-witcher/",
        "https://spacebiff.com/2025/01/22/unmatched-witcher/"
      ]
    }
  },
  {
    "id": "yennefer-triss",
    "name": "Yennefer & Triss",
    "set": "the-witcher-realms-fall",
    "health": 14,
    "move": 2,
    "attack": "ranged",
    "sidekick": {
      "name": "Triss (or Yennefer)",
      "count": null,
      "health": 6,
      "attack": "ranged"
    },
    "ability": "At setup choose Yennefer or Triss as the hero; the other is the sidekick.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/yennefer-triss",
    "tier": {
      "tier": "S",
      "rank": 17,
      "win": 57.9,
      "proven": 50
    },
    "guide": {
      "playstyle": "Tag-team sorceresses sharing one deck: you choose which is the hero and which the sidekick; most cards are usable by either.",
      "tips": [
        "Pick the lead based on the matchup; it changes tempo and card use.",
        "Yennefer can boost her attacks; Triss damages an adjacent fighter when she plays a scheme.",
        "Treat the sidekick as a strong second fighter since most cards are 'Any'."
      ],
      "combos": [{"cards": "Incinerate + Yennefer's boost", "why": "A 7-value attack whose effects can't be cancelled. The only way out is to discard 2 cards, and Yennefer can boost it even higher. One player calls it 'just broken', while others say she's still beatable.", "source": "https://boardgamegeek.com/thread/3414701/article/45263450"}, {"cards": "Merigold's Hailstorm, then Incinerate", "why": "After a Hailstorm hit, the opponent picks a punishment: discard 2 cards, take 3 damage, or lose the top 4 cards of their deck. Drain their hand first, and they can't afford the 2 discards that Incinerate demands.", "source": "https://boardgamegeek.com/thread/3422551/article/45357434"}],
      "sources": [
        "https://opinionatedgamers.com/2024/12/17/unmatched-which-witcher/",
        "https://beastiegeeks.com/2025/11/30/unmatched-the-witcher-realms-fall-honest-and-precise-review/",
        "https://spacebiff.com/2025/01/22/unmatched-witcher/",
        "https://boardgamegeek.com/thread/3414701",
        "https://boardgamegeek.com/thread/3422551"
      ]
    }
  },
  {
    "id": "philippa",
    "name": "Philippa",
    "set": "the-witcher-realms-fall",
    "health": 12,
    "move": 2,
    "attack": "ranged",
    "sidekick": {
      "name": "Dijkstra",
      "count": null,
      "health": 6,
      "attack": "melee"
    },
    "ability": "At turn end she may draw up to a hand of 4.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/philippa",
    "tier": {
      "tier": "D",
      "rank": 55,
      "win": 44.1,
      "proven": 47
    },
    "guide": {
      "playstyle": "Control/efficiency caster who draws up to four cards at end of turn for steady card flow, at the risk of decking faster; has zone-wide chain lightning and an owl form to stay out of reach.",
      "tips": [
        "Her hand refill lets her keep attacking and defending without spending actions on draw.",
        "Against her, decide whether to engage early or limit her card advantage.",
        "Chain lightning is strong against sidekick-heavy heroes like Eredin."
      ],
      "combos": [{"cards": "Polymorphy", "why": "Key card: this scheme gives Philippa a move of 5 and lets her land almost anywhere, which makes her hard to pin down. It's lost at the end of her turn unless she's in a zone with an enemy, so it pushes her to stay close to the fight."}, {"cards": "Chain Lightning", "why": "Key card against decks with lots of sidekicks: it hits every enemy in her zone for 1. In one reviewer's game it knocked out three of Eredin's Red Riders at once."}],
      "sources": [
          "https://www.meeplemountain.com/reviews/unmatched-the-witcher-steel-and-silver/",
          "https://spacebiff.com/2025/01/22/unmatched-witcher/",
        "https://opinionatedgamers.com/2024/12/17/unmatched-which-witcher/",
        "https://beastiegeeks.com/2025/11/30/unmatched-the-witcher-realms-fall-honest-and-precise-review/",
        "https://spacebiff.com/2025/01/22/unmatched-witcher/"
      ]
    }
  },
  {
    "id": "eredin",
    "name": "Eredin",
    "set": "the-witcher-realms-fall",
    "health": 14,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Red Riders",
      "count": 4,
      "health": 1,
      "attack": "melee"
    },
    "ability": "Once all his Red Riders are defeated he becomes Enraged (+1 combat cards, move 3).",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/eredin",
    "tier": {
      "tier": "S",
      "rank": 15,
      "win": 59.0,
      "proven": 45
    },
    "guide": {
      "playstyle": "High-damage bruiser with four Red Rider sidekicks that crowd the board; if all Riders fall he becomes Enraged (faster, +1 combat values, stronger cards).",
      "tips": [
        "Decide when to preserve Riders for board pressure and when to let them fall to trigger Enraged.",
        "Riders limit how far prey can retreat.",
        "Philippa's chain lightning is his main counter."
      ],
      "combos": [{"cards": "Icy Guile + a Red Rider", "why": "Defeat one of your own Red Riders to ignore the value of your opponent's card. It even blanks Yennefer's uncancellable Incinerate, and every Rider you spend brings Eredin closer to Enraged.", "source": "https://boardgamegeek.com/thread/3559770/article/46477446"}, {"cards": "Portal Defense", "why": "Eredin swaps places with a friendly fighter next to him, who becomes the defender, and you draw the cards. An experienced player warns it gets much weaker once he's Enraged, because his Red Riders are gone.", "source": "https://boardgamegeek.com/thread/3446819/article/45536749"}],
      "sources": [
        "https://opinionatedgamers.com/2024/12/17/unmatched-which-witcher/",
        "https://beastiegeeks.com/2025/11/30/unmatched-the-witcher-realms-fall-honest-and-precise-review/",
        "https://spacebiff.com/2025/01/22/unmatched-witcher/",
        "https://boardgamegeek.com/thread/3559770",
        "https://boardgamegeek.com/thread/3446819"
      ]
    }
  },
  {
    "id": "blackbeard",
    "name": "Blackbeard",
    "set": "battle-of-legends-volume-three",
    "health": 13,
    "move": 2,
    "attack": "ranged",
    "sidekick": {
      "name": "Sea Dogs",
      "count": 2,
      "health": 1,
      "attack": "melee"
    },
    "ability": "Spends doubloons for extra actions and must pay one when he takes combat damage.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/blackbeard",
    "tier": {
      "tier": "S",
      "rank": 8,
      "win": 61.2,
      "proven": 48
    },
    "guide": {
      "playstyle": "Ranged pirate built around a doubloon economy: spend doubloons for extra actions, while many card effects fire unless the opponent pays him a ransom; Sea Dogs pin enemies in melee.",
      "tips": [
        "Choose between hoarding doubloons (to guarantee card bonuses) and spending them on extra actions.",
        "Use Sea Dogs to block combat damage so his triggers keep firing and to pin targets for his ranged shots.",
        "Starving the opponent of doubloons limits their ability to cancel his effects.",
        "Reviewers note he does well on Venice and struggles against Loki."
      ],
      "combos": [{"cards": "Scourge of the Seven Seas", "why": "Three treats in one card: Blackbeard heals 2, summons a Sea Dog and gains an action. Your opponent can pay doubloons to cancel some of it, but every coin they pay goes straight into Blackbeard's pocket.", "source": "https://boardgamegeek.com/thread/3763692/article/48140315"}, {"cards": "Queen Anne's Revenge", "why": "A 7-value attack that your opponent can shrink by paying a ransom. In one player's game, Yennefer defended with Paralyzing Fetters, which locks the value at its printed 7, so nobody could pay to shrink it and her own card backfired.", "source": "https://boardgamegeek.com/thread/3560354/article/46484327"}],
      "sources": [
        "https://opinionatedgamers.com/2025/07/25/unmatched-battle-of-legends-volume-iii/",
        "https://www.thefamilygamers.com/unmatched-volume-3/",
        "https://whatsericplaying.com/2026/07/13/unmatched-volume-3/",
        "https://boardgamegeek.com/thread/3763692",
        "https://boardgamegeek.com/thread/3560354"
      ]
    }
  },
  {
    "id": "chupacabra",
    "name": "Chupacabra",
    "set": "battle-of-legends-volume-three",
    "health": 14,
    "move": 3,
    "attack": "melee",
    "sidekick": null,
    "ability": "May draw a card after each attack.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/chupacabra",
    "tier": {
      "tier": "D",
      "rank": 51,
      "win": 45.6,
      "proven": 43
    },
    "guide": {
      "playstyle": "Straightforward, fast, sidekick-less aggressor that draws a card after each attack and gets stronger as its health drops; recommended for newcomers.",
      "tips": [
        "Press attacks quickly and often; the post-attack draw keeps your hand stocked.",
        "Taking some early damage powers up low-health cards.",
        "Save big defenses for when you are near zero health.",
        "Hold effect-cancelling cards for later."
      ],
      "combos": [
        {
          "cards": "Feeding + Wounded Beast",
          "why": "Both get stronger at 7 health or less, so they pair with letting yourself take damage."
        },
        {
          "cards": "The More You Struggle",
          "why": "Deals double the value of the defense card played against it, punishing big blocks."
        },
        {
          "cards": "Blood in the Air",
          "why": "The guide notes it leverages Chupacabra's post-attack card draw."
        }
      ],
      "sources": [
        "https://opinionatedgamers.com/2025/07/25/unmatched-battle-of-legends-volume-iii/",
        "https://www.thefamilygamers.com/unmatched-volume-3/",
        "https://whatsericplaying.com/2026/07/13/unmatched-volume-3/"
      ]
    }
  },
  {
    "id": "pandora",
    "name": "Pandora",
    "set": "battle-of-legends-volume-three",
    "health": 14,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Kakodaemons",
      "count": 2,
      "health": 1,
      "attack": "melee"
    },
    "ability": "Each turn she pushes her luck revealing Miseries from Pandora's Box, taking damage for each revealed.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/pandora",
    "tier": {
      "tier": "D",
      "rank": 60,
      "win": 42.3,
      "proven": 41
    },
    "guide": {
      "playstyle": "Push-your-luck hero who opens a seven-card box of miseries each turn for benefits, risking damage at three feathers; Kakodaemon sidekicks arrive via card effects and guard her.",
      "tips": [
        "Know when to stop revealing; reviewers usually stop at two feathers.",
        "Some cards scale with the number of miseries revealed, rewarding deeper draws when you can afford it.",
        "Let enemies come to you rather than chasing them.",
        "Use Kakodaemons to block routes to Pandora."
      ],
      "combos": [{"cards": "Woe (misery card)", "why": "This is the misery that summons a Kakodaemon into Pandora's zone, and her sidekicks don't start on the board, so it's how her helpers show up. It needs an empty space in her zone, and one fan says not flipping it turn after turn is one of the few times she feels bad to play.", "source": "https://boardgamegeek.com/thread/3606687/article/46852128"}, {"cards": "Celestial Raiments", "why": "Its text says to ignore the value of your opponent's card, so even a giant attack's number counts for nothing.", "source": "https://boardgamegeek.com/thread/3738527/article/47935989"}],
      "sources": [
        "https://opinionatedgamers.com/2025/07/25/unmatched-battle-of-legends-volume-iii/",
        "https://www.thefamilygamers.com/unmatched-volume-3/",
        "https://whatsericplaying.com/2026/07/13/unmatched-volume-3/",
        "https://gamingtrend.com/reviews/unmatched-battle-of-legends-volume-three-review-a-fitting-finale/",
        "https://boardgamegeek.com/thread/3606687",
        "https://boardgamegeek.com/thread/3738527"
      ]
    }
  },
  {
    "id": "loki",
    "name": "Loki",
    "set": "battle-of-legends-volume-three",
    "health": 16,
    "move": 2,
    "attack": "melee",
    "sidekick": null,
    "ability": "His Trick cards go into the opponent's hand; he gains move for each Trick they hold.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/loki",
    "tier": {
      "tier": "C",
      "rank": 40,
      "win": 49.4,
      "proven": 48
    },
    "guide": {
      "playstyle": "Disruptive trickster whose Trick cards go into the opponent's hand when played, clogging it and increasing Loki's movement; discarded Tricks return to him.",
      "tips": [
        "As Loki, track where Tricks are, since their value depends on who holds them.",
        "Against Loki, hit hard and fast; reviewers found aggression works best.",
        "Against Loki, playing his Tricks removes them from play, while holding them speeds him up and discarding returns them."
      ],
      "combos": [{"cards": "Looking for Trouble", "why": "When Loki attacks with it, he looks in your hand and picks which card you defend with. A player who helped test the set calls it 'a very powerful card'.", "source": "https://boardgamegeek.com/thread/3519757/article/46146627"}, {"cards": "Freyja's Rescue", "why": "It swaps the values of the two cards in the fight, so a puny 2 can steal the opponent's big number. It's also a Trick: if an opponent plays it from their hand, Loki heals 3.", "source": "https://boardgamegeek.com/thread/3645942/article/47167312"}],
      "sources": [
        "https://opinionatedgamers.com/2025/07/25/unmatched-battle-of-legends-volume-iii/",
        "https://www.thefamilygamers.com/unmatched-volume-3/",
        "https://whatsericplaying.com/2026/07/13/unmatched-volume-3/",
        "https://boardgamegeek.com/thread/3519757",
        "https://boardgamegeek.com/thread/3645942"
      ]
    }
  },
  {
    "id": "leonardo",
    "name": "Leonardo",
    "set": "adventures-teenage-mutant-ninja-turtles",
    "health": 16,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Splinter",
      "count": null,
      "health": 9,
      "attack": "melee"
    },
    "ability": "At the start of his turn he may move any one fighter 1 space.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/leonardo",
    "tier": {
      "tier": "C",
      "rank": 41,
      "win": 49.3,
      "proven": 32
    },
    "guide": {
      "playstyle": "Tactical leader focused on positioning and teamwork; at start of turn he can move any fighter (friend or foe) one space.",
      "tips": [
        "Use the start-of-turn nudge to set up attacks without moving yourself.",
        "Some cards gain extra effects (e.g. +2) when he or the target is adjacent to an ally."
      ],
      "combos": [{"cards": "Fearless Leader", "why": "One player calls it his best card, but it shines in team games and is much weaker one-on-one, so Leo is at his best with friends around.", "source": "https://boardgamegeek.com/thread/3627045/article/47020118"}],
      "sources": [
        "https://restorationgames.com/leader-to-wild-card-turtles-of-unmatched-adventures/",
        "https://medium.com/meeplegamers/unmatched-adventures-teenage-mutant-ninja-turtles-from-restoration-games-review-7628d3e1224d",
        "https://boardgamegeek.com/thread/3627045"
      ]
    }
  },
  {
    "id": "raphael",
    "name": "Raphael",
    "set": "adventures-teenage-mutant-ninja-turtles",
    "health": 17,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Casey Jones",
      "count": null,
      "health": 8,
      "attack": "ranged"
    },
    "ability": "The first combat he loses each turn grants him an extra action.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/raphael",
    "tier": {
      "tier": "S",
      "rank": 9,
      "win": 60.7,
      "proven": 44
    },
    "guide": {
      "playstyle": "Aggressive close-range brawler who gains an action the first time each turn he loses combat; many cards reward having lost earlier or playing many cards in a turn.",
      "tips": [
        "Treat a lost combat as setup for follow-ups, not a waste.",
        "Play multiple cards in a turn to power cards that count cards played."
      ],
      "combos": [{"cards": "Crowd Control + Payback Time", "why": "Throw a small attack that draws you a card, lose the fight on purpose, and Raph's ability hands you an extra action. Then Payback Time hits for 5 because you lost a combat.", "source": "https://boardgamegeek.com/thread/3636693/article/47090719"}, {"cards": "Turtle Power boosted by Unbridled Rage", "why": "Use Unbridled Rage's boost of 4 on Turtle Power for a 7-value hit, when you'd rather not dump your whole hand into Unbridled Rage itself.", "source": "https://boardgamegeek.com/thread/3636693/article/47090719"}, {"cards": "Relentless", "why": "It comes back AND replaces itself with a fresh card. One player found it so strong they house-ruled it, while others point to Raph's win rate and say he's fine.", "source": "https://boardgamegeek.com/thread/3768803/article/48180684"}],
      "sources": [
        "https://restorationgames.com/leader-to-wild-card-turtles-of-unmatched-adventures/",
        "https://medium.com/meeplegamers/unmatched-adventures-teenage-mutant-ninja-turtles-from-restoration-games-review-7628d3e1224d",
        "https://boardgamegeek.com/thread/3636693",
        "https://boardgamegeek.com/thread/3768803"
      ]
    }
  },
  {
    "id": "donatello",
    "name": "Donatello",
    "set": "adventures-teenage-mutant-ninja-turtles",
    "health": 14,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Metalhead",
      "count": null,
      "health": 7,
      "attack": "melee"
    },
    "ability": "Can draw 2 (bottoming one) when maneuvering; played inventions grant lasting bonuses.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/donatello",
    "tier": {
      "tier": "A",
      "rank": 22,
      "win": 55.5,
      "proven": 40
    },
    "guide": {
      "playstyle": "Control/utility specialist who tucks invention/upgrade cards under himself for lasting attack, defense and scheme bonuses.",
      "tips": [
        "Play upgrades early so their benefits accumulate.",
        "Suited to optimising turns and quietly supporting teammates."
      ],
      "combos": [{"cards": "The Future of Ninjutsu", "why": "A scheme that peeks at the top card of a deck, draws you a card and gains an action. One player says this deck control helps him find his inventions, and he's slow until they're out.", "source": "https://boardgamegeek.com/thread/3627045/article/47020118"}, {"cards": "Smoke Bomb", "why": "One player says Donatello's extra actions really start once Smoke Bomb is played, and after his inventions are in, his attacks, defenses and schemes all get better.", "source": "https://boardgamegeek.com/thread/3627045/article/47020118"}],
      "sources": [
        "https://restorationgames.com/leader-to-wild-card-turtles-of-unmatched-adventures/",
        "https://medium.com/meeplegamers/unmatched-adventures-teenage-mutant-ninja-turtles-from-restoration-games-review-7628d3e1224d",
        "https://boardgamegeek.com/thread/3627045"
      ]
    }
  },
  {
    "id": "michelangelo",
    "name": "Michelangelo",
    "set": "adventures-teenage-mutant-ninja-turtles",
    "health": 14,
    "move": 3,
    "attack": "melee",
    "sidekick": {
      "name": "April O'Neil",
      "count": null,
      "health": 6,
      "attack": "ranged"
    },
    "ability": "Draws after every attack or scheme but has a hand size of only 3.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/michelangelo",
    "tier": {
      "tier": "D",
      "rank": 57,
      "win": 43.6,
      "proven": 25
    },
    "guide": {
      "playstyle": "Agile wild card with a smaller (3-card) hand who cycles cards on attacks and schemes and chains actions toward a big hit.",
      "tips": [
        "He draws after attacks and schemes, offsetting his small hand.",
        "Use extra-action cards to chain attacks."
      ],
      "combos": [{"cards": "Nunchaku + Boisterous Beatdown + Cowabunga!!", "why": "Nunchaku gains an action and powers up his attacks, Boisterous Beatdown gains even more, and Cowabunga!! gets +1 for every other card you played this turn. One player's dream turn ended with a 12-value Cowabunga!!, but you need lucky draws.", "source": "https://boardgamegeek.com/thread/3628010/article/47024259"}, {"cards": "Shell Insertion", "why": "April O'Neil's card gains an action and makes the opponent discard. One player thinks it makes April a sidekick worth knocking out early.", "source": "https://boardgamegeek.com/thread/3628010/article/47031148"}],
      "sources": [
        "https://restorationgames.com/leader-to-wild-card-turtles-of-unmatched-adventures/",
        "https://medium.com/meeplegamers/unmatched-adventures-teenage-mutant-ninja-turtles-from-restoration-games-review-7628d3e1224d",
        "https://boardgamegeek.com/thread/3628010"
      ]
    }
  },
  {
    "id": "shredder",
    "name": "Shredder",
    "set": "tmnt-shredder-vs-krang",
    "health": 15,
    "move": 3,
    "attack": "melee",
    "sidekick": {
      "name": "Bebop & Rocksteady",
      "count": null,
      "health": 7,
      "attack": "melee"
    },
    "ability": "Deploys Foot soldiers each turn and can attack enemies adjacent to them.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/shredder",
    "tier": {
      "tier": "B",
      "rank": 28,
      "win": 52.0,
      "proven": 33
    },
    "guide": {
      "playstyle": "Positioning/control hero who places Foot soldiers to open attack angles for himself and Bebop & Rocksteady.",
      "tips": [
        "Think about where Foot soldiers create openings for Shredder and his sidekicks."
      ],
      "combos": [],
      "sources": [
        "https://restorationgames.com/villain-or-hero-shredder-krang-unmatched-tmnt/"
      ]
    }
  },
  {
    "id": "krang",
    "name": "Krang",
    "set": "tmnt-shredder-vs-krang",
    "health": 16,
    "move": 1,
    "attack": "melee",
    "sidekick": null,
    "ability": "Controls 3 doomsday machines that add move and let him reroll his destruction die.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/krang",
    "tier": {
      "tier": "C",
      "rank": 39,
      "win": 49.4,
      "proven": 23
    },
    "guide": {
      "playstyle": "Push-your-luck hero who activates Doomsday Machines for more movement and rolls the Die of Ultimate Destruction for combat boosts; can deactivate machines to reroll.",
      "tips": [
        "More active machines mean more mobility.",
        "Deactivating a machine to reroll trades power for control."
      ],
      "combos": [
        {
          "cards": "Molecular Amplification Unit",
          "why": "Activates a Doomsday Machine and rolls the die to boost combat value."
        },
        {
          "cards": "IQ of 968",
          "why": "Activates all Doomsday Machines at once for a power spike."
        }
      ],
      "sources": [
        "https://restorationgames.com/villain-or-hero-shredder-krang-unmatched-tmnt/"
      ]
    }
  },
  {
    "id": "muhammad-ali",
    "name": "Muhammad Ali",
    "set": "muhammad-ali-vs-bruce-lee",
    "health": 16,
    "move": 3,
    "attack": "melee",
    "sidekick": null,
    "ability": "Switches between boxing stances after winning a combat, starting in Float Like a Butterfly.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/muhammad-ali",
    "tier": {
      "tier": "B",
      "rank": 33,
      "win": 51.2,
      "proven": 35
    },
    "guide": {
      "playstyle": "Stance fighter who switches between Float Like a Butterfly (reach and utility effects) and Sting Like a Bee (+2 attack) when he wins combat; builds toward a flurry finish.",
      "tips": [
        "Spend most of the game in Butterfly and use its stance-only effects.",
        "Land quick hits, then fall back into defense to draw out big defenses and Feints before the decisive exchange.",
        "Look through his deck before playing; reviewers say he has a learning curve.",
        "Against Bruce Lee, carry several defenses that also create space."
      ],
      "combos": [
        {
          "cards": "Close and Clinch + Answer the Bell",
          "why": "Designer notes these set up turns; Close and Clinch can return him to Butterfly and counters Lee's end-of-turn hop."
        },
        {
          "cards": "Stick and Move + Louisville Lip",
          "why": "Designer notes these draw out opposing defenses ahead of bigger hits."
        },
        {
          "cards": "Jab + Stronger Than Skill",
          "why": "Designer notes these strip defenses."
        },
        {
          "cards": "The Greatest",
          "why": "Finisher best held until the opponent's premium defenses are gone; its bonus actions feed a string of attacks."
        }
      ],
      "sources": [
        "https://restorationgames.com/design-diary-lee-vs-ali/",
        "https://www.meeplemountain.com/reviews/unmatched-lee-vs-ali/",
        "https://gamingtrend.com/reviews/unmatched-lee-vs-ali-review/",
        "https://restorationgames.com/unmatched-the-ultimate-fighters-bruce-lee-vs-muhammad-ali/"
      ]
    }
  },
  {
    "id": "bruce-lee-2",
    "name": "Bruce Lee (2025 version)",
    "set": "muhammad-ali-vs-bruce-lee",
    "health": null,
    "move": null,
    "attack": "melee",
    "sidekick": null,
    "ability": null,
    "notes": "Source page shows '-' for health, move and ability; stats NOT verified. Do not assume they match the 2019 Bruce Lee.",
    "url": "https://www.the-unmatched.club/heroes/bruce-lee-2",
    "tier": null,
    "guide": null
  },
  {
    "id": "john-henry",
    "name": "John Henry",
    "set": "stars-and-stripes",
    "health": 17,
    "move": 2,
    "attack": "melee",
    "sidekick": null,
    "ability": "Lays track tokens in his zone each turn; spaces with track don't count when he moves.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/john-henry",
    "tier": {
      "tier": "A",
      "rank": 25,
      "win": 53.9,
      "proven": 41
    },
    "guide": {
      "playstyle": "Solo mobility bruiser who lays a rail track token each turn, ignores track spaces when moving, and fuels Hammer cards with distance moved.",
      "tips": [
        "Build the railroad network early, near where the fight will be.",
        "Plan turns around movement distance to power Hammer cards.",
        "Do not dump your hand in one burst; with no sidekick you can't easily rebuild it."
      ],
      "combos": [{"cards": "Striking Fire + a HAMMER attack", "why": "HAMMER cards get their bonus when John Henry has crossed 4 different paths this turn. Striking Fire moves him up to 4 spaces and gives an extra action, so he can line up two powered hammers, even on his first turn (5 spaces if he lays a track first).", "source": "https://boardgamegeek.com/thread/3697297/article/47585883"}],
      "sources": [
        "https://restorationgames.com/gameplay-of-unmatched-stars-and-stripes/",
        "https://opinionatedgamers.com/2026/05/08/unmatched-stars-stripes-forever/",
        "https://gamingtrend.com/reviews/unmatched-stars-and-stripes-review/",
        "https://boardgamegeek.com/thread/3697297"
      ]
    }
  },
  {
    "id": "rosie-the-riveter",
    "name": "Rosie the Riveter",
    "set": "stars-and-stripes",
    "health": 15,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Wendy the Welder",
      "count": null,
      "health": 7,
      "attack": null
    },
    "ability": "Activates one of four mech-suit upgrades each turn, resetting once all four are on.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/rosie-the-riveter",
    "tier": {
      "tier": "B",
      "rank": 31,
      "win": 51.8,
      "proven": 20
    },
    "guide": {
      "playstyle": "Ramp hero who powers up a four-part mech suit over turns; if all four are active at end of turn the suit shuts down, so she manages activation carefully with help from Wendy the Welder.",
      "tips": [
        "Use her cards to ramp the suit quickly and to switch off the fourth part to stay at peak.",
        "Check which cards interact with upgrades before committing.",
        "Against her, remove Wendy early since her cards help Rosie stay powered."
      ],
      "combos": [],
      "sources": [
        "https://restorationgames.com/gameplay-of-unmatched-stars-and-stripes/",
        "https://opinionatedgamers.com/2026/05/08/unmatched-stars-stripes-forever/",
        "https://gamingtrend.com/reviews/unmatched-stars-and-stripes-review/"
      ]
    }
  },
  {
    "id": "wyatt-earp",
    "name": "Wyatt Earp",
    "set": "stars-and-stripes",
    "health": 15,
    "move": 2,
    "attack": "ranged",
    "sidekick": {
      "name": "Doc Holliday",
      "count": null,
      "health": 8,
      "attack": "ranged"
    },
    "ability": "After winning an attack, picks a bonus (draw, free attack, or move 1), each once per turn.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/wyatt-earp",
    "tier": {
      "tier": "B",
      "rank": 32,
      "win": 51.3,
      "proven": 46
    },
    "guide": {
      "playstyle": "Fast ranged gunslinger who, with ranged partner Doc Holliday, chains effects off winning combat (Showdown: draw, free attack, or move).",
      "tips": [
        "Keep pressing while you are winning combats to chain Showdown triggers.",
        "Track which attacks by either fighter trigger effects and sequence accordingly.",
        "Doc's exclusive cards are all worth playing.",
        "Defense is weaker than offense; against him, removing Doc is a priority."
      ],
      "combos": [{"cards": "Gunfight at the O.K. Corral", "why": "After combat you deal 1 damage, then your opponent deals 1, twice over, and it can hit ANY fighter on the board. One player's tip: use it to wipe out sidekicks with 1 health, like Medusa's Harpies.", "source": "https://boardgamegeek.com/thread/3752464/article/48053493"}],
      "sources": [
        "https://restorationgames.com/gameplay-of-unmatched-stars-and-stripes/",
        "https://opinionatedgamers.com/2026/05/08/unmatched-stars-stripes-forever/",
        "https://gamingtrend.com/reviews/unmatched-stars-and-stripes-review/",
        "https://boardgamegeek.com/thread/3752464"
      ]
    }
  },
  {
    "id": "george-washington",
    "name": "George Washington",
    "set": "stars-and-stripes",
    "health": 14,
    "move": 2,
    "attack": "melee",
    "sidekick": {
      "name": "Culper Spies",
      "count": 3,
      "health": 1,
      "attack": "melee"
    },
    "ability": "Can attach ruse tokens to attacks, which the opponent may remove by discarding a random card.",
    "notes": null,
    "url": "https://www.the-unmatched.club/heroes/george-washington",
    "tier": {
      "tier": "D",
      "rank": 67,
      "win": 40.0,
      "proven": 24
    },
    "guide": {
      "playstyle": "Bluffing spymaster: places Ruse tokens beside attacks to trigger Ruse effects on some cards, with Culper Spy sidekicks; the opponent must guess whether the Ruse is real.",
      "tips": [
        "Place a Ruse beside a card with no Ruse effect to bait a random discard or a Feint.",
        "Defenders can discard a random card to void a Ruse, so manage when you commit tokens.",
        "Some cards regain used Ruse tokens."
      ],
      "combos": [{"cards": "Agent 711 + a ruse token", "why": "Attack with a ruse on Agent 711 and, if Washington wins the combat, it deals 7 more damage after combat. Per the official rulings it still goes off even if Washington is knocked out in that same fight.", "source": "https://boardgamegeek.com/thread/3746560/article/48005956"}],
      "sources": [
        "https://restorationgames.com/gameplay-of-unmatched-stars-and-stripes/",
        "https://opinionatedgamers.com/2026/05/08/unmatched-stars-stripes-forever/",
        "https://gamingtrend.com/reviews/unmatched-stars-and-stripes-review/",
        "https://boardgamegeek.com/thread/3746560"
      ]
    }
  }
];

export const UM_TIER_SOURCE = {
  "name": "Unmatched Fighter Chooser",
  "url": "https://unmatched.machaka.net/tiers",
  "asOf": "2026-10-12",
  "games": 77422,
  "from": "Tabletop League (formerly UMLeague) and UnmatchedRu, via The Unmatched Club"
};

export const UM_RULES: { topic: string; text: string; sources: string[] }[] = [
  {
    "topic": "Setup",
    "text": "Set each hero's and sidekick's health on their dials (a sidekick with no dial has 1 health). Shuffle your deck and draw 5 cards. The younger player puts their hero on a starting space and goes first, and the older player takes the other one. Sidekicks start on their own spaces in the same zone as their hero.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
      "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
    ]
  },
  {
    "topic": "Turn",
    "text": "You must take exactly 2 actions every turn. You can't skip one, but you can do the same action twice. The actions are Maneuver, Scheme and Attack.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
      "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
    ]
  },
  {
    "topic": "Maneuver",
    "text": "Draw 1 card first (you have to). Then move each of your fighters up to your move number, one space at a time. You can walk through your own fighters but not your opponent's, you can't stop on a taken space, and you're allowed to stay put.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf"
    ]
  },
  {
    "topic": "Boost",
    "text": "While you maneuver, you can throw away one card to add its BOOST number to your move. You ignore what that card normally does. Some cards let you boost other things too, like attacks. Even cards a knocked-out fighter can't play anymore can still be thrown away for a boost.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
      "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
    ]
  },
  {
    "topic": "Scheme",
    "text": "Play a scheme card face up, say which fighter is using it, do what it says, then put it in your discard pile. You can't play a scheme if the fighters it names have been knocked out.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
      "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
    ]
  },
  {
    "topic": "Attack and range",
    "text": "You need an attack card and someone to hit. Melee fighters can only hit someone right next to them. Ranged fighters can hit someone next to them or anyone in the same zone.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
      "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
    ]
  },
  {
    "topic": "Card types",
    "text": "Cards are attack, defense, versatile or scheme. Versatile cards work for attacking or defending, and count as both. Every card shows who can use it, its number, and its BOOST number.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf"
    ]
  },
  {
    "topic": "Combat",
    "text": "The attacker plays an attack card face down, and the defender can play a defense card face down. Flip both at once. First do anything that says 'immediately', then 'during combat', then deal damage (attack number minus defense number). Last come the 'after combat' effects, which still happen even if someone got knocked out, unless the game is already over. If both players have an effect at the same time, the defender goes first. Then both cards go to the discard piles.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
      "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
    ]
  },
  {
    "topic": "Winning a combat",
    "text": "The attacker wins the combat if the attack itself did at least 1 damage. If not, the defender wins. Damage from card effects doesn't count for this.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
      "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
    ]
  },
  {
    "topic": "Exhausting your deck",
    "text": "Ran out of cards? You don't reshuffle. Every time you'd have to draw from an empty deck, each of your fighters takes 2 damage instead. Ouch.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
      "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
    ]
  },
  {
    "topic": "Hand limit",
    "text": "At the end of your turn, throw away cards until you have 7 or fewer.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
      "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
    ]
  },
  {
    "topic": "Defeat and winning",
    "text": "A fighter at 0 health is knocked out, and a knocked-out sidekick leaves the board. Knock out the other player's hero and you win on the spot. Beating only their sidekicks doesn't win the game.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
      "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
    ]
  },
  {
    "topic": "Multiplayer",
    "text": "You can also play 3 or 4 players, everyone for themselves, or 2 vs 2 in teams. In teams, you win when both heroes on the other team are knocked out.",
    "sources": [
      "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf"
    ]
  }
];

export const UM_RULEBOOKS = [
  "https://restorationgames.com/wp-content/uploads/2023/05/UM-M-BaB-Rulebook.pdf",
  "https://restorationgames.com/wp-content/uploads/2019/07/UM-RobinHoodvBigfoot_Rules-two-page.pdf"
];

export const UM_TIPS: { tip: string; source: string; author: string }[] = [
  {
    "tip": "Moving is also how you draw cards, so every turn is a choice: fill up your hand, or spend it. Treat your cards like money.",
    "source": "https://www.tabletopbattles.com/boardhammer-unmatched-review",
    "author": "Goonhammer"
  },
  {
    "tip": "Save your defense cards for the big hits, and keep cards that cancel effects (like Feint) for the moment they change the fight.",
    "source": "https://www.tabletopbattles.com/boardhammer-unmatched-review",
    "author": "Goonhammer"
  },
  {
    "tip": "Ranged fighters can hang back and shoot anyone in their zone. Melee fighters have to walk up and get close.",
    "source": "https://www.tabletopbattles.com/boardhammer-unmatched-review",
    "author": "Goonhammer"
  },
  {
    "tip": "Having more cards than your opponent usually matters more than having more health, until someone gets close to 0.",
    "source": "https://www.shelfside.co/reviews-2023/unmatchedvol1-review",
    "author": "Shelfside"
  },
  {
    "tip": "Decide early: knock out the enemy sidekicks first, or go straight for the hero?",
    "source": "https://www.shelfside.co/reviews-2023/unmatchedvol1-review",
    "author": "Shelfside"
  }
];

export const UM_STARTER_SETS: { set: string; claim: string; source: string }[] = [
  {
    "set": "Battle of Legends, Volume One",
    "claim": "Zatu calls it the best starter, especially for families: four heroes that show off the main ways to play.",
    "source": "https://zatu.com/blogs/features/which-unmatched-game-should-i-buy"
  },
  {
    "set": "Any four-hero box",
    "claim": "More fighters for your money, and you can play 2 vs 2 straight away.",
    "source": "https://www.shelfside.co/reviews-2023/unmatchedvol1-review"
  },
  {
    "set": "Robin Hood vs. Bigfoot",
    "claim": "A two-hero box that adds no extra rules, so you can open it and play.",
    "source": "https://www.tabletopbattles.com/boardhammer-unmatched-review"
  }
];

export const UM_UPCOMING: { name: string; status: string; heroes?: string[] | null; url: string }[] = [
  {
    "name": "Unmatched: Hellboy",
    "status": "Pre-order as of Oct 2026, not confirmed released",
    "heroes": [
      "Hellboy",
      "Liz Sherman",
      "Abe Sapien",
      "Baba Yaga"
    ],
    "url": "https://restorationgames.com/gen-con-2026-blueprints-announcement-recap/"
  },
  {
    "name": "Unmatched: Once Upon a Time",
    "status": "Announced (Gen Con 2026), no date",
    "heroes": null,
    "url": "https://restorationgames.com/gen-con-2026-blueprints-announcement-recap/"
  },
  {
    "name": "Unmatched Adventures: A Study in Terror",
    "status": "Announced (Gen Con 2026), no date",
    "heroes": null,
    "url": "https://restorationgames.com/gen-con-2026-blueprints-announcement-recap/"
  },
  {
    "name": "Unmatched: Slay the Spire",
    "status": "Announced (Gen Con 2026), 'early days'",
    "heroes": null,
    "url": "https://restorationgames.com/gen-con-2026-blueprints-announcement-recap/"
  },
  {
    "name": "Unmatched: Digital Edition (Dire Wolf Digital)",
    "status": "Beta on Steam; full release upcoming",
    "heroes": null,
    "url": "https://restorationgames.com/gen-con-2026-blueprints-announcement-recap/"
  }
];
