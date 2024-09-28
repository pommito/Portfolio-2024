import Link from 'next/link';
import { Github, Eye } from 'lucide-react';

export default function WorkListItem({ title }) {
  return (
    <li className="flex justify-between items-center py-4 border-b border-[#f1f1f1]/20">
      <div className="flex flex-col w-2/5">
        <h5 className="text-xl font-medium">{title}</h5>
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
  );
}
