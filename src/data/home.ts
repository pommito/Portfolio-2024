export const firstParagraph = `I’m a 24 years old developer based in France who likes to work with React,
Wordpress, and Laravel. With a keen eye for design, I love crafting immersive
and scalable experiences on the web. Together, let’s bring your projects to life.`;

export const secondParagraph = `Passionate about technology since childhood, I enjoy finding
solutions to solve problems. Currently based in Valencia, I work
remotely for several clients on various projects as a freelancer.
When I’m not coding, I’m probably skiing or exploring the mountains.`;

export interface projectType {
  id: number;
  title: string;
  image: string;
  techs: string;
  date: string;
  url: string;
  className: string;
}

export const projects: projectType[] = [
  {
    id: 0,
    title: 'Gastini',
    image: '/projects/gastini.webp',
    techs: '[ Wordpress | Javascript ]',
    date: '[ 2024 ]',
    url: 'https://gastini.fr',
    className: 'md:mt-20 lg:mt-40',
  },
  {
    id: 1,
    title: 'Gaitoni Plomberie',
    image: '/projects/gaitoni.webp',
    techs: '[ Wordpress | Javascript ]',
    date: '[ 2024 ]',
    url: 'https://gaitoni-plomberie.com',
    className: 'md:justify-self-end',
  },
  {
    id: 2,
    title: 'Gojura',
    image: '/projects/gojura.webp',
    techs: '[ Wordpress | Javascript ]',
    date: '[ 2023 ]',
    url: 'https://gojura.fr',
    className: 'md:mt-20 lg:mt-40',
  },
  {
    id: 3,
    title: 'Chambéry Savoie Football',
    image: '/projects/csf.webp',
    techs: '[ Wordpress | Javascript ]',
    date: '[ 2023 ]',
    url: 'https://chamberysavoiefootball.fr/',
    className: 'md:justify-self-end',
  },
];

export const technos: string[] = [
  'React',
  'Wordpress',
  'Laravel',
  'Javascript',
  'PHP',
  'MySQL',
  'Redux',
  'Tailwind',
  'ThreeJS',
];
