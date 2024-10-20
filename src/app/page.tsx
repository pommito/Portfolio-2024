import Grid from '@/components/ui/Grid';
import Image from 'next/image';

import Header from '@/components/layout/Header';
import Project from '@/components/common/ProjectCard';
import AnimatedLink from '@/components/common/AnimatedLink';

import { selectedWorks } from '@/constant/works';

export default function Playground() {
  return (
    <main className="grid grid-rows-5 gap-6 w-full h-full">
      <section className="row-start-1 row-span-3 flex flex-col justify-end gap-6 h-full">
        <h1 className="flex flex-col font-medium leading-none" style={{ fontSize: 'clamp(3.75rem, 12vw, 7.5rem)' }}>
          <span>Front end</span>
          <span className="ml-16">Developer</span>
        </h1>
        <div className="flex justify-between">
          <p className="text-balance leading-normal w-2/3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            I’m a 25 years old developer based in France who likes to work with React, Wordpress, and Laravel. With a
            keen eye for design, I love crafting immersive and scalable experiences on the web. Together, let’s bring
            your projects to life.
          </p>
          <ul className="flex flex-col justify-around items-end">
            <li
              className="flex flex-row gap-3 items-center leading-none"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
            >
              <AnimatedLink title="Email" url="mailto:victor.lebecq.pro@gmail.com" />
              <Image src="/arrow-icon.svg" alt="arrow icon" className="mt-[2px]" aria-hidden width={12} height={12} />
            </li>
            <li
              className="flex flex-row gap-3 items-center leading-none"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
            >
              <AnimatedLink title="Github" url="https://github.com/pommito" />
              <Image src="/arrow-icon.svg" alt="arrow icon" className="mt-[2px]" aria-hidden width={12} height={12} />
            </li>
            <li
              className="flex flex-row gap-3 items-center leading-none"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
            >
              <AnimatedLink title="Linkedin" url="www.linkedin.com/in/victor-lebecq" />
              <Image src="/arrow-icon.svg" alt="arrow icon" className="mt-[2px]" aria-hidden width={12} height={12} />
            </li>
          </ul>
        </div>
      </section>
      <section className="row-start-4 row-span-2 grid grid-cols-4 gap-6 w-full">
        {selectedWorks.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </main>
  );
}
