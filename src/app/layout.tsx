import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { siteConfig } from "src/config/site";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import "./global.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.nickName}`,
  },
  icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✌🏾</text></svg>",
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
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "frappe dark:mocha bg-base dark:text-white dark:bg-crust text-text",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="0b0c8b0f-00d7-42c4-859e-b6b1716298e6"
      />
      <body className="antialiased mx-auto mt-8 frappe dark:mocha bg-base dark:text-white dark:bg-crust text-text">
        <main className="flex-auto mt-6 flex flex-col px-2 mx-auto max-w-2xl">
          <NextTopLoader showSpinner={false} color="#D18800" />
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
