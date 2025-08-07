'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface MainProjectCardProps {
  image: string;
  title: string;
  tags?: string;
  description: string;
  link: string;
  github?: string;
}

export default function MainProjectCard({
  image,
  title,
  tags,
  description,
  link,
  github,
}: MainProjectCardProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto mb-12">
      {/* Fake border */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-gray-800 dark:bg-white z-0" />

      {/* Container */}
      <div className="relative z-10 flex flex-col md:flex-row p-4 overflow-hidden rounded-2xl border border-black dark:border-white bg-gray-100 dark:bg-gray-900 transition-all duration-300">
        
        {/* Image */}
        <div className="group w-full md:w-1/2 relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 cursor-pointer">
            <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                priority
            />
        </div>


        {/* Content */}
        <div className="p-4 flex flex-col justify-center w-full md:w-1/2 gap-2">
          <h2 className="text-xl md:text-2xl font-bold leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {description}
          </p>

          {/* Tags */}
          {tags && (
            <div className="flex flex-wrap gap-2">
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

          {/* Footer */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-sky-500 text-sky-700 dark:text-sky-300 font-medium rounded hover:bg-sky-50 dark:hover:bg-gray-700 transition"
            >
              Visit Project <ExternalLink className="ml-2" size={16} />
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
