'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

import { projectType } from '@/data/home';
import arrowIcon from '@/../public/arrow.svg';
import ImageTransition from './ImageTransition';

type ProjectCardType = projectType;

export default function ProjectCard({ title, image, techs, date, url, id }: ProjectCardType) {
  const articleRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(articleRef, { once: true, amount: 0.75 });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.article
      ref={articleRef}
      className={`flex flex-col gap-3 w-full md:w-4/5 lg:w-[450px] ${
        id % 2 === 0 ? 'md:mt-20 lg:mt-40' : 'md:justify-self-end'
      }`}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <ImageTransition src={image} alt="exemple" inView={isInView} id={id} />

      <div className="font-dot text-sm flex justify-between overflow-hidden opacity-50">
        <motion.time
          dateTime="2024"
          variants={{
            hidden: { y: 20 },
            visible: { y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.75 }}
        >
          {date}
        </motion.time>
        <motion.span
          variants={{
            hidden: { y: 30 },
            visible: { y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.75 }}
        >
          {techs}
        </motion.span>
      </div>

      <h4 className="overflow-hidden">
        <Link href={url} className="text-xl font-medium overflow-hidden" target="_blank">
          <motion.span
            className="flex items-center gap-4 w-fit"
            variants={{
              hidden: { y: 30 },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
          >
            {title} <Image src={arrowIcon} className="-rotate-45" width={16} height={16} alt="Arrow icon" aria-hidden />{' '}
          </motion.span>
        </Link>
      </h4>
    </motion.article>
  );
}
