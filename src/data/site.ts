// The site's "menu": every hobby and every content type lives here.
// Add a new hobby by adding one line to HOBBIES. The pages update themselves.

export const SITE_NAME = 'Build Play Collect';
export const SITE_TAGLINE = 'History, guides and news for the hobbies we love.';

export const HOBBIES = {
  beyblade: { name: 'Beyblade', color: '#e63946', blurb: 'Beyblade X, decks, parts and the history of the spinning top.' },
  tamiya: { name: 'Tamiya', color: '#1d4ed8', blurb: 'Mini 4WD, RC cars and plastic models.' },
  keyboards: { name: 'Keyboards', color: '#7c3aed', blurb: 'Mechanical keyboards, switches, keycaps and builds.' },
  tcg: { name: 'TCG', color: '#d97706', blurb: 'Trading card games: Pokemon, Magic, One Piece, Yu-Gi-Oh! and more.' },
  consoles: { name: 'Consoles', color: '#059669', blurb: 'Gaming consoles, old and new.' },
  esports: { name: 'Esports', color: '#475569', blurb: 'Dota 2, League of Legends, TFT and the scenes around them.' },
} as const;

export const TYPES = {
  history: { name: 'History', plural: 'History' },
  'brand-profile': { name: 'Brand Profile', plural: 'Brand Profiles' },
  guide: { name: 'Guide', plural: 'Guides' },
  'where-to-buy': { name: 'Where to Buy', plural: 'Where to Buy' },
  'new-release': { name: 'New Release', plural: 'New Releases' },
  giveaway: { name: 'Giveaway', plural: 'Giveaways' },
  interview: { name: 'Interview', plural: 'Interviews' },
} as const;

// Type pages live at /guides, /interviews, etc. This maps each type to its web address.
export const TYPE_SLUGS: Record<keyof typeof TYPES, string> = {
  history: 'history',
  'brand-profile': 'brand-profiles',
  guide: 'guides',
  'where-to-buy': 'where-to-buy',
  'new-release': 'new-releases',
  giveaway: 'giveaways',
  interview: 'interviews',
};

export type HobbyKey = keyof typeof HOBBIES;
export type TypeKey = keyof typeof TYPES;

// Newsletter sign-up (Kit, kit.com). Paste your Kit form's address here, e.g.
// 'https://app.kit.com/forms/1234567/subscriptions'. Until then the form shows "opening soon".
export const NEWSLETTER_FORM_ACTION = 'https://app.kit.com/forms/10034575/subscriptions';

// Where a tournament rulebook comes from (the badge on each rules page).
export const SCOPE_LABEL: Record<string, string> = {
  official: 'Official',
  community: 'Community',
  local: 'Local',
};
