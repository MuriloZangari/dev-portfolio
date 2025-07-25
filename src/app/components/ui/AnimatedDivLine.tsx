import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function AnimatedDivLine() {
  return (
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
    );
}
