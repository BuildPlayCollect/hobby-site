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
    // Optional cover photo, e.g. /images/my-photo.jpg (files live in public/images).
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

// Wiki entries: short explainer pages for hobby words (Blade, Linear switch, Singles...).
// Articles link to them automatically the first time the word appears.
const wiki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    hobby: z.enum(Object.keys(HOBBIES) as [string, ...string[]]),
    summary: z.string(),
    aliases: z.array(z.string()).default([]),
  }),
});

// Tournament rules: one page per rulebook (/rules/...).
// "official" rules come from the organizer's own rulebook (sourceUrl).
// "community" rules come from a fan organization's published rulebook (e.g. WBO).
// "local" rules come from a community's own copy, provided by Echo.
const rules = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rules' }),
  schema: z.object({
    title: z.string(),
    hobby: z.enum(Object.keys(HOBBIES) as [string, ...string[]]),
    scope: z.enum(['official', 'community', 'local']),
    organizer: z.string(),
    sourceUrl: z.string().url().optional(),
    version: z.string().optional(),
    lastChecked: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { articles, wiki, rules };
