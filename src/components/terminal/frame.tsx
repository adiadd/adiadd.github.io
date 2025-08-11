"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { siteConfig } from "src/config/site";

type TerminalFrameProps = {
  children: React.ReactNode;
};

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <title>GitHub</title>
      <path
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.9 1.57 2.36 1.12 2.93.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.67.94.67 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <title>LinkedIn</title>
      <path d="M6.94 6.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" fill="currentColor" />
      <path
        d="M3.5 9h3V20h-3V9Zm6 0h2.88v1.51h.04c.4-.76 1.38-1.56 2.84-1.56C18.8 8.95 20 10.3 20 12.9V20h-3v-6.1c0-1.46-.52-2.45-1.83-2.45c-1 0-1.6.67-1.86 1.32c-.1.24-.12.57-.12.9V20h-3V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <title>X</title>
      <path
        d="M18.146 2H21l-7.358 8.403L22 22h-6.828l-5.35-6.37L3.8 22H1l7.829-8.935L2 2h6.973l4.86 5.728L18.146 2Zm-2.39 18h2.003L8.356 4H6.27l9.486 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <title>Substack</title>
      <path d="M4 6h16v2H4V6Z" fill="currentColor" />
      <path d="M4 10h16v2H4v-2Z" fill="currentColor" />
      <path d="M4 6v12l8-4 8 4V6H4Z" fill="currentColor" />
    </svg>
  );
}

function RssIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <title>RSS</title>
      <path d="M6 18a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z" fill="currentColor" />
      <path
        d="M4 10a10 10 0 0 1 10 10h-3A7 7 0 0 0 4 13v-3Z"
        fill="currentColor"
      />
      <path
        d="M4 4a16 16 0 0 1 16 16h-3A13 13 0 0 0 4 7V4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconButtonLink({
  href,
  label,
  children,
  className = "",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md border border-[color:var(--terminal-border)] text-[color:var(--text)] hover:bg-[color:var(--terminal-border)]/5 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}

export default function TerminalFrame({ children }: TerminalFrameProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="fixed inset-[clamp(32px,10vmin,120px)] z-0">
      <div className="h-full w-full rounded-lg border border-[color:var(--terminal-border)] bg-[color:var(--terminal-bg)] shadow-sm mx-auto flex flex-col">
        <div className="flex items-center justify-between border-b border-[color:var(--terminal-border)] bg-[color:var(--terminal-bg)] px-3 py-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Link
              href="/"
              className={`text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded transition-all ${
                isActive("/")
                  ? "text-orange-500 font-semibold underline underline-offset-4 decoration-2 decoration-orange-500"
                  : "hover:bg-[color:var(--terminal-border)]/5 text-[color:var(--text)]/80 hover:text-[color:var(--text)]"
              }`}
            >
              home
            </Link>
            <Link
              href="/experience"
              className={`text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded transition-all ${
                isActive("/experience")
                  ? "text-orange-500 font-semibold underline underline-offset-4 decoration-2 decoration-orange-500"
                  : "hover:bg-[color:var(--terminal-border)]/5 text-[color:var(--text)]/80 hover:text-[color:var(--text)]"
              }`}
            >
              experience
            </Link>
            <Link
              href="/blog"
              className={`text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded transition-all ${
                isActive("/blog")
                  ? "text-orange-500 font-semibold underline underline-offset-4 decoration-2 decoration-orange-500"
                  : "hover:bg-[color:var(--terminal-border)]/5 text-[color:var(--text)]/80 hover:text-[color:var(--text)]"
              }`}
            >
              thoughts
            </Link>
          </div>
        </div>
        <div className="px-5 py-6 flex-1 min-h-0 overflow-auto">{children}</div>
        <div className="border-t border-[color:var(--terminal-border)] bg-[color:var(--terminal-bg)] px-3 py-2">
          <div className="flex items-center justify-center gap-2">
            <IconButtonLink
              href={siteConfig.links.X}
              label="X"
              className="hover:text-[#1da1f2]"
            >
              <XIcon />
            </IconButtonLink>
            <IconButtonLink
              href={siteConfig.links.linkedIn}
              label="LinkedIn"
              className="hover:text-[#0077b5]"
            >
              <LinkedInIcon />
            </IconButtonLink>
            <IconButtonLink
              href={siteConfig.links.github}
              label="GitHub"
              className="hover:text-[#333333]"
            >
              <GithubIcon />
            </IconButtonLink>
            <IconButtonLink
              href={siteConfig.links.substack}
              label="Substack"
              className="hover:text-[#ffa500]"
            >
              <SubstackIcon />
            </IconButtonLink>
            <IconButtonLink
              href="/feed.xml"
              label="RSS"
              className="hover:text-[#f26522]"
            >
              <RssIcon />
            </IconButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
