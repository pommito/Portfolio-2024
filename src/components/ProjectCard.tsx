import Link from 'next/link';
import Image from 'next/image';

import placeholder from '@/../public/placeholder.jpg';
import arrowIcon from '@/../public/arrow.svg';

export default function ProjectCard() {
  return (
    <article className="flex flex-col gap-3 w-[550px]">
      <Image src={placeholder} alt="Image relative to this project" />
      <div className="font-dot flex justify-between opacity-50">
        <time dateTime="2024">[ 2024 ]</time>
        <span>[ Wordpress | Javascript ]</span>
      </div>
      <h4>
        <Link href={'#'} className="flex items-center gap-4 w-fit text-xl font-medium">
          Lorem Ipsum{' '}
          <Image src={arrowIcon} className="-rotate-45" width={16} height={16} alt="Arrow icon" aria-hidden />{' '}
        </Link>
      </h4>
    </article>
  );
}
