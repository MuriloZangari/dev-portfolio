// src/app/resume/page.tsx
"use client";

import { useRef } from "react";
import AnimatedText from "../components/ui/AnimatedText";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Skills from "../components/sections/Skills";
import Certifications from "../components/sections/Certifications";

export default function Resume() {
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full max-w-[720px] justify-center mx-auto py-2">
      <AnimatedText as="div" className="mb-8" delay={0.1}>
        <Hero />
      </AnimatedText>
      <AnimatedText as="div" className="mb-8" delay={0.2}>
        <About />
      </AnimatedText>

      <div ref={experienceRef}>
        <AnimatedText as="div" className="mb-8" delay={0.3}>
          <Experience scrollRef={experienceRef} />
        </AnimatedText>
      </div>

      <div ref={educationRef}>
        <AnimatedText as="div" className="mb-8" delay={0.4}>
          <Education scrollRef={educationRef} />
        </AnimatedText>
      </div>

      <AnimatedText as="div" className="mb-8" delay={0.5}>
        <Skills />
      </AnimatedText>
      <AnimatedText as="div" className="mb-8" delay={0.6}>
        <Certifications />
      </AnimatedText>

      <AnimatedText delay={0.8}>
        <div className="flex justify-center">
          <a
            href="/projects"
            className="inline-flex items-center px-4 py-4 bg-gray-900 dark:bg-gray-100 border border-black dark:border-white text-gray-100 dark:text-gray-900 font-medium rounded-4xl hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-100 transition"
          >
            Portfolio Projects!
          </a>
        </div>
      </AnimatedText>
    </div>
  );
}
