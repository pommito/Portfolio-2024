import { useEffect, useRef, useState } from 'react';
import { useTexture, useAspect } from '@react-three/drei';
import * as THREE from 'three';

import { fragment, vertex } from './shader';

export default function Model() {
  const [progress, setProgress] = useState(0);
  const meshRef = useRef(null);

  const texture = useTexture('/placeholder.jpg');

  const scale = useAspect(texture.image.width, texture.image.height, 0.5);
  const aspectRatio = scale[0] / scale[1];

  const uniforms = useRef({
    uAspectRatio: { value: aspectRatio },
    uColor: { value: new THREE.Color(1, 0, 0) },
    uProgress: { value: progress },
    uTexture: { value: texture },
    uTime: { value: 0 },
    uType: { value: 0 },
  });

  console.log(uniforms.current.uProgress);

  useEffect(() => {
    let start: number | null = null;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;

      if (start !== null) {
        const elapsed = timestamp - start;

        const newProgress = Math.min(elapsed / duration, 1);
        setProgress(newProgress);

        if (elapsed < duration) {
          requestAnimationFrame(animate);
        }
      }
    };
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    uniforms.current.uProgress.value = progress;
  }, [progress]);

  return (
    <mesh ref={meshRef} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial fragmentShader={fragment} vertexShader={vertex} uniforms={uniforms.current} />
    </mesh>
  );
}
