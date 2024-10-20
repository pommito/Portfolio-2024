import Image from 'next/image';
import AnimatedLink from './AnimatedLink';

export default function SocialLink({ title, url }: { title: string; url: string }) {
  return (
    <li className="flex flex-row gap-1 sm:gap-2 items-center leading-none">
      <AnimatedLink title={title} url={url} />
      <Image src="/arrow-icon.svg" alt="arrow icon" className="mt-[2px]" aria-hidden width={10} height={10} />
    </li>
  );
}
