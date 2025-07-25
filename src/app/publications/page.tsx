"use client";

import AnimatedText from "../components/ui/AnimatedText";
import { ExternalLink } from "lucide-react";
import AnimatedDivLine from "../components/ui/AnimatedDivLine";

export default function Publications() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <AnimatedText className="text-3xl sm:text-4xl font-bold leading-snug">
        Academic Publications
      </AnimatedText>

      <AnimatedDivLine />

      <AnimatedText className="max-w-3xl font-medium mb-6 text-sm md:text-base text-justify" delay={0.1}>
        <p>Throughout my academic journey (Master’s, PhD, and Postdoc, 2012–2019), I contributed to multiple research projects centered on intelligent systems and machine learning applications for real-world challenges. These efforts led to several peer-reviewed publications in journals and conferences, advancing the fields of artificial intelligence and software engineering.</p>
      </AnimatedText>

      <AnimatedText
        className="max-w-xl mb-4 text-sm md:text-base"
        delay={0.2}
      >
        You can explore my academic work, including peer-reviewed papers,
        citations, and h-index on my public <b>Google Scholar</b> profile.
      </AnimatedText>

      <AnimatedText delay={0.3}>
        <a
          href="https://scholar.google.com/citations?hl=en&user=8Uf2cbUAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-900 border border-sky-500 text-sky-700 dark:text-sky-300 font-medium rounded hover:bg-sky-50 dark:hover:bg-gray-700 transition"
        >
          Visit Google Scholar
          <ExternalLink className="ml-2" size={18} />
        </a>
      </AnimatedText>
    </section>
  );
}
