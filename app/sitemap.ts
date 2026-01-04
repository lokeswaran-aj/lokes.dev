import { siteConfig } from "@/config/site"
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  let routes: MetadataRoute.Sitemap = ["", "/blog", "/work"].map((route) => ({
    url: `${siteConfig.links.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 1,
  }))

  return routes
}
