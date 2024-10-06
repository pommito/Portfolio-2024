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
      className="absolute flex flex-row font-pp items-center justify-between  px-4 py-4 w-full md:px-8 lg:px-20"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={headerTransition}
    >
      <Link href="/" aria-label="Homepage">
        <Image src={`/Logo_3D.png`} alt="This is my logo" width={40} height={40}></Image>
      </Link>
      <nav>
        <ul className="font-dot text-sm flex flex-row   gap-4 md:gap-8 lg:gap-12">
          <li>
            <AnimatedLink title="[ Works ]" url="/works" />
          </li>
          <li>
            <AnimatedLink title="[ Resume ]" url="/resume" />
          </li>
          <li>
            <AnimatedLink title="[ Contact ]" url="mailto:victor.lebecq.pro@gmail.com" />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
