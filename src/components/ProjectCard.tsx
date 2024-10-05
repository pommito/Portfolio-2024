'use client';

import Link from 'next/link';
import Image from 'next/image';

import arrowIcon from '@/../public/arrow.svg';
import ImageTransition from './ImageTransition';

type ProjectCardType = {
  className?: string;
};

export default function ProjectCard({ className }: ProjectCardType) {
  return (
    <article className={`flex flex-col gap-3 w-[450px] ${className}`}>
      <ImageTransition src={'/placeholder.jpg'} alt="exemple" />

      {/* Text Animation */}
      <div className="font-dot flex justify-between">
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
