'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { SplitTextToLines } from '@/utils/SplitTextToLines';

type ParagraphRevealAnimationTypes = {
  text: string;
  delay?: number;
};

export default function ParagraphRevealAnimation({ text, delay = 0 }: ParagraphRevealAnimationTypes) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.75 });
  const linesArray = SplitTextToLines(text);

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <>
      {linesArray.map((line, index) => (
        <span ref={ref} key={index} className="block overflow-hidden">
          <motion.span
            className="block overflow-hidden"
            variants={{
              hidden: { y: '100%' },
              visible: {
                y: '0%',
                transition: { duration: 0.6, delay: delay + 0.2 * index, ease: [0.45, 1, 0.36, 1] },
              },
            }}
            initial="hidden"
            animate={controls}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}
