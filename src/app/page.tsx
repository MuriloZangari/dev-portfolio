"use client";

import AnimatedText from "./components/ui/AnimatedText";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4">
      <AnimatedText className="text-3xl md:text-5xl font-bold leading-snug">
        Murilo Zangari
      </AnimatedText>

      <div className="relative w-full max-w-3xl my-6 h-[4px] overflow-hidden rounded">
        <AnimatedText
          as="div"
          className="w-full h-full bg-gray-900 dark:bg-gray-200"
          delay={0.1}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
        />
      </div>

      <AnimatedText
        className="w-full max-w-3xl text-3xl md:text-5xl font-bold leading-snug"
        delay={0.2}
      >
        Building Intelligent Systems With Purpose.
      </AnimatedText>

      <AnimatedText
        className="w-full max-w-xl text-justify m-6 text-base sm:text-lg"
        delay={0.3}
      >
        As a skilled full-stack developer and AI researcher, I am dedicated to
        turning ideas into innovative solutions. Explore my Resume and Projects
        that showcase my expertise in software engineering and AI.
      </AnimatedText>
      
      <div className="flex flex-row gap-10 items-center justify-center mt-8">
        <AnimatedText delay={0.4}>
          <a
        href="/resume"
        className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-100 border border-black dark:border-white text-gray-100 dark:text-gray-900 font-medium rounded hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-100 transition"
          >
        Look at My Resume!
          </a>
        </AnimatedText>
        <AnimatedText delay={0.5}>
          <a
        href="/contact"
        className="items-center font-medium text-sm md:text-base underline"
          >
        Contact
          </a>
        </AnimatedText>
      </div>
    </section>
  );
}
