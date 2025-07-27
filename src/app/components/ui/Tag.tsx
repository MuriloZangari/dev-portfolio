// src/app/components/ui/Tag.tsx
'use client';

type TagProps = {
  text: string;
};

export default function Tag({ text }: TagProps) {
  return (
    <span className="bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 text-xs md:text-sm font-medium px-2 py-1 rounded-full">
      {text}
    </span>
  );
}
