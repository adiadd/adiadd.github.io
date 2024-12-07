'use client';

import { useEffect, useState } from 'react';

export default function NerdyTime() {
  const [time, setTime] = useState<number>(Math.floor(Date.now() / 1000));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-sm opacity-50 hover:opacity-100 transition-opacity mt-8 mb-4">
      <div className="mb-2 text-neutral-500">// for the nerds who appreciate clocks</div>
      <div>Unix: {time}</div>
      <div className="overflow-x-auto">Binary: {time.toString(2)}</div>
    </div>
  );
}
