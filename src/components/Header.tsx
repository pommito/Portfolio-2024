'use client';

import Image from 'next/image';
import Link from 'next/link';
import { delay, motion } from 'framer-motion';

import AnimatedLink from './animations/AnimatedLink';

export default function Header() {
  const headerVariants = {
    hidden: { y: -70 },
    visible: { y: 0 },
  };

  const headerTransition = {
    duration: 1.25,
    ease: [0.45, 1, 0.36, 1],
    delay: 1.25,
  };

  return (
    <motion.header
      className="absolute flex flex-row font-pp items-center justify-between  px-20 py-6 w-full"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={headerTransition}
    >
      <Link href="/" aria-label="Homepage">
        <Image src={`/Logo_3D.png`} alt="This is my logo" width={40} height={40}></Image>
      </Link>
      <nav>
        <ul className="font-dot flex flex-row gap-12">
          <li>
            <AnimatedLink title="[ Works ]" url="/works" />
          </li>
          <li>
            <AnimatedLink title="[ Resume ]" url="/resume" />
          </li>
          <li>
            <AnimatedLink title="[ Contact ]" url="/contact" />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
