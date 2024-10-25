import Image from 'next/image';

import Breadcrumb from '@/components/ui/Breadcrumb';
import WorkListItem from '@/components/ui/WorkListItem';

import { works } from '@/constant/works';
import image from '/public/works.webp';

export default function Works() {
  return (
    <main className="flex flex-col mt-[15dvh] mb-12 gap-4 w-full h-full max-w-[1920px] sm:gap-6 md:grid md:grid-rows-8 md:grid-cols-8 md:mt-0 2xl:mx-auto">
      <section className="flex flex-col gap-3 md:col-start-1 md:col-span-8 md:row-start-2 md:row-span-2 lg:col-span-3">
        <Breadcrumb pageTitle="Works" />
        <h1 className="font-medium text-6xl leading-none">Works</h1>
        <p className="text-balance leading-normal">
          As a developer I enjoy working on the entire process of a project, from considering how design can enhance the
          user experience to bringing that design to life during development. On this page you can find a list of
          projects I’ve worked on as a freelance web developer.
        </p>
      </section>
      <div className="flex flex-col justify-between md:justify-end md:col-start-1 md:col-span-8 md:row-start-4 md:row-span-5 lg:col-start-5 lg:col-span-4 lg:row-start-2 lg:row-span-7">
        {works.map((work, index) => (
          <WorkListItem key={index} {...work} />
        ))}
      </div>
      <div className="hidden lg:col-start-1 lg:col-span-3 lg:row-start-6 lg:row-span-3 lg:block">
        <Image src={image} alt="works page image" width={1080} height={720} className="w-full h-full" />
      </div>
    </main>
  );
}
