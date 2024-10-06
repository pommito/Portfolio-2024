import Link from 'next/link';
import Image from 'next/image';

import downloadIcon from '../../public/download.svg';
import ResumeListItem from '@/components/ResumeListItem';
import ProjectCard from '@/components/ProjectCard';
import TextRevealAnimation from '@/components/animations/TextRevealAnimation';
import ParagraphRevealAnimation from '@/components/animations/ParagraphRevealAnimation';

import { firstParagraph } from '@/data/home';
import { workExperiences, educations } from '@/data/resume';

export default function Home() {
  return (
    <main className="font-pp px-20">
      <section className="flex flex-col h-screen max-h py-20">
        <h2 className="font-dot text-9xl mt-[20vh] overflow-hidden">
          <TextRevealAnimation text="Victor Lebecq" />
        </h2>
        <h1 className="text-9xl ml-20 overflow-hidden">
          <TextRevealAnimation text="Front end developer" delay={0.5} />
        </h1>
        <p className="leading-[150%] ml-auto mt-auto text-right text-xl w-[650px]">
          <ParagraphRevealAnimation text={firstParagraph} delay={0.85} />
        </p>
      </section>

      <section className="flex flex-col min-h-screen max-h py-20">
        <h3 className="font-dot text-6xl h-fit mt-32">Selected project</h3>
        <div className="grid grid-cols-2 auto-rows-auto gap-8 w-full">
          <ProjectCard className="mt-40" id={1} />
          <ProjectCard className="justify-self-end" id={2} />
          <ProjectCard className="mt-40" id={3} />
          <ProjectCard className="justify-self-end" id={4} />
        </div>
      </section>

      <section className="py-20">
        <h3 className="font-dot text-6xl mb-20">About me</h3>
        <p className="leading-[150%] text-xl">
          Passionate about technology since childhood, I enjoy finding
          <br /> solutions to solve problems. Currently based in Valencia, I work
          <br /> remotely for several clients on various projects as a freelancer.
          <br /> When I’m not coding, I’m probably skiing or exploring the mountains.
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
