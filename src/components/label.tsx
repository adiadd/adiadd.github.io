interface LabelProps {
  label: string;
  variant?: "default" | "compact";
}

export function Label({ label, variant = "default" }: LabelProps) {
  const sizeClasses =
    variant === "compact"
      ? "text-xs px-2 py-0.5"
      : "text-xs md:text-sm px-2.5 py-1";

  return (
    <span
      className={`${sizeClasses} rounded-full bg-(--color-surface) text-(--color-text-secondary) border border-(--color-border) transition-all duration-300 hover:border-(--color-accent) hover:text-(--color-accent) hover:shadow-sm inline-block`}
    >
      {label}
    </span>
  );
}

interface LabelsProps {
  labels: string[];
  variant?: "default" | "compact";
}

export function Labels({ labels, variant = "default" }: LabelsProps) {
  if (!labels || labels.length === 0) return null;

  const gapClass = variant === "compact" ? "gap-1.5" : "gap-2";

  return (
    <div className={`flex flex-wrap ${gapClass}`}>
      {labels.map((label) => (
        <Label key={label} label={label} variant={variant} />
      ))}
    </div>
  );
}
