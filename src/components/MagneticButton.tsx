import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

export const MagneticButton = ({ children, className, onClick, href }: { children: React.ReactNode, className?: string, onClick?: () => void, href?: string }) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | any>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const isInteractiveDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: fine) and (hover: hover)').matches;

  const handleMouse = (e: React.MouseEvent) => {
    if (!isInteractiveDevice || !ref.current) {
      return;
    }

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Element = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Element
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY, willChange: 'transform' }}
      {...props}
      className={className}
    >
      {children}
    </Element>
  );
};
