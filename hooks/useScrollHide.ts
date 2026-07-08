import { useState, useEffect, useRef } from 'react';

export function useScrollHide() {
  const [translateY, setTranslateY] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);
  const lastScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    containerRef.current = mainElement;
    const hideStartThreshold = 30;  // Mulai hilang setelah scroll 30px
    const hideEndThreshold = 150;   // Hilang total setelah scroll 150px

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // Cancel previous RAF untuk avoid multiple updates
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Gunakan RAF tanpa delay untuk responsive immediate update
      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = containerRef.current?.scrollTop || 0;
        
        // Jika belum mencapai threshold awal, navbar fully visible
        if (currentScrollY < hideStartThreshold) {
          setTranslateY(0);
        } 
        // Jika sudah melewati threshold akhir, navbar fully hidden
        else if (currentScrollY >= hideEndThreshold) {
          setTranslateY(-100);
        } 
        // Antara threshold awal dan akhir: hitung smooth gradient
        else {
          const scrollRange = hideEndThreshold - hideStartThreshold;
          const scrollProgress = currentScrollY - hideStartThreshold;
          const translatePercentage = -(scrollProgress / scrollRange) * 100;
          setTranslateY(Math.round(translatePercentage));
        }
        
        lastScrollRef.current = currentScrollY;
      });
    };

    handleScroll();
    mainElement.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return translateY;
}
