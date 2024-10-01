import { useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

import { fragment, vertex } from './shader';
import { useRef } from 'react';

export default function Model() {
  const { viewport } = useThree();
  const aspectRatio = 16 / 9;

  const x = viewport.width / 2;
  const y = x / aspectRatio;

  console.log(viewport);

  const texture = useTexture('/placeholder.jpg');

  const uniforms = useRef({
    uTexture: { value: texture },
  });

  return (
    <mesh>
      <planeGeometry args={[x, y, 15, 15]} />
      <shaderMaterial fragmentShader={fragment} vertexShader={vertex} uniforms={uniforms.current} />
    </mesh>
  );
}
