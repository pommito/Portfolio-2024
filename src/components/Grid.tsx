'use client';

import { useEffect, useState } from 'react';

export default function Grid() {
  const [isGridVisible, setIsGridVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'g') {
        setIsGridVisible((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  if (!isGridVisible) return null;

  return (
    <div className="fixed grid grid-cols-8 gap-6 px-20 w-screen h-screen">
      <div className="bg-red-700/20 p-4"></div>
      <div className="bg-red-700/20 p-4"></div>
      <div className="bg-red-700/20 p-4"></div>
      <div className="bg-red-700/20 p-4"></div>
      <div className="bg-red-700/20 p-4"></div>
      <div className="bg-red-700/20 p-4"></div>
      <div className="bg-red-700/20 p-4"></div>
      <div className="bg-red-700/20 p-4"></div>
    </div>
  );
}
