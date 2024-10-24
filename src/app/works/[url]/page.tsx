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
      <section className="flex flex-col gap-6 col-start-6 col-span-3 row-start-4 row-span-4">
        <p className="text-balance leading-loose">
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
      </section>
    </main>
  );
}
