// src/app/components/sections/Education.tsx
'use client';

import { RefObject } from 'react';
import ExpandableCard from '../ui/ExpandableCard';
import EducationItem from '../ui/EducationItem';
import VerticalTimeline from '../ui/VerticalTimeline';

type EducationProps = {
  scrollRef: RefObject<HTMLDivElement | null>;
};

const educationData = [
  {
    title: 'PhD in Computer Science',
    university: 'Federal University of Paraná',
    period: '2015 - 2017',
  },
  {
    title: "Master's in Computer Science",
    university: 'Federal University of Paraná',
    period: '2010 - 2012',
  },
  {
    title: "Bachelor's in Computer Science",
    university: 'State University of Maringá',
    period: '2006 - 2009',
  },
];

export default function Education({ scrollRef }: EducationProps) {
  const items = educationData.map((edu) => ({
    content: (
      <EducationItem
        title={edu.title}
        university={edu.university}
        period={edu.period}
      />
    ),
  }));

  return (
    <ExpandableCard title="Education">
      <VerticalTimeline scrollRef={scrollRef} items={items} />
    </ExpandableCard>
  );
}
