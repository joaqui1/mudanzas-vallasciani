import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] =
  [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/fletes-bahia-blanca", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guardamuebles-punta-alta", priority: 0.9, changeFrequency: "monthly" },
    { path: "/mudanzas-bahia-blanca-buenos-aires", priority: 0.9, changeFrequency: "monthly" },
    { path: "/mudanzas-larga-distancia-bahia-blanca", priority: 0.9, changeFrequency: "monthly" },
  ]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
