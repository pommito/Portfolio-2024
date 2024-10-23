import Image from 'next/image';

import SocialLink from '@/components/common/SocialLink';
import Breadcrumb from '@/components/ui/Breadcrumb';

import imageTest from '/public/projects/csf.webp';

export default function Page({ params: { url } }: { params: { url: string } }) {
  return (
    <main className="grid grid-rows-8 grid-cols-8 gap-4 w-full h-full max-w-[1920px] sm:gap-6 2xl:mx-auto">
      <section className="flex flex-col gap-3 col-start-1 col-span-8 row-start-2 row-span-2 sm:col-span-5 md:col-span-5">
        <Breadcrumb pageTitle="Work title" />
        <h1 className="font-medium text-6xl leading-none">Work title</h1>
        <p className="text-balance leading-normal lg:w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod
          felis, at varius
        </p>
        <ul className="flex items-end gap-6">
          <SocialLink title="Source code" url="mailto:victor.lebecq.pro@gmail.com" />
          <SocialLink title="Visit website" url="https://github.com/pommito" />
        </ul>
      </section>
      <div
        className="col-start-1 col-span-8 row-start-4 row-span-2 sm:col-start-5 sm:col-span-4 sm:row-start-2 sm:row-span-3 md:col-start-6 md:col-span-3 "
        style={{ viewTransitionName: `project-image-${url}` }}
      >
        <Image src={imageTest} alt="placeholder image" className="object-cover" priority />
      </div>
    </main>
  );
}
