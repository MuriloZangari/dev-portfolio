// src/app/pages/Resume.tsx
'use client';

import AnimatedText from '../components/ui/AnimatedText';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';

export default function Resume() {
  return (
    <div className="relative w-full max-w-[720px] mx-auto py-2">
      <AnimatedText as="div" className="mb-8" delay={0.1}>
        <Hero />
      </AnimatedText>
      <AnimatedText as="div" className="mb-8" delay={0.2}>
        <About />
      </AnimatedText>
      <AnimatedText as="div" className="mb-8" delay={0.3}>
        <Experience />
      </AnimatedText>
      <AnimatedText as="div" className="mb-8" delay={0.4}>
        <Education />
      </AnimatedText>
      <AnimatedText as="div" className="mb-8" delay={0.5}>
        <Skills />
      </AnimatedText>
      <AnimatedText as="div" className="mb-8" delay={0.6}>
        <Certifications />
      </AnimatedText>
    </div>
  );
}
