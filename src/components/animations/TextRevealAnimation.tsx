'use client';

import { motion, delay } from 'framer-motion';

type TextRevealAnimationTypes = {
  text: string;
  delay?: number;
};

export default function TextRevealAnimation({ text, delay = 0 }: TextRevealAnimationTypes) {
  const textVariants = {
    hidden: { y: '125%' },
    visible: { y: 0 },
  };

  const textTransition = {
    duration: 1,
    ease: [0.45, 1, 0.36, 1],
    delay: delay,
  };
  return (
    <motion.span
      className="inline-block"
      variants={textVariants}
      initial="hidden"
      animate="visible"
      transition={textTransition}
    >
      {text}
    </motion.span>
  );
}
