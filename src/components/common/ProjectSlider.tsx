import Link from 'next/link';
import Image from 'next/image';

import { projectType } from '@/constant/works';

export default function ProjectSlider({ id, title, mobileImage, url }: projectType) {
  return (
    <Link href={url} className="flex flex-col w-[calc(100vw-1.5rem)] h-full gap-2">
      <div className="relative w-full h-full">
        <Image src={mobileImage} alt="todo" fill className="object-cover" />
      </div>
      <h3 className="text-sm font-medium leading-none uppercase">{title}</h3>
    </Link>
  );
}
