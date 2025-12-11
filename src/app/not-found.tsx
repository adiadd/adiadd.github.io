import Link from "next/link";

export default function NotFound() {
  return (
    <section className="text-center py-16">
      <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4">
        404
      </h1>
      <p className="text-[color:var(--color-text-secondary)] text-lg mb-8">
        This page seems to have wandered off...
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-2 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text)] hover:bg-[color:var(--color-border)] transition-colors"
      >
        Return home
      </Link>
    </section>
  );
}
