// src/components/layout/Header.tsx
import AnimatedLink from '../ui/AnimatedLink';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  return (
    <header className="w-full p-4 md:p-8">
      <nav className="flex justify-start gap-6 max-w-[1200px] mx-auto">
        <AnimatedLink href="/">Home</AnimatedLink>
        <AnimatedLink href="/resume">Resume</AnimatedLink>
        <AnimatedLink href="/projects">Projects</AnimatedLink>
        <AnimatedLink href="/publications">Publications</AnimatedLink>
        <AnimatedLink href="/contact">Contact</AnimatedLink>
      </nav>
      <ThemeToggle />
    </header>
  );
}
