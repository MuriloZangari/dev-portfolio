'use client';

import { motion } from 'framer-motion';
import { ReactNode, ElementType } from 'react';

interface AnimatedTextProps {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  children,
  as: Tag = 'span',
  className = '',
  delay = 0,
}: AnimatedTextProps) {
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay,
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
