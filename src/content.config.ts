// content.config.ts: tells Astro what an "article" looks like.
// Every article file must have these fields at the top (the "frontmatter").
// If one is missing or misspelled, the build stops and tells you which file is wrong.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
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
    // Drafts stay off the site (no page, no cards, no search) until this is switched off.
    draft: z.boolean().default(false),
    // Optional cover photo, e.g. /images/my-photo.jpg (files live in public/images).
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // "The 60-second version": 3 to 4 short bullet points shown at the top, for skimmers.
    quick: z.array(z.string()).default([]),
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
    // For the "Fresh from the wiki" strip on the home page.
    // added: when the term first went up. updated: the last real change (leave empty if none).
    // note: one short line saying what changed, e.g. "Added the new CX parts". Optional.
    added: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    note: z.string().optional(),
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

// Beyblade X parts: every Blade, Ratchet and Bit, kept in one list (src/data/bx-parts.yaml).
const bxParts = defineCollection({
  loader: file('src/data/bx-parts.yaml'),
  schema: z.object({
    kind: z.enum(['blade', 'ratchet', 'bit', 'lock-chip', 'metal-blade', 'over-blade', 'main-blade', 'assist-blade']),
    line: z.enum(['basic', 'unique', 'custom']),
    group: z.string().optional(),
    name: z.string().optional(),
    hasbroName: z.string().optional(),
    abbr: z.string().optional(),
  }),
});

// Part photos: one small file per photo (src/content/part-photos), added from Pages CMS.
// "part" is the part's full name as the parts list shows it (e.g. DranSword, Free or Flat), or a Ratchet's number (3-60).
// Only use photos you took or have permission for, and always fill in the credit.
const partPhotos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/part-photos' }),
  schema: z.object({
    part: z.string(),
    photo: z.string(),
    alt: z.string(),
    credit: z.string(),
    permission: z.string().optional(),
  }),
});

export const collections = { articles, wiki, rules, bxParts, partPhotos };
