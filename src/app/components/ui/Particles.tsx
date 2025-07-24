'use client';

import { useEffect, useRef } from 'react';

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = Array.from({ length: 40 }, () => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-gray-300 dark:bg-white opacity-10';
      particle.style.width = `${Math.random() * 4 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animation = `float ${4 + Math.random() * 4}s ease-in-out infinite`;
      container.appendChild(particle);
      return particle;
    });

    return () => {
      particles.forEach((p) => container.removeChild(p));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    />
  );
}
