// src/app/components/sections/Experience.tsx
'use client';

import { RefObject } from 'react';
import ExperienceItem from '../ui/ExperienceItem';
import ExpandableCard from '../ui/ExpandableCard';
import VerticalTimeline from '../ui/VerticalTimeline';

type ExperienceProps = {
  scrollRef: RefObject<HTMLDivElement | null>;
};

const experienceData = [
  {
    title: 'Full-stack Software Engineer',
    company: 'Brick Abode',
    period: '2024–2025',
    bullets: [
      'Developed and launched the new company website using Next.js, React, and Tailwind CSS, improving performance, accessibility, and online presence.',
      'Designed and implemented a CV processing and candidate scoring system using Django, RESTful APIs, JavaScript, and PostgreSQL, doubling the efficiency of recruitment workflows.',
      'Managed cloud infrastructure using AWS, Docker, and Terraform, improving database and system security through threat modeling and reducing AWS costs by 30% through infrastructure optimization.',
      'Designed and deployed a CV screening pipeline by integrating LLMs (Ollama) into a Django application to extract and structure candidate data. Applied prompt engineering, external API integration, and asynchronous processing, aligning AI automation with business needs.',
      'Delivered projects on time, maintained thorough documentation, and collaborated cross-functionally with developers, PMs, and stakeholders.',
    ],
  },
  {
    title: 'Associate Policy Enforcement Analyst - IP Operations',
    company: 'Meta (via Concentrix)',
    period: '2022–2023',
    bullets: [
      'Lived abroad for four years across Italy, Spain, and Ireland, gaining international experience in culturally diverse environments.',
      'Maintained a consistent >95% quality score, ranking among the top-performing analysts; recognized as Employee of the Quarter for exceptional accuracy and reliability.',
      'Contributed to mitigating scams, impersonation, and AI-generated harmful content, strengthening platform safety and integrity across Meta products.',
      'Provided training and support to internal teams on policy guidelines and best practices, fostering a culture of compliance and accountability.',
      'Developed soft skills highly valuable to engineering roles: attention to detail, critical thinking, communication under pressure, and cross-functional collaboration in a fast-paced, global operation.',
    ],
  },
  {
    title: 'Ph.D. in Computer Science & Postdoctoral Fellow in Computational Intelligence',
    company: 'Federal University of Paraná',
    period: '2013–2019',
    bullets: [
      'Developed machine learning-based solutions using C++ and Python for solving complex real-world problems in scheduling, optimization, and data mining.',
      'Achieved state-of-the-art results across all case studies, validated through statistical analysis, hypothesis testing, and rigorous experimental design.',
      'Designed, executed multiple experiments using statistical modeling, performance metrics and data-driven methodologies in alignment with the scientific method.',
      'Authored, published, and presented 10+ peer-reviewed research papers in top-tier journals and conferences in the fields of Artificial Intelligence and Computational Intelligence.',
      'Collaborated with cross-functional research teams and advised junior researchers.',
    ],
  },
  {
    title: 'Master in Computer Science',
    company: 'State University of Maringá',
    period: '2011–2012',
    bullets: [
      'Designed and implemented machine learning models to solve real-world problems in classification, prediction, and pattern recognition.',
      'Conducted extensive data analysis and feature selection, followed by model evaluation using statistical validation techniques and performance metrics.',
      'Applied experimental design to assess different learning strategies, optimizing parameters through iterative testing and cross-validation.',
      'Published research findings in peer-reviewed conferences, and actively contributed to collaborative academic projects focused on intelligent systems and applied AI.',
    ],
  },
];

export default function Experience({ scrollRef }: ExperienceProps) {
  const items = experienceData.map((exp) => ({
    content: (
      <ExperienceItem
        title={exp.title}
        company={exp.company}
        period={exp.period}
        bullets={exp.bullets}
      />
    ),
  }));

  return (
    <ExpandableCard title="Work Experience">
      <VerticalTimeline scrollRef={scrollRef} items={items} />
    </ExpandableCard>
  );
}
