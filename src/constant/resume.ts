export interface experienceType {
  title: string;
  date: string;
  company: string;
  techs: string;
}

export const workExperiences: experienceType[] = [
  {
    title: 'Web Developer',
    date: '[ Feb 2022 - Present ]',
    company: 'Freelance',
    techs: 'React | Wordpress | AstroJS',
  },
  {
    title: 'Freelance Web Developer',
    date: '[ March 2024 - Nov 2024 ]',
    company: 'Titan Informatique',
    techs: 'Wordpress | Javascript | Php',
  },
  {
    title: 'Intern Web Marketer',
    date: '[ Sept 2022 - Sept 2023 ]',
    company: 'BVA Assurances',
    techs: 'Wordpress | Html | css',
  },
];

export const educations: experienceType[] = [
  {
    title: 'Formation DWWWM',
    date: '[ Oct 2023 - June 2024 ]',
    company: "O'clock School",
    techs: 'React | Laravel | Javascript',
  },
  {
    title: 'Master Digital Marketing',
    date: '[ Sept 2021 - Jul 2023 ]',
    company: 'CNAM AURA',
    techs: 'Marketing BS',
  },
];
