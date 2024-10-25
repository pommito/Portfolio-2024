'use client';

import { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

import ProjectSlider from '@/components/common/ProjectSlider';

import { selectedWorks } from '@/constant/selectedWorks';

const DRAG_BUFFER = 25;

export default function MobileSlider() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDragging, setIsDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < selectedWorks.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative row-start-4 row-span-2 flex items-end w-full overflow-hidden sm:hidden">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 25}%` }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center h-full cursor-grab active:cursor-grabbing"
      >
        {selectedWorks.map((work) => (
          <ProjectSlider key={work.id} {...work} />
        ))}
      </motion.div>
    </div>
  );
}
