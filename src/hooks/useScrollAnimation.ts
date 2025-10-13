import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Find all elements with fade-in-section class
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((element) => {
      observer.observe(element);
    });

    elementsRef.current = Array.from(elements) as HTMLElement[];

    return () => {
      elementsRef.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return elementsRef;
}