import Link from 'next/link';
import Image from 'next/image';

import { projectType } from '@/constant/works';

export default function Project({ id, title, image, url }: projectType) {
  return (
    <Link href={url} className="flex flex-col gap-2 w-full h-full">
      <div className="relative w-full h-full">
        <Image src={image} alt="todo" fill className="object-cover" />
      </div>
      <h3 className="text-sm font-medium leading-none uppercase">{title}</h3>
    </Link>
  );
}
