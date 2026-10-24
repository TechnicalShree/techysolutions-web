import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/case-studies", "/about", "/contact"].map((path) => ({
    url: site.url + path,
    lastModified: new Date(),
  }));
}
