// content.config.ts: tells Astro what an "article" looks like.
// Every article file must have these fields at the top (the "frontmatter").
// If one is missing or misspelled, the build stops and tells you which file is wrong.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { HOBBIES, TYPES } from './data/site';

const articles = defineCollection({
  // Every .md file in src/content/articles is an article.
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hobby: z.enum(Object.keys(HOBBIES) as [string, ...string[]]),
    type: z.enum(Object.keys(TYPES) as [string, ...string[]]),
    author: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
