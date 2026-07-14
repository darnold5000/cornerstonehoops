import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cornerstonehoops.vercel.app";
  const routes = ["", "/schedule", "/about", "/contact", "/privacy"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/schedule" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
