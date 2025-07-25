'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function AnimatedLink({ href, children, className = '' }: AnimatedLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative inline-block font-medium transition-colors duration-300
        ${isActive ? 'text-sky-800' : 'text-gray-800 dark:text-gray-100 hover:text-sky-800'}
        before:content-[''] before:absolute before:bottom-0 before:left-0
        before:h-[3px] before:bg-sky-800 before:transition-all before:duration-500
        ${isActive ? 'before:w-full' : 'before:w-0 hover:before:w-full'}
        ${className}`}
    >
      {children}
    </Link>
  );
}
