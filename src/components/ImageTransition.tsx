import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

type ImageTransitionTypes = {
  src: string;
  alt: string;
};

export default function ImageTransition({ src, alt }: ImageTransitionTypes) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Dimensions de l'image
  const imageWidth = 450; // Ajuste selon tes besoins
  const imageHeight = 300; // Ajuste selon tes besoins

  const r = useMemo(() => Math.sqrt(imageWidth ** 2 + imageHeight ** 2) * 1.05, [imageWidth, imageHeight]);

  // Variants pour le masque
  const circleVariants = {
    initial: { r: r },
    animate: { r: 0 }, // Réduit le rayon à 0 pour révéler l'image
    exit: { r: r }, // Remet le rayon à la taille initiale lors de la sortie
  };

  const circleTransition = {
    duration: 1.25,
    delay: 0.3,
    ease: [0.45, 1, 0.36, 1],
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: imageWidth, height: imageHeight }}>
      {/* SVG pour le filtre */}
      <svg
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        viewBox={`0 0 ${imageWidth} ${imageHeight}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <filter id="displacementFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="20" // Ajuste cette valeur pour contrôler l'effet de turbulence
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id="circleMask">
            <motion.circle
              fill="white"
              cx={imageWidth / 2} // Centre du cercle
              cy={imageHeight / 2} // Centre du cercle
              r={r} // Rayon initial
              variants={circleVariants}
              initial="initial"
              animate={imageLoaded ? 'animate' : 'initial'} // Anime quand l'image est chargée
              exit="exit"
              transition={circleTransition}
            />
          </mask>
        </defs>
        <rect fill="#1c1c1c" width="100%" height="100%" mask="url(#circleMask)" />
      </svg>

      {/* Image avec le filtre */}
      <motion.img
        src={src}
        alt={alt}
        style={{
          filter: 'url(#displacementFilter)',
          position: 'relative',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.75s ease-in-out',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        onLoad={() => setImageLoaded(true)} // L'image devient visible une fois chargée
      />
    </div>
  );
}
