// import Link from 'next/link';
import { Link } from 'next-view-transitions';

import DropdownMenu from '../ui/DropdownMenu';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 flex justify-between items-start w-full max-w-[1920px] mx-auto p-4  sm:p-6 2xl:px-0 2xl:left-1/2 2xl:-translate-x-1/2">
      <h2 className="font-medium leading-none uppercase">
        <Link href={'/'} aria-label="Homepage">
          Victor Lbq
        </Link>
      </h2>
      <span className="hidden text-xs leading-none uppercase sm:block">[ Grenoble, France ]</span>
      <DropdownMenu />
    </header>
  );
}
