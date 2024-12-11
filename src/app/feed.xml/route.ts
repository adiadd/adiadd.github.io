import RSS from "rss";
import { getBlogPosts } from "../blog/utils";
import { siteConfig } from "src/config/site";
import { baseUrl } from "../sitemap";

export async function GET() {
  const feed = new RSS({
    title: siteConfig.name,
    description: siteConfig.description,
    site_url: baseUrl,
    feed_url: `${baseUrl}/feed.xml`,
    language: "en",
    custom_namespaces: {
      atom: "http://www.w3.org/2005/Atom",
    },
    custom_elements: [
      {
        "atom:link": {
          _attr: {
            href: `${baseUrl}/feed.xml`,
            rel: "self",
            type: "application/rss+xml",
          },
        },
      },
    ],
  });

  const posts = getBlogPosts();

  for (const post of posts) {
    feed.item({
      title: post.metadata.title,
      description: post.metadata.summary,
      url: `${baseUrl}/blog/${post.slug}`,
      date: post.metadata.publishedAt,
      guid: `${baseUrl}/blog/${post.slug}`,
    });
  }

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
