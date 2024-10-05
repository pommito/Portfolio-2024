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
  const isInView = useInView(articleRef, { once: true, amount: 0.75 });

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

      <div className="font-dot flex justify-between overflow-hidden">
        <motion.time
          dateTime="2024"
          variants={{
            hidden: { opacity: 0.5, y: 20 },
            visible: { opacity: 0.5, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.75 }}
        >
          [ 2024 ]
        </motion.time>
        <motion.span
          variants={{
            hidden: { opacity: 0.5, y: 30 },
            visible: { opacity: 0.5, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.75 }}
        >
          [ Wordpress | Javascript ]
        </motion.span>
      </div>

      <h4 className="overflow-hidden">
        <Link href={'#'} className="text-xl font-medium overflow-hidden">
          <motion.span
            className="flex items-center gap-4 w-fit"
            variants={{
              hidden: { y: 30 },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
          >
            Lorem Ipsum{' '}
            <Image src={arrowIcon} className="-rotate-45" width={16} height={16} alt="Arrow icon" aria-hidden />{' '}
          </motion.span>
        </Link>
      </h4>
    </motion.article>
  );
}
