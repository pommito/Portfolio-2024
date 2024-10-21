import TextReveal from '@/components/old/TextReveal';
import WorkListItem from '@/components/old/WorkListItem';

import { works, paragraph } from '@/data/works';

export default function Works() {
  return (
    <main className="font-pp px-4 sm:px-20 pt-40">
      <h1 className="font-dot  text-4xl mb-6 sm:text-6xl">Works</h1>
      <p className="mb-8 text-balance sm:text-xl">
        <TextReveal text={paragraph} />
      </p>
      {/* <ul className="mb-4 sm:mb-10">
        {works.map((exp, index) => (
          <WorkListItem key={index} {...exp} />
        ))}
      </ul> */}
    </main>
  );
}
