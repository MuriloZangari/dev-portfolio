// src/components/layout/Footer.tsx

export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-900 dark:border-gray-100 px-6 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Murilo Zangari. All rights reserved.
        </p>
        <div className="flex items-center gap-4">        
          {/* GitHub Icon */}
          <a
            href="https://github.com/MuriloZangari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:scale-105 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-900 dark:text-gray-100"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.287-.012-1.244-.017-2.255-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.805 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.524.116-3.176 0 0 1.01-.323 3.3 1.23a11.51 11.51 0 0 1 3.003-.404c1.02.005 2.047.138 3.004.404 2.29-1.553 3.297-1.23 3.297-1.23.654 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.624-5.476 5.922.43.37.814 1.103.814 2.222 0 1.604-.014 2.898-.014 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

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
