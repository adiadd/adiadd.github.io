// src/lib/getBlogCollection.ts
import { getCollection } from "astro:content";
import { SITE_URL } from "../consts";

const collection = "posts";

export default async () => {
  const posts = await getCollection(collection);

  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return sortedPosts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      ogImage: `${SITE_URL}/og/blog/${post.slug}.png`,
    },
  }));
};
