export interface projectType {
  id: number;
  title: string;
  image: string;
  url: string;
}

export const selectedWorks: projectType[] = [
  {
    id: 0,
    title: 'Chambéry Savoie Football',
    image: '/projects/csf.webp',
    url: 'https://chamberysavoiefootball.fr/',
  },
  {
    id: 1,
    title: 'Gastini',
    image: '/projects/gastini.webp',
    url: 'https://gastini.fr',
  },
  {
    id: 2,
    title: 'Gojura',
    image: '/projects/gojura.webp',
    url: 'https://gojura.fr',
  },
  {
    id: 3,
    title: 'Gaitoni Plomberie',
    image: '/projects/gaitoni.webp',
    url: 'https://gaitoni-plomberie.com',
  },
];
