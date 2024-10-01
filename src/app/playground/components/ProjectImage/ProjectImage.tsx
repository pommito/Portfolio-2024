import { useThree } from '@react-three/fiber';
import { useTexture, useAspect } from '@react-three/drei';

import { fragment, vertex } from './shader';
import { useRef } from 'react';

export default function Model() {
  const texture = useTexture('/placeholder.jpg');

  const scale = useAspect(texture.image.width, texture.image.height, 0.5);
  console.log(scale);

  const uniforms = useRef({
    uTexture: { value: texture },
  });

  return (
    <mesh scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial fragmentShader={fragment} vertexShader={vertex} uniforms={uniforms.current} />
    </mesh>
  );
}
