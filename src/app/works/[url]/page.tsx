import Image from 'next/image';

import SocialLink from '@/components/common/SocialLink';
import Breadcrumb from '@/components/ui/Breadcrumb';

import imageTest from '/public/projects/csf.webp';

export default function Page({ params: { url } }: { params: { url: string } }) {
  return (
    <main className="grid grid-rows-8 grid-cols-8 gap-4 w-full h-full max-w-[1920px] sm:gap-6 2xl:mx-auto">
      <div className="flex flex-col gap-3 col-start-1 col-span-8 row-start-2 row-span-2">
        <Breadcrumb pageTitle="Chambéry Savoie Football" />
        <h1 className="font-medium text-6xl leading-none">Chambéry Savoie Football</h1>
      </div>
      <div
        className="col-start-1 col-span-4 row-start-4 row-span-5 h-full w-full"
        style={{ viewTransitionName: `project-image-${url}` }}
      >
        <Image src={imageTest} alt="placeholder image" className="h-full w-full object-cover" priority />
      </div>
      <div className="flex justify-between gap-6 col-start-6 col-span-3 row-start-4 row-span-1">
        <div className="w-1/3">
          <div className="relative after:content-[''] after:absolute after:top-1/2 after:left-0 after:transform after:-translate--1/2 after:w-full after:h-[1px] after:bg-[#0c0c0c]/15 after:-z-1">
            <h2 className="relative inline-block font-medium bg-white pr-2 z-10">Date</h2>
          </div>
          <p className="text-sm opacity-50">Aug. 2024</p>
        </div>
        <div className="w-1/3">
          <div className="relative after:content-[''] after:absolute after:top-1/2 after:left-0 after:transform after:-translate--1/2 after:w-full after:h-[1px] after:bg-[#0c0c0c]/15 after:-z-1">
            <h2 className="relative inline-block font-medium bg-white pr-2 z-10">Role</h2>
          </div>
          <ul className="text-sm opacity-50">
            <li>Design</li>
            <li>Developement</li>
          </ul>
        </div>
        <div className="w-1/3">
          <div className="relative after:content-[''] after:absolute after:top-1/2 after:left-0 after:transform after:-translate--1/2 after:w-full after:h-[1px] after:bg-[#0c0c0c]/15 after:-z-1">
            <h2 className="relative inline-block font-medium bg-white pr-2 z-10">Techs</h2>
          </div>
          <ul className="text-sm opacity-50">
            <li>Wordpress</li>
            <li>Javascript</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6 col-start-6 col-span-3 row-start-5 row-span-4">
        <p className="text-pretty leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi.
        </p>
        <p className="text-balance leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi.
        </p>

        <ul className="flex items-end gap-6">
          <SocialLink title="Source code" url="mailto:victor.lebecq.pro@gmail.com" />
          <SocialLink title="Visit website" url="https://github.com/pommito" />
        </ul>
      </div>
    </main>
  );
}
