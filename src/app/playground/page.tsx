import Image from 'next/image';

import Grid from '@/components/Grid';
import Header from '@/components/new/Header';

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
            <div className="flex justify-between text-xl ">
              <p className="text-balance leading-normal w-2/3">
                I’m a 25 years old developer based in France who likes to work with React, Wordpress, and Laravel. With
                a keen eye for design, I love crafting immersive and scalable experiences on the web. Together, let’s
                bring your projects to life.
              </p>
              <ul className="flex flex-col items-end leading-normal">
                <li>Email</li>
                <li>Github</li>
                <li>Linkedin</li>
              </ul>
            </div>
          </section>
          <section className="row-start-4 row-span-2 grid grid-cols-4 gap-6 w-full">
            <div className="relative w-full h-full">
              <Image src="/projects/csf.webp" alt="Chambéry Savoie football" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
              <Image src="/projects/csf.webp" alt="Chambéry Savoie football" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
              <Image src="/projects/csf.webp" alt="Chambéry Savoie football" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
              <Image src="/projects/csf.webp" alt="Chambéry Savoie football" fill className="object-cover" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
