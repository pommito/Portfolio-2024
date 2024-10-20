import Link from 'next/link';
import Image from 'next/image';

import Breadcrumb from '@/components/ui/Breadcrumb';
import TextReveal from '@/components/old/TextReveal';
import ResumeListItem from '@/components/old/ResumeListItem';
import SocialLink from '@/components/common/SocialLink';

import downloadIcon from '/public/download.svg';
import aboutImage from '/public/about.webp';
import meImage from '/public/moi.webp';

import { secondParagraph, technos } from '@/data/home';
import { educations, workExperiences } from '@/data/resume';

export default function About() {
  return (
    <main className="grid grid-rows-8 grid-cols-8 gap-4 w-full h-full sm:gap-6">
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
      <div className="flex flex-col justify-center col-start-1 col-span-8 row-start-6 row-span-3 sm:row-start-5 sm:row-span-4 mt-6 md:row-start-5 md:row-span-4 lg:col-span-5">
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

export function OldAbout() {
  return (
    <section className="md:py-20">
      <h3 className="font-dot text-3xl md:text-6xl mb-8 sm:mb-10">About me</h3>
      <p className="leading-[150%] text-balance mb-10 sm:text-xl">
        <TextReveal text={secondParagraph} amountInView={1} />
      </p>
      <p className="flex flex-wrap gap-4 md:justify-between">
        {technos.map((techno, index) => (
          <span key={index} className="font-dot text-xl sm:text-2xl opacity-50">
            {techno}
          </span>
        ))}
      </p>

      <h4 className="font-dot opacity-50 mt-8  sm:mt-10 mb-4">[ Work Experiences ]</h4>
      <ul>
        {workExperiences.map((exp, index) => (
          <ResumeListItem key={index} {...exp} />
        ))}
      </ul>
      <h4 className="font-dot opacity-50 mt-8 sm:mt-10 mb-4">[ Education ]</h4>
      <ul>
        {educations.map((exp, index) => (
          <ResumeListItem key={index} {...exp} />
        ))}
      </ul>
      <Link href={'#'} className="flex items-center justify-center gap-2 mt-8  mx-auto w-fit md:mt-20">
        <span className="font-dot md:text-xl">Download my resume</span>
        <Image src={downloadIcon} alt="icon in the button for downloading resume" aria-hidden />
      </Link>
    </section>
  );
}
