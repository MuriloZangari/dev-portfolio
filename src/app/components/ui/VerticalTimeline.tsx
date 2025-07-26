// src/app/components/ui/VerticalTimeline.tsx
'use client';

import { RefObject } from 'react';
import { motion, useScroll } from 'framer-motion';

type TimelineItem = {
  content: React.ReactNode;
};

type VerticalTimelineProps = {
  scrollRef: RefObject<HTMLDivElement | null>;
  items: TimelineItem[];
  lineColor?: string;
  pointColor?: string;
};

export default function VerticalTimeline({
  scrollRef,
  items,
  lineColor = 'bg-sky-900',
  pointColor = 'bg-sky-900',
}: VerticalTimelineProps) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'center start'],
  });

  return (
    <div ref={scrollRef} className="relative pl-4">
      {/* Linha vertical animada */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className={`absolute left-[22px] top-2 w-[4px] h-full origin-top rounded shadow-md shadow-sky-900 dark:shadow-sky-100 ${lineColor}`}
      />

      <div className="flex flex-col gap-10">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Ponto */}
            <div className="w-4 flex justify-center">
              <div className={`w-4 h-4 mt-1.5 rounded-full border-2 border-gray-900 dark:border-gray-100 z-10 ${pointColor}`} />
            </div>

            {/* Conteúdo */}
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
