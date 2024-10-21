export interface selectedWorkType {
  id: number;
  title: string;
  image: string;
  mobileImage: string;
  url: string;
}

export const selectedWorks: selectedWorkType[] = [
  {
    id: 0,
    title: 'Chambéry Savoie Football',
    image: '/projects/csf.webp',
    mobileImage: '/projects/csf_square.webp',
    url: 'https://chamberysavoiefootball.fr/',
  },
  {
    id: 1,
    title: 'Gastini',
    image: '/projects/gastini.webp',
    mobileImage: '/projects/gastini_square.webp',
    url: 'https://gastini.fr',
  },
  {
    id: 2,
    title: 'Gojura',
    image: '/projects/gojura.webp',
    mobileImage: '/projects/gojura_square.webp',
    url: 'https://gojura.fr',
  },
  {
    id: 3,
    title: 'Gaitoni Plomberie',
    image: '/projects/gaitoni.webp',
    mobileImage: '/projects/gaitoni_square.webp',
    url: 'https://gaitoni-plomberie.com',
  },
];
