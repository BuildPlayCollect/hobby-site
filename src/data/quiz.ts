// quiz.ts: the "Which hobby fits you?" quiz (/quiz).
// Each answer gives points to one or more hobbies. The hobby with the most points wins.
// To change the quiz, edit the questions here. Hobby keys must match HOBBIES in site.ts.
import type { HobbyKey } from './site';

export interface QuizAnswer { text: string; points: Partial<Record<HobbyKey, number>> }
export interface QuizQuestion { question: string; answers: QuizAnswer[] }

export const QUIZ: QuizQuestion[] = [
  {
    question: "It's a free Saturday. You're most likely...",
    answers: [
      { text: 'Taking something apart to see how it works', points: { tamiya: 1, keyboards: 1 } },
      { text: 'Challenging a friend to a quick match', points: { beyblade: 1, tcg: 1 } },
      { text: 'Gaming until the sun goes down', points: { consoles: 1, esports: 1 } },
      { text: 'Watching a big tournament stream', points: { esports: 2 } },
    ],
  },
  {
    question: 'Pick a sound.',
    answers: [
      { text: 'The "thock" of a really nice keyboard', points: { keyboards: 2 } },
      { text: '"3, 2, 1, Go Shoot!"', points: { beyblade: 2 } },
      { text: 'The whirr of a tiny motor on a race track', points: { tamiya: 2 } },
      { text: 'Shuffling a deck before a match', points: { tcg: 2 } },
      { text: 'The startup chime of an old console', points: { consoles: 2 } },
    ],
  },
  {
    question: 'Your favourite kind of win?',
    answers: [
      { text: 'Out-thinking my opponent', points: { tcg: 1, esports: 1 } },
      { text: 'Building something better than last time', points: { tamiya: 1, keyboards: 1 } },
      { text: 'A fast, loud, dramatic finish', points: { beyblade: 2 } },
      { text: 'Finally finding the rare one', points: { tcg: 1, consoles: 1 } },
    ],
  },
  {
    question: 'How do you like to spend on a hobby?',
    answers: [
      { text: 'A little at a time, upgrading as I go', points: { tamiya: 1, beyblade: 1 } },
      { text: 'One big project, done properly', points: { keyboards: 2 } },
      { text: 'Packs and surprises, please', points: { tcg: 2 } },
      { text: "As little as possible, I'll play what I have", points: { esports: 1, consoles: 1 } },
    ],
  },
  {
    question: 'Where do you want your hobby to take you?',
    answers: [
      { text: 'Local tournaments with friends', points: { beyblade: 1, tcg: 1 } },
      { text: 'The race track', points: { tamiya: 2 } },
      { text: 'A desk setup that sparks joy', points: { keyboards: 2 } },
      { text: 'Climbing the ranked ladder', points: { esports: 2 } },
      { text: 'A shelf full of classics', points: { consoles: 2 } },
    ],
  },
];

// What each result says. Kept playful, and true for anyone starting out.
export const QUIZ_RESULTS: Partial<Record<HobbyKey, string>> = {
  beyblade: "You like it fast, loud and competitive. Beyblade gives you battles that are over in about a minute, and there's always one more part to try.",
  tamiya: "You're a tinkerer with a need for speed. Mini 4WD lets you build a car, tune it, and race it, then do it all again.",
  keyboards: "You care about how things feel. A custom keyboard is a build you'll touch every single day.",
  tcg: "You're a strategist who loves a surprise. Trading card games mix deck-building brains with the thrill of opening packs.",
  consoles: "You love games and the machines that play them. Old or new, consoles are part playing, part collecting.",
  esports: "You're here for the competition and the hype. Esports is something you can play, watch, or both, often for free.",
};
