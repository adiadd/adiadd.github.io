'use client';

import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
  cursor?: boolean;
}

export default function TypeWriter({ 
  text, 
  className = '', 
  delay = 100,
  cursor = true 
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [text, currentIndex, delay]);

  return (
    <span className={className}>
      {displayText}
      {cursor && currentIndex < text.length && (
        <span className="animate-pulse">▊</span>
      )}
    </span>
  );
}
