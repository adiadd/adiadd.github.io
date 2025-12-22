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
  role?: string;
}

export function BookTag({ tag, size = "sm", role }: BookTagProps) {
  return (
    <span
      className={`book-tag ${size === "md" ? "book-tag-md" : ""}`}
      aria-label={`Tagged: ${tag}`}
      role={role}
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

  const visibleTags = tags.slice(0, 3);
  const remainingCount = tags.length - visibleTags.length;

  return (
    <div
      className={`flex flex-wrap gap-1.5 ${className}`}
      role="list"
      aria-label="Post tags"
    >
      {visibleTags.map((tag, index) => (
        <BookTag
          key={`${tag}-${index}`}
          tag={tag}
          size={size}
          role="listitem"
        />
      ))}
      {remainingCount > 0 && (
        <span
          className="inline-flex items-center rounded-full border border-(--color-border) px-2 py-0.5 text-xs font-medium text-(--color-secondary) bg-(--color-surface)/80"
          role="listitem"
          aria-label={`${remainingCount} more tags`}
        >
          +{remainingCount} more
        </span>
      )}
    </div>
  );
}
