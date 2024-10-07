'use client';

import { ReactLenis, useLenis } from 'lenis/react';

export default function SmoothScroll({ children }: Readonly<{ children: React.ReactNode }>) {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
