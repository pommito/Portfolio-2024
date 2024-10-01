import { useTexture, useAspect } from '@react-three/drei';
import * as THREE from 'three';

import { fragment, vertex } from './shader';
import { useRef } from 'react';

export default function Model() {
  const texture = useTexture('/placeholder.jpg');

  const scale = useAspect(texture.image.width, texture.image.height, 0.5);
  const aspectRatio = scale[0] / scale[1];
  console.log(aspectRatio);

  const uniforms = useRef({
    uAspectRatio: { value: aspectRatio },
    uColor: { value: new THREE.Color(1, 0, 0) },
    uProgress: { value: 1 },
    uTexture: { value: texture },
    uTime: { value: 0 },
    uType: { value: 0 },
  });

  return (
    <mesh scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial fragmentShader={fragment} vertexShader={vertex} uniforms={uniforms.current} />
    </mesh>
  );
}
