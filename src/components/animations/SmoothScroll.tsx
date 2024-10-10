'use client';

import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
