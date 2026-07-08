import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { BackToTop } from "@/components/back-to-top";
import { Navbar } from "@/components/navbar";
import { PremiumBackground } from "@/components/premium-background";
import { Providers } from "@/components/providers";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ichc2027.cgcuniversity.in"),
  title: {
    default: "ICHC 2027 | Humanities at the Crossroads",
    template: "%s | ICHC 2027"
  },
  description:
    "International Conference on Humanities at the Crossroads: Technology, Trauma, Transnationalism and Transformative Futures at CGC University, Mohali, India.",
  openGraph: {
    title: "ICHC 2027 | Humanities at the Crossroads",
    description:
      "A premium international academic conference exploring identity, ethics and sustainable development.",
    type: "website",
    locale: "en_US",
    url: "https://ichc2027.cgcuniversity.in"
  },
  twitter: {
    card: "summary_large_image",
    title: "ICHC 2027 | Humanities at the Crossroads",
    description: "26-27 February 2027, CGC University, Mohali, India"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <PremiumBackground />
          <ScrollProgress />
          <Navbar />
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
