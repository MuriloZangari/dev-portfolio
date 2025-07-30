'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const skills = [
  'Data Science',
  'AI & Machine Learning',
  'Python',
  'SQL',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'Node.js',
  'Django',
  'PostgreSQL',
  'AWS',
  'Terraform',
  'Docker',
  'CI/CD',
  'LLMs',
  'DevOps',
  'GitHub Actions',
];

export default function ScrollingSkills() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 90,
          ease: 'linear',
        },
      },
    });
  }, [controls]);

  return (
    <div className="relative my-2">
      {/* 🔹 False border (borda falsa) */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-gray-800 dark:bg-white z-0" />

      {/* 🔸 Card principal com animação */}
      <div className="relative z-10 w-full overflow-hidden border border-gray-800 dark:border-white bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-sky-300 bg-opacity-80 rounded-2xl py-3 min-h-[48px] flex items-center">
        <motion.div
          className="flex gap-12 whitespace-nowrap px-4 text-sm md:text-base font-mono absolute"
          animate={controls}
        >
          {[...skills, ...skills].map((skill, idx) => (
            <span key={idx} className="flex-shrink-0">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
