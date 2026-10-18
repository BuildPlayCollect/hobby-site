// /esports/pokemon-champions/builder-data/doubles.json (and singles.json): usage numbers for the team builder.
// Made when the site builds, from Smogon's monthly stats (see getBuilderData in src/lib/champions-usage.ts).
import { Generations } from '@smogon/calc';
import { USAGE_FORMATS } from '../../../../data/champions';
import { getBuilderData } from '../../../../lib/champions-usage';

export function getStaticPaths() {
  return [{ params: { format: 'doubles' } }, { params: { format: 'singles' } }];
}

export async function GET({ params }: { params: { format: 'doubles' | 'singles' } }) {
  // Smogon writes item, move and ability ids ("miracleseed"); this turns them back into names ("Miracle Seed").
  const g = Generations.get(0);
  const names = new Map<string, string>();
  for (const list of [g.items, g.moves, g.abilities]) for (const x of list) names.set(x.id, x.name);
  const data = await getBuilderData(USAGE_FORMATS[params.format].id, USAGE_FORMATS.rating, 0.5, names);
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
}
