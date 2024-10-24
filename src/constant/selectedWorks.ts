export interface selectedWorkType {
  id: number;
  title: string;
  slug: string;
  date: string;
  image: string;
  mobileImage: string;
  role: string[];
  techs: string[];
  repoUrl?: string;
  url: string;
}

export const selectedWorks: selectedWorkType[] = [
  {
    id: 0,
    title: 'Chambéry Savoie Football',
    slug: 'chambery-savoie-football',
    date: 'May 2023',
    image: '/projects/csf.webp',
    mobileImage: '/projects/csf_square.webp',
    role: ['Developement'],
    techs: ['Wordpress'],
    url: 'https://chambery-savoie-football.com',
  },
  {
    id: 1,
    title: 'Gastini',
    slug: 'gastini',
    date: 'Aug. 2024',
    image: '/projects/gastini.webp',
    mobileImage: '/projects/gastini_square.webp',
    role: ['Design', 'Developement'],
    techs: ['Wordpress', 'Javascript', 'Figma'],
    url: 'https://gastini.fr',
  },
  {
    id: 2,
    title: 'Gojura',
    slug: 'gojura',
    date: 'Feb. 2024',
    image: '/projects/gojura.webp',
    mobileImage: '/projects/gojura_square.webp',
    role: ['Design', 'Developement'],
    techs: ['Wordpress', 'Javascript', 'Figma'],
    url: 'https://gojura.fr',
  },
  {
    id: 3,
    title: 'Gaitoni Plomberie',
    slug: 'gaitoni-plomberie',
    date: 'Jul. 2024',
    image: '/projects/gaitoni.webp',
    mobileImage: '/projects/gaitoni_square.webp',
    role: ['Developement'],
    techs: ['Wordpress', 'Javascript'],
    url: 'https://gaitoni-plomberie.com',
  },
];
