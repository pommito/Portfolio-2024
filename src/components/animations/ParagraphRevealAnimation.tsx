'use client';

import { motion } from 'framer-motion';
import { SplitTextToLines } from '@/utils/SplitTextToLines';

type ParagraphRevealAnimationTypes = {
  text: string;
  delay?: number;
};

export default function ParagraphRevealAnimation({ text, delay = 0 }: ParagraphRevealAnimationTypes) {
  const linesArray = SplitTextToLines(text);

  return (
    <>
      {linesArray.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span
            className="block overflow-hidden"
            variants={{
              hidden: { y: '100%' },
              visible: {
                y: '0%',
                transition: { duration: 0.6, delay: delay + 0.3 * index, ease: [0.45, 1, 0.36, 1] },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}
