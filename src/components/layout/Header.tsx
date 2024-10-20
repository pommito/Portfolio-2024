import Link from 'next/link';

import DropdownMenu from '../ui/DropdownMenu';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 flex justify-between items-start w-full p-4  sm:p-6">
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
