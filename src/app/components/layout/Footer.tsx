// src/components/layout/Footer.tsx

export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-900 dark:border-gray-100 px-6 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Murilo Zangari. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/murilozangari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:scale-105 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-900 dark:text-gray-100"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.27h-3v-5.604c0-1.338-.026-3.062-1.866-3.062-1.868 0-2.154 1.459-2.154 2.963v5.703h-3v-11h2.881v1.501h.041c.401-.759 1.379-1.561 2.84-1.561 3.038 0 3.6 2.002 3.6 4.605v6.455z" />
            </svg>
          </a>

          {/* Email link */}
          <a
            href="mailto:murilo.zangari@gmail.com"
            className="text-sm md:text-base font-medium hover:underline transition"
          >
            murilo.zangari@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
