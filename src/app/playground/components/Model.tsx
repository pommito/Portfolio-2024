import { motion } from 'framer-motion-3d';

import useMouse from '@/hooks/useMouse';
import { useTransform } from 'framer-motion';

export default function Model() {
  const mouse = useMouse();

  return (
    <motion.mesh position-x={mouse.x} position-y={mouse.y}>
      <planeGeometry args={[2, 2, 15, 15]} />
      <meshBasicMaterial color={'red'} wireframe />
    </motion.mesh>
  );
}
