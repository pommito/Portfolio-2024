'use client';

import { useState } from 'react';
import { Link } from 'next-view-transitions';
import { motion } from 'framer-motion';

type TitleProps = {
  title: string;
  url: string;
};

/**
 * This component is a re-usable link with a cool hover animation made with framer motion
 * @param title This is the title of the link
 * @param url url to set on the href avec Link element
 * @returns
 */
export default function AnimatedLink({ title, url }: TitleProps) {
  const [isHovered, setIsHovered] = useState(false);

  const titleAnim = {
    init: {
      transition: {
        staggerChildren: 0.04,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterAnim = {
    init: {
      y: '0%',
    },
    hover: {
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: 'tween',
      },
    },
  };

  return (
    <Link
      href={url}
      className=" overflow-hidden inline-block whitespace-nowrap"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      data-stagger-link
    >
      <motion.span
        className="relative whitespace-nowrap"
        data-stagger-link-text
        variants={titleAnim}
        initial="init"
        animate={isHovered ? 'hover' : 'init'}
      >
        {title.split('').map((letter: string, i: number) =>
          letter === ' ' ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <motion.span key={i} className="relative inline-block whitespace-nowrap" variants={letterAnim}>
              {letter}
            </motion.span>
          )
        )}
      </motion.span>
    </Link>
  );
}
