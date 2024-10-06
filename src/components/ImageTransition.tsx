import { useMemo, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

type ImageTransitionTypes = {
  src: string;
  alt: string;
  inView: boolean;
  id: number;
};

export default function ImageTransition({ src, alt, inView, id }: ImageTransitionTypes) {
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
    duration: 1.25,
    ease: [0.45, 1, 0.36, 1],
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: imageWidth, height: imageHeight }}>
      <svg
        className="z-10 pointer-events-none"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        viewBox={`0 0 ${imageWidth} ${imageHeight}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <pattern id={`imagePattern-${id}`} patternUnits="objectBoundingBox" width="1" height="1">
            <image
              href="/placeholder.jpg"
              width={imageWidth}
              height={imageHeight}
              preserveAspectRatio="xMidYMid slice"
            />
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
