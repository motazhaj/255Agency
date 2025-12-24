'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    // Don't initialize cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      );
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      <div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '50px' : '30px',
          height: isPointer ? '50px' : '30px',
          background: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '2px solid rgba(0, 0, 0, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.2s ease',
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
