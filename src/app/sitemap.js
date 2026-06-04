import { newsPosts } from "@/data/newsData";

export default function sitemap() {
  const baseUrl = "https://ziqora.energy";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/news",
    "/partner",
    "/privacy-policy",
    "/products",
    "/products/cells",
    "/project",
    "/sustainability",
    "/team",
    "/technology",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const newsRoutes = newsPosts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
