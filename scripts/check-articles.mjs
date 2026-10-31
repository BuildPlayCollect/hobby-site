// check-articles.mjs: reads articles and flags mechanical slips before they reach you.
// It can't tell whether a fact is TRUE (that still needs a person and the source),
// but it catches the things that make a fact impossible to check, plus sloppy leftovers.
//
// Run it yourself:   npm run check:articles                 (every article)
//                    npm run check:articles -- path/to.md   (just these files)
// On GitHub it runs on every pull request that changes an article (.github/workflows/article-checks.yml).
//
// Problems (the check turns red, fix before merging), published articles only:
//   - no Sources list at the end, or an empty one
//   - no outside links in the text, so no fact can be traced to its source
//   - writer's notes left in (TODO, FIXME, [citation needed], ???)
//   - a picture with no description (alt text) for screen readers
// Heads-ups (the check stays green, worth a look):
//   - length outside 500 to 1,200 words (editorial-standards.md)
//   - a title over 70 characters or a description over 160 (Google cuts them off)
//   - the same word twice in a row ("the the")
//   - an http:// link (not secure; most sites have an https:// version)
// Drafts are skipped: they aren't on the site yet.
import { readFileSync, readdirSync, appendFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'yaml';

const DIR = 'src/content/articles';
const MIN_WORDS = 500;
const MAX_WORDS = 1200;
const MAX_TITLE = 70;
const MAX_DESCRIPTION = 160;

const args = process.argv.slice(2).filter((f) => f.endsWith('.md'));
const files = args.length ? args : readdirSync(DIR).filter((f) => f.endsWith('.md')).map((f) => join(DIR, f));

const results = [];
for (const file of files) results.push(checkArticle(file));

report(results);
process.exit(results.some((r) => r.problems.length) ? 1 : 0);

function checkArticle(file) {
  const text = readFileSync(file, 'utf8');
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  const data = match ? parse(match[1]) : {};
  const body = match ? text.slice(match[0].length) : text;
  const bodyStart = match ? match[0].split('\n').length - 1 : 0; // so line numbers match the file
  const lines = body.split('\n');
  const result = { file: relative('.', file), title: data.title ?? file, draft: data.draft === true, problems: [], headsUps: [] };
  if (result.draft) return result;

  const problem = (message, line) => result.problems.push({ message, line: line && line + bodyStart });
  const headsUp = (message, line) => result.headsUps.push({ message, line: line && line + bodyStart });

  // Where the Sources list starts: a "## Sources" heading, or else an older one-line "*Sources: ...*"
  // (the last one, since a table can have its own "Sources:" note in the middle).
  let sourcesAt = lines.findIndex((l) => /^##\s+Sources\b/i.test(l));
  if (sourcesAt === -1) sourcesAt = lines.findLastIndex((l) => /^\*?Sources:/i.test(l.trim()));
  const story = sourcesAt === -1 ? lines : lines.slice(0, sourcesAt);

  // Sources
  if (sourcesAt === -1) {
    problem('No Sources list. Add a "## Sources" section at the end listing where the facts came from.');
  } else if (/^##/.test(lines[sourcesAt])) {
    const entries = lines.slice(sourcesAt + 1).filter((l) => /^\s*(\d+\.|[-*])\s+\S/.test(l));
    if (!entries.length) problem('The Sources section is empty.', sourcesAt + 1);
  }

  // Inline links to outside sites (our rule: link the fact's own words to its source).
  const outsideLinks = story.join('\n').match(/\]\(https?:\/\/(?!(www\.)?buildplaycollect\.com)[^)]+\)/g) ?? [];
  if (!outsideLinks.length) problem('No outside links in the text. Link each fact\'s words to the page it came from.');

  story.forEach((line, i) => {
    const n = i + 1;
    const note = line.match(/\b(TODO|FIXME)\b|\[citation needed\]|\?\?\?/i);
    if (note) problem(`Writer's note left in: "${note[0]}".`, n);
    if (/!\[\s*\]\(/.test(line)) problem('A picture has no description (the words inside ![...]).', n);
    if (/\]\(http:\/\//.test(line)) headsUp('A link starts with http:// instead of https://.', n);
    const twice = stripMarkup(line).match(/\b(\w+)\s+\1\b/i);
    if (twice && !/^\d+$/.test(twice[1])) headsUp(`"${twice[1]} ${twice[1]}": same word twice in a row?`, n);
  });

  // Length: only the story itself, not the Sources list or hidden photo notes.
  const words = countWords(story);
  result.words = words;
  if (words > MAX_WORDS) headsUp(`${words.toLocaleString('en')} words, over the ${MAX_WORDS.toLocaleString('en')}-word limit for long articles. Trim, never pad.`);
  if (words < MIN_WORDS) headsUp(`${words} words, under the ${MIN_WORDS}-word minimum for short articles.`);

  if (data.title && data.title.length > MAX_TITLE) headsUp(`Title is ${data.title.length} characters; Google shows about ${MAX_TITLE}. Topic first, keep it short.`, 0);
  if (data.description && data.description.length > MAX_DESCRIPTION) headsUp(`Description is ${data.description.length} characters; Google shows about ${MAX_DESCRIPTION}.`, 0);
  return result;
}

function stripMarkup(line) {
  return line
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // pictures
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links: keep the words, drop the address
    .replace(/<[^>]+>/g, ' ') // HTML tags
    .replace(/[#>*_`|~]/g, ' ');
}

function countWords(storyLines) {
  return storyLines
    .join('\n')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .split('\n')
    .filter((l) => !l.includes('📷 PHOTO:'))
    .map(stripMarkup)
    .join(' ')
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

function report(all) {
  const onGitHub = !!process.env.GITHUB_ACTIONS;
  const checked = all.filter((r) => !r.draft);
  const summary = [`## Article checks`, '', `Checked ${checked.length} published article(s); ${all.length - checked.length} draft(s) skipped.`, ''];

  for (const r of checked) {
    const status = r.problems.length ? '❌' : r.headsUps.length ? '⚠️' : '✅';
    console.log(`\n${status} ${r.file} (${r.words} words)`);
    summary.push(`### ${status} ${r.title}`, `\`${r.file}\` · ${r.words} words`, '');
    for (const [kind, list] of [['error', r.problems], ['warning', r.headsUps]]) {
      for (const { message, line } of list) {
        const where = line ? `line ${line}: ` : '';
        console.log(`   ${kind === 'error' ? 'Problem' : 'Heads-up'}: ${where}${message}`);
        summary.push(`- ${kind === 'error' ? '**Problem**' : 'Heads-up'}: ${where}${message}`);
        // Annotations show the note right next to the line in the pull request's "Files changed" tab.
        if (onGitHub) console.log(`::${kind} file=${r.file}${line ? `,line=${line}` : ''}::${message}`);
      }
    }
    summary.push('');
  }

  const problems = checked.reduce((n, r) => n + r.problems.length, 0);
  const headsUps = checked.reduce((n, r) => n + r.headsUps.length, 0);
  const total = `${problems} problem(s), ${headsUps} heads-up(s).`;
  console.log(`\n${total}${problems ? ' Fix the problems before merging.' : ''}`);
  summary.push(`**${total}**`);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary.join('\n') + '\n');
}
