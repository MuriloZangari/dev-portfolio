"use client";

import AnimatedText from "../components/ui/AnimatedText";
import { ExternalLink } from "lucide-react";
import AnimatedDivLine from "../components/ui/AnimatedDivLine";
import ExpandableCard from "../components/ui/ExpandableCard";
import Link from "next/link";

const publications = {
  journals: [
    {
      title: "A Decomposition-based Kernel of Mallows Models Algorithm for bi- and tri-objective Permutation Flowshop Scheduling Problem.",
      venue: "Applied Soft Computing, 07/2018",
      link: "https://doi.org/10.1016/j.asoc.2018.07.011",
    },
    {
      title: "Multiobjective Decomposition-based Mallows Models Estimation of Distribution Algorithms: A case of study for the Permutation Flowshop Scheduling Problem.",
      venue: "Information Sciences, 02/2017",
      link: "https://doi.org/10.1016/j.ins.2017.02.034",
    },
    {
      title: "Not all PBILs are the same: Unveiling the different learning mechanisms of PBIL variants.",
      venue: "Applied Soft Computing, 01/2017",
      link: "https://doi.org/10.1016/j.asoc.2016.12.045",
    },
    {
      title: "A decomposition-based binary ACO algorithm for the multiobjective UBQP.",
      venue: "Neurocomputing, 02/2017",
      link: "https://doi.org/10.1016/j.neucom.2016.09.122",
    },
  ],
  conferences: [
    {
      title: "A Decomposition-based Local Search Algorithm for Multi-objective Sequence Dependent Setup Times Permutation Flowshop Scheduling.",
      venue: "IEEE CEC’18, Rio de Janeiro, Brazil, 07/2018",
      link: "https://doi.org/10.1109/CEC.2018.8477711",
    },
    {
      title: "On the Design of Hard mUBQP Instances.",
      venue: "GECCO’16, Denver, USA, 07/2016",
      link: "https://doi.org/10.1145/2908812.2908889",
    },
    {
      title: "Ant-Miner Specializations to Tackle Imbalanced Data Sets.",
      venue: "CBIC’16, Recife, Brazil, 03/2016",
      link: "https://doi.org/10.21528/CBIC2013-029",
    },
    {
      title: "Multiobjective Binary ACO for Unconstrained Binary Quadratic Programming.",
      venue: "BRACIS, Brazil, 11/2015",
      link: "https://doi.org/10.1109/BRACIS.2015.15",
    },
    {
      title: "PBIL: un mismo nombre para distintos algoritmos. Un caso de estudio sobre un problema de optimización multi-objetivo.",
      venue: "JAEM 2015, Albacete, Spain",
      link: "",
    },
    {
      title: "Parallel MOEA/D-ACO on GPU.",
      venue: "Ibero-American Conference on Artificial Intelligence, 11/2014",
      link: "https://doi.org/10.1007/978-3-319-12027-0_33",
    },
    {
      title: "A GPU implementation of MOEA/D-ACO for the Multi-objective TSP.",
      venue: "BRACIS, Brazil, 2014",
      link: "https://doi.org/10.1109/BRACIS.2014.65",
    },
    {
      title: "Extensions of Ant-Miner Algorithms to Deal with Class Imbalance Problem.",
      venue: "IDEAL 2012, 08/2012",
      link: "https://doi.org/10.1007/978-3-642-32639-4_2",
    },
  ],
  technicalReports: [
    {
      title: "MOEA/D-GM: Using probabilistic graphical models in MOEA/D for solving combinatorial optimization problems.",
      venue: "arXiv, Cornell University Library, 2015",
      link: "https://arxiv.org/abs/1511.05625",
    },
  ],
  academicTheses: [
    {
      title: "Ph.D. Thesis – Innovative Hybrid MOEA/D Variants for Solving Multi-objective Combinatorial Optimization Problems",
      venue: "Federal University of Paraná (UFPR), 2016",
      link: "https://acervodigital.ufpr.br/xmlui/handle/1884/46123?show=full",
    },
    {
      title: "Master’s Dissertation – Extensions of Ant-Miner Algorithm for Imbalanced Datasets",
      venue: "State University of Maringá (UEM), 2012",
      link: "http://repositorio.uem.br:8080/jspui/handle/1/2521",
    },
  ],
};

function ArticleItem({
  title,
  venue,
  link,
}: {
  title: string;
  venue: string;
  link: string;
}) {
  return (
    <div className="text-left">
      <p className="font-semibold text-sm md:text-base leading-snug">{title}</p>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{venue}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-700 dark:text-sky-300 text-sm inline-flex items-center gap-1 hover:underline"
      >
        View DOI <ExternalLink size={14} />
      </a>
    </div>
  );
}

export default function Publications() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen mt-6 md:mt-12 px-4 text-center">
      <AnimatedText className="text-2xl md:text-5xl font-bold leading-snug " delay={0.1}>
        Academic Publications
      </AnimatedText>

      <AnimatedDivLine />

      <AnimatedText className="max-w-3xl my-6 font-medium text-sm md:text-base text-justify" delay={0.2}>
        <p>Throughout my academic journey (Master’s, PhD, and Postdoc, 2012–2019), I contributed to multiple research projects centered on intelligent systems and machine learning applications for real-world challenges. These efforts led to several peer-reviewed publications in top-tier journals and conferences, advancing the fields of machine learning, data mining, and optimization.</p>
      </AnimatedText>

       {/* Expandable Cards */}
      <div className="my-6 w-full max-w-3xl"> 
        <AnimatedText className="mb-4" delay={0.4}>
          <ExpandableCard title="Journals">
            {publications.journals.map((pub, idx) => (
              <ArticleItem key={idx} {...pub} />
            ))}
          </ExpandableCard>
        </AnimatedText>       

        <AnimatedText className="mb-4" delay={0.6}>
          <ExpandableCard title="Conference Proceedings">
            {publications.conferences.map((pub, idx) => (
              <ArticleItem key={idx} {...pub} />
            ))}
          </ExpandableCard>
        </AnimatedText>

        <AnimatedText className="mb-4" delay={0.8}>
          <ExpandableCard title="Technical Reports">
            {publications.technicalReports.map((pub, idx) => (
              <ArticleItem key={idx} {...pub} />
            ))}
          </ExpandableCard>
        </AnimatedText>
        <AnimatedText className="mb-4" delay={1.0}>
          <ExpandableCard title="Academic Theses">
            {publications.academicTheses.map((pub, idx) => (
              <ArticleItem key={idx} {...pub} />
            ))}
          </ExpandableCard>
        </AnimatedText>
      </div>

      <AnimatedText
        className="max-w-xl mb-4 text-sm md:text-base"
        delay={1.0}
      >
        Or you can explore my academic work, including citations, and h-index on my public <b>Google Scholar</b> profile.
      </AnimatedText>

      <AnimatedText delay={0.3}>
        <a
          href="https://scholar.google.com/citations?hl=en&user=8Uf2cbUAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 mb-10 bg-gray-100 dark:bg-gray-900 border border-sky-500 text-sky-700 dark:text-sky-300 font-medium rounded hover:bg-sky-50 dark:hover:bg-gray-700 transition"
        >
          Visit Google Scholar
          <ExternalLink className="ml-2" size={18} />
        </a>
      </AnimatedText>

      <div className="flex flex-wrap gap-12 items-center pt-6 md:pt-0 justify-center md:justify-center mx-auto mb-6 md:mb-10">
              <AnimatedText delay={0.8}>
                <div className="flex justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center px-4 py-4 bg-gray-900 dark:bg-gray-100 border border-black dark:border-white text-gray-100 dark:text-gray-900 font-medium rounded-4xl hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-100 transition"
                  >
                    Home Page
                  </Link>
                </div>
              </AnimatedText>
              <AnimatedText delay={0.9}>
                <Link
                  href="/contact"
                  className="text-sm md:text-base underline font-medium"
                >
                  Contact
                </Link>
              </AnimatedText>
            </div>
    </section>
  );
}
