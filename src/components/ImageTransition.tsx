import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ImageTransitionTypes = {
  src: string;
  alt: string;
};

export default function ImageTransition({ src, alt }: ImageTransitionTypes) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageWidth = 450;
  const imageHeight = 300;

  const r = useMemo(
    () => (Math.sqrt(imageWidth * imageWidth + imageHeight * imageHeight) / 2) * 1.15,
    [imageWidth, imageHeight]
  );

  const circleVariants = {
    initial: { r: r },
    animate: { r: 0 },
    exit: { r: 0 },
  };

  const circleTransition = {
    duration: 1.25,
    delay: 0.3,
    ease: [0.45, 1, 0.36, 1],
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: imageWidth, height: imageHeight }}>
      <svg
        className="z-10"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        viewBox={`0 0 ${imageWidth} ${imageHeight}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <filter id="displacementFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={200} xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <mask id="circleMask">
            <motion.circle
              className={'displacement'}
              fill="white"
              cx={imageWidth / 2}
              cy={imageHeight / 2}
              r={r}
              variants={circleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={circleTransition}
            />
          </mask>
        </defs>
        <rect fill="#0A0A0A" width="100%" height="100%" mask="url(#circleMask)" />
      </svg>

      <div style={{ width: '100%', height: '100%' }}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
