import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export default function FullScreenCanvas({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCanvasResize = () => {
      if (canvasRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;
      }
    };

    window.addEventListener('resize', handleCanvasResize);

    return () => {
      window.removeEventListener('resize', handleCanvasResize);
    };
  }, []);

  return (
    <div ref={canvasRef} className="w-full h-screen overflow-hidden">
      <Canvas>{children}</Canvas>
    </div>
  );
}
