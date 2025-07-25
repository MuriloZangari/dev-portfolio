'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function ExpandableCard({
  title,
  children,
  defaultOpen = false,
}: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll after expansion is complete
  useEffect(() => {
    if (isOpen && contentRef.current) {
      // Aguarda o próximo repaint para garantir que a expansão ocorreu
      requestAnimationFrame(() => {
        contentRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      });
    }
  }, [isOpen]);

  return (
    <section ref={sectionRef} className="relative mb-6 scroll-mt-32">
      {/* Borda falsa */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-gray-800 dark:bg-white z-0" />

      {/* Card principal */}
      <div className="relative z-10 p-6 rounded-2xl border border-black dark:border-white bg-gray-100 dark:bg-gray-900 transition-all duration-300">
        
        {/* Header clicável */}
        <div
          className="flex items-center justify-between cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-xl font-bold group-hover:text-sky-800 transition">
            {title}
          </h2>
          <span className="group-hover:text-sky-800 transition">
            {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </span>
        </div>

        {/* Conteúdo com motion + ref */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="expandable-content"
              ref={contentRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mt-4 space-y-6">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
