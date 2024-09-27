import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed flex flex-row font-pp items-center justify-between  px-20 py-6 w-screen">
      <Link href="/" aria-label="Homepage">
        <Image src={`/Logo_3D.png`} alt="This is my logo" width={48} height={48}></Image>
      </Link>
      <nav>
        <ul className="flex flex-row gap-12">
          <li>
            <Link href={`/works`}>Works</Link>
          </li>
          <li>
            <Link href={`/resume`}>Resume</Link>
          </li>
          <li>
            <Link href={`/contact`}>Works</Link>
          </li>
          <li>
            <button>[ FR / EN ]</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
