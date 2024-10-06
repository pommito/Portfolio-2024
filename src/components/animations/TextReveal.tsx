'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { SplitTextToLines } from '@/utils/SplitTextToLines';

type TextRevealTypes = {
  text: string;
  delay?: number;
  amountInView?: number;
};

export default function TextReveal({ text, delay = 0, amountInView = 0.75 }: TextRevealTypes) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: amountInView });
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
