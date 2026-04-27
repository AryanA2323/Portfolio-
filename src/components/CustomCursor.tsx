import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)');
    const updateState = () => setIsEnabled(mediaQuery.matches && window.innerWidth >= 1280);

    updateState();
    mediaQuery.addEventListener('change', updateState);
    window.addEventListener('resize', updateState);

    return () => {
      mediaQuery.removeEventListener('change', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      setIsHovering(false);
      cursorX.set(-100);
      cursorY.set(-100);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border border-white/40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          willChange: 'transform',
        }}
        animate={{
          scale: isHovering ? 1.35 : 1,
          borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.02)',
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
