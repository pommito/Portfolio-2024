'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

import arrowIcon from '@/../public/arrow.svg';
import ImageTransition from './ImageTransition';

type ProjectCardType = {
  className?: string;
  id: number;
};

export default function ProjectCard({ className, id }: ProjectCardType) {
  const articleRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(articleRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      console.log('trigger');
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.article
      ref={articleRef}
      className={`flex flex-col gap-3 w-[450px] ${className}`}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <ImageTransition src={'/placeholder.jpg'} alt="exemple" inView={isInView} id={id} />

      <motion.div
        className="font-dot flex justify-between"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 0.5, y: 0 },
        }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
      >
        <time dateTime="2024">[ 2024 ]</time>
        <span>[ Wordpress | Javascript ]</span>
      </motion.div>

      <motion.h4
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.75 }}
      >
        <Link href={'#'} className="flex items-center gap-4 w-fit text-xl font-medium">
          Lorem Ipsum{' '}
          <Image src={arrowIcon} className="-rotate-45" width={16} height={16} alt="Arrow icon" aria-hidden />{' '}
        </Link>
      </motion.h4>
    </motion.article>
  );
}
