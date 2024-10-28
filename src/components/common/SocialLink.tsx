import Image from 'next/image';
import AnimatedLink from './AnimatedLink';

type SocialLinkProps = {
  title: string;
  url: string;
  external?: boolean;
};

export default function SocialLink({ title, url, external }: SocialLinkProps) {
  return (
    <li className="flex flex-row gap-1 sm:gap-2 items-center leading-none">
      <AnimatedLink title={title} url={url} external={external} />
      <Image src="/Arrow-icon.svg" alt="arrow icon" className="mt-[2px]" aria-hidden width={10} height={10} />
    </li>
  );
}
