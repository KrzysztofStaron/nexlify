import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexlify - Your AI Phone Manager",
  description:
    "Meet Nexlify, the AI-powered phone assistant that transforms conversations into actions. Control apps, manage tasks, and streamline your digital life with natural language commands.",
  keywords: [
    "AI phone assistant",
    "phone automation",
    "AI task manager",
    "voice commands",
    "digital life management",
    "AI productivity",
    "phone AI",
    "smart assistant",
    "app control",
    "workflow automation",
  ],
  authors: [{ name: "Krzysztof Staroń" }],
  creator: "Nexlify",
  publisher: "Nexlify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexlify - Your AI Phone Manager",
    description:
      "Transform conversations into actions with AI-powered phone assistance. Join the waitlist for early access.",
    images: ["/twitter-image.jpg"],
    creator: "@nexlify",
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

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
