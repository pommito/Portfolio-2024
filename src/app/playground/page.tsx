import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import Grid from '@/components/Grid';
import Header from '@/components/new/Header';
import AnimatedLink from '@/components/animations/AnimatedLink';
import Project from '@/components/new/Project';

export default function Playground() {
  return (
    <div className="font-pp h-[100dvh] w-screen p-2">
      <div className="relative bg-white h-full w-full border rounded-md px-6 py-6">
        <Grid />
        <Header />
        <main className="grid grid-rows-5 gap-6 w-full h-full">
          <section className="row-start-1 row-span-3 flex flex-col justify-end gap-6 h-full">
            <h1 className="flex flex-col font-medium text-9xl">
              <span>Front end</span>
              <span className="ml-16">Developer</span>
            </h1>
            <div className="flex justify-between">
              <p className="text-xl text-balance leading-normal w-2/3">
                I’m a 25 years old developer based in France who likes to work with React, Wordpress, and Laravel. With
                a keen eye for design, I love crafting immersive and scalable experiences on the web. Together, let’s
                bring your projects to life.
              </p>
              <ul className="flex flex-col justify-around items-end">
                <li className="flex flex-row gap-3 items-center leading-none text-xl">
                  <AnimatedLink title="Email" url="mailto:victor.lebecq.pro@gmail.com" />
                  <Image
                    src="/arrow-icon.svg"
                    alt="arrow icon"
                    className="mt-[2px]"
                    aria-hidden
                    width={12}
                    height={12}
                  />
                </li>
                <li className="flex flex-row gap-3 items-center leading-none text-xl">
                  <AnimatedLink title="Github" url="https://github.com/pommito" />
                  <Image
                    src="/arrow-icon.svg"
                    alt="arrow icon"
                    className="mt-[2px]"
                    aria-hidden
                    width={12}
                    height={12}
                  />
                </li>
                <li className="flex flex-row gap-3 items-center leading-none text-xl">
                  <AnimatedLink title="Linkedin" url="www.linkedin.com/in/victor-lebecq" />
                  <Image
                    src="/arrow-icon.svg"
                    alt="arrow icon"
                    className="mt-[2px]"
                    aria-hidden
                    width={12}
                    height={12}
                  />
                </li>
              </ul>
            </div>
          </section>
          <section className="row-start-4 row-span-2 grid grid-cols-4 gap-6 w-full">
            <Project />
            <Project />
            <Project />
            <Project />
          </section>
        </main>
      </div>
    </div>
  );
}
