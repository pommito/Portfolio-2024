import Image from 'next/image';

import Breadcrumb from '@/components/ui/Breadcrumb';
import ResumeListItem from '@/components/ui/ResumeListItem';
import SocialLink from '@/components/common/SocialLink';

import aboutImage from '/public/about.webp';
import meImage from '/public/moi.webp';

import { educations, workExperiences } from '@/constant/resume';

export default function About() {
  return (
    <main className="flex flex-col mt-[15dvh] mb-12 gap-6 w-full h-full max-w-[1920px] sm:gap-6 md:grid md:grid-rows-8 md:grid-cols-8 md:mt-0 2xl:mx-auto">
      <section className="flex flex-col gap-3 md:col-start-1 md:col-span-5 md:row-start-2 md:row-span-2">
        <Breadcrumb pageTitle="About" />
        <h1 className="block font-medium text-6xl leading-none overflow-y-hidden">
          <span className="inline-block animate-slide-in">About me</span>
        </h1>
        <p className="text-balance leading-normal lg:w-4/5">
          Passionate by technologies since childhood, i like to find solutions to solve problems. Currently based in
          Grenoble i’m working remotly for several clients on various projects as a freelancer. When i’m not coding i’m
          probably skiing or exploring mountains.
        </p>
        <ul className="flex justify-between items-end lg:w-3/5">
          <SocialLink title="Email" url="mailto:victor.lebecq.pro@gmail.com" external={true} />
          <SocialLink title="Github" url="https://github.com/pommito" external={true} />
          <SocialLink title="Linkedin" url="www.linkedin.com/in/victor-lebecq" external={true} />
          <SocialLink title="Intagram" url="https://www.instagram.com/dev.by.vic" external={true} />
        </ul>
      </section>
      <div className="mt-6 sm:mt-0 md:row-start-2 md:row-span-3 md:col-start-6 md:col-span-3 lg:col-start-7 lg:col-span-2 lg:row-span-4 lg:row-start-2  ">
        <Image src={meImage} alt="profil picture" width={400} height={400} className="w-full md:h-full" />
      </div>
      <div className="flex flex-col justify-center mt-6 md:justify-end md:col-start-1 md:col-span-8 md:row-start-5 md:row-span-4 lg:col-span-5">
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
      <div className="hidden lg:col-start-6 lg:col-span-3 rlg:ow-start-6 lg:row-span-3 lg:block">
        <Image src={aboutImage} alt="about me image" width={1080} height={720} className="w-full h-full" />
      </div>
    </main>
  );
}
