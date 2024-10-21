import Image from 'next/image';

import Breadcrumb from '@/components/ui/Breadcrumb';

import aboutImage from '/public/about.webp';

export default function Works() {
  return (
    <main className="grid grid-rows-8 grid-cols-8 gap-4 w-full h-full max-w-[1920px] sm:gap-6 2xl:mx-auto">
      <section className="flex flex-col gap-3 col-start-1 col-span-8 row-start-2 row-span-2 lg:col-span-4">
        <Breadcrumb pageTitle="Works" />
        <h1 className="font-medium text-6xl leading-none">Works</h1>
        <p className="text-balance leading-normal">
          These is the full list of all the projects i’ve been working on as a freelance developer. Here you can find
          the link to the live website and the source code if the project is open source. Feel free to browse those
          projects.
        </p>
      </section>
      <div className="bg-red-200 flex flex-col col-start-1 col-span-8 row-start-4 row-span-5 lg:col-start-5 lg:col-span-4 lg:row-start-2 lg:row-span-7"></div>
      <div className="hidden col-start-1 col-span-3 row-start-6 row-span-3 lg:block">
        <Image src={aboutImage} alt="placeholder image" objectFit="cover" className="w-full h-full" />
      </div>
    </main>
  );
}
