export interface selectedWorkType {
  id: number;
  title: string;
  description: string[];
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
    description: [
      'This website is one of my first web design projects as a freelance developer. The Chambéry Savoie Football team is the local soccer club with ambitious goals for growth. They already had a website to showcase their club, teams, and recruitment processes.',
      'I was approached to carry out a complete redesign of the website and migrate it to WordPress, allowing internal teams to easily edit and add content. For the main teams, I integrated a ranking display module via the Score’N’Co API on team pages, along with the latest match score.',
    ],
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
    description: [
      'Since 1946, Gastini has been a Savoy-based company specializing in mountain finishing work. Its mission is to deliver a level of craftsmanship that meets the high standards of its international clientele and renowned companies.',
      'Without an existing online presence, Gastini commissioned me to design and develop a website that fully reflects the quality of their work. The site is minimalist, with a black background and simple animations that enhance the content.',
    ],
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
    description: [
      'Gojura is a young startup from Chambéry dedicated to creating innovative bike accessories that are safer, more practical, and more comfortable for daily commuting and bike touring.',
      'To highlight the brand before their crowdfunding campaigns, I designed and developed the company’s website, aligning with their graphic identity. The site was built in stages, first as a showcase site and later migrated to an e-commerce platform, all developed using WordPress.',
    ],
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
    description: [
      'A plumbing company in Blyes, France, Gaïtoni specializes in repair services, offering quality plumbing solutions through expertise and responsiveness.',
      'I was tasked with developing a website for the company, with the goal of creating a simple site that clearly presents Gaïtoni’s services and project portfolio. The site was built using WordPress.',
    ],
    slug: 'gaitoni-plomberie',
    date: 'Jul. 2024',
    image: '/projects/gaitoni.webp',
    mobileImage: '/projects/gaitoni_square.webp',
    role: ['Developement'],
    techs: ['Wordpress', 'Javascript'],
    url: 'https://gaitoni-plomberie.com',
  },
];
