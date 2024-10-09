export const firstParagraph = `I’m a 24 years old developer based in France who likes to work with React,
Wordpress, and Laravel. With a keen eye for design, I love crafting immersive
and scalable experiences on the web. Together, let’s bring your projects to life.`;

export const secondParagraph = `Passionate about technology since childhood, I enjoy finding
solutions to solve problems. Currently based in Valencia, I work
remotely for several clients on various projects as a freelancer.
When I’m not coding, I’m probably skiing or exploring the mountains.`;

export interface projectsType {
  title: string;
  techs: string;
  date: string;
  url: string;
}

export const projects: projectsType[] = [
  {
    title: 'Gastini',
    techs: '[ Wordpress | Javascript ]',
    date: '2024',
    url: 'https://gastini.fr',
  },
  {
    title: 'Lightfile',
    techs: '[ React ]',
    date: '2024',
    url: 'https://lightfile.victorlebecq.fr',
  },
  {
    title: 'Gaïtoni Plomberie',
    techs: '[ Wordpress | Javascript ]',
    date: '2024',
    url: 'https://gaitoni-plomberie.com',
  },
  {
    title: 'Gojura',
    techs: '[ Wordpress | Javascript ]',
    date: '2024',
    url: 'https://gojura.fr',
  },
];
