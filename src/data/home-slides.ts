// home-slides.ts: the big slider at the top of the home page, one slide per hobby.
// To add a picture: put it in public/images/home/ (about 1600 x 700 pixels, under 300 KB, your own photo
// or a press-kit image) and write its path in `image`, e.g. '/images/home/beyblade.jpg', plus who took it in
// `credit`. Without a picture the slide shows the hobby's colour and icon.
import type { HobbyKey } from './site';

export type Slide = { hobby: HobbyKey; name: string; tagline: string; image?: string; credit?: string };

export const HOME_SLIDES: Slide[] = [
  { hobby: 'beyblade', name: 'Beyblade X', tagline: 'Spinning tops that hit the rail and go flying.' },
  { hobby: 'tamiya', name: 'Tamiya Mini 4WD', tagline: 'Tiny race cars you build, tune and race.' },
  { hobby: 'keyboards', name: 'Mechanical Keyboards', tagline: 'Clacky, thocky and built your way.' },
  { hobby: 'tcg', name: 'Trading Card Games', tagline: 'Pokémon, Magic, One Piece and more card battles.' },
  { hobby: 'consoles', name: 'Consoles', tagline: 'Game machines, old and new.' },
  { hobby: 'esports', name: 'Esports', tagline: 'Pro gaming, from Pokémon Champions to VALORANT.' },
  { hobby: 'boardgames', name: 'Board Games', tagline: 'Table battles you play face to face.' },
];
