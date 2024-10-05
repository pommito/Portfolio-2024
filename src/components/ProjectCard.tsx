'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

import arrowIcon from '@/../public/arrow.svg';
import ImageTransition from './ImageTransition';

type ProjectCardType = {
  className?: string;
};

export default function ProjectCard({ className }: ProjectCardType) {
  const articleRef = useRef(null);

  const isInView = useInView(articleRef, {
    margin: '0px 0px -300px 0px',
    once: true,
  });

  console.log(isInView);

  return (
    <article ref={articleRef} className={`flex flex-col gap-3 w-[450px] ${className}`}>
      <ImageTransition src={'/placeholder.jpg'} alt="exemple" inView={isInView} />

      <motion.div
        className="font-dot flex justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
      >
        <time dateTime="2024">[ 2024 ]</time>
        <span>[ Wordpress | Javascript ]</span>
      </motion.div>

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.75 }}
      >
        <Link href={'#'} className="flex items-center gap-4 w-fit text-xl font-medium">
          Lorem Ipsum{' '}
          <Image src={arrowIcon} className="-rotate-45" width={16} height={16} alt="Arrow icon" aria-hidden />{' '}
        </Link>
      </motion.h4>
    </article>
  );
}
