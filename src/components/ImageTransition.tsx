import { useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';

type ImageTransitionTypes = {
  src: string;
  alt?: string;
  inView: boolean;
  id: number;
};

export default function ImageTransition({ src, inView, id }: ImageTransitionTypes) {
  const imageWidth = 450;
  const imageHeight = 300;

  const controls = useAnimation();

  const r = useMemo(
    () => (Math.sqrt(imageWidth * imageWidth + imageHeight * imageHeight) / 2) * 1.15,
    [imageWidth, imageHeight]
  );

  const circleVariants = {
    hidden: { r: 0 },
    visible: { r: r },
    exit: { r: r },
  };

  const circleTransition = {
    duration: 1.2,
    ease: 'easeOut',
    type: 'tween',
  };

  useMemo(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <div className="relative overflow-hidden w-[full] aspect-[3/2]">
      <svg
        className="z-10 w-full h-full pointer-events-none"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        viewBox={`0 0 ${imageWidth} ${imageHeight}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <pattern id={`imagePattern-${id}`} patternUnits="objectBoundingBox" width="1" height="1">
            <image href={src} width={'100%'} height={'100%'} preserveAspectRatio="xMidYMid slice" />
          </pattern>
          <filter id={`displacementFilter-${id}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={200} xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <mask id={`circleMask-${id}`}>
            <motion.circle
              className="displacement"
              fill="white"
              cx={imageWidth / 2}
              cy={imageHeight / 2}
              r={r}
              variants={circleVariants}
              initial="hidden"
              animate={controls}
              exit="exit"
              transition={circleTransition}
            />
          </mask>
        </defs>
        <rect fill={`url(#imagePattern-${id})`} width="100%" height="100%" mask={`url(#circleMask-${id})`} />
      </svg>
    </div>
  );
}
