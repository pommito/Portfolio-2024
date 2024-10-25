import Image from 'next/image';
import { notFound } from 'next/navigation';

import SocialLink from '@/components/common/SocialLink';
import Breadcrumb from '@/components/ui/Breadcrumb';

import { selectedWorks } from '@/constant/selectedWorks';
import { getWorkByUrl } from '@/services/works';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const work = await getWorkByUrl(params.slug);

  if (!work) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  return {
    title: work?.title,
    openGraph: {
      images: [
        {
          url: `https://victorlebecq.fr${work?.image}`,
          width: 1080,
          height: 720,
          alt: work?.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return selectedWorks.map((work) => ({
    slug: work.slug,
  }));
}

// Force SSR for this page
export const dynamic = 'force-dynamic';

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const work = await getWorkByUrl(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="flex flex-col mt-[15dvh] mb-12 gap-4 w-full h-full max-w-[1920px] sm:gap-6 md:grid md:grid-rows-8 md:grid-cols-8 md:mt-0 2xl:mx-auto">
      <div className="flex flex-col gap-3 md:col-start-1 md:col-span-8 md:row-start-2 md:row-span-2">
        <Breadcrumb pageTitle={work.title} />
        <h1 className="font-medium text-4xl leading-none sm:text-6xl">{work.title}</h1>
      </div>
      <div
        className="h-full w-full md:col-start-1 md:col-span-4 md:row-start-4 md:row-span-5"
        style={{ viewTransitionName: `project-image-${slug}` }}
      >
        <Image
          src={work.image}
          alt={`${work.title} image`}
          width={1080}
          height={720}
          className=" w-full aspect-square object-cover md:h-full md:aspect-auto"
          priority
        />
      </div>
      <div className="flex justify-between gap-6 md:col-start-6 md:col-span-3 md:row-start-4 md:row-span-1">
        <div className="w-1/3">
          <div className="relative after:content-[''] after:absolute after:top-1/2 after:left-0 after:transform after:-translate--1/2 after:w-full after:h-[1px] after:bg-[#0c0c0c]/15 after:-z-1">
            <h2 className="relative inline-block font-medium bg-[#fdfdfd] pr-2 z-10">Date</h2>
          </div>
          <p className="text-sm opacity-50">{work.date}</p>
        </div>
        <div className="w-1/3">
          <div className="relative after:content-[''] after:absolute after:top-1/2 after:left-0 after:transform after:-translate--1/2 after:w-full after:h-[1px] after:bg-[#0c0c0c]/15 after:-z-1">
            <h2 className="relative inline-block font-medium bg-white pr-2 z-10">Role</h2>
          </div>
          <ul className="text-sm opacity-50">
            {work.role.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
        <div className="w-1/3">
          <div className="relative after:content-[''] after:absolute after:top-1/2 after:left-0 after:transform after:-translate--1/2 after:w-full after:h-[1px] after:bg-[#0c0c0c]/15 after:-z-1">
            <h2 className="relative inline-block font-medium bg-white pr-2 z-10">Techs</h2>
          </div>
          <ul className="text-sm opacity-50">
            {work.techs.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:col-start-6 md:col-span-3 md:row-start-5 md:row-span-4">
        {work.description.map((paragraph, index) => (
          <p key={index} className="leading-normal">
            {paragraph}
          </p>
        ))}
        <ul className="flex items-end gap-6 uppercase">
          {work.repoUrl && <SocialLink title="Source code" url={work.repoUrl} />}
          <SocialLink title="Visit website" url={work.url} />
        </ul>
      </div>
    </main>
  );
}
