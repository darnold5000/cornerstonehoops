import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SiteChrome } from "@/components/site-chrome";
import { JsonLd } from "@/components/json-ld";
import { siteContent } from "@/data/site-content";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = `Cornerstone Hoops | Youth Basketball Training in ${siteContent.city}, ${siteContent.state}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://cornerstonehoops.vercel.app"),
  title: {
    default: title,
    template: `%s | Cornerstone Hoops`,
  },
  description: siteContent.shortDescription,
  applicationName: siteContent.businessName,
  keywords: [
    "Cornerstone Hoops",
    "youth basketball training",
    "Plainfield IN basketball",
    "skills training",
    "Sara Corbin",
    "Capitol Sports Plainfield",
  ],
  openGraph: {
    title,
    description: siteContent.shortDescription,
    type: "website",
    locale: "en_US",
    siteName: siteContent.businessName,
    images: [
      {
        url: "/images/cornerstone-logo.png",
        width: 1024,
        height: 1024,
        alt: "Cornerstone Hoops logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description: siteContent.shortDescription,
    images: ["/images/cornerstone-logo.png"],
  },
  icons: {
    icon: [{ url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: "/",
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
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd />
        <SiteChrome>{children}</SiteChrome>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
