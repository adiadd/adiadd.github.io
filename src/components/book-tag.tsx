/**
 * BookTag Component
 *
 * A tag styled like a vintage library book label laying flat.
 * Features a rounded binding curve on the left, subtle stitch lines
 * on both sides, and warm academia aesthetics matching "The Soft Study" theme.
 */

interface BookTagProps {
  tag: string;
  size?: "sm" | "md";
}

export function BookTag({ tag, size = "sm" }: BookTagProps) {
  return (
    <span
      className={`book-tag ${size === "md" ? "book-tag-md" : ""}`}
      aria-label={`Tagged: ${tag}`}
    >
      <span>{tag}</span>
    </span>
  );
}

interface BookTagsProps {
  tags: string[];
  size?: "sm" | "md";
  className?: string;
}

export function BookTags({ tags, size = "sm", className = "" }: BookTagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap gap-1.5 ${className}`}
      role="list"
      aria-label="Post tags"
    >
      {tags.slice(0, 3).map((tag) => (
        <BookTag key={tag} tag={tag} size={size} />
      ))}
    </div>
  );
}
