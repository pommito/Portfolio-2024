export interface worksType {
  title: string;
  techs: string;
  date: string;
  url?: string;
  githubUrl?: string;
}

export const works: worksType[] = [
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
    githubUrl: 'https://github.com/pommito/Lightfile',
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
  {
    title: 'WePeak',
    techs: '[ React | Redux | Symfony ]',
    date: '2024',
  },
  {
    title: 'Chambéry Savoie Football',
    techs: '[ Wordpress | Javascript ]',
    date: '2023',
    url: 'https://chamberysavoiefootball.fr',
  },
  {
    title: 'Giea des savoie',
    techs: '[ Wordpress ]',
    date: '2023',
    url: 'https://giea-des-savoie.fr',
  },
  {
    title: 'Immo Lyon 7',
    techs: '[ Wordpress ]',
    date: '2023',
    url: 'https://immo-lyon7.fr',
  },
];
