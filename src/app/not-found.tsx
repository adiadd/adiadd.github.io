import Link from "next/link";

export default function NotFound() {
  return (
    <section className="text-center py-16">
      <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4">
        404
      </h1>
      <p className="text-(--color-text-secondary) text-lg mb-8">
        This page seems to have wandered off...
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-2 rounded-full bg-(--color-surface) border border-(--color-border) text-(--color-text) hover:bg-(--color-border) transition-colors"
      >
        Return home
      </Link>
    </section>
  );
}
