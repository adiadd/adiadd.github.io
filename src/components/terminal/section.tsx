import type React from "react";

type TerminalSectionProps = {
  command: string;
  children: React.ReactNode;
};

export default function TerminalSection({
  command,
  children,
}: TerminalSectionProps) {
  return (
    <section className="mb-6">
      <p className="mb-2 text-sm font-medium text-[color:var(--cmd)] font-mono">
        $ {command}
      </p>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
