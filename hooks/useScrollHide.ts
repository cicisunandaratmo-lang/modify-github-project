import { useState, useEffect, useRef } from 'react';

export function useScrollHide() {
  const [translateY, setTranslateY] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Cari main element yang di-scroll
    const mainElement = document.querySelector('main');
    if (!mainElement) {
      return;
    }

    containerRef.current = mainElement;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const currentScrollY = containerRef.current.scrollTop;
      
      // Threshold: navbar baru mulai hilang setelah scroll 30px
      // Kemudian hilang total setelah scroll 150px
      const hideStartThreshold = 30;
      const hideEndThreshold = 150;
      
      if (currentScrollY < hideStartThreshold) {
        // Belum scroll cukup, navbar tetap terlihat
        setTranslateY(0);
      } else {
        // Mulai hitung pergerakan dari threshold ke end
        const scrollDistance = hideEndThreshold - hideStartThreshold;
        const scrollProgress = currentScrollY - hideStartThreshold;
        const calculatedTranslate = -(scrollProgress / scrollDistance) * 100;
        const finalTranslate = Math.max(-100, Math.min(0, calculatedTranslate));
        
        setTranslateY(finalTranslate);
      }
    };

    // Call handler saat mount untuk set initial state
    handleScroll();

    mainElement.addEventListener('scroll', handleScroll);
    return () => mainElement.removeEventListener('scroll', handleScroll);
  }, []);

  return translateY;
}
