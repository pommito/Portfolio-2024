import { useEffect, useRef } from 'react';

type UniformsType = {
  uProgress: { value: number };
};

/**
 * This hook purpose is to return a progress value between 0 and 1 based on a duration in ms
 * @param uniformRef
 * @param duration
 */
export function useAnimationProgress(uniformRef: React.RefObject<UniformsType>, duration: number = 1500) {
  const progressRef = useRef(0); // Utilise une ref au lieu d'un état

  useEffect(() => {
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      progressRef.current = Math.min(elapsed / duration, 1); // Met à jour la ref

      if (uniformRef.current) {
        uniformRef.current.uProgress.value = progressRef.current; // Met à jour l'uniforme
      }

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    console.log(progressRef.current);

    // Nettoyage si nécessaire
    return () => {
      // Détacher ou annuler les animations en cours si besoin
    };
  }, [duration, uniformRef]); // Inclut uniformRef dans les dépendances si c'est nécessaire

  return progressRef.current; // Renvoie la ref actuelle, mais cela ne déclenche pas de rerender
}
