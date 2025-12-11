import Link from "next/link";
import { formatDate, getBlogPosts } from "src/app/blog/utils";

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
        .map((post) => (
          <Link
            key={post.slug}
            className="group block py-3 -mx-3 px-3 rounded-lg transition-all duration-300 hover:bg-[color:var(--color-surface)] hover:translate-x-1"
            href={`/blog/${post.slug}`}
          >
            <p className="text-[color:var(--color-text-secondary)] text-sm tabular-nums mb-1 transition-colors group-hover:text-[color:var(--color-accent)]">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-[color:var(--color-text)] transition-colors">
              {post.metadata.title}
            </p>
          </Link>
        ))}
    </div>
  );
}
