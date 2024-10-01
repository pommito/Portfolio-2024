'use client';

import { Canvas } from '@react-three/fiber';
import ProjectImage from './ProjectImage/ProjectImage';

export default function Scene() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Canvas>
        <ProjectImage />
      </Canvas>
    </div>
  );
}
