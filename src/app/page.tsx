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
        className="w-full max-w-xl text-justify mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400"
        delay={0.3}
      >
        As a skilled full-stack developer and AI researcher, I am dedicated to
        turning ideas into innovative solutions. Explore my Resume and Projects
        that showcase my expertise in software engineering and AI.
      </AnimatedText>
    </section>
  );
}
