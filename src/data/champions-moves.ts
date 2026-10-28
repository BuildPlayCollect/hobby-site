// champions-moves.ts: type, category, power, accuracy and a one-line description for every move in Pokémon Champions.
// Type, category and power come from @smogon/calc (its "generation 0" is Champions), the same engine that works out damage.
// Accuracy and descriptions come from @pkmn/dex, Pokémon Showdown's own data (MIT licence), which describes
// Scarlet and Violet. Champions changed a few moves, so the fixes below follow Showdown's Champions rules
// (github.com/smogon/pokemon-showdown, data/mods/champions/moves.ts). Re-check them when a new regulation starts.
import { Generations, Move } from '@smogon/calc';
import { Dex } from '@pkmn/dex';

export type MoveInfo = { type: string; cat: 'Physical' | 'Special' | 'Status'; power: number; acc: number | null; desc: string };

// Champions types that @smogon/calc doesn't have yet.
const TYPE: Record<string, string> = { 'Growth': 'Grass' };

// Champions accuracy that differs from Scarlet and Violet.
const ACCURACY: Record<string, number> = { 'Crabhammer': 95, 'Gear Grind': 90, 'Make It Rain': 95, 'Syrup Bomb': 90 };

// Champions effects that differ from Scarlet and Violet, so Showdown's description would be wrong.
const DESC: Record<string, string> = {
  'Belch': 'Can be used any time; no Berry needed first.',
  'Dire Claw': '30% chance to sleep, poison, or paralyze target.',
  'Freeze-Dry': 'Super effective on Water. Never freezes.',
  'Iron Head': '20% chance to make the target flinch.',
  'Make It Rain': "Lowers the user's Sp. Atk by 2. Hits foe(s).",
  'Milk Drink': 'Heals the user or an adjacent ally by 50% of its max HP.',
  'Moonblast': "10% chance to lower the target's Sp. Atk by 1.",
  'Salt Cure': 'Deals 1/16 max HP each turn; 1/8 on Steel, Water.',
  'Toxic Thread': "Lowers the target's Speed by 2 and poisons it.",
};

export function championsMoves(): Record<string, MoveInfo> {
  const gen = Generations.get(0);
  const sv = Dex.forGen(9);
  const out: Record<string, MoveInfo> = {};
  for (const m of gen.moves) {
    if (m.name === '(No Move)') continue;
    const move = new Move(gen, m.name);
    if (!move.type) continue; // a few old moves the calc still lists but Champions dropped
    const d = sv.moves.get(m.name);
    out[m.name] = {
      type: TYPE[m.name] ?? move.type,
      cat: move.category,
      power: move.bp,
      acc: ACCURACY[m.name] ?? (d.exists && d.accuracy !== true ? d.accuracy : null),
      desc: DESC[m.name] ?? (d.exists ? d.shortDesc : ''),
    };
  }
  return out;
}
