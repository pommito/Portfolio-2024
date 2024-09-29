import Link from 'next/link';

import ResumeListItem from '@/components/ResumeListItem';
import downloadIcon from '../../public/download.svg';
import { workExperiences, educations } from '@/data/resume';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="font-pp px-20">
      <section className="flex flex-col h-screen max-h py-20">
        <h2 className="font-dot text-9xl mt-[20vh] ">Victor Lebecq</h2>
        <h1 className="text-9xl ml-20">Front end developer</h1>
        <p className="leading-[150%] ml-auto mt-auto text-right text-xl w-[650px]">
          I’m a 24 years old developer based in France who likes to work with <b>React</b>, <b>Wordpress</b>, and{' '}
          <b>Laravel</b>. With a keen eye for design, I love crafting immersive and scalable experiences on the web.
          Together, let’s bring your projects to life.
        </p>
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
