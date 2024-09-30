'use client';

import Image from 'next/image';

import placeholder from '@/../public/placeholder.jpg';
import { useState } from 'react';

export default function MiniProjectMenu() {
  const [imageSelected, setImageSelected] = useState(0);

  const images = [placeholder, placeholder, placeholder, placeholder];

  return (
    <div className="flex gap-[2px] absolute bottom-6 left-1/2 -translate-x-1/2 cursor-grab">
      <div
        className={`absolute w-full -top-[5px] -left-[5px] transition-transform duration-300 ease-in-out pointer-events-none`}
        style={{
          transform: `translateX(${imageSelected * 25}%)`,
        }}
      >
        <div className="relative flex flex-col justify-between w-[85px] h-[62px]">
          <div className="before:block before:absolute before:top-0 before:left-0 before:content-[''] before:w-2 before:h-2 before:border-t before:border-l before:border-white after:block after:absolute after:top-0 after:right-0 after:content-[''] after:w-2 after:h-2 after:border-t after:border-r after:border-white"></div>
          <div className="before:block before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-2 before:h-2 before:border-b before:border-l before:border-white after:block after:absolute after:bottom-0 after:right-0 after:content-[''] after:w-2 after:h-2 after:border-b after:border-r after:border-white"></div>
        </div>
      </div>
      {images.map((image, index) => (
        <Image
          key={index}
          src={placeholder}
          alt={`thumbnail of project ${index}`}
          width={75}
          className={`${
            imageSelected === index ? 'border border-white scale-95 ' : 'scale-100 opacity-50'
          } transition-transform ease-in-out`}
          onClick={() => {
            setImageSelected(index);
          }}
        />
      ))}
    </div>
  );
}
