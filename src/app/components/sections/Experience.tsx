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
    tags: 'Software Engineering, DevOps, Node.js, Next.js, React, Tailwind CSS, Python, Django, RESTful APIs, PostgreSQL, Unix, AWS, Docker, Terraform, Git Actions, LLMs, Prompt Engineering, Project Management, Agile Methodologies',
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
    tags: 'Quality Assurance, Cross-functional Collaboration, Attention to Detail, Critical Thinking, Communication, Leadership, Policy Enforcement, AI Safety',
  },
  {
    title: 'Ph.D. in Computer Science & Postdoctoral Fellow in Computational Intelligence',
    company: 'Federal University of Paraná',
    period: '2013–2019',
    bullets: [
      'Developed innovative meta-heuristics solutions based on swarm intelligence and probabilistic models (e.g., Estimation of Distribution Algorithms) using C++ and Python for solving complex real-world combinatorial optimization problems with multiple objectives, such as vehicle routing, scheduling, and resource allocation.',
      'Applied advanced statistical analysis, hypothesis testing, and experimental design to validate algorithm performance, achieving state-of-the-art results across multiple case studies.',
      'Designed and executed experiments using statistical modeling, performance metrics, and data-driven methodologies in alignment with the scientific method.',
      'Authored, published, and presented 10+ peer-reviewed research papers in top-tier journals and conferences in the fields of Artificial Intelligence and Computational Intelligence.',
      'Collaborated with cross-functional research teams and advised junior researchers, enhancing the academic community through mentorship and knowledge sharing.',
    ],
    tags: 'Meta-heuristics, Machine Learning, C++, Python, Statistical Analysis, Experimental Design, Research, Optimization, Swarm Intelligence, Probabilistic Models, Estimation of Distribution Algorithms, Multi-objective Optimization',
  },

  {
    title: 'Master in Computer Science',
    company: 'State University of Maringá',
    period: '2011–2012',
    bullets: [
      'Designed and implemented a machine learning model based on Ant Colony Optimization meta-heuristic for the classification task from Data Mining, focusing on model performance on imbalanced datasets, and building human comprehensive classification rules for interpretability.',
      'Conducted extensive data analysis and feature selection, followed by model evaluation using statistical validation techniques and performance metrics on a real healthcare dataset.',
      'Developed a comprehensive understanding of machine learning algorithms, data preprocessing, and model evaluation techniques, applying them to real-world datasets.',
      'Applied experimental design to assess different learning strategies, optimizing parameters through iterative testing and cross-validation.',
      'Published research findings in peer-reviewed conferences, and actively contributed to collaborative academic projects focused on intelligent systems and applied AI.',
    ],
    tags: 'Machine Learning, Data Analysis, Feature Selection, Model Evaluation, Experimental Design, Ant Colony Optimization, Data Mining, Classification, Imbalanced Datasets, Healthcare Data, Research',
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
        tags={exp.tags}
      />
    ),
  }));

  return (
    <ExpandableCard title="Work Experience">
      <VerticalTimeline scrollRef={scrollRef} items={items} />
    </ExpandableCard>
  );
}
