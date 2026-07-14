import { siteContent } from "@/data/site-content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsActivityLocation",
        name: siteContent.businessName,
        description: siteContent.shortDescription,
        telephone: siteContent.phone,
        image: "/images/cornerstone-logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteContent.address,
          addressLocality: siteContent.city,
          addressRegion: siteContent.state,
          addressCountry: "US",
        },
        areaServed: `${siteContent.city}, ${siteContent.state}`,
        slogan: siteContent.tagline,
      },
      {
        "@type": "Person",
        name: siteContent.coach.name,
        jobTitle: siteContent.coach.role,
        worksFor: {
          "@type": "Organization",
          name: siteContent.businessName,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
