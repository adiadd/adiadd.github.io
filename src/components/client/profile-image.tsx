"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileImage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-14 h-14 rounded-full relative overflow-hidden shadow-md shadow-(color:--color-border)">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-(--color-surface)" />
      )}
      <Image
        src="https://utfs.io/f/X8OJl8spEec683HrXmNyqLUu2H0ri7xZDjQtWpBhGEVIcdeR"
        alt="Aditya"
        fill
        sizes="56px"
        priority
        style={{ objectFit: "cover" }}
        onLoad={() => setIsLoading(false)}
        className="transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}
