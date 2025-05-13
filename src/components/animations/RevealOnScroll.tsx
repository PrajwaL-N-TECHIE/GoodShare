
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className,
  delay = 0,
  duration = 400,
  direction = 'up',
  distance = 20,
  once = true,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const getDirectionStyles = () => {
    switch (direction) {
      case 'up':
        return { transform: `translateY(${distance}px)` };
      case 'down':
        return { transform: `translateY(-${distance}px)` };
      case 'left':
        return { transform: `translateX(${distance}px)` };
      case 'right':
        return { transform: `translateX(-${distance}px)` };
      default:
        return { transform: `translateY(${distance}px)` };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0, 0)' : undefined,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        ...(inView ? {} : getDirectionStyles()),
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
