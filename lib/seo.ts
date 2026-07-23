import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  image = "/images/cornerstone-logo.png",
}: SEOProps): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${SITE.name} | ${title}`
      : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: { index: false, follow: false },
  };
}
