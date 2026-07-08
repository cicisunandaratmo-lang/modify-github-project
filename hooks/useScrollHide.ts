import { useState, useEffect, useRef } from 'react';

export function useScrollHide() {
  const [isVisible, setIsVisible] = useState(true);
  const [translateY, setTranslateY] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollRef = useRef(0);

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
      const hideThreshold = 30;
      
      // Jika scroll kembali ke atas dengan cepat, langsung tampilkan navbar
      if (currentScrollY < hideThreshold) {
        setIsVisible(true);
        setTranslateY(0);
        lastScrollRef.current = currentScrollY;
        return;
      }
      
      // Clear previous timeout untuk menghindari banyak state update
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Use requestAnimationFrame untuk smooth scroll handling
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setTranslateY(-100);
        lastScrollRef.current = currentScrollY;
      }, 50);
    };

    // Call handler saat mount untuk set initial state
    handleScroll();

    mainElement.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return { isVisible, translateY };
}
