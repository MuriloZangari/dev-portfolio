'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  image: string;
  title: string;
  tags?: string; // Ex: "Machine Learning, Feature Engineering, supervised classification"
  link: string;
  github?: string;
}

export default function ProjectCard({
  image,
  title,
  tags,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="relative w-full max-w-xl">
      {/* Fake border */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-gray-800 dark:bg-white z-0" />

      {/* Card container */}
      <div className="relative z-10 overflow-hidden p-4 rounded-2xl border border-black dark:border-white bg-gray-100 dark:bg-gray-900 transition-all duration-300">
        {/* Image */}
        <div className="group w-full relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10" />
            <Image
                src={image}
                alt={title}
                width={800}
                height={480}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                priority
            />
            </div>

        {/* Content */}
        <div className="p-2 flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{title}</h3>

          {/* Tags */}
          {tags && (
            <div className="flex flex-wrap gap-2 mt-1">
              {tags
                .split(',')
                .map((tag) => tag.trim())
                .map((tag, index) => (
                  <span
                    key={index}
                    className="bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          )}

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
