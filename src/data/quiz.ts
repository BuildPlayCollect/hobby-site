// quiz.ts: the "Which hobby fits you?" quiz (/quiz).
// Each answer gives points to one or more hobbies. The hobby with the most points wins.
// To change the quiz, edit the questions here. Hobby keys must match HOBBIES in site.ts.
import type { HobbyKey } from './site';

export interface QuizAnswer { text: string; points: Partial<Record<HobbyKey, number>> }
export interface QuizQuestion { question: string; answers: QuizAnswer[] }

// How many questions each visitor gets. They're picked at random from the pool below,
// so the quiz is a little different every time someone takes it.
export const QUIZ_LENGTH = 5;

// The question pool. Fairness rule: in every question, each of the 6 hobbies gets exactly
// 1 point from exactly one answer. That way any random mix of questions is fair to every hobby.
// To add a question, copy one below and keep that rule (the build checks it).
export const QUIZ: QuizQuestion[] = [
  {
    question: "It's a free Saturday. You're most likely...",
    answers: [
      { text: 'Taking something apart to see how it works', points: { tamiya: 1, keyboards: 1 } },
      { text: 'Challenging a friend to a quick match', points: { beyblade: 1, tcg: 1 } },
      { text: 'Gaming until the sun goes down', points: { consoles: 1 } },
      { text: 'Watching a big tournament stream', points: { esports: 1 } },
    ],
  },
  {
    question: 'Pick a sound.',
    answers: [
      { text: 'The "thock" of a really nice keyboard', points: { keyboards: 1 } },
      { text: '"3, 2, 1, Go Shoot!"', points: { beyblade: 1 } },
      { text: 'The whirr of a tiny motor on a race track', points: { tamiya: 1 } },
      { text: 'Shuffling a deck before a match', points: { tcg: 1 } },
      { text: 'The startup chime of an old console', points: { consoles: 1 } },
      { text: 'A crowd going wild after a team fight', points: { esports: 1 } },
    ],
  },
  {
    question: 'Your favourite kind of win?',
    answers: [
      { text: 'Out-thinking my opponent', points: { tcg: 1, esports: 1 } },
      { text: 'Building something better than last time', points: { tamiya: 1, keyboards: 1 } },
      { text: 'A fast, loud, dramatic finish', points: { beyblade: 1 } },
      { text: 'Finally tracking down a game I wanted for years', points: { consoles: 1 } },
    ],
  },
  {
    question: 'How do you like to spend on a hobby?',
    answers: [
      { text: 'A little at a time, upgrading as I go', points: { tamiya: 1, beyblade: 1 } },
      { text: 'One big project, done properly', points: { keyboards: 1 } },
      { text: 'Packs and surprises, please', points: { tcg: 1 } },
      { text: "As little as possible, I'll play what I have", points: { esports: 1, consoles: 1 } },
    ],
  },
  {
    question: 'Where do you want your hobby to take you?',
    answers: [
      { text: 'Local tournaments with friends', points: { beyblade: 1, tcg: 1 } },
      { text: 'The race track', points: { tamiya: 1 } },
      { text: 'A desk setup that sparks joy', points: { keyboards: 1 } },
      { text: 'Climbing the ranked ladder', points: { esports: 1 } },
      { text: 'A shelf full of classics', points: { consoles: 1 } },
    ],
  },
  {
    question: 'Pick a superpower.',
    answers: [
      { text: 'Super speed', points: { tamiya: 1 } },
      { text: 'Remembering every card and combo', points: { tcg: 1 } },
      { text: 'Lightning reflexes', points: { esports: 1 } },
      { text: 'Fixing anything with my hands', points: { keyboards: 1 } },
      { text: 'Never getting tired of a good story', points: { consoles: 1 } },
      { text: 'Perfect balance, no matter what hits me', points: { beyblade: 1 } },
    ],
  },
  {
    question: 'Your desk right now looks like...',
    answers: [
      { text: 'Tiny screws and parts everywhere', points: { tamiya: 1 } },
      { text: 'A keyboard I keep fiddling with', points: { keyboards: 1 } },
      { text: 'Sleeves, binders and a playmat', points: { tcg: 1 } },
      { text: 'A controller within arm\'s reach', points: { consoles: 1 } },
      { text: 'Two monitors and a headset', points: { esports: 1 } },
      { text: 'A little arena and a launcher', points: { beyblade: 1 } },
    ],
  },
  {
    question: 'Pick a movie night.',
    answers: [
      { text: 'A racing movie', points: { tamiya: 1 } },
      { text: 'A heist where every step is planned', points: { tcg: 1 } },
      { text: 'A sports underdog story', points: { esports: 1, beyblade: 1 } },
      { text: 'A cosy retro classic', points: { consoles: 1 } },
      { text: 'A "how it\'s made" documentary', points: { keyboards: 1 } },
    ],
  },
  {
    question: 'How do you handle losing?',
    answers: [
      { text: 'Swap a part and go again', points: { beyblade: 1, tamiya: 1 } },
      { text: 'Rethink my whole strategy', points: { tcg: 1 } },
      { text: 'Watch the replay and find my mistake', points: { esports: 1 } },
      { text: 'Take a break with a different game', points: { consoles: 1 } },
      { text: 'Losing? I was building, not competing', points: { keyboards: 1 } },
    ],
  },
  {
    question: 'Pick your role on the team.',
    answers: [
      { text: 'The captain who makes the calls', points: { esports: 1 } },
      { text: 'The mechanic who keeps everything running', points: { tamiya: 1 } },
      { text: 'The collector with the rare stuff', points: { tcg: 1 } },
      { text: 'The designer who makes it look good', points: { keyboards: 1 } },
      { text: 'The one who goes first and goes big', points: { beyblade: 1 } },
      { text: 'The one who knows every old game', points: { consoles: 1 } },
    ],
  },
  {
    question: 'How much time do you have for a hobby?',
    answers: [
      { text: 'A few minutes here and there', points: { beyblade: 1 } },
      { text: 'An evening at a time', points: { esports: 1, consoles: 1 } },
      { text: 'Whole weekends on one project', points: { keyboards: 1, tamiya: 1 } },
      { text: 'A long match with a friend', points: { tcg: 1 } },
    ],
  },
  {
    question: 'Pick a place to hang out.',
    answers: [
      { text: 'A hobby shop with a play area', points: { beyblade: 1, tcg: 1 } },
      { text: 'A race track', points: { tamiya: 1 } },
      { text: 'A cosy room with good lighting', points: { keyboards: 1 } },
      { text: 'A gaming café', points: { esports: 1 } },
      { text: 'A retro game store', points: { consoles: 1 } },
    ],
  },
  {
    question: 'Which word sounds most like you?',
    answers: [
      { text: 'Builder', points: { keyboards: 1 } },
      { text: 'Speedster', points: { tamiya: 1 } },
      { text: 'Strategist', points: { tcg: 1 } },
      { text: 'Competitor', points: { esports: 1 } },
      { text: 'Collector', points: { consoles: 1 } },
      { text: 'Battler', points: { beyblade: 1 } },
    ],
  },
  {
    question: 'What would you show off to a friend?',
    answers: [
      { text: 'My fastest lap', points: { tamiya: 1 } },
      { text: 'My rarest card', points: { tcg: 1 } },
      { text: 'How my keyboard sounds', points: { keyboards: 1 } },
      { text: 'My rank', points: { esports: 1 } },
      { text: 'A console older than me that still works', points: { consoles: 1 } },
      { text: 'My best combo and who it beat', points: { beyblade: 1 } },
    ],
  },
  {
    question: 'Pick a weekend challenge.',
    answers: [
      { text: 'Win three battles in a row', points: { beyblade: 1 } },
      { text: 'Build something from a kit', points: { tamiya: 1 } },
      { text: 'Try a new keyboard switch', points: { keyboards: 1 } },
      { text: 'Build a new deck and test it', points: { tcg: 1 } },
      { text: 'Finish a game I started years ago', points: { consoles: 1 } },
      { text: 'Reach a new rank', points: { esports: 1 } },
    ],
  },
];

// The build stops with a clear message if a question breaks the fairness rule above.
const QUIZ_HOBBIES: HobbyKey[] = ['beyblade', 'tamiya', 'keyboards', 'tcg', 'consoles', 'esports'];
for (const q of QUIZ) {
  for (const h of QUIZ_HOBBIES) {
    const total = q.answers.reduce((sum, a) => sum + (a.points[h] ?? 0), 0);
    if (total !== 1) throw new Error(`Quiz question "${q.question}" gives ${h} ${total} points; every hobby needs exactly 1.`);
  }
}

// What each result says. Kept playful, and true for anyone starting out.
export const QUIZ_RESULTS: Partial<Record<HobbyKey, string>> = {
  beyblade: "You like it fast, loud and competitive. Beyblade gives you battles that are over in about a minute, and there's always one more part to try.",
  tamiya: "You're a tinkerer with a need for speed. Mini 4WD lets you build a car, tune it, and race it, then do it all again.",
  keyboards: "You care about how things feel. A custom keyboard is a build you'll touch every single day.",
  tcg: "You're a strategist who loves a surprise. Trading card games mix deck-building brains with the thrill of opening packs.",
  consoles: "You love games and the machines that play them. Old or new, consoles are part playing, part collecting.",
  esports: "You're here for the competition and the hype. Esports is something you can play, watch, or both, often for free.",
};
