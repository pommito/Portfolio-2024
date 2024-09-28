import Link from 'next/link';
import { Github, Eye, EyeOff } from 'lucide-react';

import { worksType } from '@/data/works';

type WorkListItemPropsType = worksType;

export default function WorkListItem({ title, techs, date, url, githubUrl }: WorkListItemPropsType) {
  return (
    <li className="flex justify-between items-center py-4 border-b border-[#f1f1f1]/20">
      <div className="flex flex-col w-2/5">
        <h5 className="text-xl font-medium">{title}</h5>
        <span className="font-dot text-sm opacity-50">{techs}</span>
      </div>
      <span className="font-pp text-xl opacity-50 w-1/5">{date}</span>
      <div className="flex gap-6 w-1/5 justify-end">
        {githubUrl && (
          <Link href={githubUrl}>
            <Github size={20} />
          </Link>
        )}
        {url && url.length > 0 ? (
          <Link href={url}>
            <Eye size={20} />
          </Link>
        ) : (
          <EyeOff size={20} />
        )}
      </div>
    </li>
  );
}
