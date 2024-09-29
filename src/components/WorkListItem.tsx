import Link from 'next/link';
import Image from 'next/image';

import { worksType } from '@/data/works';

import eyeIcon from '../../public/eye.svg';
import eyeOffIcon from '../../public/eyeOff.svg';
import githubIcon from '../../public/github.svg';

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
            <Image src={githubIcon} alt="github icon that redirect to the source code of the project" aria-hidden />
          </Link>
        )}
        {url && url.length > 0 ? (
          <Link href={url}>
            <Image src={eyeIcon} alt="eye icon that redirect to the live project website" aria-hidden />
          </Link>
        ) : (
          <Image
            src={eyeOffIcon}
            alt="eye off icon that show to the user that the project is no longer live"
            aria-hidden
          />
        )}
      </div>
    </li>
  );
}
