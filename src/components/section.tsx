import type React from "react";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  marker?: string;
}

export default function Section({
  title,
  children,
  className = "",
  marker = "§",
}: SectionProps) {
  return (
    <section className={`mb-8 ${className}`}>
      {title && (
        <h2 className="mb-3 text-sm font-medium tracking-wide uppercase text-(--color-text-secondary) group cursor-default">
          <span className="pilcrow-marker">{marker}</span>
          {title}
        </h2>
      )}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
