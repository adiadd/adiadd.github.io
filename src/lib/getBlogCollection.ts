// src/lib/getBlogCollection.ts
import { getCollection } from "astro:content";
import { SITE_URL } from "../consts";

const collection = "posts";

export default async () => {
  const posts = await getCollection(collection);

  return posts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      ogImage: `${SITE_URL}/og/${collection}/${post.slug}.png`,
    },
  }));
};
