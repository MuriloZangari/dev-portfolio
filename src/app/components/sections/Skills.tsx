'use client';

import { motion } from 'framer-motion';
import ExpandableCard from '../ui/ExpandableCard';

export default function Skills() {
  const skills = [
    ['Front-End:', 'React.js, Next.js, Tailwind CSS, Vite, HTML5, Bootstrap'],
    ['Back-End:', 'Django (incl. RESTful APIs), Node.js, OAuth2'],
    ['DevOps & Infrastructure:', 'PostgreSQL, AWS (EC2, S3, IAM, Route 53, RDS, Cost Management, AWS Backup, Security Groups), Terraform, Docker, CI/CD (Git CLI, Github Actions, GitLab CI)'],
    ['Testing & Quality:', 'Test-Driven Development (TDD), PyTest, Playwright, ESLint'],
    ['AI & Machine Learning:', 'Supervised Learning (Classification, Regression), Optimization, LLM (Large Language Models), Ollama, Prompt Engineering'],
    ['Programming Languages:', 'Python, JavaScript, TypeScript, C++'],
    ['Data Analysis:', 'Pandas, NumPy, Scikit-learn, Data Visualization'],
    ['Project & Workflow:', 'Agile Methodologies (Scrum, Kanban), Jira'],
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <ExpandableCard title="Skills">
      <motion.ul
        className="list-disc pl-5 space-y-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map(([label, content], index) => (
          <motion.li key={index} variants={item}>
            <b>{label} </b>{content}
          </motion.li>
        ))}
      </motion.ul>
    </ExpandableCard>
  );
}
