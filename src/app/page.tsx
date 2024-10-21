import Image from 'next/image';

import ProjectCard from '@/components/common/ProjectCard';
import AnimatedLink from '@/components/common/AnimatedLink';
import MobileSlider from '@/components/ui/MobileSlider';

import { selectedWorks } from '@/constant/selectedWorks';

export default function Home() {
  return (
    <main className="grid grid-rows-5 gap-6 h-full w-full max-w-[1920px] 2xl:mx-auto">
      <section className="row-start-1 row-span-3 flex flex-col justify-end gap-6 h-full">
        <h1 className="flex flex-col font-medium leading-none" style={{ fontSize: 'clamp(3.25rem, 15vw, 7.5rem)' }}>
          <span>Front end</span>
          <span className="ml-12 sm:ml-16">Developer</span>
        </h1>
        <div
          className="flex flex-col justify-between gap-6 sm:flex-row"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
        >
          <p className="text-balance leading-normal sm:w-2/3">
            I’m a 25 years old developer based in France who likes to work with React, Wordpress, and Laravel. With a
            keen eye for design, I love crafting immersive and scalable experiences on the web. Together, let’s bring
            your projects to life.
          </p>
          <ul className="flex justify-between items-end sm:flex-col sm:justify-around">
            <li className="flex flex-row gap-3 items-center leading-none">
              <AnimatedLink title="Email" url="mailto:victor.lebecq.pro@gmail.com" />
              <Image src="/arrow-icon.svg" alt="arrow icon" className="mt-[2px]" aria-hidden width={12} height={12} />
            </li>
            <li className="flex flex-row gap-3 items-center leading-none">
              <AnimatedLink title="Github" url="https://github.com/pommito" />
              <Image src="/arrow-icon.svg" alt="arrow icon" className="mt-[2px]" aria-hidden width={12} height={12} />
            </li>
            <li className="flex flex-row gap-3 items-center leading-none">
              <AnimatedLink title="Linkedin" url="www.linkedin.com/in/victor-lebecq" />
              <Image src="/arrow-icon.svg" alt="arrow icon" className="mt-[2px]" aria-hidden width={12} height={12} />
            </li>
          </ul>
        </div>
      </section>
      <section className="hidden row-start-4 row-span-2 sm:grid grid-cols-2 auto-rows-auto gap-6 w-full md:grid-cols-4">
        {selectedWorks.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
      <MobileSlider />
    </main>
  );
}
