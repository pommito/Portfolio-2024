'use client';

import { experienceType } from '@/data/resume';
import { useEffect, useRef, useState } from 'react';

type ResumeListItemPropsType = experienceType;

export default function ResumeListItem({ title, date, company, techs }: ResumeListItemPropsType) {
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
      className={`relative flex justify-between items-center py-4 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-full before:h-[1px] before:bg-[#f1f1f1]/20 before:transition-transform before:duration-[1500ms] before:transition-delay-150 before:origin-center ease-in-out ${
        isVisible ? 'before:scale-x-100' : 'before:scale-x-0'
      }`}
    >
      <div className="flex flex-col gap-1 w-1/2 md:w-1/3">
        <h5 className="text-sm font-medium sm:text-xl">{title}</h5>
        <span className="font-dot text-[0.65rem] sm:text-sm opacity-50">{date}</span>
      </div>
      <div className="flex flex-col items-end gap-1 w-1/2 md:w-2/3 md:flex-row md:justify-between">
        <h6 className="font-pp text-sm  opacity-50 sm:text-xl md:text-center md:w-1/2">{company}</h6>
        <h6 className="text-xs sm:text-xl md:w-1/2 md:text-right">{techs}</h6>
      </div>
    </li>
  );
}
