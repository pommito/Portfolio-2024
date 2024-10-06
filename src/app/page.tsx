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
        <h2 className="font-dot text-2xl mt-[20vh] overflow-hidden sm:text-[8.5vw] sm:leading-[100%]">
          <TextReveal text="Victor Lebecq" />
        </h2>
        <h1 className="text-4xl overflow-hidden  md:ml-20 sm:text-[8.5vw] sm:leading-[100%]">
          <TextReveal text="Front end Developer" delay={0.5} />
        </h1>
        <p className="leading-[150%]  text-left text-xl mt-4 w-[90%] md:mt-auto md:ml-auto  lg:text-right lg:w-[650px]">
          <TextReveal text={firstParagraph} delay={0.85} />
        </p>
      </section>

      <section className="flex flex-col min-h-screen py-20">
        <h3 className="font-dot text-3xl h-fit md:mt-32 md:text-6xl">Selected project</h3>
        <div className="grid grid-cols-1 auto-rows-auto gap-8 w-full sm:grid-cols-2">
          <ProjectCard className="lg:mt-40" id={1} />
          <ProjectCard className="lg:justify-self-end" id={2} />
          <ProjectCard className="lg:mt-40" id={3} />
          <ProjectCard className="lg:justify-self-end" id={4} />
        </div>
      </section>

      <section className="py-20">
        <h3 className="font-dot text-6xl mb-20">About me</h3>
        <p className="leading-[150%] text-xl">
          <TextReveal text={secondParagraph} amountInView={1} />
        </p>

        <h4 className="font-dot opacity-50 mt-20 mb-4">[ Work Experiences ]</h4>
        <ul>
          {workExperiences.map((exp, index) => (
            <ResumeListItem key={index} {...exp} />
          ))}
        </ul>
        <h4 className="font-dot opacity-50 mt-12 mb-4">[ Education ]</h4>
        <ul>
          {educations.map((exp, index) => (
            <ResumeListItem key={index} {...exp} />
          ))}
        </ul>
        <Link href={'#'} className="flex items-center justify-center gap-2 mt-20 mx-auto w-fit">
          <span className="font-dot text-xl">Download my resume</span>
          <Image src={downloadIcon} alt="icon in the button for downloading resume" aria-hidden />
        </Link>
      </section>
    </main>
  );
}
