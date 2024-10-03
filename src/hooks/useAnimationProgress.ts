import { useEffect, useState } from 'react';

type UniformsType = {
  uProgress: { value: number };
};

/**
 * This hook purpore is to return a progress value between 0 and 1 based on a duration in ms
 * @param uniformRef
 * @param duration
 */
export function useAnimationProgress(uniformRef: React.RefObject<UniformsType>, duration: number = 1500) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [duration]);

  useEffect(() => {
    if (uniformRef.current) {
      uniformRef.current.uProgress.value = progress;
    }
  }, [progress, uniformRef]);

  return progress;
}
