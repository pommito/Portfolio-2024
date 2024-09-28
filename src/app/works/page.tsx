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
        <li className="flex justify-between items-center py-4 border-b border-[#f1f1f1]/20">
          <div className="flex flex-col w-2/5">
            <h5 className="text-xl font-medium">Gastini</h5>
            <span className="font-dot text-sm opacity-50">[ Wordpress | Javascript ]</span>
          </div>
          <span className="font-pp text-xl opacity-50 w-1/5">2024</span>
          <div className="flex gap-6">
            <Link href={'#'}>
              <Github size={20} />
            </Link>
            <Link href={'https://gastini.fr'}>
              <Eye size={20} />
            </Link>
          </div>
        </li>
      </ul>
    </main>
  );
}
