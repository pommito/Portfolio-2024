import { useRef } from 'react';
import { useTexture, useAspect } from '@react-three/drei';
import * as THREE from 'three';

import { fragment, vertex } from './shader';
import { useAnimationProgress } from '@/hooks/useAnimationProgress';

export default function Model() {
  const meshRef = useRef(null);

  const texture = useTexture('/placeholder.jpg');

  const scale = useAspect(texture.image.width, texture.image.height, 0.5);
  const aspectRatio = scale[0] / scale[1];

  const uniforms = useRef({
    uAspectRatio: { value: aspectRatio },
    uColor: { value: new THREE.Color(1, 0, 0) },
    uProgress: { value: 0 },
    uTexture: { value: texture },
    uTime: { value: 0 },
    uType: { value: 0 },
  });

  useAnimationProgress(uniforms);
  console.log(uniforms.current.uProgress.value);

  return (
    <mesh ref={meshRef} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial fragmentShader={fragment} vertexShader={vertex} uniforms={uniforms.current} />
    </mesh>
  );
}
