// Pixel-art sprites for the "Retro" design, drawn here by hand as text grids (so they're ours to use).
// Each letter is one pixel. "." is see-through. The colours for each letter are in PALETTE.
// To draw a new sprite: add a grid below where every row has the same length.

export const PALETTE: Record<string, string> = {
  k: '#2a1f17', // ink outline
  w: '#fffaf0', // white
  s: '#cfd5e6', // silver
  d: '#5b6178', // dark grey
  y: '#ffd23f', // yellow
  o: '#ff6a1f', // orange
  r: '#e5383b', // red
  b: '#2f5bff', // blue
  n: '#2fbf71', // green
};

export const SPRITES = {
  // A spinning top seen from the side: blade ring, then the tip.
  beyblade: [
    '......kkkk......',
    '......kwwk......',
    '..kkkkkkkkkkkk..',
    '.krrssssssssrrk.',
    'krrrsswwwwssrrrk',
    '.krrssssssssrrk.',
    '..kkkkkkkkkkkk..',
    '....kddddddk....',
    '.....kddddk.....',
    '......kddk......',
    '.......kk.......',
  ],
  // A Mini 4WD-style race car with a racing stripe.
  tamiya: [
    '....kkkkkk......',
    '...kbbwwbbk.....',
    '..kbbbwwbbbkkk..',
    '.kbbbbbbbbbbbbk.',
    'kyyyyyyyyyyyyyyk',
    'kbbbbbbbbbbbbbbk',
    '.kkkkkkkkkkkkkk.',
    '..kddk....kddk..',
    '.kdssdk..kdssdk.',
    '..kddk....kddk..',
  ],
  // One chunky keycap with a "B" on top.
  keyboards: [
    '..kkkkkkkkkkkk..',
    '.kwwwwwwwwwwwwk.',
    '.kwwwkkkkwwwwwk.',
    '.kwwwkwwwkwwwwk.',
    '.kwwwkkkkwwwwwk.',
    '.kwwwkwwwkwwwwk.',
    '.kwwwkkkkwwwwwk.',
    '.kwwwwwwwwwwwwk.',
    'kssssssssssssssk',
    'kssssssssssssssk',
    '.kkkkkkkkkkkkkk.',
  ],
  // A trading card: art box on top, text line below.
  tcg: [
    '...kkkkkkkkkk...',
    '...kyyyyyyyyk...',
    '...kybbbbbbyk...',
    '...kybbwwbbyk...',
    '...kybwwwwbyk...',
    '...kybbwwbbyk...',
    '...kybbbbbbyk...',
    '...kyyyyyyyyk...',
    '...kywwwwwwyk...',
    '...kywkkkkwyk...',
    '...kywwwwwwyk...',
    '...kyyyyyyyyk...',
    '...kkkkkkkkkk...',
  ],
  // A game controller: d-pad on the left, four buttons on the right.
  consoles: [
    '..kkkkkkkkkkkk..',
    '.kssssssssssssk.',
    'kssksssssssrsssk',
    'kskkksssssbsnssk',
    'kssksssssssysssk',
    '.kssssssssssssk.',
    '.ksssk....ksssk.',
    '..kkk......kkk..',
  ],
  // A trophy with handles.
  esports: [
    '...kkkkkkkkkk...',
    '.kkkyywyyyyykkk.',
    'k..kyywyyyyyk..k',
    'k..kyyyyyyyyk..k',
    '.kkkyyyyyyyykkk.',
    '....kyyyyyyk....',
    '.....kyyyyk.....',
    '......kyyk......',
    '......kyyk......',
    '....kkkkkkkk....',
    '....kddddddk....',
    '...kkkkkkkkkk...',
  ],
  // A happy star, for everything hobbies.
  general: [
    '.......kk.......',
    '......kyyk......',
    '......kyyk......',
    '.....kyyyyk.....',
    'kkkkkkyyyykkkkkk',
    '.kyyyyyyyyyyyyk.',
    '..kyyykyykyyyk..',
    '...kyyyyyyyyk...',
    '...kyyyyyyyyk...',
    '..kyyyykkyyyyk..',
    '..kyyk....kyyk..',
    '.kyk........kyk.',
    '.kk..........kk.',
  ],
  heart: [
    '.kk...kk.',
    'krrk.krrk',
    'krwrkrrrk',
    'krrrrrrrk',
    '.krrrrrk.',
    '..krrrk..',
    '...krk...',
    '....k....',
  ],
  coin: [
    '..kkkkkk..',
    '.kyyyyyyk.',
    'kywyyyyoyk',
    'kywyyyyoyk',
    'kywyyyyoyk',
    'kyyyyyyoyk',
    '.kyyyyoyk.',
    '..kkkkkk..',
  ],
  sparkle: [
    '...k...',
    '..kyk..',
    'kkyyykk',
    'kyyyyyk',
    'kkyyykk',
    '..kyk..',
    '...k...',
  ],
} as const;

export type SpriteName = keyof typeof SPRITES;
