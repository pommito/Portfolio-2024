'use client';

import { Canvas } from '@react-three/fiber';
import Model from './Model';

export default function Scene() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
}
