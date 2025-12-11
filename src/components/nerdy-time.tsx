"use client";

import { useEffect, useMemo, useState } from "react";

type TimeFormat =
  | "unix"
  | "binary"
  | "hex"
  | "roman"
  | "morse"
  | "sanskrit"
  | "mayan"
  | "scientific"
  | "stardate"
  | "decimal"
  | "zodiac"
  | "hebrew";

export default function NerdyTime() {
  const [time, setTime] = useState<number>(0);
  const [format, setFormat] = useState<TimeFormat>("unix");

  const formats = useMemo<TimeFormat[]>(
    () => [
      "unix",
      "binary",
      "hex",
      "roman",
      "morse",
      "sanskrit",
      "mayan",
      "scientific",
      "stardate",
      "decimal",
      "zodiac",
      "hebrew",
    ],
    [],
  );

  useEffect(() => {
    setTime(Math.floor(Date.now() / 1000));
    const updateTime = () => setTime(Math.floor(Date.now() / 1000));
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const getNextFormat = (currentFormat: TimeFormat): TimeFormat => {
    const currentIndex = formats.indexOf(currentFormat);
    return formats[(currentIndex + 1) % formats.length];
  };

  const toggleFormat = () => {
    setFormat(getNextFormat(format));
  };

  const formatTime = (time: number, format: TimeFormat): string => {
    switch (format) {
      case "unix":
        return `Unix: ${time}`;
      case "binary":
        return `Binary: ${time.toString(2)}`;
      case "hex":
        return `Hex: ${time.toString(16)}`;
      case "roman":
        return `Roman: ${toRoman(new Date().getHours())}`;
      case "morse":
        return `Morse: ${toMorse(new Date().toLocaleTimeString())}`;
      case "sanskrit":
        return `Sanskrit: ${toSanskrit(new Date().getHours())}`;
      case "mayan":
        return `Mayan: ${toMayan(new Date().getHours())}`;
      case "scientific":
        return `Scientific: ${new Date().getHours().toExponential()}`;
      case "stardate":
        return `Stardate: ${(Date.now() / 1000000000).toFixed(2)}`;
      case "decimal":
        return `Decimal: ${toDecimalTime()}`;
      case "zodiac":
        return `Zodiac: ${toZodiac(new Date().getHours())}`;
      case "hebrew":
        return `Hebrew: ${toHebrew(new Date())}`;
      default:
        return "";
    }
  };

  const toRoman = (num: number): string => {
    const romanNumerals = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = "";
    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += romanNumerals[i];
        num -= values[i];
      }
    }
    return result;
  };

  const toMorse = (text: string): string => {
    const morseCode: { [key: string]: string } = {
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      ":": "---...",
      " ": "/",
    };
    return text
      .split("")
      .map((char) => morseCode[char] || "")
      .join(" ");
  };

  const toSanskrit = (hour: number): string => {
    const sanskritNumerals = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return hour
      .toString()
      .split("")
      .map((digit) => sanskritNumerals[parseInt(digit)])
      .join("");
  };

  const toMayan = (hour: number): string => {
    return hour.toString(20).toUpperCase();
  };

  const toDecimalTime = (): string => {
    const now = new Date();
    const totalSeconds =
      now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const decimalHours = (totalSeconds / 86400) * 10;
    return decimalHours.toFixed(2);
  };

  const toZodiac = (hour: number): string => {
    const zodiacAnimals = [
      "Rat",
      "Ox",
      "Tiger",
      "Rabbit",
      "Dragon",
      "Snake",
      "Horse",
      "Goat",
      "Monkey",
      "Rooster",
      "Dog",
      "Pig",
    ];
    return zodiacAnimals[hour % 12];
  };

  const toHebrew = (date: Date): string => {
    const hebrewMonths = [
      "Nisan",
      "Iyar",
      "Sivan",
      "Tammuz",
      "Av",
      "Elul",
      "Tishrei",
      "Cheshvan",
      "Kislev",
      "Tevet",
      "Shevat",
      "Adar",
    ];
    return `${hebrewMonths[date.getMonth()]} ${date.getDate()}`;
  };

  return (
    <div className="mt-12 pt-6 border-t border-[color:var(--color-border)]">
      <button
        type="button"
        className="font-mono text-sm text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text)] transition-colors cursor-pointer select-none w-full text-left"
        onClick={toggleFormat}
      >
        <div className="mb-2 text-[color:var(--color-text-secondary)] italic text-xs">
          — for those who appreciate clocks
        </div>
        <div className="overflow-x-auto">{formatTime(time, format)}</div>
      </button>
    </div>
  );
}
