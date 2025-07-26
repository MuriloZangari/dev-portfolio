// src/app/components/ui/TagList.tsx
'use client';

import Tag from './Tag';

type TagListProps = {
  tags?: string;
};

export default function TagList({ tags }: TagListProps) {
  if (!tags) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags
        .split(',')
        .map((tag) => tag.trim())
        .map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
    </div>
  );
}
