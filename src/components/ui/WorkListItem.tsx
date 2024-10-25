'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import eyeIcon from '/public/eye.svg';
import eyeOffIcon from '/public/eyeOff.svg';
import githubIcon from '/public/github.svg';

import { workType } from '@/constant/works';

type WorkListItemPropsType = workType;

export default function WorkListItem({ title, techs, date, url, githubUrl }: WorkListItemPropsType) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <li
      ref={ref}
      className={`relative flex justify-between items-center py-3 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-full before:h-[1px] before:bg-[#000]/20 before:transition-transform before:duration-[1500ms] before:delay-200 before:origin-center ease-in-out ${
        isVisible ? 'before:scale-x-100' : 'before:scale-x-0'
      }`}
    >
      <div className="flex flex-col gap-1 w-1/2 md:w-1/3">
        <h3 className="font-medium leading-none">{title}</h3>
        <span className="text-xs opacity-75">{techs}</span>
      </div>
      <span className="text-xs opacity-75 sm:text-sm md:text-center md:w-1/2">{date}</span>
      <div className="flex gap-6 w-1/5 justify-end items-center">
        {githubUrl && (
          <Link href={githubUrl}>
            <Image
              className="size-4 opacity-75 transition-transform duration-500 ease-in-out hover:opacity-100 hover:scale-110"
              src={githubIcon}
              alt="github icon that redirect to the source code of the project"
              aria-hidden
            />
          </Link>
        )}
        {url && url.length > 0 ? (
          <Link href={url}>
            <Image
              className="size-4 opacity-75 transition-transform duration-500 ease-in-out hover:opacity-100 hover:scale-110"
              src={eyeIcon}
              alt="eye icon that redirect to the live project website"
              aria-hidden
            />
          </Link>
        ) : (
          <Image
            src={eyeOffIcon}
            className="opacity-50 size-4"
            alt="eye off icon that show to the user that the project is no longer live"
            aria-hidden
          />
        )}
      </div>
    </li>
  );
}
