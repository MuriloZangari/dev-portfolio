'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export default function ExperienceItem({
  title,
  company,
  period,
  bullets,
}: ExperienceItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
        mass: 0.5,
        duration: 0.6,
      }}
      className="flex flex-col gap-1 my-6"
    >
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 italic">{company} · {period}</p>
      <ul className="list-disc list-inside text-sm mt-1 space-y-1">
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
