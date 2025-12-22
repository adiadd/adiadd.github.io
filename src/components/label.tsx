interface LabelProps {
  label: string;
  variant?: "default" | "compact";
  index?: number;
}

export function Label({ label, variant = "default", index = 0 }: LabelProps) {
  // Book spine dimensions - compact for list, standard for individual posts
  const sizeClasses =
    variant === "compact"
      ? "text-xs px-3 py-1.5"
      : "text-sm px-4 py-2";

  // Slight variation in book "thickness" based on label length and index
  const thickness = variant === "compact" ? "h-7" : "h-9";
  
  // Create subtle color variations for different "books"
  const bookColors = [
    "bg-(--color-surface)",
    "bg-[#faf8f4]",
    "bg-[#f9f6f0]",
  ];
  const bgColor = bookColors[index % bookColors.length];

  return (
    <span
      className={`
        ${sizeClasses} ${thickness} ${bgColor}
        relative inline-flex items-center justify-center
        text-(--color-text-secondary) font-medium
        border-l-[3px] border-r-[1px] border-y border-(--color-border)
        transition-all duration-300
        hover:text-(--color-accent) hover:border-l-(--color-accent)
        hover:translate-y-[-2px] hover:shadow-md
        group
      `}
      style={{
        borderLeftColor: "var(--color-border)",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.04), inset -1px 0 2px rgba(0, 0, 0, 0.02)",
      }}
    >
      {/* Book spine edge highlight */}
      <span
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-40"
        aria-hidden="true"
      />
      {/* Label text */}
      <span className="relative z-10">{label}</span>
      {/* Bottom shadow for depth */}
      <span
        className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent"
        aria-hidden="true"
      />
    </span>
  );
}

interface LabelsProps {
  labels: string[];
  variant?: "default" | "compact";
}

export function Labels({ labels, variant = "default" }: LabelsProps) {
  if (!labels || labels.length === 0) return null;

  const gapClass = variant === "compact" ? "gap-2" : "gap-2.5";

  return (
    <div className={`flex flex-wrap items-end ${gapClass}`}>
      {labels.map((label, index) => (
        <Label key={label} label={label} variant={variant} index={index} />
      ))}
    </div>
  );
}
