import type { MetadataRoute } from "next";

const baseUrl = "https://www.mme-ai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/data-deletion-request`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
