import { BlogPosts } from "src/components/posts";

export const metadata = {
  title: "thoughts",
  description: "read my thoughts",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        my thoughts
      </h1>
      <BlogPosts />
    </section>
  );
}
