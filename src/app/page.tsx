// src/app/page.tsx
"use client";

import AnimatedText from "./components/ui/AnimatedText";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden ">
      {/* IMAGEM - esquerda no desktop, topo no mobile */}
      <motion.img
        src="/murilo-profile2.png"
        alt="Murilo Zangari Illustration"
        className="w-64 sm:w-72 md:w-[350px] lg:w-[400px] xl:w-[440px] rounded-xl object-cover select-none"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* TEXTO PRINCIPAL */}
      <div className="flex flex-col text-center md:text-left items-center md:items-start max-w-xl">
        <AnimatedText className="text-3xl md:text-5xl font-bold text-center mx-auto leading-snug">
          Murilo Zangari
        </AnimatedText>

        <div className="relative w-full my-6 h-[4px] overflow-hidden rounded">
          <AnimatedText
            as="div"
            className="w-full h-full bg-gray-900 dark:bg-gray-200"
            delay={0.1}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />
        </div>

        <AnimatedText
          className="text-3xl md:text-5xl font-bold text-center mx-auto leading-snug mb-4 md:mb-10"
          delay={0.2}
        >
          Building Intelligent Systems With Purpose.
        </AnimatedText>

        <AnimatedText
          className="text-sm sm:text-base font-medium text-justify md:text-left mb-4 md:mb-10"
          delay={0.3}
        >
          As a skilled full-stack Software Developer, I am dedicated
          to turning ideas into innovative solutions. Explore my Resume and Projects
          that showcase my expertise in web development, DevOps, and AI-drivenapplications.
        </AnimatedText>

        <div className="flex flex-wrap gap-12 items-center justify-center md:justify-start mx-auto">
          <AnimatedText delay={0.4}>
            <a
              href="/resume"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 border border-black dark:border-white text-gray-100 dark:text-gray-900 font-medium rounded-full hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-100 transition"
            >
              Look at My Resume!
            </a>
          </AnimatedText>
          <AnimatedText delay={0.5}>
            <a
              href="/contact"
              className="text-sm md:text-base underline font-medium"
            >
              Contact
            </a>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
