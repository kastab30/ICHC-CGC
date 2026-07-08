import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ichc2027.cgcuniversity.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
