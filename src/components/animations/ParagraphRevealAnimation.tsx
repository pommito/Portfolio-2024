'use client';

import { useEffect, useState } from 'react';
import { useAnimate, motion, stagger } from 'framer-motion';
import { SplitTextToLines } from '@/utils/SplitTextToLines';

type ParagraphRevealAnimationTypes = {
  text: string;
  delay?: number;
};

export default function ParagraphRevealAnimation({ text, delay }: ParagraphRevealAnimationTypes) {
  const [lines, setLines] = useState<string[]>([]);

  const linesArray = SplitTextToLines(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { y: '100%' },
    visible: { y: '0%' },
  };

  return (
    <motion.span className="block overflow-hidden" variants={container} initial="hidden" animate="visible">
      {linesArray.map((line, index) => (
        <motion.span key={index} className="block overflow-hidden" variants={child}>
          {line}
        </motion.span>
      ))}
    </motion.span>
  );
}
