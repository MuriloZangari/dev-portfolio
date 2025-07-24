import AnimatedText from "../components/ui/AnimatedText";
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
  return (
    <div className="relative w-full max-w-[720px] mx-auto py-4">
      <AnimatedText as="div" className="mb-8" delay={0.1}>
        <h1 className="text-3xl font-bold">Projects</h1>
      </AnimatedText>

      <AnimatedText as="div" className="mb-8" delay={0.2}>
        <p>Here you can showcase your projects.</p>
      </AnimatedText>

      {/* Responsive grid: 1 column on mobile, 2 columns from md up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectCard
          image="/project-image1.jpg"
          title="Next.js, React, and Tailwind CSS Portfolio"
          tags="Next.js, React, Tailwind CSS, TypeScript"
          link=""
          github=""
        />
        <ProjectCard
          image="/bank-churn.png"
          title="Customer Bank Churn Prediction"
          tags="Machine Learning, Feature Engineering, Supervised Classification"
          link="https://www.kaggle.com/code/murilozangari/customer-bank-churn-prediction"
        />
        <ProjectCard
          image="/customer.png"
          title="Customer Segmentation with Marketing Campaign Effectiveness Analysis"
          tags="Data Cleaning, K-Means Clustering, EDA"
          link="https://www.kaggle.com/code/murilozangari/customer-segmentation-eda-clustering"
          github="https://app.powerbi.com/view?r=eyJrIjoiZmU1Mjc3YTMtMzU5NC00ZWNjLWI3YzQtYjc3OWZmMjM2ZGI3IiwidCI6IjU2MDA3ZmIyLWUzZjgtNDY5YS1iNTE3LWQzNjYyNDcyYWY3OSJ9"
        />
        <ProjectCard
          image="/project-image3.jpg"
          title="Jobs And Salaries In Data-Related Careers 2024"
          tags="Machine Learning, Data Visualization, EDA"
          link="https://www.kaggle.com/code/murilozangari/jobs-data-field-2024-eda-salary-estimation"
          github="https://app.powerbi.com/view?r=eyJrIjoiOTA1NGI5NzUtY2FlMi00NDc0LWE0M2QtZWZiOGJjZWZhMDIwIiwidCI6IjU2MDA3ZmIyLWUzZjgtNDY5YS1iNTE3LWQzNjYyNDcyYWY3OSJ9&pageName=ReportSection517ec5a072d57ff231ad"
        />
      </div>
    </div>
  );
}
