'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type TitleProps = {
  title: string;
  url: string;
};

export default function AnimatedLink({ title, url }: TitleProps) {
  const [isHovered, setIsHovered] = useState(false);
  const titleAnim = {
    init: {
      transition: {
        staggerChildren: 0.003,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.003,
      },
    },
  };

  const letterAnim = {
    init: {
      y: 0,
    },
    hover: {
      y: -25,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: 'tween',
      },
    },
  };

  return (
    <Link href={url} className="relative whitespace-nowrap" data-stagger-link>
      <motion.div
        data-stagger-link
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <motion.span
          className="relative whitespace-nowrap"
          data-stagger-link-text
          variants={titleAnim}
          initial="init"
          animate={isHovered ? 'hover' : 'init'}
        >
          {title.split('').map((character: string, i: number) =>
            character === ' ' ? (
              <span key={i}>&nbsp;</span>
            ) : (
              <motion.span key={i} className="relative inline-block whitespace-nowrap" variants={letterAnim}>
                {character}
              </motion.span>
            )
          )}
        </motion.span>
      </motion.div>
    </Link>
  );
}
