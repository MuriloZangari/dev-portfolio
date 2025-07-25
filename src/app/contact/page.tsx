"use client";

import AnimatedText from "../components/ui/AnimatedText";
import { ExternalLink } from "lucide-react";
import AnimatedDivLine from "../components/ui/AnimatedDivLine";

export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <AnimatedText className="text-4xl md:text-5xl font-bold leading-snug">
        Get in Touch!
      </AnimatedText>

      <AnimatedDivLine />

      <AnimatedText
        className="max-w-xl text-gray-700 dark:text-gray-300 mb-4 text-base sm:text-lg"
        delay={0.1}
      >
        Contact Options
      </AnimatedText>

      <AnimatedText delay={0.2} className="mb-6">
        <a
          href="https://linkedin.com/in/murilozangari/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sky-700 dark:text-sky-300 font-medium hover:underline transition"
        >
          LinkedIn Profile
          <ExternalLink className="ml-2" size={18} />
        </a>
      </AnimatedText>

      <AnimatedText delay={0.3}>
        <a
          href="mailto:murilo.zangari@gmail.com"
          className="text-sky-700 dark:text-sky-300 font-medium hover:underline transition"
        >
          murilo.zangari@gmail.com
        </a>
      </AnimatedText>
    </section>
  );
}
