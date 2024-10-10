import Link from 'next/link';
import AnimatedLink from './animations/AnimatedLink';
import TextReveal from './animations/TextReveal';

export default function Footer() {
  return (
    <footer className="font-pp flex flex-col items-center leading-tight gap-8 px-4 py-6 sm:py-12 sm:gap-16 md:px-20 md:py-6">
      <h2 className="text-center text-7xl sm:text-[9.5vw]">Let&apos;s craft projects</h2>
      <ul className="font-dot flex flex-row justify-between gap-2 text-sm md:text-xl md:w-3/4">
        <li>
          <AnimatedLink title="[ Github ]" url="https://github.com/pommito" />
        </li>
        <li>
          <AnimatedLink
            title="[ Linkedin ]"
            url="https://www.linkedin.com/in/victor-lebecq-developpeur-react-wordpress-freelance/"
          />
        </li>
        <li>
          <AnimatedLink title="[ Instagram ]" url="https://www.instagram.com/dev.by.vic" />
        </li>
        <li>
          <AnimatedLink title="[ Malt ]" url="https://www.malt.fr/profile/victorlebecq" />
        </li>
      </ul>
      <Link
        href="mailto:victor.lebecq.pro@gmail.com"
        className="font-normal text-2xl sm:text-3xl md:text-[4vw] md:leading-tight"
      >
        <TextReveal text="victor.lebecq.pro@gmail.com" amountInView={1} />
      </Link>
      <div className="text-[#f1f1f1]/50 text-sm flex flex-col items-center justify-between pt-6 w-full border-t border-[#f1f1f1]/20 sm:flex-row sm:item-start">
        <p>Made in French Alps</p>
        <p>Copyright © 2024 All rights reserved</p>
      </div>
    </footer>
  );
}
