"use client";

import { useSyncExternalStore } from "react";

type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

const greetings: Record<TimeOfDay, string> = {
  morning: "good morning",
  afternoon: "good afternoon",
  evening: "good evening",
  night: "burning the midnight oil?",
};

function getTimeOfDay(hour: number): TimeOfDay {
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
}

function getGreeting() {
  const hour = new Date().getHours();
  return greetings[getTimeOfDay(hour)];
}

const subscribe = () => () => {};

export function TimeGreeting() {
  const greeting = useSyncExternalStore(subscribe, getGreeting, () => null);

  if (!greeting) {
    return <span>heyo</span>;
  }

  return <span className="time-greeting">{greeting}</span>;
}
