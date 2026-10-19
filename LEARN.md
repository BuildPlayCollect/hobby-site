# How This Site Works (a beginner's tour)

Read this top to bottom once. It explains every folder, so you know where to look when you want to change something.

## The big idea

This site is built with **Astro**. You write articles as plain text files. When you run `npm run build`, Astro reads those files, pours them into page templates, and produces a folder of finished web pages (`dist/`). A host like Cloudflare Pages just serves that folder to visitors.

```
your article (.md)  +  page template (.astro)  →  finished page (.html)  →  visitor's browser
```

## The folders

| Path | What it is | When you'd touch it |
|---|---|---|
| `src/content/articles/` | **Every article**, one `.md` file each | Every time you write or edit an article |
| `src/data/site.ts` | The **site menu**: hobbies, content types, site name | Adding a hobby, renaming the site |
| `src/content.config.ts` | The **rules** every article must follow | Adding a new article field (e.g. a cover image) |
| `src/pages/` | **One file = one web address** | Adding a page like /shop |
| `src/layouts/Base.astro` | The **frame** around every page: header, menu, footer | Changing the menu or footer |
| `src/components/` | **Reusable pieces**: article cards, ad slots | Changing how cards or ads look |
| `src/styles/themes/comic.css` | The **look** (the "comic" design): fonts, colors, outlines, spacing | Restyling the site, or adding a new design next to it |
| `astro.config.mjs` | Site **settings** | Setting your real domain |
| `package.json` | The **tools** this site needs | Rarely |

## Writing an article

Make a new file in `src/content/articles/`, for example `tamiya-beginner-kits.md`. The file name becomes the web address (`/articles/tamiya-beginner-kits`).

The top part between the `---` lines is the **frontmatter**: facts about the article.

```markdown
---
title: "The Best Tamiya Kits for Beginners"
description: "One sentence shown on cards and in Google results."
hobby: tamiya          # beyblade, tamiya, keyboards, tcg, consoles or esports
type: guide            # history, brand-profile, guide, where-to-buy, new-release, giveaway or interview
author: Echo
date: 2026-10-15
featured: false        # true puts it in the big slot on the home page
---

Your article starts here. Use ## for section headings.
```

That's it. The article automatically shows up on the home page, its hobby page (`/tamiya`) and its type page (`/guides`).

## Writing in the browser (Pages CMS)

You don't have to edit files by hand. Go to https://app.pagescms.org, sign in with GitHub and open `hobby-site`. You'll see an **Articles** list and a form for each article: title, hobby, type, date, cover image and the article itself.

When you click **Save**, Pages CMS saves the article as a `.md` file in GitHub for you, exactly like the ones in `src/content/articles/`. Cloudflare sees the change and the live site updates about a minute later.

The form is defined in `.pages.yml`. If you ever add a new hobby to `src/data/site.ts`, add it to the hobby list in `.pages.yml` too.

## How pages get made

- `src/pages/index.astro` is the home page (`/`).
- `src/pages/about.astro` is `/about`.
- `src/pages/[section].astro` uses square brackets, which mean "fill in the blank". It makes **13 pages from one file**: one per hobby and one per content type.
- `src/pages/articles/[id].astro` makes one page per article file.

## Night mode and colors

The moon/sun button in the header switches night mode. It works by swapping the color variables at the top of `src/styles/themes/comic.css`: the light values are under `:root`, the dark ones under `:root[data-theme="dark"]`. To change the site's colors later, edit those two blocks.

- **Light mode** is white with cyan (`--accent: #0e7490`, a deep cyan dark enough to read as text).
- **Dark mode** is a soft slate blue (`--bg: #1c2532`), not pure black, which is easier on the eyes. Cyan stays the main color and **amber** (`--wiki: #fcc85a`) is the second color, used for wiki words so they stand out from normal links.

## The wiki (words that lead somewhere)

Each file in `src/content/wiki/` is one term, like `ratchet.md`. It has a `title`, a `hobby`, a one-line `summary` and optional `aliases` (other spellings).

You never add wiki links by hand. When the site builds, `src/lib/rehype-wiki-links.mjs` reads every article, finds the first time each term appears, and turns it into a link. Two rules keep it tidy:

- It only links terms from the article's own hobby (so "Switch" in a Tamiya article isn't sent to keyboards).
- Matching is case-sensitive, so "a bit of" is not linked to the Beyblade **Bit**.

Hovering a wiki word shows its summary; clicking opens its page, which lists every article that mentions it. In Pages CMS, add new terms under **Wiki terms**.

## Carousels

The big headline slider at the top of the home page and the sideways rows under each hobby both come from `src/components/Carousel.astro`. You never fill them by hand: `src/pages/index.astro` picks the featured article plus the newest article from each hobby for the headlines, and the 8 newest per hobby for each row. Publish an article and it shows up in the carousel on the next build.

The headline slider moves on its own every 6 seconds and stops while someone hovers, taps or tabs into it (and for readers who've asked their device to reduce motion). On phones readers swipe; on bigger screens they also get ‹ › buttons.

## Tournament rules

Each file in `src/content/rules/` is one rulebook summary, shown at `/rules/<file-name>`. The `scope` field says where the rules come from:

- **official**: the organizer's own rulebook (Takara Tomy, Tamiya, Play! Pokémon...). `sourceUrl` links it, and the twice-weekly update routine re-checks it and proposes changes when the rulebook changes.
- **community**: a fan organization's published rulebook, like the World Beyblade Organization's.
- **local**: your community's own rules. Add these in Pages CMS under **Tournament rules**, pasting the copy your community gives you. The routine never rewrites local rules; it only points out where they differ from the official ones.

Every rules page shows "Last checked", and the footer links the [editorial standards](/standards) page that explains how we fact-check.

## Beyblade X parts list

`/beyblade/parts` lists every Blade, Ratchet and Bit across the Basic, Unique and Custom Lines, plus the Custom Line (CX) Blade parts: Lock Chips, Main, Assist, Metal and Over Blades. The parts live in **one file**, `src/data/bx-parts.yaml`: each part is a few lines (kind, line, name, Hasbro name or abbreviation). To add a part, copy an entry, change it, and give it a new `id`. The page, its counts, its filters and the site search all update themselves. The rare BX/UX/CX-00 releases are listed in `src/data/bx-special-editions.ts`, one line each with the product code and name.

## Search

Press `/` or the magnifier button. `src/pages/search.json.ts` writes a small list of every article and wiki term when the site builds, and the search box filters that list in the reader's browser. No search service or account is needed.

## Newsletter

The sign-up box above the footer (and the `/newsletter` page) comes from `src/components/Newsletter.astro`. The emails themselves are stored and sent by **Kit** (kit.com). To switch it on, create a form in Kit, copy its address and paste it into `NEWSLETTER_FORM_ACTION` in `src/data/site.ts`.

## Ads

`src/components/AdSlot.astro` holds the ad spaces you see as striped boxes. When you sign up for an ad service, the ad code goes in that one file and flipping `SHOW_ADS` to `true` turns ads on everywhere.

## Running it on your own computer (optional)

1. Install [Node.js](https://nodejs.org) (the LTS version) and [VS Code](https://code.visualstudio.com).
2. Open this folder in VS Code, then open its Terminal (View → Terminal).
3. Run `npm install` once. This downloads Astro.
4. Run `npm run dev` and open http://localhost:4321. The page updates every time you save a file.

## Part photos

Each part on the parts list can show a small photo. In Pages CMS, open **Part photos**, click **Add an entry**, type the part's full name as the list shows it (e.g. `DranSword`, `Flat` or `Free`), or a Ratchet's number (`3-60`), upload the photo, describe it, and fill in the credit. The photo appears next to the part on the next deploy. Always spell the name in full: short codes like "F" belong to several parts (the Flat Bit, the Free Assist Blade and the Flow Over Blade), but full names never repeat. If the name doesn't match a part, the site won't update and the build log says which photo to fix.

Only use photos you took or have permission for (see the image rules in the project files). Wiki and shop photos are someone else's.

## Drafts

Every article has a **Draft** switch in Pages CMS. While it's on, the article stays off the site: no page, no cards, no search result. New articles start as drafts, so you can save half-finished work safely. When the article is written and every fact is checked, switch Draft off and save; it goes live on the next deploy. The 7 starter sample articles are kept as drafts for reference.

## Google and SEO

Every page tells search engines its title, description, official address (canonical) and share picture; articles also tell Google they're articles, who wrote them and when (all in `src/layouts/Base.astro` and `src/pages/articles/[id].astro`). `public/robots.txt` lets search engines read everything and points them to the sitemap. The default share picture is `public/share-preview-v2.png` (give it a new name whenever it changes, because Facebook keeps old pictures by name); an article with a cover image uses its cover instead. The full checklist for articles and the one-time Google Search Console steps are in the project's `resources/seo-guide.md`.

## Esports rosters and the map planner

The VALORANT, League of Legends, TFT and Dota 2 hubs each have a page with every Agent, champion or hero, and VALORANT has a map planner. Their names, roles and icons are saved in `src/data/esports/` (the lists) and `public/images/esports/` (the pictures), so the site never depends on another site being up.

To update them after a patch adds a new champion, agent or map, run `npm run esports:data`. It reads each game's own data feed (Riot's Data Dragon for League and TFT, valorant-api.com for VALORANT, dota2.com for Dota 2), downloads only the new pictures, and rewrites the lists. When a new TFT set starts, it finds the new set by itself.

The game logos (next to each game's name) are Riot's press-kit logos and Valve's logo from dota2.com, in `public/images/esports/logos/`. Riot's rules say to use them unedited and to keep Riot's notice on the page, which the hubs do.
