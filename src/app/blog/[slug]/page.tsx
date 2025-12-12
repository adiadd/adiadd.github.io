import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "src/app/blog/utils";
import { baseUrl } from "src/app/sitemap";
import JsonLd from "src/components/json-ld";
import { CustomMDX } from "src/components/mdx";
import ShareButtons from "src/components/share-buttons";
import { siteConfig } from "src/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
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
    title: `${title}`,
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
    keywords: `${title}, blog, technology, programming, life, everything in between`,
    authors: [{ name: siteConfig.name }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Blog(props: Props) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${baseUrl}/blog/${post.slug}`;

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
      <header className="mb-8">
        <h1 className="p-name title font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
          {post.metadata.title}
        </h1>
        <div className="flex items-center gap-4">
          <time className="dt-published text-sm text-(--color-text-secondary)">
            {formatDate(post.metadata.publishedAt)}
          </time>
          <div className="border-l border-(--color-border) h-4" />
          <ShareButtons url={postUrl} title={post.metadata.title} />
        </div>
      </header>

      <div className="e-content prose">
        <CustomMDX source={post.content} />
      </div>
    </article>
  );
}
