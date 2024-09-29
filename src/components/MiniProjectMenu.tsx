'use client';

import Image from 'next/image';

import placeholder from '@/../public/placeholder.jpg';
import { useState } from 'react';

export default function MiniProjectMenu() {
  const [transformPourcentage, setTransformPourcentage] = useState(0);

  return (
    <div className="flex gap-[2px] absolute bottom-6 left-1/2 -translate-x-1/2 cursor-grab">
      <div
        className={`absolute w-full -top-[5px] -left-[5px] transition-transform translate-x-[${transformPourcentage}%] pointer-events-none`}
      >
        <div className="relative flex flex-col justify-between w-[85px] h-[62px]">
          <div className="before:block before:absolute before:top-0 before:left-0 before:content-[''] before:w-2 before:h-2 before:border-t before:border-l before:border-white after:block after:absolute after:top-0 after:right-0 after:content-[''] after:w-2 after:h-2 after:border-t after:border-r after:border-white"></div>
          <div className="before:block before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-2 before:h-2 before:border-b before:border-l before:border-white after:block after:absolute after:bottom-0 after:right-0 after:content-[''] after:w-2 after:h-2 after:border-b after:border-r after:border-white"></div>
        </div>
      </div>
      <Image
        src={placeholder}
        alt="thumbnail of project"
        width={75}
        className="opacity-50"
        onClick={() => {
          setTransformPourcentage(0);
        }}
      />
      <Image
        src={placeholder}
        alt="thumbnail of project"
        width={75}
        className="border border-white"
        onClick={() => {
          setTransformPourcentage(25);
        }}
      />
      <Image
        src={placeholder}
        alt="thumbnail of project"
        width={75}
        className="opacity-50"
        onClick={() => {
          setTransformPourcentage(50);
        }}
      />
      <Image
        src={placeholder}
        alt="thumbnail of project"
        width={75}
        className="opacity-50"
        onClick={() => {
          setTransformPourcentage(75);
        }}
      />
    </div>
  );
}
