import ExperienceItem from '../ui/ExperienceItem';
import ExpandableCard from '../ui/ExpandableCard';

export default function Experience() {
  return (
    <ExpandableCard title="Work Experience">
      <ExperienceItem
        title="Full-stack Software Engineer"
        company="Brick Abode"
        period="2024–2025"
        bullets={[
          'Developed and launched the new company website using Next.js, React, and Tailwind CSS. Enhanced company’s online presence, accessibility and performance.',
          'Designed and implemented a CV processing and candidate scoring system using Django, RESTful APIs, JavaScript, and PostgreSQL, doubling the efficiency of recruitment workflows.',
          'Managed cloud infrastructure with AWS, Docker, and Terraform, proactively improving database and infrastructure security through thread modeling, and reducing AWS cloud costs in 30%.',
          'Designed and deployed a CV screening system by integrating LLM (Ollama) into a Django application to generate structured candidate data, using RESTful APIs, external API integration, and asynchronous task processing to improve hiring workflow efficiency.',
          'Delivered projects on time, maintained documentation, and communicated effectively with stakeholders.',
        ]}
      />

      <ExperienceItem
        title="Research Assistant & Postdoctoral Fellow in Computational Intelligence"
        company="Federal University of Paraná"
        period="2013–2019"
        bullets={[
          'Developed Machine Learning-based system in C++ for solving complex problems in the fields of scheduling, optimization, and data analysis.',
          'Achieved the state-of-the-art results from the literature in 100% of the applied case studies proven via statistical analysis, hypothesis testing, and performance metrics in Python',
          'Presented findings at international conferences, and published 10 articles in top-tier journals, contributing to the Computational Intelligence research community.',
        ]}
      />

      <ExperienceItem
        title="Research Assistant in Computational Intelligence "
        company="State University of Maringá"
        period="2011–2012"
        bullets={[
          'Developed a data mining system based on Machine Learning in Java for predicting customer behavior in a healthcare company, achieving a 95% accuracy rate.',
          'Conducted data preprocessing, feature selection, and model evaluation using Python and R, resulting in high-quality and a reliable dataset for accurate model development.',
          'Collaborated with a team of researchers to design and implement experiments, analyze results, and present findings in academic papers.',
          'Published two peer-reviewed scientific articles. Improved my skill in communication and data storytelling.',
        ]}
      />
    </ExpandableCard>
  );
}



