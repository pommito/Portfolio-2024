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
      <div className="flex flex-col gap-1 w-2/5">
        <h5 className="text-xl font-medium">{title}</h5>
        <span className="font-dot text-sm opacity-50">{date}</span>
      </div>
      <h6 className="font-pp text-xl opacity-50 w-1/5">{company}</h6>
      <h6 className="text-xl text-right w-2/5">{techs}</h6>
    </li>
  );
}
