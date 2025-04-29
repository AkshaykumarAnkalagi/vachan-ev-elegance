
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  animation?: string;
}

const AnimateOnScroll = ({ 
  children, 
  className, 
  threshold = 0.1,
  animation = 'animate-fade-in'
}: AnimateOnScrollProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animation);
            // Once the animation has played, we can unobserve the element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    const currentElement = elementRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, animation]);

  return (
    <div ref={elementRef} className={cn('opacity-0', className)}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
