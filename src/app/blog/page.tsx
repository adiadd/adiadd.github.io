import type { Metadata } from "next";
import { BlogPosts } from "src/components/posts";
import TypeWriter from "src/components/type-writer";
import { siteConfig } from "src/config/site";

export const metadata: Metadata = {
  title: `Blog Posts | ${siteConfig.name}`,
  description: `Read articles about software development, tech, and personal thoughts by ${siteConfig.name}`,
  openGraph: {
    title: `Blog Posts | ${siteConfig.name}`,
    description: `Read articles about software development, tech, and personal thoughts by ${siteConfig.name}`,
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        <TypeWriter text="my thoughts" delay={100} />
      </h1>
      <BlogPosts />
    </section>
  );
}
