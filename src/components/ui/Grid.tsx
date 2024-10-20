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
    <div className="fixed top-0 left-0 grid grid-cols-8 gap-6 px-8 w-full h-full">
      <div className="bg-red-700/20"></div>
      <div className="bg-red-700/20"></div>
      <div className="bg-red-700/20"></div>
      <div className="bg-red-700/20"></div>
      <div className="bg-red-700/20"></div>
      <div className="bg-red-700/20"></div>
      <div className="bg-red-700/20"></div>
      <div className="bg-red-700/20"></div>
    </div>
  );
}
