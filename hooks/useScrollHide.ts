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
    const hideThreshold = 30;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // Cancel previous RAF untuk avoid multiple updates
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Gunakan RAF tanpa delay untuk responsive immediate update
      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = containerRef.current?.scrollTop || 0;
        const lastScroll = lastScrollRef.current;
        const isScrollingDown = currentScrollY > lastScroll;
        
        // Navbar visible jika scroll ke atas dari threshold
        if (currentScrollY < hideThreshold) {
          setTranslateY(0);
        } 
        // Navbar hidden jika scroll down
        else if (isScrollingDown) {
          setTranslateY(-100);
        } 
        // Navbar visible jika scroll up (lebih responsif)
        else {
          setTranslateY(0);
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
