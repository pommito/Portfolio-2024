import Link from 'next/link';
import Image from 'next/image';

import { selectedWorkType } from '@/constant/selectedWorks';

export default function ProjectSlider({ id, title, mobileImage, url }: selectedWorkType) {
  return (
    <Link href={url} className="flex flex-col w-[calc(100vw-3rem)] h-full gap-2">
      <div className="relative w-full h-full min-h-[33.33vh]">
        <Image src={mobileImage} alt="todo" fill className="object-cover" />
      </div>
      <div className="flex justify-between items-end text-sm font-medium leading-none uppercase">
        <h3 className="font-medium">{title}</h3>
        <span className="text-xs mr-[2px]">{`[ ${id + 1} / ${4} ]`}</span>
      </div>
    </Link>
  );
}
