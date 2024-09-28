import WorkListItem from '@/components/WorkListItem';
import { Eye, Github } from 'lucide-react';
import Link from 'next/link';

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
        <WorkListItem title="Gastini" techs={'[ Wordpress | Javascript ]'} date={'2024'} url={'https://gastini.fr'} />
      </ul>
    </main>
  );
}
