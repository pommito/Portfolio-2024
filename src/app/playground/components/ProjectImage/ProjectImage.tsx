import { useThree } from '@react-three/fiber';
import { useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { useTexture } from '@react-three/drei';

import useMouse from '@/hooks/useMouse';
import useDimension from '@/hooks/useDimension';
import { fragment, vertex } from './shader';
import { useRef } from 'react';

export default function Model() {
  const dimension = useDimension();
  const { viewport } = useThree();
  const mouse = useMouse();
  const texture = useTexture('/placeholder.jpg');

  const uniforms = useRef({
    uTexture: { value: texture },
  });

  const x = useTransform(mouse.x, [0, dimension.width], [(-1 * viewport.width) / 2, viewport.width / 2]);
  const y = useTransform(mouse.y, [0, dimension.height], [-(-1 * viewport.height) / 2, -viewport.height / 2]);

  return (
    <motion.mesh position-x={x} position-y={y}>
      <planeGeometry args={[2, 2, 15, 15]} />
      <shaderMaterial fragmentShader={fragment} vertexShader={vertex} uniforms={uniforms.current} />
    </motion.mesh>
  );
}
