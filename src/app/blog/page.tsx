import { BlogPosts } from "src/components/posts";
import TypeWriter from "src/components/type-writer";

export const metadata = {
  title: "thoughts",
  description: "read my thoughts",
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
