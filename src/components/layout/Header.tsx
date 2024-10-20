import Link from 'next/link';

import DropdownMenu from '../ui/DropdownMenu';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 flex justify-between items-end sm:items-start w-full p-6">
      <h2 className="font-medium leading-none uppercase">
        <Link href={'/'} aria-label="Homepage">
          Victor Lbq
        </Link>
      </h2>
      <span className="text-xs leading-none uppercase">[ Grenoble, France ]</span>
      <DropdownMenu />
    </header>
  );
}
