import Link from 'next/link';
import AnimatedLink from './AnimatedLink';

export default function Footer() {
  return (
    <footer className="font-pp flex flex-col items-center leading-tight gap-16 px-20 py-6">
      <h2 className="text-[9.5vw]">Let&apos;s craft projects</h2>
      <ul className="font-dot flex justify-between text-xl w-3/4">
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
      <Link href="mailto:victor.lebecq.pro@gmail.com" className="text-[4vw] font-normal underline">
        victor.lebecq.pro@gmail.com
      </Link>
      <div className="text-[#f1f1f1]/50 text-sm flex justify-between pt-6 w-full border-t border-[#f1f1f1]/20">
        <p>Made in the French Alpes</p>
        <p>Copyright © 2024 All rights reserved</p>
      </div>
    </footer>
  );
}
