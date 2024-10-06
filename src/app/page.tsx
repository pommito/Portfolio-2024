import Link from 'next/link';
import Image from 'next/image';

import downloadIcon from '../../public/download.svg';
import ResumeListItem from '@/components/ResumeListItem';
import ProjectCard from '@/components/ProjectCard';
import TextRevealAnimation from '@/components/animations/TextRevealAnimation';
import ParagraphRevealAnimation from '@/components/animations/ParagraphRevealAnimation';

import { firstParagraph, secondParagraph } from '@/data/home';
import { workExperiences, educations } from '@/data/resume';

export default function Home() {
  return (
    <main className="font-pp px-4 md:px-8 lg:px-20">
      <section className="flex flex-col h-screen max-h md:py-20">
        <h2 className="font-dot text-5xl mt-[20vh] overflow-hidden lg:text-[8.5vw]">
          <TextRevealAnimation text="Victor Lebecq" />
        </h2>
        <h1 className="text-5xl ml-20 overflow-hidden lg:text-[8.5vw]">
          <TextRevealAnimation text="Front end developer" delay={0.5} />
        </h1>
        <p className="leading-[150%] ml-auto mt-auto text-right md:text-xl w-[650px]">
          <ParagraphRevealAnimation text={firstParagraph} delay={0.85} />
        </p>
      </section>

      <section className="flex flex-col min-h-screen max-h py-20">
        <h3 className="font-dot text-6xl h-fit mt-32">Selected project</h3>
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
          <ParagraphRevealAnimation text={secondParagraph} />
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
