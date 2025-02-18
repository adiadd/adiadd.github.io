"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileImage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-14 h-14 relative">
      <div
        className="w-full h-full rounded-full overflow-hidden transform-gpu hover:animate-spin"
        style={{ transformOrigin: "center center", contain: "paint" }}
      >
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />
        )}
        <Image
          src="https://utfs.io/f/X8OJl8spEec683HrXmNyqLUu2H0ri7xZDjQtWpBhGEVIcdeR"
          alt="Real Aditya"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}
