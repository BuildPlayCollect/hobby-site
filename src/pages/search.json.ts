// search.json.ts: builds /search.json, the list the search box looks through.
import { getCollection } from 'astro:content';
import { HOBBIES, TYPES, type HobbyKey, type TypeKey } from '../data/site';

export async function GET() {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).map((a) => ({
    title: a.data.title,
    summary: a.data.description,
    url: `/articles/${a.id}/`,
    kind: TYPES[a.data.type as TypeKey].name,
    hobby: HOBBIES[a.data.hobby as HobbyKey].name,
  }));
  const wiki = (await getCollection('wiki')).map((w) => ({
    title: w.data.title,
    summary: w.data.summary,
    url: `/wiki/${w.id}/`,
    kind: 'Wiki',
    hobby: HOBBIES[w.data.hobby as HobbyKey].name,
  }));
  const rules = (await getCollection('rules')).map((r) => ({
    title: r.data.title,
    summary: r.data.summary,
    url: `/rules/${r.id}/`,
    kind: 'Rules',
    hobby: HOBBIES[r.data.hobby as HobbyKey].name,
  }));
  const parts = (await getCollection('bxParts')).map((p) => {
    const title = p.data.abbr ? `${p.data.abbr} (${p.data.name})` : (p.data.name ?? p.data.hasbroName ?? p.id);
    const other = p.data.name && p.data.hasbroName && !p.data.abbr ? `Hasbro name: ${p.data.hasbroName}` : '';
    const kind = { blade: 'Blade', ratchet: 'Ratchet', bit: 'Bit', 'lock-chip': 'Lock Chip', 'metal-blade': 'Metal Blade', 'over-blade': 'Over Blade', 'main-blade': 'Main Blade', 'assist-blade': 'Assist Blade' }[p.data.kind];
    return {
      title,
      summary: [`Beyblade X ${kind}`, other].filter(Boolean).join('. '),
      url: `/beyblade/parts/?q=${encodeURIComponent(p.data.abbr ?? p.data.name ?? p.data.hasbroName ?? '')}`,
      kind: 'Part',
      hobby: 'Beyblade',
    };
  });
  return new Response(JSON.stringify([...wiki, ...rules, ...articles, ...parts]), { headers: { 'Content-Type': 'application/json' } });
}
