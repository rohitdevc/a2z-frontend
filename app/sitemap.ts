import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";
import { getServices } from "@/lib/common";

const SITE_URL = "https://www.a2zonlineservices.com";

const projects = await getProjects();

const services = await getServices();

const staticPages = [
  "",
  "/about-us",
  "/awards",
  "/careers",
  "/compliances",
  "/contact-us",
  "/disclaimer",
  "/projects",
  "/services",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.project_category_url_slug}/${project.project_url_slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.service_url_slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...projectUrls, ...serviceUrls];
}
