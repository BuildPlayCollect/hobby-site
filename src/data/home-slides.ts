// home-slides.ts: the big slider at the top of the home page, one slide per hobby.
// To add a picture: put it in public/images/home/ (1600 x 700 pixels, under 300 KB, your own photo,
// a press-kit image, or a Wikimedia Commons photo under CC0 / CC BY / CC BY-SA, never NC or ND) and write its
// path in `image` and what it shows in `alt`. Press-kit and CC BY photos need a `credit` (author + licence), which
// shows as a small tag on the slide. Echo's own photos need no credit here. Without a picture the slide shows the hobby's colour and icon.
import type { HobbyKey } from './site';

export type Slide = { hobby: HobbyKey; name: string; image?: string; alt?: string; credit?: string };

export const HOME_SLIDES: Slide[] = [
  { hobby: 'beyblade', name: 'Beyblade X', image: '/images/home/beyblade.webp', alt: 'Two Beyblade X tops spinning in an Xtreme stadium' },
  { hobby: 'tamiya', name: 'Tamiya Mini 4WD', image: '/images/home/tamiya.webp', alt: 'A row of colourful Mini 4WD cars lined up beside a race track' },
  { hobby: 'keyboards', name: 'Mechanical Keyboards', image: '/images/home/keyboards.webp', alt: 'A purple and cream mechanical keyboard with a few loose keycaps around it' },
  { hobby: 'tcg', name: 'Trading Card Games', image: '/images/home/tcg.webp', alt: 'Pokémon card packs and toys in a shop display case' },
  { hobby: 'consoles', name: 'Consoles', image: '/images/home/consoles.webp', alt: 'Ten Nintendo handhelds laid out on a red carpet, from a Game Boy and Game Boy Advance SP to 3DS consoles and a Switch', credit: 'Photo: PantheraLeo1359531, CC BY 4.0' },
  { hobby: 'esports', name: 'Esports', image: '/images/home/esports.webp', alt: 'A packed arena lit in purple and green for The International 2018 Dota 2 championship, with the stage and giant screens in the middle', credit: 'Photo: Dota 2 The International, CC BY 2.0' },
  { hobby: 'boardgames', name: 'Board Games', image: '/images/home/boardgames.webp', alt: 'A game of Unmatched in progress on a café table: the board, fighter figures, cards and a drink' },
];
