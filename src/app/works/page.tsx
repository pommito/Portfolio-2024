import WorkListItem from '@/components/WorkListItem';

import { works } from '@/data/works';

export default function Works() {
  return (
    <main className="font-pp px-20 pt-40">
      <h1 className="font-dot text-6xl mb-6">Works</h1>
      <p className="text-xl mb-8">
        These is the full list of all the projects i’ve been working on as a developer.
        <br /> Here you can find the link to the live website and the source code if the
        <br /> project is open source. Feel free to browse those projects.
      </p>
      <ul>
        {works.map((exp, index) => (
          <WorkListItem key={index} {...exp} />
        ))}
      </ul>
    </main>
  );
}
