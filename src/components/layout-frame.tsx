import type React from "react";

export default function LayoutFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-[60vh]">{children}</div>;
}
