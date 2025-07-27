import AnimatedText from "../components/ui/AnimatedText";
import ProjectCard from "../components/ui/ProjectCard";
import MainProjectCard from "../components/ui/MainProjectCard";

export default function Projects() {
  return (
    <div className="relative w-full max-w-[720px] mx-auto py-4 md:py-10 mb-6 md:mb-10">
      <AnimatedText
        as="div"
        className="items-center justify-center mb-8 mx-auto"
        delay={0.1}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Imagination Trumps Knowledge!
        </h1>
      </AnimatedText>

      <AnimatedText as="div" className="mb-12" delay={0.3}>
        <MainProjectCard
          image="/portfolio.png"
          title="Next.js, React, and Tailwind CSS Portfolio"
          description="This portfolio website is built with Next.js, React, and Tailwind CSS, showcasing my skills and projects."
          tags="Next.js, React, Tailwind CSS, TypeScript, framer-motion, github, Vercel"
          link="https://github.com/MuriloZangari/dev-portfolio"
          github="https://github.com/MuriloZangari/dev-portfolio"
        />
      </AnimatedText>

      {/* Responsive grid: 1 column on mobile, 2 columns from md up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6 md:mb-10">
        <AnimatedText as="div" className="" delay={0.4}>
          <ProjectCard
            image="/bank-churn.png"
            title="Customer Bank Churn Prediction"
            tags="Machine Learning, Feature Engineering, Supervised Classification"
            link="https://www.kaggle.com/code/murilozangari/customer-bank-churn-prediction"
          />
        </AnimatedText>
        <AnimatedText as="div" className="" delay={0.5}>
          <ProjectCard
            image="/customer.png"
            title="Customer Segmentation with Marketing Campaign Effectiveness Analysis"
            tags="Data Cleaning, K-Means Clustering, EDA"
            link="https://www.kaggle.com/code/murilozangari/customer-segmentation-eda-clustering"
            github="https://app.powerbi.com/view?r=eyJrIjoiZmU1Mjc3YTMtMzU5NC00ZWNjLWI3YzQtYjc3OWZmMjM2ZGI3IiwidCI6IjU2MDA3ZmIyLWUzZjgtNDY5YS1iNTE3LWQzNjYyNDcyYWY3OSJ9"
          />
        </AnimatedText>
        <AnimatedText as="div" className="" delay={0.6}>
          <ProjectCard
            image="/job-salary.png"
            title="Jobs And Salaries In Data-Related Careers 2024"
            tags="Machine Learning, Data Visualization, EDA"
            link="https://www.kaggle.com/code/murilozangari/jobs-data-field-2024-eda-salary-estimation"
            github="https://app.powerbi.com/view?r=eyJrIjoiOTA1NGI5NzUtY2FlMi00NDc0LWE0M2QtZWZiOGJjZWZhMDIwIiwidCI6IjU2MDA3ZmIyLWUzZjgtNDY5YS1iNTE3LWQzNjYyNDcyYWY3OSJ9&pageName=ReportSection517ec5a072d57ff231ad"
          />
        </AnimatedText>
        <AnimatedText as="div" className="" delay={0.8}>
          <ProjectCard
            image="/tiktok.png"
            title="TikTok Video Claims Prediction"
            tags="Feature Engineering, Supervised Classification, Data Cleaning, XGBoost"
            link="https://www.kaggle.com/code/murilozangari/tiktok-video-claims-prediction"
          />
        </AnimatedText>
      </div>
      <div className="flex flex-wrap gap-12 items-center pt-6 md:pt-0 justify-center md:justify-center mx-auto">
        <AnimatedText delay={0.8}>
          <div className="flex justify-center">
            <a
              href="/publications"
              className="inline-flex items-center px-4 py-4 bg-gray-900 dark:bg-gray-100 border border-black dark:border-white text-gray-100 dark:text-gray-900 font-medium rounded-4xl hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-100 transition"
            >
              View Publications
            </a>
          </div>
        </AnimatedText>
        <AnimatedText delay={0.9}>
          <a
            href="/contact"
            className="text-sm md:text-base underline font-medium"
          >
            Contact
          </a>
        </AnimatedText>
      </div>
    </div>
  );
}
