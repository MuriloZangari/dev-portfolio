// src/components/layout/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import AnimatedLink from "../ui/AnimatedLink";
import ThemeToggle from "../ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
    { href: "/publications", label: "Publications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full p-4 md:p-10 flex justify-between items-center">
      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-6 mx-auto">
        {navLinks.map(({ href, label }) => (
          <AnimatedLink key={href} href={href}>
            {label}
          </AnimatedLink>
        ))}
      </nav>

      {/* Mobile: Hamburger icon */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 dark:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Theme toggle always visible */}
      <ThemeToggle />

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center space-y-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-900 dark:text-white text-lg font-medium hover:underline block"
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2 flex justify-center">
                <ThemeToggle />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
