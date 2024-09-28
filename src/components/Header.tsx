import Image from 'next/image';
import Link from 'next/link';
import AnimatedLink from './AnimatedLink';

export default function Header() {
  return (
    <header className="fixed flex flex-row font-pp items-center justify-between  px-20 py-6 w-screen">
      <Link href="/" aria-label="Homepage">
        <Image src={`/Logo_3D.png`} alt="This is my logo" width={40} height={40}></Image>
      </Link>
      <nav>
        <ul className="flex flex-row gap-12">
          <li>
            <AnimatedLink title="Works" url="/works" />
          </li>
          <li>
            <AnimatedLink title="Resume" url="/resume" />
          </li>
          <li>
            <AnimatedLink title="Contact" url="/contact" />
          </li>
          <li>
            <button>[ FR / EN ]</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
