// pokemon.ts: looks up a Pokémon's types (for the coloured chips) and its icon address.
// Types come from @smogon/calc (the open-source engine behind the Showdown damage calculator, MIT licence).
import { Generations, toID } from '@smogon/calc';
import SPRITES from '../data/pokemon-sprites.json';

const CHAMPIONS = Generations.get(0); // "generation 0" is how @smogon/calc names Pokémon Champions

export function species(name: string) {
  return CHAMPIONS.species.get(toID(name)) ?? CHAMPIONS.species.get(toID(name.split('-')[0]));
}

export function types(name: string): string[] {
  return [...(species(name)?.types ?? [])];
}

// Icons are PokeAPI's Pokémon HOME pictures (github.com/PokeAPI/sprites), shrunk to 128px and saved in public/sprites/pokemon/ as <PokeAPI id>.webp.
// src/data/pokemon-sprites.json matches each Champions Pokémon name to its PokeAPI id.
// A Pokémon with no saved icon gets '' and the page just shows its name.
export function spriteUrl(name: string) {
  const s = species(name);
  const id = (SPRITES as Record<string, number>)[s?.name ?? name];
  return id ? `/sprites/pokemon/${id}.webp` : '';
}

// Type colours used for chips (picked to read well with dark text).
export const TYPE_COLOURS: Record<string, string> = {
  Normal: '#c8c4b4', Fire: '#ff9d55', Water: '#6fa8ff', Electric: '#ffd84a', Grass: '#7fd36b', Ice: '#9fe3e3',
  Fighting: '#e57360', Poison: '#c48ae0', Ground: '#e3c06b', Flying: '#a9b8ff', Psychic: '#ff8fb6', Bug: '#b8d24a',
  Rock: '#cdb86b', Ghost: '#9d8bd6', Dragon: '#8f8bff', Dark: '#9c8a7c', Steel: '#b9c4d1', Fairy: '#f7a8e0',
};
