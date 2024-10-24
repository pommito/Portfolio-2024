import Image from 'next/image';
import { Link } from 'next-view-transitions';

import { selectedWorkType } from '@/constant/selectedWorks';

export default function ProjectCard({ title, image, slug }: selectedWorkType) {
  return (
    <Link href={`/works/${slug}`} className="flex flex-col gap-2 h-full">
      <div className="relative w-full h-full" style={{ viewTransitionName: `project-image-${slug}` }}>
        <Image src={image} alt="todo" fill className="object-cover" priority />
      </div>
      <h3 className="text-sm font-medium leading-none uppercase">{title}</h3>
    </Link>
  );
}
