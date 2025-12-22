import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { Labels } from "@/components/label";
import Link from "next/link";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className="space-y-2 stagger-children">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, index) => (
          <Link
            key={post.slug}
            className="group block py-3 -mx-3 px-3 rounded-lg transition-all duration-300 hover:bg-(--color-surface) hover:translate-x-1"
            href={`/blog/${post.slug}`}
            style={{ "--stagger-index": index + 1 } as React.CSSProperties}
          >
            <p className="text-(--color-text-secondary) text-sm tabular-nums mb-1 transition-colors group-hover:text-(--color-accent)">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-(--color-text) transition-colors mb-2">
              {post.metadata.title}
            </p>
            {post.metadata.labels && post.metadata.labels.length > 0 && (
              <Labels labels={post.metadata.labels} variant="compact" />
            )}
          </Link>
        ))}
    </div>
  );
}
