import Link from 'next/link';
import Image from 'next/image';

import TextReveal from '@/components/animations/TextReveal';
import ResumeListItem from '@/components/ResumeListItem';
import downloadIcon from '/public/download.svg';

import { secondParagraph, technos } from '@/data/home';
import { educations, workExperiences } from '@/data/resume';

export default function About() {
  return (
    <main className="font-pp px-4 md:px-8 lg:px-20">
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
    </main>
  );
}
