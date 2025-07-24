'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle?: string;
  link: string;      // Pode ser qualquer link
  github?: string;   // Opcional
}

export default function ProjectCard({
  image,
  title,
  subtitle,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="relative w-full max-w-xl">
      {/* Fake border */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-gray-800 dark:bg-white z-0" />

      {/* Card container */}
      <div className="relative z-10 overflow-hidden rounded-2xl border border-black dark:border-white bg-white dark:bg-gray-800 transition-all duration-300">
        {/* Image */}
        <div className="w-full aspect-video relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">
          {subtitle && (
            <span className="text-sm text-sky-600 dark:text-sky-400 font-medium">
              {subtitle}
            </span>
          )}
          <h3 className="text-xl font-semibold">{title}</h3>

          {/* Footer with links */}
          <div className="mt-2 flex items-center justify-between">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 hover:underline font-medium flex items-center gap-1"
            >
              Visit <ExternalLink size={16} />
            </a>

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-sky-700 dark:hover:text-sky-300"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
