import Link from 'next/link';
import Image from 'next/image';

import downloadIcon from '../../public/download.svg';
import ResumeListItem from '@/components/ResumeListItem';
import ProjectCard from '@/components/ProjectCard';
import TextReveal from '@/components/animations/TextReveal';

import { firstParagraph, secondParagraph } from '@/data/home';
import { workExperiences, educations } from '@/data/resume';

export default function Home() {
  return (
    <main className="font-pp px-4 md:px-8 lg:px-20">
      <section className="flex flex-col justify-end h-[100dvh] max-h py-20">
        <h2 className="font-dot text-3xl mt-[20vh] overflow-hidden sm:text-[8.5vw] sm:leading-[100%]">
          <TextReveal text="Victor Lebecq" />
        </h2>
        <h1 className="text-6xl overflow-hidden  md:ml-20 sm:text-[8.5vw] sm:leading-[100%]">
          <TextReveal text="Front end Developer" delay={0.5} />
        </h1>
        <p className="leading-[150%] text-balance text-left sm:text-xl mt-4 md:mt-auto md:ml-auto  lg:text-right lg:w-[650px]">
          <TextReveal text={firstParagraph} delay={0.85} />
        </p>
      </section>

      <section className="flex flex-col min-h-screen py-20">
        <h3 className="font-dot text-3xl h-fit md:mt-32 mb-16 sm:mb-0 md:text-6xl">Selected project</h3>
        <div className="grid grid-cols-1 auto-rows-auto gap-12 md:gap-16 w-full sm:grid-cols-2">
          <ProjectCard className="md:mt-20 lg:mt-40" id={1} />
          <ProjectCard className="md:justify-self-end" id={2} />
          <ProjectCard className="md:mt-20 lg:mt-40" id={3} />
          <ProjectCard className="md:justify-self-end" id={4} />
        </div>
      </section>

      <section className="md:py-20">
        <h3 className="font-dot text-3xl sm:text-6xl mb-8 sm:mb-20">About me</h3>
        <p className="leading-[150%] text-balance sm:text-xl">
          <TextReveal text={secondParagraph} amountInView={1} />
        </p>

        <h4 className="font-dot opacity-50  mt-8 sm:mt-20 mb-4">[ Work Experiences ]</h4>
        <ul>
          {workExperiences.map((exp, index) => (
            <ResumeListItem key={index} {...exp} />
          ))}
        </ul>
        <h4 className="font-dot opacity-50 mt-8 sm:mt-12 mb-4">[ Education ]</h4>
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
    </main>
  );
}
