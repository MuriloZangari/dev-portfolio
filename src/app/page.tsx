// src/app/page.tsx
import { motion } from 'framer-motion';
import AnimatedText from './components/ui/AnimatedText';
import Particles from './components/ui/Particles';

export default function Home() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      <Particles />

      <motion.div variants={container} initial="hidden" animate="show" className="z-10">
        <AnimatedText className="text-6xl font-bold">Murilo Zangari</AnimatedText>

        <motion.div className="relative w-full max-w-3xl my-6">
          <AnimatedText
            as="div"
            className="h-[3px] bg-gray-800 dark:bg-gray-200 overflow-hidden"
            delay={0.1}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          />
        </motion.div>

        <AnimatedText className="w-full max-w-3xl text-6xl font-bold" delay={0.2}>
          Building Intelligent Systems With Purpose.
        </AnimatedText>

        <AnimatedText className="w-full max-w-xl text-justify mt-4 text-lg" delay={0.3}>
          As a skilled full-stack developer and AI researcher, I am dedicated to turning ideas into innovative solutions. Explore my Resume and Projects that showcase my expertise in software engineering and AI.
        </AnimatedText>
      </motion.div>
    </section>
  );
}
