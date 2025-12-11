import type { Metadata } from "next";
import { BlogPosts } from "src/components/posts";
import { siteConfig } from "src/config/site";

export const metadata: Metadata = {
  title: "thoughts",
  description: `read my thoughts on software development, life, everything in between by ${siteConfig.name}`,
  openGraph: {
    title: "thoughts",
    description: `read my thoughts on software development, life, everything in between by ${siteConfig.name}`,
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-8 fade-in">
        my thoughts
      </h1>
      <div className="fade-in fade-in-delay-1">
        <BlogPosts />
      </div>
    </section>
  );
}
