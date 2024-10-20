'use client';

import { experienceType } from '@/constant/resume';
import { useEffect, useRef, useState } from 'react';

type ResumeListItemPropsType = experienceType;

export default function ResumeListItem({ title, date, company, techs }: ResumeListItemPropsType) {
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
      className={`relative flex justify-between items-center py-2 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-full before:h-[1px] before:bg-[#000]/20 before:transition-transform before:duration-[2000ms] before:transition-delay-150 before:origin-center ease-in-out ${
        isVisible ? 'before:scale-x-100' : 'before:scale-x-0'
      }`}
    >
      <div className="flex flex-col gap-1 w-1/2 md:w-1/3">
        <h3 className="font-medium leading-none">{title}</h3>
        <span className="text-xs opacity-75">{date}</span>
      </div>
      <div className="flex flex-col items-end gap-1 w-1/2 md:w-2/3 md:flex-row md:justify-between">
        <h4 className="text-sm sm:text-base opacity-75 md:text-center md:w-1/2">{company}</h4>
        <h4 className="text-sm sm:text-base md:w-1/2 md:text-right">{techs}</h4>
      </div>
    </li>
  );
}
