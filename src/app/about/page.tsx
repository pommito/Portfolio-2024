import Image from 'next/image';

import Breadcrumb from '@/components/ui/Breadcrumb';
import ResumeListItem from '@/components/ui/ResumeListItem';
import SocialLink from '@/components/common/SocialLink';

import aboutImage from '/public/about.webp';
import meImage from '/public/moi.webp';

import { educations, workExperiences } from '@/constant/resume';

export default function About() {
  return (
    <main className="grid grid-rows-8 grid-cols-8 gap-4 w-full h-full max-w-[1920px] sm:gap-6 2xl:mx-auto">
      <section className="flex flex-col gap-3 col-start-1 col-span-8 row-start-2 row-span-2 sm:col-span-5 md:col-span-5">
        <Breadcrumb pageTitle="About" />
        <h1 className="font-medium text-6xl leading-none">About me</h1>
        <p className="text-balance leading-normal lg:w-4/5">
          Passionate by technologies since childhood, i like to find solutions to solve problems. Currently based in
          Valencia i’m working remotly for several clients on various projects as a freelancer. When i’m not coding i’m
          probably skiing or exploring mountains.
        </p>
        <ul className="flex justify-between items-end lg:w-3/5">
          <SocialLink title="Email" url="mailto:victor.lebecq.pro@gmail.com" />
          <SocialLink title="Github" url="https://github.com/pommito" />
          <SocialLink title="Linkedin" url="www.linkedin.com/in/victor-lebecq" />
          <SocialLink title="Intagram" url="https://www.instagram.com/dev.by.vic" />
        </ul>
      </section>
      <div className="col-start-1 col-span-8 row-start-4 row-span-2 sm:col-start-6 sm:col-span-3 sm:row-start-2 sm:row-span-3 md:col-start-6 md:col-span-3 lg:col-start-7 lg:col-span-2 lg:row-span-4 lg:row-start-2  ">
        <Image src={meImage} alt="placeholder image" objectFit="cover" className="h-80 w-full md:h-full" />
      </div>
      <div className="flex flex-col justify-center col-start-1 col-span-8 row-start-6 row-span-3 mt-6 sm:row-start-5 sm:row-span-4  md:justify-end md:row-start-5 md:row-span-4 lg:col-span-5">
        <h2 className="opacity-50">[ Work Experiences ]</h2>
        <ul className="mb-8">
          {workExperiences.map((exp, index) => (
            <ResumeListItem key={index} {...exp} />
          ))}
        </ul>
        <h2 className="opacity-50">[ Education ]</h2>
        <ul>
          {educations.map((exp, index) => (
            <ResumeListItem key={index} {...exp} />
          ))}
        </ul>
      </div>
      <div className="hidden col-start-6 col-span-3 row-start-6 row-span-3 lg:block">
        <Image src={aboutImage} alt="placeholder image" objectFit="cover" className="w-full h-full" />
      </div>
    </main>
  );
}
