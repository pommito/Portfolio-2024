'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import eyeIcon from '../../public/eye.svg';
import eyeOffIcon from '../../public/eyeOff.svg';
import githubIcon from '../../public/github.svg';

import { worksType } from '@/data/works';

type WorkListItemPropsType = worksType;

export default function WorkListItem({ title, techs, date, url, githubUrl }: WorkListItemPropsType) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <li
      ref={ref}
      className={`relative flex justify-between items-center py-4 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-full before:h-[1px] before:bg-[#f1f1f1]/20 before:transition-transform before:duration-[1500ms] before:origin-center ease-in-out ${
        isVisible ? 'before:scale-x-100' : 'before:scale-x-0'
      }`}
    >
      <div className="flex flex-col w-2/5">
        <h5 className="text-sm font-medium sm:text-xl">{title}</h5>
        <span className="font-dot text-[0.65rem] opacity-50 sm:text-sm">{techs}</span>
      </div>
      <span className="font-pp text-sm opacity-50 w-1/5 sm:text-xl">{date}</span>
      <div className="flex gap-6 w-1/5 justify-end items-center">
        {githubUrl && (
          <Link href={githubUrl}>
            <Image
              className="size-5 sm:size-6"
              src={githubIcon}
              alt="github icon that redirect to the source code of the project"
              aria-hidden
            />
          </Link>
        )}
        {url && url.length > 0 ? (
          <Link href={url}>
            <Image
              className="size-5 sm:size-6"
              src={eyeIcon}
              alt="eye icon that redirect to the live project website"
              aria-hidden
            />
          </Link>
        ) : (
          <Image
            src={eyeOffIcon}
            className="opacity-50 size-5 sm:size-6"
            alt="eye off icon that show to the user that the project is no longer live"
            aria-hidden
          />
        )}
      </div>
    </li>
  );
}
