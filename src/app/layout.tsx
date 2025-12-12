import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Lora } from "next/font/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { FloatingNav } from "src/components/floating-nav";
import { siteConfig } from "src/config/site";
import styles from "src/styles/background.module.css";
import "./global.css";
import { baseUrl } from "./sitemap";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = { viewportFit: "cover" };

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: siteConfig.name, template: `%s / ${siteConfig.nickName}` },
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✌🏾</text></svg>",
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}`,
    description: `${siteConfig.description}`,
    siteId: "1595924352",
    creator: "@adiaddxyz",
    creatorId: "1595924352",
    images: ["https://adiadd.xyz/og.png"],
  },
  alternates: { types: { "application/rss+xml": `${baseUrl}/feed.xml` } },
  other: { "og:logo": "✌🏾" },
};

const cx = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(fraunces.variable, lora.variable, jetbrainsMono.variable)}
    >
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="0b0c8b0f-00d7-42c4-859e-b6b1716298e6"
      />
      <body className="antialiased font-body">
        <div className={styles.paperBackground} />
        <main className="mx-auto max-w-[768px] px-5 md:px-8 py-12 md:py-16 pb-24">
          <NextTopLoader showSpinner={false} color="#5C6B54" />
          <div className="min-h-[60vh]">{children}</div>
          <Analytics />
          <SpeedInsights />
        </main>
        <FloatingNav />
      </body>
    </html>
  );
}
