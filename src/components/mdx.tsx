import type { MDXRemoteProps } from "next-mdx-remote-client/rsc";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import type { ImageProps } from "next/image";
import Image from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import React from "react";
import { highlight } from "sugar-high";

type TableData = {
  headers: string[];
  rows: string[][];
};

function Table({ data }: { data: TableData }) {
  const headers = data.headers.map((header) => <th key={header}>{header}</th>);
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(
  props: AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string },
) {
  const href = props.href ?? "";

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage({ className, style, alt = "", ...props }: ImageProps) {
  return (
    <Image
      alt={alt}
      className={`rounded-lg ${className ?? ""}`}
      {...props}
      style={{
        maxWidth: "100%",
        height: "auto",
        ...style,
      }}
    />
  );
}

function Code({ children, ...props }: { children: string }) {
  const codeHTML = highlight(children);
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

export function CustomMDX(
  props: MDXRemoteProps & { components?: Record<string, React.ComponentType> },
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
