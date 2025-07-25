'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="group relative">
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className={`
            w-10 h-10 rounded-full relative flex items-center justify-center overflow-hidden
            transition-colors duration-300 shadow
            ${isDark ? 'bg-gray-800' : 'bg-gray-200'}
            cursor-pointer
          `}
          whileTap={{ scale: 0.9 }}
        >
          {/* Background burst */}
          <AnimatePresence mode="wait">
            <motion.div
              key={resolvedTheme}
              className="absolute inset-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 20, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                borderRadius: '50%',
                backgroundColor: isDark ? '#ffffff' : '#1f2937', // white burst in dark, gray-800 burst in light
              }}
            />
          </AnimatePresence>

          {/* Icon in front */}
          <motion.div
            key={resolvedTheme + '-icon'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`relative z-10 ${isDark ? 'text-gray-800' : 'text-white'}`}
          >
            {isDark ? <Sun size={28} /> : <Moon size={28} />}
          </motion.div>
        </motion.button>
      </div>
      {/* Tooltip for accessibility */}
      <div className="absolute top-full right-6 mt-3 w-max max-w-xs px-3 py-1.5 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 shadow-lg">
        Toggle between Light and Dark mode
      </div>
    </div>
  );
}
