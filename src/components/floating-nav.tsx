"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

function SocialIcon({
  href,
  label,
  hoverColor,
  children,
}: {
  href: string;
  label: string;
  hoverColor: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      style={{ "--hover-color": hoverColor } as React.CSSProperties}
    >
      {children}
    </a>
  );
}

export function FloatingNav() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    path === "/"
      ? pathname === "/"
      : pathname === path || pathname.startsWith(path + "/");

  const links = [
    { path: "/", label: "home" },
    { path: "/experience", label: "work" },
    { path: "/blog", label: "thoughts" },
  ];

  return (
    <nav className="floating-nav" aria-label="Primary navigation">
      {links.map((link, i) => (
        <Fragment key={link.path}>
          {i > 0 && (
            <span className="floating-nav-separator" aria-hidden="true">
              ·
            </span>
          )}
          <Link
            href={link.path}
            className={`floating-nav-link ${isActive(link.path) ? "active" : ""}`}
          >
            {link.label}
          </Link>
        </Fragment>
      ))}

      <span className="mx-3 h-4 w-px bg-(--color-border)" aria-hidden="true" />

      <div className="flex items-center gap-3">
        <SocialIcon
          href={siteConfig.links.X}
          label="X/Twitter"
          hoverColor="#1da1f2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <title>X/Twitter</title>
            <path d="M18.146 2H21l-7.358 8.403L22 22h-6.828l-5.35-6.37L3.8 22H1l7.829-8.935L2 2h6.973l4.86 5.728L18.146 2Zm-2.39 18h2.003L8.356 4H6.27l9.486 16Z" />
          </svg>
        </SocialIcon>
        <SocialIcon
          href={siteConfig.links.linkedIn}
          label="LinkedIn"
          hoverColor="#0077b5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <title>LinkedIn</title>
            <path d="M6.94 6.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
            <path d="M3.5 9h3V20h-3V9Zm6 0h2.88v1.51h.04c.4-.76 1.38-1.56 2.84-1.56C18.8 8.95 20 10.3 20 12.9V20h-3v-6.1c0-1.46-.52-2.45-1.83-2.45c-1 0-1.6.67-1.86 1.32c-.1.24-.12.57-.12.9V20h-3V9Z" />
          </svg>
        </SocialIcon>
        <SocialIcon
          href={siteConfig.links.github}
          label="GitHub"
          hoverColor="var(--color-text)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <title>GitHub</title>
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.9 1.57 2.36 1.12 2.93.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.67.94.67 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
          </svg>
        </SocialIcon>
      </div>
    </nav>
  );
}
