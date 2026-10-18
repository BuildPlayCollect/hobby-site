// Deck art and the logo for the Unmatched pages, added in Pages CMS ("Unmatched art").
// A file naming a fighter that doesn't exist stops the build with a message saying which.
import { existsSync } from 'node:fs';
import { getCollection } from 'astro:content';
import { UM_FIGHTERS } from '../data/unmatched';

export type UmArt = { image: string; thumb?: string; alt: string; credit: string };

export async function getUnmatchedArt() {
  const art = new Map<string, UmArt>();
  for (const a of await getCollection('unmatchedArt')) {
    const id = a.data.fighter;
    if (id !== 'logo' && !UM_FIGHTERS.some((f) => f.id === id)) {
      throw new Error(`Unmatched art "${a.id}": no fighter has the id "${id}". Pick the fighter from the list in Pages CMS.`);
    }
    // The fighter list uses a small deck-back picture from public/images/unmatched/thumbs/ when there is one; otherwise it keeps the drawn badge.
    const thumbFile = `images/unmatched/thumbs/${id}.webp`;
    const thumb = existsSync(`public/${thumbFile}`) ? `/${thumbFile}` : undefined;
    art.set(id, { image: a.data.image, thumb, alt: a.data.alt, credit: a.data.credit });
  }
  return art;
}
