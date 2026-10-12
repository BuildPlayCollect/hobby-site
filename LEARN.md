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
| `src/styles/global.css` | The **look**: fonts, colors, spacing | Restyling the site |
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

## Night mode

The moon/sun button in the header switches night mode. It works by swapping the color variables at the top of `src/styles/global.css`: the light values are under `:root`, the dark ones under `:root[data-theme="dark"]`. To change the site's colors later, edit those two blocks.

## Ads

`src/components/AdSlot.astro` holds the ad spaces you see as striped boxes. When you sign up for an ad service, the ad code goes in that one file and flipping `SHOW_ADS` to `true` turns ads on everywhere.

## Running it on your own computer (optional)

1. Install [Node.js](https://nodejs.org) (the LTS version) and [VS Code](https://code.visualstudio.com).
2. Open this folder in VS Code, then open its Terminal (View → Terminal).
3. Run `npm install` once. This downloads Astro.
4. Run `npm run dev` and open http://localhost:4321. The page updates every time you save a file.
