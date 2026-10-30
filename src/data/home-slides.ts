// home-slides.ts: the big slider at the top of the home page, one slide per hobby.
// To add a picture: put it in public/images/home/ (1600 x 700 pixels, under 300 KB, your own photo
// or a press-kit image) and write its path in `image`, what it shows in `alt`, and who took it in
// `credit`. Without a picture the slide shows the hobby's colour and icon.
import type { HobbyKey } from './site';

export type Slide = { hobby: HobbyKey; name: string; image?: string; alt?: string; credit?: string };

export const HOME_SLIDES: Slide[] = [
  { hobby: 'beyblade', name: 'Beyblade X', image: '/images/home/beyblade.webp', alt: 'Two Beyblade X tops spinning in an Xtreme stadium', credit: 'Photo: Echo' },
  { hobby: 'tamiya', name: 'Tamiya Mini 4WD', image: '/images/home/tamiya.webp', alt: 'A row of colourful Mini 4WD cars lined up beside a race track', credit: 'Photo: Echo' },
  { hobby: 'keyboards', name: 'Mechanical Keyboards', image: '/images/home/keyboards.webp', alt: 'A purple and cream mechanical keyboard with a few loose keycaps around it', credit: 'Photo: Echo' },
  { hobby: 'tcg', name: 'Trading Card Games', image: '/images/home/tcg.webp', alt: 'Pokémon card packs and toys in a shop display case', credit: 'Photo: Echo' },
  { hobby: 'consoles', name: 'Consoles', image: '/images/home/consoles.webp', alt: 'Hands on an arcade stick with red and yellow buttons', credit: 'Photo: Echo' },
  { hobby: 'esports', name: 'Esports' },
  { hobby: 'boardgames', name: 'Board Games' },
];
