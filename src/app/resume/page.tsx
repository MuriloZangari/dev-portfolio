// src/app/pages/Resume.tsx
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';

export default function Resume() {
  return (
    <div className="relative w-full max-w-[720px] mx-auto py-2">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
    </div>
  );
}
