import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "src/app/blog/utils";
import { baseUrl } from "src/app/sitemap";
import { CustomMDX } from "src/components/mdx";
import TypeWriter from "src/components/type-writer";
import { siteConfig } from "src/config/site";
import JsonLd from "src/components/json-ld";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title: `${title} | Blog`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function Blog({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="h-entry">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.metadata.title,
          datePublished: post.metadata.publishedAt,
          dateModified: post.metadata.publishedAt,
          description: post.metadata.summary,
          image: post.metadata.image
            ? `${baseUrl}${post.metadata.image}`
            : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
          url: `${baseUrl}/blog/${post.slug}`,
          author: {
            "@type": "Person",
            name: siteConfig.name,
            url: baseUrl,
          },
          publisher: {
            "@type": "Person",
            name: siteConfig.name,
            url: baseUrl,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${post.slug}`,
          },
        }}
      />
      <h1 className="p-name title font-semibold text-2xl tracking-tighter">
        <TypeWriter text={post.metadata.title} delay={50} />
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <time className="dt-published text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </time>
      </div>
      <div className="e-content prose">
        <CustomMDX source={post.content} />
      </div>
    </article>
  );
}
