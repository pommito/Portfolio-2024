'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  if (!isLoading) return null;

  return (
    <div className="absolute top-0 left-0 bg-black flex justify-center items-center h-full w-full z-50">
      <span className="text-white font-medium leading-none uppercase">Victor Lbq</span>
    </div>
  );
}
