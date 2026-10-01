import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0C0A09",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://labs.theangaarbatch.in"),
  title: {
    default: "The Angaar Labs — AI-First Engineering Studio",
    template: "%s | The Angaar Labs",
  },
  description:
    "We engineer scalable AI-powered software systems, multi-agent architectures, and high-conversion web platforms. Zero to 100% product execution.",
  keywords: [
    "AI Studio",
    "Agentic AI",
    "Full-Stack Web Development",
    "Next.js Development",
    "SaaS Platform Engineering",
    "High-Performance Web Design",
    "The Angaar Labs",
  ],
  authors: [{ name: "The Angaar Labs Engineering Team" }],
  creator: "The Angaar Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "The Angaar Labs",
    title: "The Angaar Labs — AI-First Engineering Studio",
    description: "We engineer scalable AI-powered software systems. Zero to 100% product execution.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Angaar Labs Flagship Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Angaar Labs — AI-First Engineering Studio",
    description: "We engineer scalable AI-powered software systems. Zero to 100% product execution.",
    creator: "@theangaarlabs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen flex flex-col bg-darkbase text-smoke-white selection:bg-ember selection:text-white relative">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full pt-20 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
