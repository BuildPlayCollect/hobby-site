// search.json.ts: builds /search.json, the list the search box looks through.
import { getCollection } from 'astro:content';
import { HOBBIES, TYPES, type HobbyKey, type TypeKey } from '../data/site';

export async function GET() {
  const articles = (await getCollection('articles')).map((a) => ({
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
  return new Response(JSON.stringify([...wiki, ...rules, ...articles]), { headers: { 'Content-Type': 'application/json' } });
}
