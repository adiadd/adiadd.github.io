import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "src/app/blog/utils";
import { baseUrl } from "src/app/sitemap";
import JsonLd from "src/components/json-ld";
import { CustomMDX } from "src/components/mdx";
import ShareButtons from "src/components/share-buttons";
import TypeWriter from "src/components/type-writer";
import { siteConfig } from "src/config/site";

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
    author: siteConfig.name,
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

export default function Blog({ params }) {
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 mt-5">
        <h1 className="p-name title font-semibold text-2xl tracking-tighter">
          <TypeWriter text={post.metadata.title} delay={50} />
        </h1>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <time className="dt-published text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
            {formatDate(post.metadata.publishedAt)}
          </time>
          <div className="border-l border-neutral-200 dark:border-neutral-700 h-6" />
          <ShareButtons url={postUrl} title={post.metadata.title} />
        </div>
      </div>

      <div className="e-content prose">
        <CustomMDX source={post.content} />
      </div>
    </article>
  );
}
